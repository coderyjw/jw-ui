<demo>
卡片风格
</demo>
<template>
  <Tabs v-model="selected" type="card">
    <Tab title="干嘛">干嘛</Tab>
    <Tab title="听">听</Tab>
    <Tab title="苦情歌">苦情歌</Tab>
    <Tab title="以为多烂漫">以为多烂漫</Tab>
  </Tabs>
</template>
<script setup lang="ts">
import Tabs from "@/lib/tabs/index.vue";
import Tab from "@/lib/tab/index.vue";
import { ref } from "vue";

const selected = ref("干嘛");
</script>
