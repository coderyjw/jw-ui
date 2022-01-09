<template>
  <div>
    <h1>基础用例</h1>
    <Tabs v-model="selected">
      <Tab title="干嘛">干嘛</Tab>
      <Tab title="听">听</Tab>
      <Tab title="苦情歌">苦情歌</Tab>
      <Tab title="以为多烂漫">以为多烂漫</Tab>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import Tabs from "@/lib/tabs/tabs";
import Tab from "@/lib/tabs/tab";
import { ref } from "vue";

const selected = ref("干嘛");
</script>

<style scoped></style>
