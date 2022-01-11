<demo>
基础用法
</demo>
<template>
  <Tabs v-model="selected">
    <Tab title="干嘛">干嘛</Tab>
    <Tab title="听">听</Tab>
    <Tab title="苦情歌">苦情歌</Tab>
    <Tab title="以为多烂漫">以为多烂漫</Tab>
  </Tabs>
</template>
<script setup lang="ts">
import Tabs from "@/lib/tabs/tabs.vue";
import Tab from "@/lib/tabs/tab.vue";
import { ref } from "vue";

const selected = ref("干嘛");
</script>
