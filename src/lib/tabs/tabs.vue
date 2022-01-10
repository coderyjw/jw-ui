<template>
  <div class="jw-tabs">
    <div class="jw-tabs-header" ref="container">
      <div
        class="jw-tabs-header-item"
        :class="{ 'is-active': modelValue === title }"
        v-for="(title, index) in titles"
        :key="index"
        @click="handleTabsItemClick(title)"
        :ref="
          (e) => {
            if (title === modelValue) selectedItem = e;
          }
        "
      >
        {{ title }}
      </div>
      <div class="jw-tabs-header-indicator" ref="indicator"></div>
    </div>
    <div class="jw-tabs-content">
      <component
        v-if="current"
        :is="current"
        :key="current.props.title"
      ></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots, computed, ref, onMounted, watchEffect } from "vue";
import Tab from "./tab.vue";

const props = defineProps({
  modelValue: {
    type: String,
  },
});
const slots = useSlots().default();
const emits = defineEmits(["update:modelValue"]);

slots.forEach((tag) => {
  // @ts-ignore
  if (tag.type.name !== Tab.name) {
    throw new Error("Tabs 子标签必须是Tab");
  }
});

const selectedItem = ref<HTMLDivElement>(null);
const indicator = ref<HTMLDivElement>(null);
const container = ref<HTMLDivElement>(null);

onMounted(() => {
  watchEffect(() => {
    renderIndicator();
  });
});

const renderIndicator = () => {
  if (selectedItem.value) {
    const { width } = selectedItem.value.getBoundingClientRect();
    indicator.value.style.width = width + "px";

    const { left: left1 } = container.value.getBoundingClientRect();

    const { left: left2 } = selectedItem.value.getBoundingClientRect();

    const left = left2 - left1;
    indicator.value.style.left = left + "px";
  }
};

const titles = slots.map((tag) => tag.props.title);
const current = computed(() => {
  return slots.find((tag) => tag.props.title === props.modelValue);
});

const handleTabsItemClick = (title: string) => {
  emits("update:modelValue", title);
};
</script>

<style lang="scss">
$active-color: #36ad6a;
$color: #333;
$border-color: #d9d9d9;
.jw-tabs {
  &-header {
    display: flex;
    border-bottom: 1px solid $border-color;
    color: $color;
    position: relative;

    &-item {
      margin: 0 16px;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      cursor: pointer;

      &.is-active,
      &:hover {
        color: $active-color;
      }
    }
    &-item:first-of-type {
      padding-left: 0;
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $active-color;
      left: 0;
      bottom: -1px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
