import { h } from "vue";
import Markdown from "@/components/Markdown.vue";

import { html as GetStarted } from "../../markdown/get-started.md";
import { html as Install } from "../../markdown/install.md";
import { html as Intro } from "../../markdown/intro.md";

const md = (string) => h(Markdown, { content: string, key: string });
const IntroDoc = md(Intro);
const GetStartedDoc = md(GetStarted);
const InstallDoc = md(Install);

import SwitchDoc from "@/views/doc/switch/index.vue";
import ButtonDoc from "@/views/doc/button/index.vue";
import DialogDoc from "@/views/doc/dialog/index.vue";
import TabsDoc from "@/views/doc/tabs/index.vue";
import AvatarDoc from "@/views/doc/avatar/index.vue";

export default {
  文档: [
    { path: "intro", component: IntroDoc, name: "介绍" },
    { path: "install", component: InstallDoc, name: "安装" },
    { path: "get-started", component: GetStartedDoc, name: "快速使用" },
  ],
  通用组件: [
    { path: "avatar", component: AvatarDoc, name: "头像 Avatar" },
    { path: "button", component: ButtonDoc, name: "按钮 Button" },
  ],
  数据录入组件: [{ path: "switch", component: SwitchDoc, name: "开关 Switch" }],
  反馈组件: [{ path: "dialog", component: DialogDoc, name: "对话框 Dialog" }],
  导航组件: [{ path: "tabs", component: TabsDoc, name: "标签页 Tabs" }],
};
