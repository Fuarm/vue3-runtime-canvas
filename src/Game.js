import { Application } from "pixi.js";
import { stage } from "./config/index";
/**
 * 通过PIXI创建一个App容器
 */
export const game = new Application({
    width: stage.width,
    height: stage.height
});

// 将追加到容器添加到html文件中
document.body.append(game.view);

/**
 * 获取根节点
 * @return {PIXI.Container}
 */
export function getRootContainer() {
    return game.stage;
}