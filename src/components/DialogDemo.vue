<template>
  <div>
    <h1>基础用法</h1>
    <Button theme="primary" @click="toggle">点击打开对话框</Button>
    <Dialog v-model="visible" :cancle="cancle" :confirm="confirm">
      <template v-slot:title>自定义title</template>
      这是自定义的内容
      <template v-slot:footer>自定义footer</template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import Dialog from "@/lib/dialog/index.vue";
import BUtton from "@/lib/button/index.vue";
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
