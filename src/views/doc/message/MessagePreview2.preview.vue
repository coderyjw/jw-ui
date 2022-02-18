<preview>不同状态</preview>
<template>
  <jw-button @click="open1">Info</jw-button>
  <jw-button @click="open2">success</jw-button>
  <jw-button @click="open3">Warning</jw-button>
  <jw-button @click="open4">Error</jw-button>
</template>

<script setup lang="ts">
import JwMessage from "@/lib/message/index.ts";

const open1 = () => {
  JwMessage("this is a message.");
};
const open2 = () => {
  JwMessage({
    message: "Congrats, this is a success message.",
    type: "success",
  });
};
const open3 = () => {
  JwMessage({
    message: "Warning, this is a warning message.",
    type: "warning",
  });
};
const open4 = () => {
  JwMessage.error("Oops, this is a error message.");
};
</script>
