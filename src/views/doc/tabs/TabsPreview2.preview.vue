<preview>
卡片风格
</preview>
<template>
  <jw-tabs v-model="selected" type="card">
    <jw-tab title="干嘛">干嘛</jw-tab>
    <jw-tab title="听">听</jw-tab>
    <jw-tab title="苦情歌">苦情歌</jw-tab>
    <jw-tab title="以为多烂漫">以为多烂漫</jw-tab>
  </jw-tabs>
</template>
<script setup lang="ts">
import { ref } from "vue";

const selected = ref("干嘛");
</script>
