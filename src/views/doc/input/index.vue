<template>
  <div class="inpyt-doc-wrapper">
    <h1>Input 输入框</h1>
    <div class="preview-wrapper">
      <Preview :component="InputPreview1" />
      <Preview :component="InputPreview2" />
      <Preview :component="InputPreview3" />
      <Preview :component="InputPreview4" />
      <Preview :component="InputPreview5" />
      <Preview :component="InputPreview6" />
    </div>
  </div>
</template>

<script setup lang="ts">
import InputPreview1 from "./InputPreview1.preview.vue";
import InputPreview2 from "./InputPreview2.preview.vue";
import InputPreview3 from "./InputPreview3.preview.vue";
import InputPreview4 from "./InputPreview4.preview.vue";
import InputPreview5 from "./InputPreview5.preview.vue";
import InputPreview6 from "./InputPreview6.preview.vue";
import Preview from "@/components/Preview.vue";
</script>

<style lang="scss">
.inpyt-doc-wrapper {
  .jw-input {
    margin-right: 8px;
  }
}
</style>
