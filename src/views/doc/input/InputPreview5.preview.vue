<preview>文本域</preview>
<template>
  <jw-input
    placeholder="请输入内容"
    v-model="value"
    type="textarea"
    style="width: 300px"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref("hello");
</script>
