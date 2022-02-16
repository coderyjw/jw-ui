<template>
  <div class="backtop-doc-wrapper">
    <h1>回到顶部 Backtop</h1>
    <p>返回页面顶部的操作按钮</p>
    <div class="preview-wrapper">
      <Preview :component="BacktopPreview1" />
      <Preview :component="BacktopPreview2" />
      <Doc title="属性" type="prop" :body="propsDoc" />
      <Doc title="事件" type="event" :body="eventDoc" />
      <Doc title="插槽" type="slot" :body="slotDoc" />
      <PrevAndNext
        :prev="{ path: '/doc/affix', name: '固钉 Affix' }"
        :next="{ path: '/doc/breadcrumb', name: '面包屑 Breadcrumb' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import BacktopPreview1 from "./BacktopPreview1.preview.vue";
import BacktopPreview2 from "./BacktopPreview2.preview.vue";
import PrevAndNext from "@/components/PrevAndNext.vue";
import Doc from "@/components/Doc.vue";
const propsDoc = [
  ["target", "触发滚动的对象	", "	string	", "-", "document.documentElement"],
  ["visibility-height", "滚动高度达到此参数值才出现", "number", "-", "200"],
  ["right", "控制其显示位置，距离页面右边距", "number", "-", "40"],
  ["bottom", "控制其显示位置，距离页面底部距离", "number", "-", "40"],
];
const eventDoc = [["click", "点击按钮触发的事件	", "Event"]];
const slotDoc = [["default", "自定义默认内容"]];
</script>

<style scoped></style>
