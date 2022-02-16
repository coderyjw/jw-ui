<template>
  <div class="checkbox-doc-wrapper">
    <h1>Checkbox 单选框</h1>
    <p>一组备选项中进行多选</p>
    <div class="preview-wrapper">
      <Preview :component="CheckboxPreview1" />
      <Preview :component="CheckboxPreview2" />
      <Preview :component="CheckboxPreview3" />
      <Preview :component="CheckboxPreview4" />
      <Preview :component="CheckboxPreview5" />

      <Doc title="Checkbox 属性" type="prop" :body="checkboxPropDoc" />
      <Doc title="Checkbox 事件" type="event" :body="checkboxEventDoc" />
      <Doc title="Checkbox 插槽" type="slot" :body="checkboxSlotDoc" />

      <Doc
        title="Checkbox-group 属性"
        type="prop"
        :body="checkboxGroupPropDoc"
      />
      <Doc
        title="Checkbox-group 事件"
        type="event"
        :body="checkboxGroupEventDoc"
      />
      <Doc
        title="Checkbox-group 插槽"
        type="slot"
        :body="checkboxGroupSlotDoc"
        :header="['插槽名', '说明', '子标签']"
      />

      <PrevAndNext
        :prev="{ path: '/doc/tag', name: 'Tag 标签' }"
        :next="{ path: '/doc/input', name: '输入框 Input' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import CheckboxPreview1 from "./CheckboxPreview1.preview.vue";
import CheckboxPreview2 from "./CheckboxPreview2.preview.vue";
import CheckboxPreview3 from "./CheckboxPreview3.preview.vue";
import CheckboxPreview4 from "./CheckboxPreview4.preview.vue";
import CheckboxPreview5 from "./CheckboxPreview5.preview.vue";
import PrevAndNext from "@/components/PrevAndNext.vue";
import Doc from "@/components/Doc.vue";

const checkboxPropDoc = [
  ["v-model", "选中项绑定值", "string / number / boolean", "-", "-"],
  ["label", "单选框对应的值", "string / number / boolean", "-", "-"],
  ["disabled", "是否禁用单选框", "boolean", "-", "false"],
  ["border", "是否显示边框", "boolean", "-", "false"],
  ["size", "	Checkbox 的尺寸", "string", "large / default /small", "-"],
];

const checkboxEventDoc = [
  ["change", "绑定值变化时触发的事件", "选中的 Checkbox label 值"],
  ,
];
const checkboxSlotDoc = [["default", "自定义默认内容"]];

const checkboxGroupPropDoc = [
  ["v-model", "绑定值", "array", "-", "[]"],
  ["disabled", "是否禁用", "boolean", "-", "false"],
  ["border", "是否显示边框", "boolean", "-", "false"],
  ["size", "多选框组尺寸", "string", "large / default /small", "-"],
];

const checkboxGroupEventDoc = [
  ["change", "当绑定值变化时触发的事件", "value"],
  ,
];
const checkboxGroupSlotDoc = [["default", "自定义默认内容", "Checkbox"]];
</script>

<style lang="scss">
.checkbox-doc-wrapper {
  .jw-checkbox {
    margin-right: 10px;
  }
}
</style>
