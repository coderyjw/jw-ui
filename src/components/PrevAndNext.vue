<template>
  <div class="next-and-prev-link">
    <div v-if="prev.name" class="pre" @click="handlePrevClick">
      <svg
        v-if="prev.name"
        class="icon"
        aria-hidden="true"
        style="transform: rotate(180deg)"
      >
        <use xlink:href="#icon-arrow-right"></use>
      </svg>
      <span> {{ prev.name }}</span>
    </div>
    <div class="next" @click="handleNextClick">
      <span v-if="next.name">{{ next.name }}</span>
      <svg v-if="next.name" class="icon" aria-hidden="true">
        <use xlink:href="#icon-arrow-right"></use>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const props = defineProps({
  prev: {
    type: Object,
    default: Object,
  },
  next: {
    type: Object,
    default: Object,
  },
});

const router = useRouter();

const handlePrevClick = () => {
  router.push({
    path: props.prev.path,
  });
};

const handleNextClick = () => {
  router.push({
    path: props.next.path,
  });
};
</script>

<style scoped>
.next-and-prev-link {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  color: #36ad6a;
  cursor: pointer;
}
</style>
