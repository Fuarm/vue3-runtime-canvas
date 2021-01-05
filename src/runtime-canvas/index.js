import { createRenderer } from "@vue/runtime-core";
import { patchProp } from "./patchProp";
import { nodeOps } from "./nodeOps";

const { render, createApp } = createRenderer({
    patchProp,
    ...nodeOps
});

export { render, createApp }