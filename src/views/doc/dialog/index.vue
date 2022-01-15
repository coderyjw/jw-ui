<template>
  <h1>Dialog 对话框</h1>
  <Preview :component="DialogPreview1" />
  <Preview :component="DialogPreview2" />
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import DialogPreview1 from "./DialogPreview1.preview.vue";
import DialogPreview2 from "./DialogPreview2.preview.vue";
</script>

<style scoped></style>
