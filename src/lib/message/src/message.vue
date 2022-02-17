<template>
  <transition
    :duration="300"
    leave-active-class="animate__zoomOut"
    enter-active-class="animate__zoomIn"
    @before-leave="onClose"
    @after-leave="$emit('destory')"
  >
    <div
      class="jw-message animate__animated"
      v-show="visible"
      :style="customStyle"
      :id="id"
    >
      1 + 1 = ?
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { messageProps, messageEmits } from "./message";
const props = defineProps(messageProps);
const emits = defineEmits(messageEmits);

const visible = ref(false);
const customStyle = computed(() => ({
  top: `${props.offset}px`,
  zIndex: props.zIndex,
}));

function startTimer() {
  if (props.duration > 0) {
    setTimeout(() => {
      if (visible.value) close();
    }, props.duration);
  }
}

function close() {
  visible.value = false;
}

onMounted(() => {
  startTimer();
  visible.value = true;
});
</script>
<script lang="ts">
export default {
  name: "JwMessage",
};
</script>

<style lang="scss">
.jw-message {
  --jw-bezier: cubic-bezier(0.4, 0, 0.2, 1);
  position: fixed;
  z-index: 1000;
  left: calc(50% - 190px);
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 15px 15px 15px 20px;
  flex-wrap: nowrap;
  overflow: hidden;
  width: 380px;
  color: rgb(51, 54, 57);
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  transition: color 0.3s var(--jw-bezier), box-shadow 0.3s var(--jw-bezier),
    background-color 0.3s var(--jw-bezier), opacity 0.3s var(--jw-bezier),
    transform 0.3s var(--jw-bezier), margin-bottom 0.3s var(--jw-bezier),
    top 0.3s var(--jw-bezier);
}
</style>
