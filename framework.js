class State {
    constructor(initialValue) {
        this.value = initialValue;
        this.reactions = new Set();
    }

    setValue(newValue) {
        this.value = newValue;
        this.reactions.forEach(r => r.run());
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

class Derived {
    constructor(computeValue, dependencies) {
        this.computeValue = computeValue;
        this.dependencies = dependencies;
        this.reactions = new Set();

        this.value = this.computeValue();

        this.dependencies.forEach(dep => dep.reactions.add(this));
    }

    run() {
        this.value = this.computeValue();
        this.reactions.forEach(r => r.run());
    }
}

export class Component {
    constructor(props = {}) {
        this.props = props;
        this.anchor = element("div", { stlye: "display: none" });
        this.childInsts = [];
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
        const newDerived = new Derived(computeValue, dependencies);
        this.derivedValues.push(newDerived);
        return newDerived;
    }

    component(ChildClass, props = {}) {
        const inst = new ChildClass(props);
        this.childInsts.push(inst);
        return inst.anchor;
    }

    mount() {
        this.rootEl = this.render();
        this.anchor.replaceWith(this.rootEl);
        for (const childInst of this.childInsts) {
            childInst.mount();
        }
        this.onMount();
    }

    onMount() {}

    destroy() {
        this.onDestroy();
        for (const childInst of this.childInsts) {
            childInst.destroy();
        }
        this.rootEl.replaceWith(this.anchor);
        this.rootEl = undefined;
    }

    onDestroy() {}

    element(tag, props = {}, children = []) {
        const el = document.createElement(tag);
        for (const key in props) {
            el[key] = props[key];
        }
        el.append(...children);
        return el;
    };

    render() {
        return this.element("div");
    }
}