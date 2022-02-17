<template>
  <div class="message-doc-wrapper">
    <h1>消息提示</h1>
    <p>（一般是）从浏览器顶部降下来的神谕。</p>
    <div class="preview-wrapper">
      <Preview :component="MessagePreview1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview";
import MessagePreview1 from "./MessagePreview1.preview.vue";
</script>

<style scoped></style>
