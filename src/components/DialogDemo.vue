<template>
  <div>
    <h1>基础用法</h1>
    <Button theme="primary" @click="toggle">点击打开对话框</Button>
    <Dialog v-model="visible" :cancle="cancle" :confirm="confirm" />
  </div>
</template>

<script setup lang="ts">
import Dialog from "@/lib/dialog/index.vue";
import BUtton from "@/lib/button/index";
import { ref } from "vue";
import Button from "../lib/button/index.vue";
const visible = ref(false);
const toggle = () => {
  visible.value = !visible.value;
};

const confirm = () => {
  return false;
};

const cancle = () => {
  return true;
};
</script>

<style scoped></style>
