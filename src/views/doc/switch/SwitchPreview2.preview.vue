<preview>
自定义颜色
</preview>
<template>
  <jw-switch v-model="checked" active-color="pink" inactive-color="red" />
</template>

<script setup lang="ts">
import { ref } from "vue";
const checked = ref(false);
</script>
