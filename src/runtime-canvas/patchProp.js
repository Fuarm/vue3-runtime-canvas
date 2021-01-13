import { Texture } from "pixi.js";

/**
 *  元素属性处理
 * @param {element} el 
 * @param {string} key 
 * @param {any} prevVal 
 * @param {any} nextVal 
 */
export const patchProp = (el, key, prevVal, nextVal) => {
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
};