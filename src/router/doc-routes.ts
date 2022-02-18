import { h } from "vue";
import Markdown from "@/components/Markdown.vue";

import { html as GetStarted } from "../../markdown/get-started.md";
import { html as Install } from "../../markdown/install.md";
import { html as Intro } from "../../markdown/intro.md";

const md = (string) => h(Markdown, { content: string, key: string });
const IntroDoc = md(Intro);
const GetStartedDoc = md(GetStarted);
const InstallDoc = md(Install);

import AvatarDoc from "@/views/doc/avatar/index.vue";
import ButtonDoc from "@/views/doc/button/index.vue";
import DividerDoc from "@/views/doc/divider/index.vue";
import EllipsisDoc from "@/views/doc/ellipsis/index.vue";
import GradientTextDoc from "@/views/doc/gradient-text/index.vue";
import IconDoc from "@/views/doc/icon/index.vue";
import LinkDoc from "@/views/doc/link/index.vue";
import TagDoc from "@/views/doc/tag/index.vue";

import CheckboxDoc from "@/views/doc/checkbox/index.vue";
import InputDoc from "@/views/doc/input/index.vue";
import RadioDoc from "@/views/doc/radio/index.vue";
import SelectDoc from "@/views/doc/select/index.vue";
import SwitchDoc from "@/views/doc/switch/index.vue";

import AlertDoc from "@/views/doc/alert/index.vue";
import DialogDoc from "@/views/doc/dialog/index.vue";
import DrawerDoc from "@/views/doc/drawer/index.vue";
import MessageDoc from "@/views/doc/message/index.vue";

import AffixDoc from "@/views/doc/affix/index.vue";
import BacktopDoc from "@/views/doc/backtop/index.vue";
import BreadcrumbDoc from "@/views/doc/breadcrumb/index.vue";
import PageHeaderDoc from "@/views/doc/page-header/index.vue";
import TabsDoc from "@/views/doc/tabs/index.vue";

const docMenus = {
  文档: [
    { path: "intro", component: IntroDoc, name: "介绍" },
    { path: "install", component: InstallDoc, name: "安装" },
    { path: "get-started", component: GetStartedDoc, name: "快速使用" },
  ],
  通用组件: [
    { path: "avatar", component: AvatarDoc, name: "头像 Avatar" },
    { path: "button", component: ButtonDoc, name: "按钮 Button" },
    { path: "divider", component: DividerDoc, name: "分割线 Divider" },
    { path: "ellipsis", component: EllipsisDoc, name: "文本省略 Ellipsis" },
    {
      path: "gradient-text",
      component: GradientTextDoc,
      name: "渐变文字 GradientText",
    },
    { path: "icon", component: IconDoc, name: "图标 Icon" },
    { path: "link", component: LinkDoc, name: "链接 Link" },
    { path: "tag", component: TagDoc, name: "标签 Tag" },
  ],
  数据录入组件: [
    { path: "checkbox", component: CheckboxDoc, name: "复选框 Checkbox" },
    { path: "input", component: InputDoc, name: "输入框 Input" },
    { path: "radio", component: RadioDoc, name: "单选框 Radio" },
    { path: "select", component: SelectDoc, name: "选择器 Select" },
    { path: "switch", component: SwitchDoc, name: "开关 Switch" },
  ],
  反馈组件: [
    { path: "alert", component: AlertDoc, name: "提示 Alert" },
    { path: "dialog", component: DialogDoc, name: "对话框 Dialog" },
    { path: "drawer", component: DrawerDoc, name: "抽屉 Drawer" },
    { path: "message", component: MessageDoc, name: "信息 Message" },
  ],
  导航组件: [
    { path: "affix", component: AffixDoc, name: "固钉 Affix" },
    { path: "backtop", component: BacktopDoc, name: "回到顶部 Backtop" },
    { path: "breadcrumb", component: BreadcrumbDoc, name: "面包屑 Breadcrumb" },
    { path: "page-header", component: PageHeaderDoc, name: "页头 PageHeader" },
    { path: "tabs", component: TabsDoc, name: "标签页 Tabs" },
  ],
};

let docRoutes = [];
for (let i in docMenus) {
  docRoutes = [...docRoutes, ...docMenus[i]];
}

export { docRoutes, docMenus };
