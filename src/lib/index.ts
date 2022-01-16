import { App } from "vue";

import JwSwitch from "./switch/index.vue";
import JwButton from "./button/index.vue";
import JwTabs from "./tabs/index.vue";
import JwTab from "./tab/index.vue";
import JwDialog from "./dialog/index.vue";
import Avatar from "./avatar/index.vue";
import Icon from "./icon/index.vue";
import { openDialog } from "./dialog/openDialog";

export {
  JwSwitch,
  JwButton,
  JwTabs,
  JwTab,
  JwDialog,
  Avatar,
  Icon,
  openDialog,
};

const components = [JwButton, JwSwitch, JwTabs, JwTab, JwDialog, Icon, Avatar];

export function registerJwUi(app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}

export default registerJwUi;
