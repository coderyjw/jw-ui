<demo>
自定义颜色
</demo>
<template>
  <Switch v-model="checked" active-color="pink" inactive-color="red" />
</template>

<script setup lang="ts">
import Switch from "@/lib/switch/index.vue";
import { ref } from "vue";
const checked = ref(false);
</script>
