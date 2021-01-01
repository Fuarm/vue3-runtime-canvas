import { h, defineComponent, reactive, onMounted, onUnmounted } from "@vue/runtime-core";
import Map from "../components/Map";
import Plane from "../components/Plane";
import EnemyPlane from "../components/EnemyPlane";
import { game } from "../Game";
import { hitTestObject } from '../utils/index'

export default defineComponent({
    setup(props, ctx) {
        // 响应式对象--引用类型 reactive
        const planeInfo = useCreatePlane();
        const enemyPlanes = useCreateEnemyPlanes();
        
        const handleTicker = () => {
            enemyPlanes.forEach((enemyInfo) => {
                enemyInfo.y++;
                // 碰撞检测--矩形碰撞
                if(hitTestObject(enemyInfo, planeInfo)) {
                    // 游戏结束
                    ctx.emit("changePage", "EndPage");
                }
            });
        };
        onMounted(() => {
            game.ticker.add(handleTicker);
        });
        onUnmounted(() => {
            game.ticker.remove(handleTicker);
        });
        
        return { planeInfo, enemyPlanes };
    },
    render(ctx) {
        const createEnemyPlanes = () => {
            return ctx.enemyPlanes.map((info) => {
                return h(EnemyPlane, { x: info.x, y: info.y });
            });
        }
        return h("Container", [
            h(Map),
            h(Plane, { x: ctx.planeInfo.x, y: ctx.planeInfo.y }),
            ...createEnemyPlanes()
        ]);
    }
});

function useCreateEnemyPlanes() {
    return reactive([
        { x: 0, y: 0, width: 308, height: 207 }
    ]);
}

function useCreatePlane() {
    const planeInfo = reactive({ x: 150, y: 450, width:  258, height: 364});

    const speed = 15;
    window.addEventListener("keydown", (e) => {
        switch (e.code) {
            case "ArrowUp":
                planeInfo.y -= speed;
                break;
            case "ArrowDown":
                planeInfo.y += speed;
                break;
            case "ArrowLeft":
                planeInfo.x -= speed;
                break;
            case "ArrowRight":
                planeInfo.x += speed;
                break;
        }
    });
    return planeInfo;
}
