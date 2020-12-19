import { createRenderer } from "@vue/runtime-core";
import { Graphics, Text } from "pixi.js";

const { render, createApp } = createRenderer({
    createElement(type) {
        // 绘制一个矩形 pixi.js
        let element;
        if(type === "rect") {
            element = new Graphics();
            element.beginFill(0xff0000);
            element.drawRect(0,0, 500, 500);
            element.endFill();
        } else if(type === "circle") {
            element = new Graphics();
            element.beginFill(0x00ff00);
            element.drawCircle(0,0, 100);
            element.endFill();
        }
        return element;
    },
    patchProp(el, key, prevVal, nextVal) {
        if(el) el[key] = nextVal;
    },
    setElementText(node, text) {
        const cText = new Text(text);
        node.addChild(cText);
    },
    createText(text) {
        return new Text(text);
    },
    insert(el, parent) {
        if(el) parent.addChild(el);
    }
});
export { render, createApp }