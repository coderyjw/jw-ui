<template>
  <div class="input-doc-wrapper">
    <h1>Input 输入框</h1>
    <p>通过鼠标或键盘输入字符</p>
    <div class="preview-wrapper">
      <Preview :component="InputPreview1" />
      <Preview :component="InputPreview2" />
      <Preview :component="InputPreview3" />
      <Preview :component="InputPreview4" />
      <Preview :component="InputPreview5" />
      <Preview :component="InputPreview6" />
      <Preview :component="InputPreview7" />
      <Doc title="Input 属性" type="prop" :body="propDoc" />
      <Doc title="Input 事件" type="event" :body="eventDoc" />
      <Doc title="Input 方法" type="methods" :body="methodsDoc" />
      <PrevAndNext
        :prev="{ path: '/doc/checkbox', name: '复选框 Checkbox' }"
        :next="{ path: '/doc/radio', name: '单选框 Radio' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import InputPreview1 from "./InputPreview1.preview.vue";
import InputPreview2 from "./InputPreview2.preview.vue";
import InputPreview3 from "./InputPreview3.preview.vue";
import InputPreview4 from "./InputPreview4.preview.vue";
import InputPreview5 from "./InputPreview5.preview.vue";
import InputPreview6 from "./InputPreview6.preview.vue";
import InputPreview7 from "./InputPreview7.preview.vue";
import Preview from "@/components/Preview.vue";
import PrevAndNext from "@/components/PrevAndNext.vue";
import Doc from "@/components/Doc.vue";

const propDoc = [
  [
    "type",
    "类型",
    "string",
    "text，textarea 和其他 原生 input 的 type 值",
    "text",
  ],
  [" v-model", "绑定值", "string / number", "-", "-"],
  ["placeholder", "输入框占位文本", "string", "-", "-"],
  ["clearable", "是否可清空", "boolean", "-", "false"],
  ["disabled", "	禁用", "boolean", "-", "false"],
  ["prefix-icon", "输入框头部图标", "Component", "-", "-"],
  ["suffix-icon", "输入框尾部图标", "Component", "-", "-"],
  ["readonly", "原生属性，是否只读", "	boolean", "-", "false"],
];

const eventDoc = [
  ["input", "在 Input 值改变时触发", "(value: string / number)"],
  ["clear", "在点击由 clearable 属性生成的清空按钮时触发", "-"],
  ["blur", "在 Input 失去焦点时触发", "(event: Event)"],
  ["focus", "在 Input 获得焦点时触发", "(event: Event)"],
];

const methodsDoc = [
  ["input", "使 input 获取焦点", "-"],
  ["blur", "使 input 失去焦点", "-"],
  ["select", "选中 input 中的文字", "-"],
];
</script>

<style lang="scss">
.input-doc-wrapper {
  .jw-input {
    margin-right: 8px;
    margin-bottom: 8px;
  }
  .jw-button {
    margin-right: 8px;
    margin-bottom: 8px;
  }
}
</style>
