<template>
  <div class="checkbox-doc-wrapper">
    <h1>Checkbox 单选框</h1>
    <div class="preview-wrapper">
      <Preview :component="CheckboxPreview1" />
      <Preview :component="CheckboxPreview2" />
      <Preview :component="CheckboxPreview3" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import CheckboxPreview1 from "./CheckboxPreview1.preview.vue";
import CheckboxPreview2 from "./CheckboxPreview2.preview.vue";
import CheckboxPreview3 from "./CheckboxPreview3.preview.vue";
</script>

<style lang="scss">
.checkbox-doc-wrapper {
  .jw-checkbox {
    margin-right: 10px;
  }
}
</style>
