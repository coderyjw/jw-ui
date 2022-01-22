import { App } from "vue";

import JwSwitch from "./switch/index.vue";
import JwButton from "./button/index.vue";
import JwTabs from "./tabs/index.vue";
import JwTab from "./tab/index.vue";
import JwDialog from "./dialog/index.vue";
import JwAvatar from "./avatar/index.vue";
import JwIcon from "./icon/index.vue";
import JwEllipsis from "./ellipsis/index.vue";
import JwLink from "./link/index.vue";
import JwRadio from "./radio/radio.vue";
import { openDialog } from "./dialog/openDialog";

export {
  JwSwitch,
  JwButton,
  JwTabs,
  JwTab,
  JwDialog,
  JwAvatar,
  JwIcon,
  JwEllipsis,
  JwRadio,
  openDialog,
};

const components = [
  JwButton,
  JwSwitch,
  JwTabs,
  JwTab,
  JwDialog,
  JwIcon,
  JwAvatar,
  JwEllipsis,
  JwLink,
  JwRadio,
];

export function registerJwUi(app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}

export default registerJwUi;
