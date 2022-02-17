import { createVNode, render, ref, VNode } from "vue";
import type { MessageQueue } from "./message";
import MessageConstructor from "./message.vue";
let seed = 1;
const zIndex = ref(2000);
const instances: MessageQueue = [];

const message = function (options = {}) {
  let verticalOffset = 20;
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
  };

  let appendTo: HTMLElement | null = document.body;

  const container = document.createElement("div");
  container.className = `container_${id}`;
  const vm = createVNode(MessageConstructor, props, null);

  // clean message element preventing mem leak
  vm.props!.onDestroy = () => {
    render(null, container);
    // since the element is destroy, then the VNode should be collected by GC as well
    // we do not want cause any mem leak because we have returned vm as a reference to users
    // so that we manually set it to false.
  };

  render(vm, container);
  instances.push({ vm });
  appendTo.appendChild(container.firstElementChild!);

  return {
    // instead of calling the onClose function directly, setting this value so that we can have the full lifecycle
    // for out component, so that all closing steps will not be skipped.
    close: () => ((vm.component!.proxy as any).visible = false),
  };
};

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
export default message;
