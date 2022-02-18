<template>
  <div class="message-doc-wrapper">
    <h1>消息提示</h1>
    <p>（一般是）从浏览器顶部降下来的神谕。</p>
    <div class="preview-wrapper">
      <Preview :component="MessagePreview1" />
      <Preview :component="MessagePreview2" />
      <Preview :component="MessagePreview3" />
      <Preview :component="MessagePreview4" />
      <Doc title="配置项" type="prop" :body="propDoc" />
      <Doc title="方法" type="methods" :body="methodsDoc" />
      <PrevAndNext
        :prev="{ path: '/doc/dialog', name: 'Dialog 对话框' }"
        :next="{ path: '/doc/Affix', name: '固钉 Affix' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import MessagePreview1 from "./MessagePreview1.preview.vue";
import MessagePreview2 from "./MessagePreview2.preview.vue";
import MessagePreview3 from "./MessagePreview3.preview.vue";
import MessagePreview4 from "./MessagePreview4.preview.vue";
import PrevAndNext from "@/components/PrevAndNext.vue";
import Doc from "@/components/Doc.vue";

const propDoc = [
  ["message", "消息文字", "string / VNode", "-", "-"],
  ["type", "消息类型", "string", "success / warning / info / error", "info"],
  [
    "duration",
    "显示时间，单位为毫秒。 设为 0 则不会自动关闭",
    "number",
    "-",
    "3000",
  ],
  ["show-close", "是否显示关闭按钮", "boolean", "-", "false"],
  ["center", "文字是否居中", "boolean", "-", "false"],
  [
    "on-close",
    "关闭时的回调函数, 参数为被关闭的 message 实例",
    "function",
    "-",
    "-",
  ],
  ["offset", "Message 距离窗口顶部的偏移量", "number", "-", "20"],
  [
    "appendTo",
    "设置组件的根元素",
    "string / HTMLElement",
    "-",
    "document.body",
  ],
];

const methodsDoc = [["close", "关闭当前的 Message", "-"]];
</script>

<style lang="scss">
.message-doc-wrapper {
  .jw-button {
    margin-right: 8px;
  }
}
</style>
