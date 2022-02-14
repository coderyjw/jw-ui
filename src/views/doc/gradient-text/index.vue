<template>
  <div class="gradient-text-doc-wrapper">
    <h1>渐变文字 Gradient Text</h1>
    <div class="preview-wrapper">
      <Preview :component="GradientTextPreview1" />
      <Preview :component="GradientTextPreview2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import GradientTextPreview1 from "./GradientTextPreview1.preview.vue";
import GradientTextPreview2 from "./GradientTextPreview2.preview.vue";
</script>

<style scoped></style>
