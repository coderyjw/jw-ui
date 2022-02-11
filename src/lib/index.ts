import { App } from "vue";

import JwAvatar from "./avatar/index.vue";
import JwButton from "./button/index.vue";
import JwEllipsis from "./ellipsis/index.vue";
import JwIcon from "./icon/index.vue";
import JwLink from "./link/index.vue";

import JwCheckbox from "./checkbox/checkbox.vue";
import JwCheckboxGroup from "./checkbox/checkbox-group.vue";
import Input from "./input/index.vue";
import JwRadio from "./radio/radio.vue";
import JwSelect from "./select/index.vue";
import JwSwitch from "./switch/index.vue";

import JwDialog from "./dialog/index.vue";
import JwRadioGroup from "./radio/radio-group.vue";
import { openDialog } from "./dialog/openDialog";

import JwTabs from "./tabs/index.vue";
import JwTab from "./tab/index.vue";

export {
  /* 通用组件 */
  JwAvatar,
  JwButton,
  JwEllipsis,
  JwIcon,
  JwLink,
  /* 数据录入组件 */
  JwCheckbox,
  JwCheckboxGroup,
  Input,
  JwRadio,
  JwSelect,
  JwSwitch,
  /* 反馈组件 */
  JwDialog,
  openDialog,
  JwRadioGroup,
  /* 导航组件 */
  JwTabs,
  JwTab,
};

const components = [
  JwAvatar,
  JwButton,
  JwEllipsis,
  JwIcon,
  JwLink,

  JwCheckbox,
  JwCheckboxGroup,
  Input,
  JwRadio,
  JwSelect,
  JwSwitch,

  JwTabs,
  JwTab,
  JwDialog,
  JwRadioGroup,
];

export function registerJwUi(app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}

export default registerJwUi;
