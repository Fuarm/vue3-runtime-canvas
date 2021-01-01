import { h, defineComponent } from "@vue/runtime-core";
import Map from "../components/Map";

export default defineComponent({
    render() {
        return h("Container", [h(Map)]);
    }
});