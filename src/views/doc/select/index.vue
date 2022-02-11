<template>
  <div class="select-doc-wrapper">
    <h1>Select 选择器</h1>
    <div class="preview-wrapper">
      <Preview :component="SelectPreview1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import SelectPreview1 from "./SelectPreview1.preview.vue";
</script>

<style lang="scss" scoped></style>
