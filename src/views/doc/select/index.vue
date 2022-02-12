<template>
  <div class="select-doc-wrapper">
    <h1>Select 选择器</h1>
    <div class="preview-wrapper">
      <Preview :component="SelectPreview1" />
      <Preview :component="SelectPreview2" />
      <Preview :component="SelectPreview3" />
      <Preview :component="SelectPreview4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import SelectPreview1 from "./SelectPreview1.preview.vue";
import SelectPreview2 from "./SelectPreview2.preview.vue";
import SelectPreview3 from "./SelectPreview3.preview.vue";
import SelectPreview4 from "./SelectPreview4.preview.vue";
</script>

<style lang="scss" scoped></style>
