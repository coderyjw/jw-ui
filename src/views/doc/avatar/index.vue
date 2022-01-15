<template>
  <div>
    <Avatar src="src/assets/image/avator.png" />
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
    <Avatar color="yellow" backgroundColor="red"> M </Avatar>
  </div>
</template>

<script setup lang="ts">
import Avatar from "@/lib/avatar/index.vue";

const handleError = () => {
  console.log("图片加载失败了");
};
</script>

<style scoped></style>
