<template>
  <div class="topnav">
    <a class="ui-logo" href="/home">
      <img src="" alt="" />
      <span>JW UI</span>
    </a>
    <div class="right-wrapper">
      <router-link exact to="/home">首页</router-link>
      <router-link to="/doc">文档</router-link>
      <a href="https://github.com/coderyjw/jw-ui" target="_blank">GitHub</a>
      <span>1.0.0</span>
    </div>
  </div>
</template>

<style lang="scss">
.topnav {
  height: 63px;
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
    &:hover {
      border-bottom: none;
    }
  }

  .right-wrapper {
    a {
      display: inline-block;
      text-decoration: none;
      padding: 0 20px;
      height: 63px;
      line-height: 63px;

      &:hover,
      &:active {
        color: rgb(24, 160, 88);
      }
    }

    .router-link-active {
      color: rgb(24, 160, 88);
      border-bottom: 1px solid;
    }

    span {
      color: rgb(51, 54, 57);
      font-size: 14px;
    }
  }
}
</style>
