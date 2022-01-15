<preview>图片加载失败的回滚行为</preview>
<template>
  <jw-avatar src="empty" size="large" @error="handleError">
    <img src="/src/assets/image/avator.png" alt="" />
  </jw-avatar>
</template>
<script setup lang="ts">
const handleError = () => {
  console.log("图片加载失败");
  return false;
};
</script>
