<preview>形状</preview>
<template>
  <jw-avatar :src="imgUrl" shape="square" size="small" />
  <jw-avatar :src="imgUrl" shape="square" size="default" />
  <jw-avatar :src="imgUrl" shape="square" size="large" />
  <jw-avatar :src="imgUrl" shape="square" :size="100" />
</template>
<script setup lang="ts">
import imgUrl from "/src/assets/image/avator.png";
</script>
