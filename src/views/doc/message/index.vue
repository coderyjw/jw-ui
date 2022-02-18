<template>
  <div class="message-doc-wrapper">
    <h1>消息提示</h1>
    <p>（一般是）从浏览器顶部降下来的神谕。</p>
    <div class="preview-wrapper">
      <Preview :component="MessagePreview1" />
      <Preview :component="MessagePreview2" />
      <Preview :component="MessagePreview3" />
      <Preview :component="MessagePreview4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import MessagePreview1 from "./MessagePreview1.preview.vue";
import MessagePreview2 from "./MessagePreview2.preview.vue";
import MessagePreview3 from "./MessagePreview3.preview.vue";
import MessagePreview4 from "./MessagePreview4.preview.vue";
</script>

<style lang="scss">
.message-doc-wrapper {
  .jw-button {
    margin-right: 8px;
  }
}
</style>
