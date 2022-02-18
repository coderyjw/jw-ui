<preview>居中</preview>
<template>
  <jw-button @click="open1">Info</jw-button>
  <jw-button @click="open2">success</jw-button>
  <jw-button @click="open3">Warning</jw-button>
  <jw-button @click="open4">Error</jw-button>
</template>

<script setup lang="ts">
import JwMessage from "@/lib/message/index.ts";

const open1 = () => {
  JwMessage({
    message: "this is a message.",
    showClose: true,
    center: true,
  });
};
const open2 = () => {
  JwMessage({
    message: "Congrats, this is a success message.",
    type: "success",
    showClose: true,
    center: true,
  });
};
const open3 = () => {
  JwMessage({
    message: "Warning, this is a warning message.",
    type: "warning",
    showClose: true,
    center: true,
  });
};
const open4 = () => {
  JwMessage({
    type: "error",
    message: "Oops, this is a error message.",
    showClose: true,
    duration: 0,
    center: true,
  });
};
</script>
