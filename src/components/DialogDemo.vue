<template>
  <div>
    <h1>基础用法</h1>
    <Button theme="primary" @click="toggle">点击打开对话框</Button>
    <Dialog v-model="visible" :cancel="cancel" :confirm="confirm"> </Dialog>
  </div>

  <div>
    <h1>一句话打开</h1>
    <Button theme="primary" @click="open">一句话打开</Button>
  </div>
</template>

<script setup lang="ts">
import Dialog from "@/lib/dialog/index.vue";
import BUtton from "@/lib/button/index.vue";
import { reactive, ref } from "vue";
import Button from "../lib/button/index.vue";
import { openDialog } from "@/lib/dialog/useDialog.ts";

const visible = ref(false);

const toggle = () => {
  visible.value = !visible.value;
};

const confirm = () => {
  return false;
};

const cancel = () => {};

const open = () => {
  openDialog();
};
</script>

<style lang="scss"></style>
