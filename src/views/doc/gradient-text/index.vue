<template>
  <div class="gradient-text-doc-wrapper">
    <h1>渐变文字 Gradient Text</h1>
    <div class="preview-wrapper">
      <Preview :component="GradientTextPreview1"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from '@/components/Preview.vue'
import GradientTextPreview1 from './GradientTextPreview1.preview.vue'
</script>

<style scoped>

</style>