import { defineComponent, h, computed, ref} from "@vue/runtime-core";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import EndPage from "./pages/EndPage";

export default defineComponent({
    setup(props, ctx) {
        // 使用 ref 创建响应式对象
        const currentPageName = ref("GamePage");
        const currentPage = computed(() => {
            let page;
            switch(currentPageName.value) {
                case "StartPage":
                    page = StartPage;
                    break;
                case "GamePage":
                    page = GamePage;
                    break;
                case "EndPage":
                    page = EndPage;
                    break;
            }
            return page;
        });
        const onChangePage = (page) => {
          currentPageName.value = page;
        }
        return { currentPage, onChangePage };
    },
    render(ctx) {
        return h("Container", [
            h(ctx.currentPage, { onChangePage: ctx.onChangePage })
        ]);
    }
});