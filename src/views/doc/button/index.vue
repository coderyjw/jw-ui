<template>
  <div class="button-doc-wrapper">
    <h1>Button示例</h1>
    <Preview :component="ButtonPreview1" />
    <Preview :component="ButtonPreview2" />
    <Preview :component="ButtonPreview3" />
    <Preview :component="ButtonPreview4" />
    <Preview :component="ButtonPreview5" />
    <Preview :component="ButtonPreview6" />
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import ButtonPreview1 from "./ButtonPreview1.preview.vue";
import ButtonPreview2 from "./ButtonPreview2.preview.vue";
import ButtonPreview3 from "./ButtonPreview3.preview.vue";
import ButtonPreview4 from "./ButtonPreview4.preview.vue";
import ButtonPreview5 from "./ButtonPreview5.preview.vue";
import ButtonPreview6 from "./ButtonPreview6.preview.vue";
</script>

<style lang="scss">
.button-doc-wrapper {
  .jw-button + .jw-button {
    margin-left: 8px;
    margin-top: 8px;
  }
}
</style>
