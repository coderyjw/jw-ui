<template>
  <span class="jw-avatar" :class="classes" :style="styles">
    <img
      v-if="src && !hasLoadError"
      :src="src"
      :alt="alt"
      @error="handleError"
    />
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
const props = defineProps({
  size: {
    type: [String, Number],
    default: "default",
  },
  src: {
    type: String,
    default: "",
  },
  shape: {
    type: String,
    default: "circle",
  },
  alt: {
    type: String,
  },
  color: {
    type: String,
  },
  backgroundColor: {
    type: String,
  },
});

const emits = defineEmits(["error"]);

const hasLoadError = ref(false);
const { size, shape, color, backgroundColor } = props;
const classes = computed(() => {
  return {
    [`jw-avatar-${size}`]: typeof size === "string",
    [`jw-avatar-${shape}`]: shape,
  };
});

const styles = computed(() => {
  return {
    width: typeof size === "number" ? `${size}px` : "",
    height: typeof size === "number" ? `${size}px` : "",
    color,
    backgroundColor,
  };
});

// need reset hasLoadError to false if src changed
watch(
  () => props.src,
  () => (hasLoadError.value = false)
);

const handleError = (e: Event) => {
  hasLoadError.value = true;
  emits("error", e);
};
</script>
<script lang="ts">
export default {
  name: "JwAvatar",
};
</script>

<style lang="scss">
$font-size: 14px;
$small-size: 24px;
$default-size: 40px;
$large-size: 56px;

$white: #fff;
$default-background: #c0c4cc;
.jw-avatar {
  background-color: $default-background;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: $font-size;
  color: $white;
  > img {
    width: 100%;
    height: 100%;
  }
}

.jw-avatar-small {
  width: $small-size;
  height: $small-size;
}

.jw-avatar-default {
  width: $default-size;
  height: $default-size;
}

.jw-avatar-large {
  width: $large-size;
  height: $large-size;
}

.jw-avatar-circle {
  /* background-color: transparent; */
  border-radius: 100%;
  > img {
    border-radius: 100%;
  }
}

.jw-avatar-square {
  /* background-color: transparent; */
  border-radius: 3px;
  > img {
    border-radius: 3px;
  }
}
</style>
