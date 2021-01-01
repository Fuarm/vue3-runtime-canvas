import { h, defineComponent } from "@vue/runtime-core";
import endPageImg from "../assets/end_page.jpg";
import restartBtnImg from "../assets/restartBtn.png";

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
            h("Sprite", {texture: endPageImg}),
            h("Sprite", {texture: restartBtnImg, x: 226, y: 510, interactive: true, onClick: ctx.onClick})
        ]);
    }
});