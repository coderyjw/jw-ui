<template>
  <div ref="root" class="jw-affix" :style="rootStyle">
    <div :class="{ 'jw-affix-fixed': state.fixed }" :style="affixStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  onMounted,
  onBeforeUnmount,
  shallowRef,
  computed,
  reactive,
  watch,
  defineExpose,
} from "vue";

const props = defineProps({
  offset: {
    type: Number,
    default: 0,
  },
  target: {
    type: String,
  },
  position: {
    type: String,
    default: "top",
  },
  zIndex: {
    type: Number,
    default: 100,
  },
});

const emits = defineEmits(["change", "scroll"]);

const target = shallowRef<HTMLElement>();
const root = shallowRef<HTMLDivElement>();

const state = reactive({
  fixed: false,
  height: 0, // height of root
  width: 0, // width of root
  scrollTop: 0, // scrollTop of documentElement
  clientHeight: 0, // clientHeight of documentElement
  transform: 0,
});

const rootStyle = computed(() => {
  return {
    height: state.fixed ? `${state.height}px` : "",
    width: state.fixed ? `${state.width}px` : "",
  };
});

const affixStyle = computed(() => {
  if (!state.fixed) return;

  const offset = props.offset ? `${props.offset}px` : 0;
  const transform = state.transform ? `translateY(${state.transform}px)` : "";

  return {
    height: `${state.height}px`,
    width: `${state.width}px`,
    top: props.position === "top" ? offset : "",
    bottom: props.position === "bottom" ? offset : "",
    transform,
    zIndex: props.zIndex,
  };
});

const update = () => {
  if (!root.value || !target.value) return;

  const rootRect = root.value.getBoundingClientRect();
  const targetRect = target.value.getBoundingClientRect();
  state.height = rootRect.height;
  state.width = rootRect.width;
  state.scrollTop = document.documentElement.scrollTop;
  state.clientHeight = document.documentElement.clientHeight;
  if (props.position === "top") {
    if (props.target) {
      const difference = targetRect.bottom - props.offset - state.height;
      state.fixed = props.offset > rootRect.top && targetRect.bottom > 0;
      state.transform = difference < 0 ? difference : 0;
    } else {
      state.fixed = props.offset > rootRect.top;
    }
  } else {
    if (props.target) {
      const difference =
        state.clientHeight - targetRect.top - props.offset - state.height;
      state.fixed =
        state.clientHeight - props.offset < rootRect.bottom &&
        state.clientHeight > targetRect.top;
      state.transform = difference < 0 ? -difference : 0;
    } else {
      state.fixed = state.clientHeight - props.offset < rootRect.bottom;
    }
  }
};

const onScroll = (e) => {
  update();

  emits("scroll", e);
};

watch(
  () => state.fixed,
  () => {
    emits("change", state.fixed);
  }
);

onMounted(() => {
  if (props.target) {
    target.value =
      document.querySelector<HTMLElement>(props.target) ?? undefined;
    if (!target.value) {
      throw new Error(`Target is not existed: ${props.target}`);
    }
  } else {
    target.value = document.documentElement;
  }
  window.addEventListener("scroll", onScroll, true);
  window.addEventListener("resize", onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", onScroll);
});

defineExpose({
  update,
});
</script>
<script lang="ts">
export default {
  name: "JwAffix",
};
</script>

<style lang="scss">
.jw-affix {
  .jw-affix-fixed {
    position: fixed;
  }
}
</style>
