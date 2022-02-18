import { App } from "vue";

import JwAvatar from "./avatar/index.vue";
import JwButton from "./button/index.vue";
import JwDivider from "./divider/index.vue";
import JwEllipsis from "./ellipsis/index.vue";
import JwGradientText from "./gradient-text/index.vue";
import JwIcon from "./icon/index.vue";
import JwLink from "./link/index.vue";
import JwTag from "./tag/index.vue";

import JwCheckbox from "./checkbox/checkbox.vue";
import JwCheckboxGroup from "./checkbox/checkbox-group.vue";
import JwInput from "./input/index.vue";
import JwRadio from "./radio/radio.vue";
import JwRadioGroup from "./radio/radio-group.vue";
import JwSelect from "./select/index.vue";
import JwSwitch from "./switch/index.vue";

import JwAlert from "./alert/index.vue";
import JwDialog from "./dialog/index.vue";
import JwDrawer from "./drawer/drawer.vue";
import JwMessage from "./message/index.ts";
import { openDialog } from "./dialog/openDialog";

import JwAffix from "./affix/index.vue";
import JwBacktop from "./backtop/index.vue";
import JwBreadcrumb from "./breadcrumb/breadcrumb.vue";
import JwBreadcrumbItem from "./breadcrumb/breadcrumb-item.vue";
import jwPageHeader from "./page-header/index.vue";
import JwTabs from "./tabs/index.vue";
import JwTab from "./tab/index.vue";

export {
  /* 通用组件 */
  JwAvatar,
  JwButton,
  JwDivider,
  JwEllipsis,
  JwGradientText,
  JwIcon,
  JwLink,
  JwTag,
  /* 数据录入组件 */
  JwCheckbox,
  JwCheckboxGroup,
  JwInput,
  JwRadio,
  JwRadioGroup,
  JwSelect,
  JwSwitch,
  /* 反馈组件 */
  JwAlert,
  JwDialog,
  JwDrawer,
  JwMessage,
  openDialog,
  /* 导航组件 */
  JwAffix,
  JwBacktop,
  JwBreadcrumb,
  JwBreadcrumbItem,
  jwPageHeader,
  JwTabs,
  JwTab,
};

const components = [
  JwAvatar,
  JwButton,
  JwDivider,
  JwEllipsis,
  JwGradientText,
  JwIcon,
  JwLink,
  JwTag,

  JwCheckbox,
  JwCheckboxGroup,
  JwInput,
  JwRadio,
  JwRadioGroup,
  JwSelect,
  JwSwitch,

  JwAlert,
  JwDialog,
  JwDrawer,

  JwAffix,
  JwBacktop,
  JwBreadcrumb,
  JwBreadcrumbItem,
  jwPageHeader,
  JwTabs,
  JwTab,
];

export function registerJwUi(app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}

export default registerJwUi;
