import { Container, Sprite, Text } from "pixi.js";

export const nodeOps = {
    /**
     * 插入节点
     * @param {HostNode} el
     * @param {HostElement} parent
     * @param {HostNode | null | undefined} anchor
     */
    insert: (el, parent, anchor) => {
        if(el) parent.addChild(el);
    },
    /**
     * 删除节点
     * @param {element} el
     */
    remove: (el) =>{
        const parent = el.parent;
        if(parent) {
            parent.removeChild(el);
        }
    },
    /**
     * 创建元素节点
     * @param {string} type
     * @param {boolean | undefined} isSVG
     * @param {string | undefined} isCustomizedBuiltIn
     * @return {HostElement}
     */
    createElement: (type, isSVG, isCustomizedBuiltIn) => {
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
    /**
     * 创建文本节点
     * @param {string}
     * @return {HostNode}
     */
    createText: (text) => {
        return new Text(text);
    },
    /**
     * 处理注释
     * @param {string} text
     * @return {HostNode}
     */
    createComment: (text) => {},
    /**
     * 设置文本内容
     * @param {HostElement} node
     * @param {string} text
     */
    setText: (node, text) => {},
    /**
     * 设置元素文本
     * @param {HostElement} node
     * @param {string} text
     */
    setElementText: (node, text) => {
        const cText = new Text(text);
        node.addChild(cText);
    },
    /**
     * 获取父节点
     * @param {HostNode} node
     * @return {HostElement | null}
     */
    parentNode: (node) => node.parentNode,
    /**
     * 获取兄弟节点
     * @param {HostNode} node
     * @return {HostNode | null}
     */
    nextSibling: (node) => node.nextSibling,
};