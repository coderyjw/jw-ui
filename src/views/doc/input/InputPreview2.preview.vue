<preview>禁用状态</preview>
<template>
  <jw-input placeholder="请输入内容" v-model="value" disabled/>
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref("hello");
const hanldeInput = (e) => {
  console.log({ e });
};
</script>
