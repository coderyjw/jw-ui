import { h } from "vue";
import {
  createWebHistory,
  createRouter,
  createWebHashHistory,
} from "vue-router";

import Home from "@/views/home/index.vue";
import Doc from "@/views/doc/index.vue";
import SwitchDoc from "@/views/doc/switch/index.vue";
import ButtonDoc from "@/views/doc/button/index.vue";
import DialogDoc from "@/views/doc/dialog/index.vue";
import TabsDoc from "@/views/doc/tabs/index.vue";
import AvatarDoc from "@/views/doc/avatar/index.vue";

import { html as GetStarted } from "../../markdown/get-started.md";
import { html as Install } from "../../markdown/install.md";
import { html as Intro } from "../../markdown/intro.md";

import Markdown from "@/components/Markdown.vue";
const md = (string) => h(Markdown, { content: string, key: string });
const IntroDoc = md(Intro);
const GetStartedDoc = md(GetStarted);
const InstallDoc = md(Install);
const history = createWebHashHistory();

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
        { path: "intro", component: IntroDoc },
        { path: "install", component: InstallDoc },
        { path: "get-started", component: GetStartedDoc },
        { path: "switch", component: SwitchDoc },
        { path: "button", component: ButtonDoc },
        { path: "dialog", component: DialogDoc },
        { path: "tabs", component: TabsDoc },
        { path: "avatar", component: AvatarDoc },
      ],
    },
  ],
});

export default router;
