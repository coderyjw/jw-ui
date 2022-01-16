import JwDialog from "./index.vue";
import { createApp, h } from "vue";

export const openDialog = (
  options = {
    title: () => "我是标题",
    content: () => "我是内容",
    confirm: () => {},
    cancel: () => {},
    overlay: true,
    overlayClosable: true,
  }
) => {
  const { title, content, confirm, cancel, overlay, overlayClosable } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    app.unmount(div);
    div.remove();
  };

  const foo = h("div");
  const app = createApp({
    render() {
      return h(
        JwDialog,
        {
          modelValue: true,
          "onUpdate:modelValue": (newVisible) => {
            if (newVisible === false) {
              close();
            }
          },
          confirm,
          cancel,
          overlay,
          overlayClosable,
        },
        {
          title,
          default: content,
        }
      );
    },
  });

  app.mount(div);
};
