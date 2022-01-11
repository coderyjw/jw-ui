<demo>
一句话打开Dialog
</demo>
<template>
  <Button theme="primary" @click="toggle">点击打开对话框</Button>
</template>

<script setup lang="ts">
import Button from "@/lib/button/index.vue";
import { openDialog } from "@/lib/dialog/openDialog.ts";
const toggle = () => {
  openDialog();
};
</script>
