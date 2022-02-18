<preview>基础使用</preview>
<template>
  <jw-button @click="open">Show Message</jw-button>
  <jw-button @click="openVn">Vnode</jw-button>
</template>

<script setup lang="ts">
import { h } from "vue";
import JwMessage from "@/lib/message/index.ts";

const open = () => {
  JwMessage("This is a Message");
};

const openVn = () => {
  JwMessage({
    message: h("p", null, [
      h("span", null, "Message can be "),
      h("i", { style: "color: teal" }, "VNode"),
    ]),
  });
};
</script>
