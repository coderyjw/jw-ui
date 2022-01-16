<template>
  <div class="jw-tabs" :class="classes">
    <div class="jw-tabs-header" ref="container">
      <div
        class="jw-tabs-header-item"
        :class="{ 'is-active': modelValue === title }"
        v-for="(title, index) in titles"
        :key="index"
        @click="handleTabsItemClick(title)"
        :ref="getHeaderItemRef(title)"
      >
        {{ title }}
      </div>
      <div
        class="jw-tabs-header-indicator"
        v-if="type === 'line'"
        ref="indicator"
      ></div>
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
import JwTab from "../tab/index.vue";

const props = defineProps({
  modelValue: {
    type: String,
  },
  type: {
    type: String,
    default: "line",
  },
});

const slots = useSlots().default();
const emits = defineEmits(["update:modelValue"]);
const { type } = props;
const classes = {
  [`jw-tabs-${type}`]: type,
};

slots.forEach((tag) => {
  // @ts-ignore
  if (tag.type.name !== JwTab.name) {
    throw new Error("JwTabs 子标签必须是JwTab");
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
  if (selectedItem.value && props.type === "line") {
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

const getHeaderItemRef = (title) => {
  return (e) => {
    if (title === props.modelValue) selectedItem.value = e;
  };
};
</script>
<script lang="ts">
export default {
  name: "JwTabs",
};
</script>

<style lang="scss">
$active-color: #36ad6a;
$color: #333;
$border-color: #d9d9d9;
$card-background: #f7f7fa;
$white: #fff;
$radius: 3px;
$h: 40px;

.jw-tabs {
  width: 100%;
  &.jw-tabs-line {
    .jw-tabs-header {
      display: flex;
      border-bottom: 1px solid $border-color;
      color: $color;
      position: relative;
      height: $h;

      &-item {
        margin: 0 16px;
        height: $h;
        line-height: $h;
        font-size: 14px;
        cursor: pointer;
        white-space: nowrap;

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
  }
  &.jw-tabs-card {
    .jw-tabs-header {
      display: flex;
      background-color: $card-background;
      border-radius: $radius;
      $color: #333;
      align-items: center;
      height: $h;
      padding: 3px;
      &-item {
        flex-basis: 0;
        flex-grow: 1;
        flex-wrap: nowrap;
        white-space: nowrap;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: $radius;
        height: 100%;
        font-size: 14px;
        cursor: pointer;
        transition: all 250ms ease;

        &.is-active {
          background-color: $white;
          box-shadow: 0 1px 3px 0 rgb(0 0 0 / 8%);
        }
      }
    }
  }
}

.jw-tabs-content {
  padding: 8px 0;
}
</style>
