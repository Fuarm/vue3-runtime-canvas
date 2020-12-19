import { createApp } from "./runtime-canvas";
import App from "./App";
import { getRootContainer } from "./Game";


const app = createApp(App);
app.mount(getRootContainer());
