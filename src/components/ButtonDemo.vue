<template>
  <div>
    <h1>基础</h1>
    <div class="example-showcase">
      <Button theme="default" @click="hello" />&nbsp;&nbsp;
      <Button theme="primary" />&nbsp;&nbsp; <Button theme="info" />&nbsp;&nbsp;
      <Button theme="success" />&nbsp;&nbsp;
      <Button theme="warning" />&nbsp;&nbsp;
      <Button theme="error" />&nbsp;&nbsp;
    </div>
  </div>
  <div>
    <h1>虚线按钮</h1>
    <div class="example-showcase">
      <Button theme="default" dashed />&nbsp;&nbsp;
      <Button theme="primary" dashed />&nbsp;&nbsp;
      <Button theme="info" dashed />&nbsp;&nbsp;
      <Button theme="success" dashed />&nbsp;&nbsp;
      <Button theme="warning" dashed />&nbsp;&nbsp;
      <Button theme="error" dashed />&nbsp;&nbsp;
    </div>
  </div>
  <div>
    <h1>圆角按钮</h1>
    <div class="example-showcase">
      <Button theme="default" round />&nbsp;&nbsp;
      <Button theme="primary" round />&nbsp;&nbsp;
      <Button theme="info" round />&nbsp;&nbsp;
      <Button theme="success" round />&nbsp;&nbsp;
      <Button theme="warning" round />&nbsp;&nbsp;
      <Button theme="error" round />&nbsp;&nbsp;
    </div>
  </div>
  <div>
    <h1>尺寸</h1>
    <div class="example-showcase">
      <Button theme="primary" size="large" />&nbsp;&nbsp;
      <Button theme="primary" size="default" />&nbsp;&nbsp;
      <Button theme="primary" size="small" />&nbsp;&nbsp;
    </div>
  </div>
  <div>
    <h1>禁用</h1>
    <div class="example-showcase">
      <Button theme="primary" />&nbsp;&nbsp;
      <Button theme="primary" disabled />&nbsp;&nbsp;
      <Button theme="info" />&nbsp;&nbsp;
      <Button theme="info" disabled />&nbsp;&nbsp;
      <Button theme="success" />&nbsp;&nbsp;
      <Button theme="success" disabled />&nbsp;&nbsp;
      <Button theme="warning" />&nbsp;&nbsp;
      <Button theme="warning" disabled />&nbsp;&nbsp;
      <Button theme="error" />&nbsp;&nbsp;
      <Button theme="error" disabled />&nbsp;&nbsp;
    </div>
  </div>
  <div>
    <h1>加载</h1>
    <div class="example-showcase">
      <Button theme="default" loading>loading</Button>&nbsp;&nbsp;
      <Button theme="primary" loading>loading</Button>&nbsp;&nbsp;
      <Button theme="info" loading>loading</Button>&nbsp;&nbsp;
      <Button theme="success" loading>loading</Button>&nbsp;&nbsp;
      <Button theme="warning" loading>loading</Button>&nbsp;&nbsp;
      <Button theme="error" loading>loading</Button>&nbsp;&nbsp;
      <Button theme="primary">loaded</Button>&nbsp;&nbsp;
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "@/lib/button/index";

const hello = () => {
  console.log("hello");
};
</script>

<style scoped>
.example-showcase {
  display: flex;
  align-items: center;
}
</style>
