import { Application } from "pixi.js";
import { stage } from "./config/index";
// setup canvas
export const game = new Application({
    width: stage.width,
    height: stage.height
});

document.body.append(game.view);

export function getRootContainer() {
    return game.stage;
}