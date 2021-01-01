import { h, defineComponent } from "@vue/runtime-core";
import mapImg from "../assets/map.jpg";

export default defineComponent({
    render() {
        // <div><img src="startPageImg"/></div>
        return h("Container", [h("Sprite", {texture: mapImg})]);
    }
});