<demo>
尺寸
</demo>
<template>
  <Switch v-model="checked" size="small"/>
  <Switch v-model="checked" size="default"/>
  <Switch v-model="checked" size="large"/>
</template>

<script setup lang="ts">
import Switch from "@/lib/switch/index";
import { ref } from "vue";
const checked = ref(false);
</script>
