import { Texture } from "pixi.js";

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