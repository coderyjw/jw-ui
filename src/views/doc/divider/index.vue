<template>
  <div class="divider-doc-wrapper">
    <h1>分割线 Divider</h1>
    <div class="preiver-wrapper">
      <Preview :component="DividerPreview1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import DividerPreview1 from "./DividerPreview1.preview.vue";
</script>

<style scoped></style>
