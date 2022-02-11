<template>
  <label class="jw-checkbox-group">
    <slot></slot>
  </label>
</template>

<script setup lang="ts">
import { provide, reactive, toRefs } from "vue";
import { checkboxGroupProps, checkboxGroupEmits } from "./checkbox-group";
const props = defineProps(checkboxGroupProps);
const emits = defineEmits(checkboxGroupEmits);

const changeEvent = (value) => {
  emits("update:modelValue", value);
  emits("change", value);
};

provide(
  "checkboxGroupKey",
  reactive({
    ...toRefs(props),
    changeEvent,
  })
);
</script>
<script lang="ts">
export default {
  name: "JwCheckboxGroup",
};
</script>

<style lang="scss">
.jw-checkbox-group {
}
</style>
