import Dialog from "./index.vue";
import { createApp, h } from "vue";

export const openDialog = (
  options = {
    title: () => "标题",
    content: "这是一条消息",
    confirm: () => {},
    cancel: () => {},
  }
) => {
  const { title, content, confirm, cancel } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);

  const close = () => {
    app.unmount(div);
    div.remove();
  };

  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          modelValue: true,
          "onUpdate:modelValue": (newVisible) => {
            if (newVisible === false) {
              close();
            }
          },
          confirm,
          cancel,
        },
        {
          title,
          content,
        }
      );
    },
  });

  app.mount(div);
};
