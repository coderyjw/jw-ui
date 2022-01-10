<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
});

const content = ref<string>(null);
console.log(props.path);
import(/* @vite-ignore */ props.path).then((result) => {
  content.value = result.html;
});
</script>
