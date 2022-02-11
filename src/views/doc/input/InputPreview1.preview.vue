<preview>基础用法</preview>
<template>
  <jw-input placeholder="请输入内容" v-model="value" @input="hanldeInput" />
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref("hello");
const hanldeInput = (e) => {
  console.log({ e });
};
</script>
