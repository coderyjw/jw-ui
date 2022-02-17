<template>
  <h1>Switch 开关</h1>
  <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
  <div class="preview-wrapper">
    <Preview :component="SwitchPreview1" />
    <Preview :component="SwitchPreview2" />
    <Preview :component="SwitchPreview3" />
    <Doc title="属性" type="prop" :body="propDoc" />
    <PrevAndNext
      :prev="{ path: '/doc/select', name: 'Select 选择器' }"
      :next="{ path: '/doc/alert', name: '提示 Alert' }"
    />
  </div>
</template>

<script setup lang="ts">
import PrevAndNext from "@/components/PrevAndNext.vue";
import Doc from "@/components/Doc.vue";
import Preview from "@/components/Preview.vue";
import SwitchPreview1 from "./SwitchPreview1.preview.vue";
import SwitchPreview2 from "./SwitchPreview2.preview.vue";
import SwitchPreview3 from "./SwitchPreview3.preview.vue";

const propDoc = [
  ["v-model", "绑定值", "boolean", "-", "false"],
  ["active-color", "在开启状态时的背景颜色", "string", "-", "#18a058"],
  ["inactive-color", "在关闭状态时的背景颜色", "string", "-", "#dbdbdb"],
  ["disabled", "是否禁用", "boolean", "-", "false"],
  ["size", "大小", "string", "small / default / large", "default"],
];
</script>

<style lang="scss">
.jw-switch {
  margin-right: 8px;
}
</style>
