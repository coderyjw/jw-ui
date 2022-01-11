<demo>
基础用法
</demo>
<template>
  <Switch v-model="checked" />
  <Switch v-model="checked" disabled/>
</template>

<script setup lang="ts">
import Switch from "@/lib/switch/index";
import { ref } from "vue";
const checked = ref(false);
</script>
