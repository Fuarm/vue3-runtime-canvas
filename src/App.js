import { defineComponent, h, computed, ref} from "@vue/runtime-core";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";

export default defineComponent({
    setup(props, ctx) {
        const currentPageName = ref("StartPage");
        const currentPage = computed(() => {
            let page;
            switch(currentPageName.value) {
                case "StartPage":
                    page = StartPage;
                    break;
                case "GamePage":
                    page = GamePage;
                    break;
            }
            return page;
        });
        return { currentPageName, currentPage };
    },
    render(ctx) {
        return h("Container", [
            h(ctx.currentPage, {
                onChangePage(page) {
                    ctx.currentPageName = page;
                }
            })
        ]);
    }
});