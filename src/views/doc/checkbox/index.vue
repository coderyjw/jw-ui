<template>
  <div class="checkbox-doc-wrapper">
    <h1>Checkbox 单选框</h1>
    <div class="preview-wrapper">
      <Preview :component="CheckboxPreview1" />
      <Preview :component="CheckboxPreview2" />
      <Preview :component="CheckboxPreview3" />
      <Preview :component="CheckboxPreview4" />
      <Preview :component="CheckboxPreview5" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import CheckboxPreview1 from "./CheckboxPreview1.preview.vue";
import CheckboxPreview2 from "./CheckboxPreview2.preview.vue";
import CheckboxPreview3 from "./CheckboxPreview3.preview.vue";
import CheckboxPreview4 from "./CheckboxPreview4.preview.vue";
import CheckboxPreview5 from "./CheckboxPreview5.preview.vue";
</script>

<style lang="scss">
.checkbox-doc-wrapper {
  .jw-checkbox {
    margin-right: 10px;
  }
}
</style>
