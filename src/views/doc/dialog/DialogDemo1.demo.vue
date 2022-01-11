<demo>
基础用法
</demo>
<template>
  <Button theme="primary" @click="toggle">点击打开对话框</Button>
  <Dialog v-model="visible" :cancel="cancel" :confirm="confirm"> </Dialog>
</template>

<script setup lang="ts">
import Dialog from "@/lib/dialog/index.vue";
import Button from "@/lib/button/index.vue";
import { ref } from "vue";

const visible = ref(false);

const toggle = () => {
  visible.value = !visible.value;
};

const confirm = () => {};

const cancel = () => {};
</script>
