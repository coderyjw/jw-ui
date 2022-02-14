<preview>手动 focus & select & blur</preview>
<template>
  <jw-button @click="handleFocus">Focus</jw-button>
  <jw-button @click="handleSelect">Select</jw-button>
  <jw-button @click="handleBlur">Blur</jw-button>
  <jw-input placeholder="请输入内容" v-model="value" ref="inputInstRef" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref("马儿乖，马儿好，马儿光跑不吃草");
const inputInstRef = ref();
const handleFocus = () => {
  inputInstRef.value.focus();
};
const handleBlur = () => {
  inputInstRef.value.blur();
};
const handleSelect = () => {
  inputInstRef.value.select();
};
</script>
