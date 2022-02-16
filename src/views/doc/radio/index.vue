<template>
  <div class="radio-doc-wrapper">
    <h1>Radio 单选框</h1>
    <p>在一组备选项中进行单选</p>
    <div class="preview-wrapper">
      <Preview :component="RaidoPreview1" />
      <Preview :component="RaidoPreview2" />
      <Preview :component="RaidoPreview3" />
      <Preview :component="RaidoPreview4" />
      <Preview :component="RaidoPreview5" />
      <Doc title="Radio 属性" type="prop" :body="radioPropDoc" />
      <Doc title="Radio 事件" type="event" :body="radioEventDoc" />
      <Doc title="Radio 插槽" type="slot" :body="radioSlotDoc" />

      <Doc title="Radio-group 属性" type="prop" :body="radioGroupPropDoc" />
      <Doc title="Radio-group 事件" type="event" :body="radioGroupEventDoc" />
      <Doc
        title="Radio-group 插槽"
        type="slot"
        :body="radioGroupSlotDoc"
        :header="['插槽名', '说明', '子标签']"
      />

      <PrevAndNext
        :prev="{ path: '/doc/input', name: 'Input 输入框' }"
        :next="{ path: '/doc/select', name: '选择器 Select' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import RaidoPreview1 from "./RaidoPreview1.preview.vue";
import RaidoPreview2 from "./RaidoPreview2.preview.vue";
import RaidoPreview3 from "./RaidoPreview3.preview.vue";
import RaidoPreview4 from "./RaidoPreview4.preview.vue";
import RaidoPreview5 from "./RaidoPreview5.preview.vue";
import PrevAndNext from "@/components/PrevAndNext.vue";
import Doc from "@/components/Doc.vue";

const radioPropDoc = [
  ["v-model", "选中项绑定值", "string / number / boolean", "-", "-"],
  ["label", "多选框对应的值", "string / number / boolean", "-", "-"],
  ["disabled", "是否禁用单选框", "boolean", "-", "false"],
  ["border", "是否显示边框", "boolean", "-", "false"],
  ["size", "	Radio 的尺寸", "string", "large / default /small", "-"],
  [
    "indeterminate",
    "设置 indeterminate 状态，只负责样式控制",
    "boolean",
    "",
    "false",
  ],
];

const radioEventDoc = [["change", "当绑定值变化时触发的事件", "value"], ,];
const radioSlotDoc = [["default", "自定义默认内容"]];

const radioGroupPropDoc = [
  ["v-model", "绑定值", "string / number / boolean", "-", "-"],
  ["disabled", "是否禁用", "boolean", "-", "false"],
  ["border", "是否显示边框", "boolean", "-", "false"],
  ["size", "单选框组尺寸", "string", "large / default /small", "-"],
];

const radioGroupEventDoc = [
  ["change", "绑定值变化时触发的事件", "选中的 Radio label 值"],
  ,
];
const radioGroupSlotDoc = [["default", "自定义默认内容", "Radio"]];
</script>

<style scoped></style>
