import { h, defineComponent } from "@vue/runtime-core";
import startPageImg from "../assets/start_page.jpg";
import startBtnImg from "../assets/startBtn.png";

export default defineComponent({
    setup(props, ctx) {
        const onClick = () => {
            ctx.emit("changePage", "GamePage");
        }
        return { onClick };
    },
    render(ctx) {
        // <div><img src="startPageImg"/></div>
        return h("Container", [
            h("Sprite", {texture: startPageImg}),
            h("Sprite", {texture: startBtnImg, x: 226, y: 510, interactive: true, onClick: ctx.onClick})
        ]);
    }
});