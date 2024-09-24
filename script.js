import { Component } from './framework.js';

class Root extends Component {
    constructor() {
        super();
    }

    render() {
        return this.element("div", {}, []);
    }
}

// DO NOT REMOVE THE CODE BELOW.
// It creates an instance of the root component and mounts it to the DOM.

const bodyEl = document.getElementsByTagName('body')[0];
const rootAnchorEl = document.createElement("div");
bodyEl.append(rootAnchorEl);

const rootCompInst = new Root();
rootCompInst.anchor = rootAnchorEl;
rootCompInst.mount();