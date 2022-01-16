<preview>尺寸</preview>
<template>
  <jw-avatar :src="imgUrl" size="small" />
  <jw-avatar :src="imgUrl" size="default" />
  <jw-avatar :src="imgUrl" size="large" />
  <jw-avatar :src="imgUrl" :size="100" />
</template>
<script setup lang="ts">
import imgUrl from "/src/assets/image/avator.png";
</script>
