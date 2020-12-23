import { defineComponent, h } from "@vue/runtime-core";
import Circle from "./components/Circle";

export default defineComponent({
    render() {
        // <rect x=100 y=100>你好,我是文本</rect>
        const vnode = h("rect", { x: 100, y: 100 }, [
            "你好,我是文本",
            h(Circle)
        ]);
        return vnode;
    }
});