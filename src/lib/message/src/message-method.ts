import { createVNode, render, ref, VNode, isVNode } from "vue";
import type { MessageQueue } from "./message";
import MessageConstructor from "./message.vue";
import { messageTypes } from "./message";
let seed = 1;
const zIndex = ref(2000);
const instances: MessageQueue = [];

const message = function (options = {}) {
  if (typeof options === "string" || isVNode(options)) {
    options = { message: options };
  }

  let verticalOffset = options.offset || 20;
  instances.forEach(({ vm }) => {
    verticalOffset += (vm.el?.offsetHeight || 0) + 16;
  });

  const id = `message_${seed++}`;
  const userOnClose = (options as any).onClose;
  const props = {
    id,
    offset: verticalOffset,
    zIndex: zIndex.value++,
    ...options,
    onClose: () => {
      close(id, userOnClose);
    },
  } as any;

  let appendTo: HTMLElement | null = document.body;
  if (options.appendTo instanceof HTMLElement) {
    appendTo = options.appendTo;
  } else if (typeof options.appendTo === "string") {
    appendTo = document.querySelector(options.appendTo);
  }
  // should fallback to default value with a warning
  if (!(appendTo instanceof HTMLElement)) {
    throw new Error(
      "JwMessage the appendTo option is not an HTMLElement. Falling back to document.body."
    );
    appendTo = document.body;
  }

  const container = document.createElement("div");
  container.className = `container_${id}`;

  const message = props.message;
  const vm = createVNode(
    MessageConstructor,
    props,
    isVNode(props.message) ? { default: () => message } : null
  );
  // 清除消息元素以防止内存泄漏
  vm.props!.onDestroy = () => {
    render(null, container);
  };

  render(vm, container);
  instances.push({ vm });
  appendTo.appendChild(container.firstElementChild!);

  return {
    // 不是直接调用 onClose 函数，而是设置这个值，这样我们就可以拥有完整的生命周期
    close: () => ((vm.component!.proxy as any).visible = false),
  };
};

messageTypes.forEach((type) => {
  message[type] = (options = {}) => {
    if (typeof options === "string" || isVNode(options)) {
      options = {
        message: options,
      };
    }
    return message({
      ...options,
      type,
    });
  };
});

export function close(id: string, userOnClose?: (vm: VNode) => void): void {
  const idx = instances.findIndex(({ vm }) => id === vm.component!.props.id);
  if (idx === -1) return;

  const { vm } = instances[idx];
  if (!vm) return;
  userOnClose?.(vm);

  const removedHeight = vm.el!.offsetHeight;
  instances.splice(idx, 1);

  // adjust other instances vertical offset
  const len = instances.length;
  if (len < 1) return;
  for (let i = idx; i < len; i++) {
    const pos =
      parseInt(instances[i].vm.el!.style["top"], 10) - removedHeight - 16;

    instances[i].vm.component!.props.offset = pos;
  }
}

export function closeAll(): void {
  for (let i = instances.length - 1; i >= 0; i--) {
    const instance = instances[i].vm.component;
    (instance?.proxy as any)?.close();
  }
}

message.closeAll = closeAll;
export default message;
