import { h } from "vue";
import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/home/index.vue";
import Doc from "@/views/doc/index.vue";
import SwitchDemo from "@/components/SwitchDemo.vue";
import ButtonDemo from "@/components/ButtonDemo.vue";
import DialogDemo from "@/components/DialogDemo.vue";
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
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
      ],
    },
  ],
});

export default router;
