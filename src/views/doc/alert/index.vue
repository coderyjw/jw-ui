<template>
  <div class="alert-doc-wrapper">
    <h1>提示 Alert</h1>
    <p>用于页面中展示重要的提示信息。</p>
    <div class="preview-wrapper">
      <Preview :component="AlertPreview1"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from '@/components/Preview.vue'
import AlertPreview1 from './AlertPreview1.preview.vue'
</script>

<style scoped>

</style>