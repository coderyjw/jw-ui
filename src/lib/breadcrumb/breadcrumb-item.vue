<template>
  <span class="jw-breadcrumb-item">
    <span
      class="jw-breadcrumb-inner"
      :class="{
        'is-link': to,
      }"
      @click="handleClick"
    >
      <slot></slot>
    </span>
    <jw-icon
      v-if="parent?.separatorIcon"
      class="jw-breadcrumb-separator"
      :size="12"
    >
      <component :is="parent.separatorIcon" />
    </jw-icon>
    <span v-else class="jw-breadcrumb-separator">{{ parent.separator }}</span>
  </span>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({
  to: {
    type: Object,
    default: () => {},
  },
  replace: {
    type: Boolean,
    default: false,
  },
});
const router = useRouter();
const parent = inject("JwBreadcrumbKey", undefined);

const handleClick = () => {
  if (!props.to || !router) return;
  props.replace ? router.replace(props.to) : router.push(props.to);
};
</script>
<script lang="ts">
export default {
  name: "JwBreadcrumbItem",
};
</script>
<style lang="scss">
.jw-breadcrumb-item {
  float: left;
  display: flex;
  align-items: center;
  color: #606266;
  .jw-breadcrumb-separator {
    margin: 0 9px;
    font-weight: 700;
    color: #c0c4cc;
  }

  .jw-breadcrumb-inner.is-link,
  .jw-breadcrumb-inner a {
    font-weight: 700;
    text-decoration: none;
    color: #303133;
    transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: pointer;

    &:hover {
      color: #36ad6a;
    }
  }

  &:last-child .jw-breadcrumb-separator {
    display: none;
  }
}
</style>
