function hasChanged(a, b) {
    // Insert whatever logic you prefer.
    return a !== b;
}

class State {
    constructor(initialValue) {
        this.value = initialValue;
        this.reactions = new Set();
    }

    setValue(newValue) {
        if (hasChanged(this.value, newValue)) {
            this.value = newValue;
            this.reactions.forEach(r => r.run());
        }
    }
}

class Effect {
    constructor(effectFn, dependencies) {
        this.effectFn = effectFn;
        this.dependencies = dependencies;

        this.dependencies.forEach(dep => dep.reactions.add(this));
    }

    run() {
        this.effectFn();
    }
}

class DerivedValue {
    constructor(computeValue, dependencies) {
        this.computeValue = computeValue;
        this.dependencies = dependencies;
        this.reactions = new Set();

        this.value = this.computeValue();

        this.dependencies.forEach(dep => dep.reactions.add(this));
    }

    run() {
        const newValue = this.computeValue();
        if (hasChanged(this.value, newValue)) {
            this.value = newValue;
            this.reactions.forEach(r => r.run());
        }
    }
}

export class Component {
    constructor(props = {}) {
        this.props = props;
        this.anchor = this.element("div", { style: "display: none" });
        this.childCompInsts = [];
        this.rootEl = undefined;

        this.states = [];
        this.derivedValues = [];
        this.effects = [];
    }

    createState(initialValue) {
        const newState = new State(initialValue);
        this.states.push(newState);
        return newState;
    }

    createEffect(effectFn) {
        const newEffect = new Effect(effectFn);
        this.effects.push(newEffect);
    }

    createDerived(computeValue, dependencies) {
        const newDerived = new DerivedValue(computeValue, dependencies);
        this.derivedValues.push(newDerived);
        return newDerived;
    }

    component(ChildClass, props = {}) {
        const inst = new ChildClass(props);
        this.childCompInsts.push(inst);
        return inst.anchor;
    }

    mount() {
        this.rootEl = this.render();
        this.anchor.replaceWith(this.rootEl);
        for (const childInst of this.childCompInsts) {
            childInst.mount();
        }
        this.onMount();
    }

    onMount() { }

    destroy() {
        this.onDestroy();

        // clean up cyclic references in reactive objects.
        this.effects.forEach(effect => {
            effect.dependencies.forEach(dep => {
                dep.reactions.remove(effect);
            });
        });
        this.derivedValues.forEach(derivedValue => {
            derivedValue.dependencies.forEach(dep => {
                dep.reactions.remove(derivedValue);
            });
        });

        // cleanup children and DOM.
        for (const childInst of this.childCompInsts) {
            childInst.destroy();
        }
        this.rootEl.replaceWith(this.anchor);
        this.rootEl = undefined;
    }

    onDestroy() { }

    element(tag, props = {}, children = []) {
        const el = document.createElement(tag);
        for (const key in props) {
            const val = props[key];
            if (val instanceof State || val instanceof DerivedValue) {
                this.createEffect(() => {
                    el[key] = val.value;
                }, [val]);
            } else {
                el[key] = val;
            }
        }
        el.append(...children);
        return el;
    };

    render() {
        return this.element("div");
    }
}