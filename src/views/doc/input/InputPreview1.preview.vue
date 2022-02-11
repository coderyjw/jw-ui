<preview>基础用法</preview>
<template>
  <jw-input placeholder="请输入内容" v-model="value" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref("hello");
</script>
