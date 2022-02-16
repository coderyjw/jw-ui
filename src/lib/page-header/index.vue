<template>
  <div class="jw-page-header">
    <div class="jw-page-header-left">
      <jw-icon class="jw-page-header-icon" :size="18" @click="handleBack">
        <component :is="icon" />
      </jw-icon>
      <div class="jw-page-header-title">{{ title }}</div>
    </div>
    <jw-divider direction="vertical" />
    <div class="jw-page-header-content">{{ content }}</div>
  </div>
</template>

<script setup lang="ts">
import { ArrowBack } from "@vicons/ionicons5";
const props = defineProps({
  icon: {
    type: Object,
    default: ArrowBack,
  },
  title: {
    type: String,
    default: "Back",
  },
  content: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["back"]);

const handleBack = () => {
  emits('back')
}
</script>
<script lang="ts">
export default {
  name: "jwPageHeader",
};
</script>

<style lang="scss">
.jw-page-header {
  display: flex;
  line-height: 24px;
  height: 24px;

  align-items: center;
  font-size: 18px;

  .jw-page-header-left {
    height: 100%;
    display: flex;
    cursor: pointer;
    margin-right: 10px;
    position: relative;

    .jw-page-header-icon {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }

  .jw-page-header-content {
    margin-left: 10px;
    font-size: 18px;
  }
}
</style>
