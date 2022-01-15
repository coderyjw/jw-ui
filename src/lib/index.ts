import { App } from "vue";

import JwSwitch from "./switch/index.vue";
import JwButton from "./button/index.vue";
import JwTabs from "./tabs/index.vue";
import JwTab from "./tab/index.vue";
import JwDialog from "./dialog/index.vue";
import Avatar from "./avatar/index.vue";
import { openDialog } from "./dialog/openDialog";

export { JwSwitch, JwButton, JwTabs, JwTab, JwDialog, Avatar, openDialog };

const components = [JwButton, JwSwitch, JwTabs, JwTab, JwDialog, Avatar];

export function registerJwUi(app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}

export default registerJwUi;
