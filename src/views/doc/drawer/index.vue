<template>
  <div class="drawer-doc-wrapper">
    <h1>抽屉 Drawer</h1>
    <p>
      有些时候, Dialog 组件并不满足我们的需求, 比如你的表单很长,
      亦或是你需要临时展示一些文档
    </p>
    <div class="preview-wrapper">
      <Preview :component="DrawerPreview1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import DrawerPreview1 from "./DrawerPreview1.preview.vue";
</script>

<style scoped lang="scss">
.drawer-doc-wrapper {
}
</style>
