import type { VNode } from "vue";

export const messageProps = {
  duration: {
    type: Number,
    default: 3000,
  },
  id: {
    type: String,
    default: "",
  },
  offset: {
    type: Number,
    default: 100,
  },
  zIndex: {
    type: Number,
    default: 0,
  },
  onClose: {
    type: Function,
    required: false,
  },
};

export const messageEmits = ["destory"];

type MessageQueueItem = {
  vm: VNode;
};
export type MessageQueue = MessageQueueItem[];
