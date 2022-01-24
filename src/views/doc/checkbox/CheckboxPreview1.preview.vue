<preview>基础使用</preview>
<template>
  <div style="width: 100%">
    <jw-checkbox v-model="checkbox1" label="选项A" size="large" />
    <jw-checkbox v-model="checkbox2" label="选项B" size="large" />
  </div>
  <div style="width: 100%">
    <jw-checkbox v-model="checkbox3" label="选项A" />
    <jw-checkbox v-model="checkbox4" label="选项B" />
  </div>
  <div style="width: 100%">
    <jw-checkbox v-model="checkbox5" label="选项A" size="small" />
    <jw-checkbox v-model="checkbox6" label="选项B" size="small" />
  </div>
  <div style="width: 100%">
    <jw-checkbox v-model="checkbox7" label="选项A" size="small" disabled />
    <jw-checkbox v-model="checkbox8" label="选项B" size="small" disabled />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const checkbox1 = ref(false);
const checkbox2 = ref(false);
const checkbox3 = ref(false);
const checkbox4 = ref(false);
const checkbox5 = ref(false);
const checkbox6 = ref(false);
const checkbox7 = ref(false);
const checkbox8 = ref(false);
</script>
