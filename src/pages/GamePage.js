import { h, defineComponent, reactive, onMounted, onUnmounted } from "@vue/runtime-core";
import TWEEN from "@tweenjs/tween.js";
import Map from "../components/Map";
import Plane from "../components/Plane";
import EnemyPlane from "../components/EnemyPlane";
import Bullet from "../components/Bullet";
import { game } from "../Game";
import { hitTestObject } from '../utils/index';

export default defineComponent({
    setup(props, { emit }) {
        // 响应式对象--引用类型 reactive
        const { planeInfo } = useCreatePlane();
        // 敌方飞机
        const { enemyPlanes, addEnemyPlanes } = useCreateEnemyPlanes();
        // 我方子弹
        const { bullets, addBullet } = useCreateBullets();
        
        const onAttack = (bulletInfo) => {
            addBullet(bulletInfo);
        };

        const { handleTicker } = useFighting(enemyPlanes, planeInfo, emit, bullets);
        onMounted(() => {
            game.ticker.add(handleTicker);
        });
        onUnmounted(() => {
            game.ticker.remove(handleTicker);
        });
        
        return { planeInfo, enemyPlanes, bullets, onAttack };
    },
    render(ctx) {
        const createEnemyPlanes = () => {
            return ctx.enemyPlanes.map((info) => {
                return h(EnemyPlane, { x: info.x, y: info.y });
            });
        }
        const createBullets = () => {
            return ctx.bullets.map((info) => {
                return h(Bullet, { x: info.x + 100, y: info.y });
            });
        }
        return h("Container", [
            h(Map),
            h(Plane, { x: ctx.planeInfo.x, y: ctx.planeInfo.y, onAttack: ctx.onAttack }),
            ...createEnemyPlanes(),
            ...createBullets()
        ]);
    }
});

function useFighting(enemyPlanes, planeInfo, emit, bullets) {
    const handleTicker = () => {
        TWEEN.update();
        enemyPlanes.forEach((enemyInfo) => {
            enemyInfo.y++;
            // 碰撞检测--矩形碰撞
            if (hitTestObject(enemyInfo, planeInfo)) {
                // 游戏结束
                emit("changePage", "EndPage");
            }
        });
        bullets.forEach((bulletInfo, bulletIndex) => {
            bulletInfo.y--;
            // 碰撞检测---敌方飞机与我方子弹
            enemyPlanes.forEach((enemyInfo, enemyIndex) => {
                // 碰撞检测--矩形碰撞
                if (hitTestObject(enemyInfo, bulletInfo)) {
                    // 子弹消失
                    bullets.splice(bulletIndex, 1);
                    // 敌方战机消失
                    enemyPlanes.splice(enemyIndex, 1);
                }
            });
        });
    };
    return { handleTicker };
}

function useCreateBullets() {
    const bullets = reactive([]);
    const addBullet = (info) => {
        bullets.push({...info, width: 40,  height: 70 });
    };
    return { bullets, addBullet };
}

function useCreateEnemyPlanes() {
    const enemyPlanes = reactive([]);
    const addEnemyPlanes = (info) => {
        enemyPlanes.push({...info, width: 300, height: 200 });
    };
    return { enemyPlanes, addEnemyPlanes };
}

function useCreatePlane() {
    const planeInfo = reactive({ x: game.view.clientWidth * 0.45, y: game.view.clientHeight, width:  248, height: 348});
    // 缓动出场
    new TWEEN.Tween({x: planeInfo.x, y: planeInfo.y })
        .to({ y: planeInfo.y - 250 }, 500)
        .start()
        .onUpdate((obj) => {
            planeInfo.x = obj.x;
            planeInfo.y = obj.y;
        });
    
    const speed = 5;
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
   
    return { planeInfo };
}
