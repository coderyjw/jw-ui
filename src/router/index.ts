import { h } from "vue";
import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/home/index.vue";
import Doc from "@/views/doc/index.vue";
import SwitchDoc from "@/views/doc/switch/index.vue";
import ButtonDoc from "@/views/doc/button/index.vue";
import DialogDoc from "@/views/doc/dialog/index.vue";
import TabsDemo from "@/components/TabsDemo.vue";

import Markdown from "@/components/Markdown.vue";
const md = (filename) =>
  h(Markdown, { path: `../../markdown/${filename}.md`, key: filename });

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "intro", component: md("intro") },
        { path: "install", component: md("install") },
        { path: "get-started", component: md("get-started") },
        { path: "switch", component: SwitchDoc },
        { path: "button", component: ButtonDoc },
        { path: "dialog", component: DialogDoc },
        { path: "tabs", component: TabsDemo },
      ],
    },
  ],
});

export default router;
