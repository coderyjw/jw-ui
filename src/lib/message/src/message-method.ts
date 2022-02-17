import { createVNode, render, ref } from "vue";
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
  const props = {
    id,
    offset: verticalOffset,
    zIndex: zIndex.value++,
    ...options,
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
};

export default message;
