<preview>带有边框</preview>
<template>
  <jw-checkbox v-model="checkbox1" label="选项 A" size="small" border />
  <jw-checkbox v-model="checkbox2" label="选项 B" border />
  <jw-checkbox v-model="checkbox3" label="选项 C" size="large" border />
  <jw-checkbox v-model="checkbox4" label="选项 D" size="small" border />
  <jw-checkbox v-model="checkbox5" label="选项 E" border />
  <jw-checkbox v-model="checkbox6" label="选项 F" size="large" border />
</template>

<script setup lang="ts">
import { ref } from "vue";

const checkbox1 = ref(false);
const checkbox2 = ref(false);
const checkbox3 = ref(false);
const checkbox4 = ref(false);
const checkbox5 = ref(false);
const checkbox6 = ref(false);
</script>
