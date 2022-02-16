<template>
  <div class="jw-breadcrumb">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from "vue";
const props = defineProps({
  separator: {
    type: String,
    default: "/",
  },
  separatorIcon: {
    type: Object,
  },
});
provide("JwBreadcrumbKey", props);
</script>
<script lang="ts">
export default {
  name: "JwBreadcrumb",
};
</script>

<style lang="scss">
.jw-breadcrumb {
  display: flex;
  width: 100%;
  font-size: 14px;
  line-height: 1;
}
</style>
