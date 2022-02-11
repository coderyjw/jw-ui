<preview>带 icon 的输入框</preview>
<template>
  <jw-input
    placeholder="请输入内容"
    v-model="value"
    :suffixIcon="Search28Filled"
    show-password
    clearable
  />
  <jw-input
    placeholder="请输入内容"
    v-model="value1"
    :prefixIcon="Search28Filled"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Search28Filled } from "@vicons/fluent";

const value = ref("hello");
const value1 = ref("hello");
</script>
