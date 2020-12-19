import { createRenderer } from "@vue/runtime-core";

const { render, createApp } = createRenderer({
    createElement(type) {
        console.log(type)
    },
    insert(el, parent) {
        console.log(el, parent);
    }
});
export { render, createApp }