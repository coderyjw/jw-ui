<template>
  <div class="topnav">
    <div class="ui-logo">
      <img src="" alt="" />
      <span>JW UI</span>
    </div>
    <div class="right-wrapper">
      <router-link to="/">首页</router-link>
      <router-link to="/doc">文档</router-link>
    </div>
  </div>
</template>

<style lang="scss">
.topnav {
  height: 77px;
  background-color: #fff;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px rgb(239, 239, 245);

  .ui-logo {
    span {
      color: rgb(31, 34, 37);
      cursor: pointer;
      font-size: 18px;
      line-height: 28.8px;
    }
  }
}
</style>
