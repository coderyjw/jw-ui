<template>
  <div class="inpyt-doc-wrapper">
    <h1>Input 输入框</h1>
    <div class="preview-wrapper">
      <Preview :component="InputPreview1" />
      <Preview :component="InputPreview2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import InputPreview1 from "./InputPreview1.preview.vue";
import InputPreview2 from "./InputPreview2.preview.vue";
import Preview from "@/components/Preview.vue";
</script>

<style lang="scss">
.inpyt-doc-wrapper {
}
</style>
