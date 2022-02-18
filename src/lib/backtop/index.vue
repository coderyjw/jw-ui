<template>
  <transition
    leave-active-class="animate__bounceOut"
    enter-active-class="animate__bounceIn"
  >
    <div
      v-if="visible"
      class="jw-backtop animate__animated"
      :style="{
        right: right + 'px',
        bottom: bottom + 'px',
      }"
      @click.stop="handleClick"
    >
      <slot>
        <jw-icon :size="26">
          <BackToTop />
        </jw-icon>
      </slot>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { BackToTop } from "@vicons/carbon";
import { shallowRef, onMounted, ref, onBeforeUnmount } from "vue";
import { easeInOutCubic, useThrottleFn } from "@/utils";
const props = defineProps({
  right: {
    type: Number,
    default: 40,
  },
  bottom: {
    type: Number,
    default: 40,
  },
  visibilityHeight: {
    type: Number,
    default: 200,
  },
  target: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["click"]);

const el = shallowRef<HTMLElement | undefined>(document.documentElement);
const container = shallowRef<Document | HTMLElement>(document);
const visible = ref(false);

const scrollToTop = () => {
  if (!el.value) return;
  const beginTime = Date.now();
  const beginValue = el.value.scrollTop;
  const frameFunc = () => {
    if (!el.value) return;
    const progress = (Date.now() - beginTime) / 500;
    if (progress < 1) {
      el.value.scrollTop = beginValue * (1 - easeInOutCubic(progress));

      requestAnimationFrame(frameFunc);
    } else {
      el.value.scrollTop = 0;
    }
  };
  requestAnimationFrame(frameFunc);
};

const handleClick = (event: MouseEvent) => {
  scrollToTop();
  emits("click", event);
};

const handleScroll = () => {
  if (el.value) visible.value = el.value.scrollTop >= props.visibilityHeight;
};

const handleScrollThrottled = useThrottleFn(handleScroll, 300);

onMounted(() => {
  if (props.target) {
    el.value = document.querySelector<HTMLElement>(props.target) ?? undefined;
    if (!el.value) {
      throw new Error(`target is not existed: ${props.target}`);
    }
    container.value = el.value;
    container.value.addEventListener("scroll", handleScrollThrottled);
  }
});

onBeforeUnmount(() => {
  container.value.removeEventListener("scroll", handleScrollThrottled);
});
</script>
<script lang="ts">
export default {
  name: "JwBacktop",
};
</script>

<style lang="scss">
.jw-backtop {
  height: 44px;
  width: 44px;
  position: fixed;
  border-radius: 100%;
  box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.12);
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #5bab70;
    box-shadow: 0 2px 12px 0px rgba(0, 0, 0, 0.18);
  }
}
</style>
