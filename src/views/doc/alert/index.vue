<template>
  <div class="alert-doc-wrapper">
    <h1>提示 Alert</h1>
    <p>用于页面中展示重要的提示信息。</p>
    <div class="preview-wrapper">
      <Preview :component="AlertPreview1" />
      <Preview :component="AlertPreview2" />
      <Preview :component="AlertPreview3" />
      <Preview :component="AlertPreview4" />
      <Preview :component="AlertPreview5" />
      <Doc title="属性" type="prop" :body="propsDoc" />
      <Doc title="事件" type="event" :body="eventDoc" />
      <Doc title="插槽" type="slot" :body="slotDoc" />
      <PrevAndNext
        :prev="{ path: '/doc/switch', name: '开关 Switch' }"
        :next="{ path: '/doc/dialog', name: '对话框 Dialog' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import AlertPreview1 from "./AlertPreview1.preview.vue";
import AlertPreview2 from "./AlertPreview2.preview.vue";
import AlertPreview3 from "./AlertPreview3.preview.vue";
import AlertPreview4 from "./AlertPreview4.preview.vue";
import AlertPreview5 from "./AlertPreview5.preview.vue";
import PrevAndNext from "@/components/PrevAndNext.vue";
import Doc from "@/components/Doc.vue";

const propsDoc = [
  ["title", "标题", "	string", "-", "-"],
  [
    "type",
    "类型",
    "string",
    "default / info / success / warning / error",
    "default",
  ],
  ["content", "辅助性文字", "string", "-", "-"],
  ["closable", "是否可关闭", "boolean", "-", "false"],
  ["center", "文字是否居中", "boolean", "-", "false"],
  ["show-icon", "是否显示图标", "boolean", "-", "false"],
];
const eventDoc = [["close", "	关闭 Alert 时触发的事件", "-"]];
const slotDoc = [
  ["default", "辅助性文字"],
  ["icon", "图标"],
  ["title", "标题"],
];
</script>

<style lang="scss">
.alert-doc-wrapper {
  .jw-alert {
    margin-bottom: 12px;
  }
}
</style>
