<template>
  <div class="affix-doc-wrapper">
    <h1>固钉 Affix</h1>
    <p>将页面元素固定在特定可视区域。</p>
    <div class="preview-wrapper">
      <Preview :component="AffixPreview1" />
      <Preview :component="AffixPreview2" />
      <Preview :component="AffixPreview3" />
      <Doc title="属性" type="prop" :body="propsDoc" />
      <Doc title="事件" type="event" :body="eventDoc" />
      <Doc title="方法" type="methods" :body="methodsDoc" />
      <PrevAndNext
        :prev="{ path: '/doc/message', name: '信息 Message' }"
        :next="{ path: '/doc/backtop', name: '回到顶部 Backtop' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import AffixPreview1 from "./AffixPreview1.preview.vue";
import AffixPreview2 from "./AffixPreview2.preview.vue";
import AffixPreview3 from "./AffixPreview3.preview.vue";
import PrevAndNext from "@/components/PrevAndNext.vue";
import Doc from "@/components/Doc.vue";

const propsDoc = [
  ["offset", "偏移距离", "number", "-", "0"],
  ["position", "固钉位置", "string", "top / bottom", "top"],
  ["target", "指定容器（CSS 选择器）", "string", "-", "-"],
  ["z-index", "固钉层级", "	number", "-", "100"],
];
const eventDoc = [
  ["change", "固钉状态改变时触发的事件", "(value: boolean)"],
  ["scroll", "滚动时触发的事件	", "Event"],
];
const methodsDoc = [["update", "手动更新固钉状态", "-"]];
</script>

<style lang="scss">
.jw-affix {
  margin-right: 8px;
}
</style>
