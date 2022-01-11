import { h } from "vue";
import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/home/index.vue";
import Doc from "@/views/doc/index.vue";
import SwitchDoc from "@/views/doc/switch/index.vue";
import ButtonDoc from "@/views/doc/button/index.vue";
import DialogDoc from "@/views/doc/dialog/index.vue";
import TabsDoc from "@/views/doc/tabs/index.vue";

import { html as GetStarted } from "../../markdown/get-started.md";
import { html as Install } from "../../markdown/install.md";
import { html as Intro } from "../../markdown/intro.md";

import Markdown from "@/components/Markdown.vue";
const md = (string) => h(Markdown, { content: string, key: string });

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    {
      path: "/doc",
      redirect: "/doc/intro",
      component: Doc,
      children: [
        { path: "intro", component: md(Intro) },
        { path: "install", component: md(Install) },
        { path: "get-started", component: md(GetStarted) },
        { path: "switch", component: SwitchDoc },
        { path: "button", component: ButtonDoc },
        { path: "dialog", component: DialogDoc },
        { path: "tabs", component: TabsDoc },
      ],
    },
  ],
});

export default router;
