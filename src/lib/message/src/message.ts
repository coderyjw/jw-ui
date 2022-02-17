import type { VNode } from "vue";

type MessageQueueItem = {
  vm: VNode;
};
export type MessageQueue = MessageQueueItem[];
