import type { VNode } from "vue";

export const messageTypes = ["success", "info", "warning", "error"] as const;

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
  type: {
    type: String,
    values: messageTypes,
    default: "info",
  },
  message: {
    type: [String, Object],
    default: "",
  },
  showClose: {
    type: Boolean,
    default: false,
  },
  center: {
    type: Boolean,
    default: false,
  },
};

export const messageEmits = ["destroy"];

type MessageQueueItem = {
  vm: VNode;
};
export type MessageQueue = MessageQueueItem[];
