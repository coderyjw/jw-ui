<script setup>
import Topnav from "@/components/Topnav";
</script>

<template>
  <Topnav />

  <div class="banner">
    <h1>JW UI</h1>
    <p>一个 Vue 3 组件库</p>
    <div class="actions">
      <a href="https://github.com">GitHub</a>
      <router-link to="/doc">开始</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  h1 {
    color: rgb(31, 34, 37);
    font-size: 80px;
    font-weight: 500;
    margin-bottom: 18px;
  }

  p {
    color: rgb(51, 54, 57);
    font-size: 16px;
    height: 25px;
    line-height: 25px;

    &:last-of-type {
      margin-bottom: 20px;
    }
  }

  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      padding: 0 8px;
    }
  }
}
</style>
