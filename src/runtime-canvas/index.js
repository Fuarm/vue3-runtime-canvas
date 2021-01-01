import { createRenderer } from "@vue/runtime-core";
import { Container, Sprite, Text, Texture } from "pixi.js";

const { render, createApp } = createRenderer({
    createElement(type) {
        let element;
        switch(type) {
            case "Container": 
                element = new Container();
                break;
            case "Sprite":
                element = new Sprite();
                break;
        }
        return element;
    },
    patchProp(el, key, prevVal, nextVal) {
        switch(key) {
            case "texture":
                el.texture = Texture.from(nextVal);
            break;
            case "onClick":
                el.on("pointertap", nextVal);
                break;
            default:
                el[key] = nextVal;
        }
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
    },
    /**
     * 处理注释
     */
    createComment() {},
    /**
     * 获取父节点
     */
    parentNode() {},
    /**
     * 获取兄弟节点
     */
    nextSibling() {},
    /**
     * 删除节点
     * @param {element} el 
     */
    remove(el) {
        const parent = el.parent;
        if(parent) {
            parent.removeChild(el);
        }
    }
});
export { render, createApp }