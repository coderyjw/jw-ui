<preview>基础使用</preview>
<template>
  <jw-button @click="open">Show Message</jw-button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import JwMessage from "@/lib/message/index.ts";

const open = () => {
  JwMessage();
};
const show = ref(false);
</script>

<style scoped></style>
