<template>
  <div class="avatar-doc-wrapper">
    <h1>Avatar示例</h1>
    <Preview :component="AvatarPreview1" />
    <Preview :component="AvatarPreview2" />
    <Preview :component="AvatarPreview3" />
    <Preview :component="AvatarPreview4" />
    <!-- <Avatar src="src/assets/image/avator.png" />
    <Avatar src="src/assets/image/avator.png" size="small" />
    <Avatar src="src/assets/image/avator.png" size="default" />
    <Avatar src="src/assets/image/avator.png" size="large" />
    <Avatar src="src/assets/image/avator.png" :size="100" />
    <br />
    <Avatar src="src/assets/image/avator.png" shape="square" />
    <Avatar src="src/assets/image/avator.png" shape="square" size="small" />
    <Avatar src="src/assets/image/avator.png" shape="square" size="default" />
    <Avatar src="src/assets/image/avator.png" shape="square" size="large" />
    <Avatar src="src/assets/image/avator.png" shape="square" :size="100" />
    <br />
    <Avatar size="large">user</Avatar>
    <Avatar src="1231123" @error="handleError" />
    <Avatar color="yellow" backgroundColor="red"> M </Avatar> -->
  </div>
</template>

<script setup lang="ts">
import Avatar from "@/lib/avatar/index.vue";
import Preview from "@/components/Preview.vue";
import AvatarPreview1 from "./AvatarPreview1.preview.vue";
import AvatarPreview2 from "./AvatarPreview2.preview.vue";
import AvatarPreview3 from "./AvatarPreview3.preview.vue";
import AvatarPreview4 from "./AvatarPreview4.preview.vue";
const handleError = () => {
  console.log("图片加载失败了");
};
</script>

<style lang="scss">
.avatar-doc-wrapper {
  .jw-avatar + .jw-avatar {
    margin-left: 8px;
    margin-top: 8px;
  }
}
</style>
