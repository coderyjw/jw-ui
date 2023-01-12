- # Jw-ui
  
  一个 vue3 组件库, 使用 TypeScript，有点意思
  
  [文档地址](https://coderyjw.github.io/jw-ui-website/index.html#/home)

- ## 运行步骤
  
  1. 运行 yarn
  2. 运行 yarn dev
  3. 打开 [http://127.0.0.1:3000](http://127.0.0.1:3000/)
  
  ## 官网打包步骤
  
  1. 运行 yarn
  2. 运行 yarn build
  3. 得到的 dist 目录就是官网源代码
  4. 编辑并运行 sh deploy.sh 就可以上传到 Github 或码云等支持 Pages 功能的平台
  
  ## 库文件打包步骤
  
  1. 运行 rollup -c
  2. 得到的 dist/lib 目录就是编译后的库文件所在目录
