import { defineComponent, h } from "@vue/runtime-core";

export default defineComponent({
    render() {
        // <rect x=100 y=100>你好,我是文本</rect>
        const vnode = h("rect", { x: 100, y: 100 }, [
            "你好,我是文本",
            h("circle", { x: 150, y: 150 })
        ]);
        return vnode;
    }
});