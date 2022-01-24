<preview>多选框组</preview>
<template>
  <jw-checkbox-group v-model="checkList" size="large">
    <jw-checkbox label="选项A" />
    <jw-checkbox label="选项B" />
    <jw-checkbox label="选项C" />
  </jw-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from "vue";

const checkList = ref(["选项A"]);
</script>
