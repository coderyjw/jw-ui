<demo>
一句话打开Dialog
</demo>
<template>
  <jw-button theme="primary" @click="toggle">点击打开对话框</jw-button>
</template>

<script setup lang="ts">
import { openDialog } from "@/lib/dialog/openDialog.ts";
const toggle = () => {
  openDialog();
};
</script>
