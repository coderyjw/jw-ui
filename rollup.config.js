// 为了保证版本一致，请复制我的 package.json 到你的项目，并把 name 改成你的库名
import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass';
import { terser } from "rollup-plugin-terser"
import alias from '@rollup/plugin-alias'
import path from "path";
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/lib/index.ts',
  output: [{
    globals: {
      vue: 'Vue'
    },
    name: 'Yjw-ui',
    file: 'dist/lib/yjw-ui.js',
    format: 'umd',
    plugins: [terser()]
  }, {
    name: 'Yjw-ui',
    file: 'dist/lib/yjw-ui.esm.js',
    format: 'es',
    plugins: [terser()]
  }],
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015' 
    }),
    vue({
      include: /\.vue$/,
    }),
    alias({
      entries: [
        {
          find: '@', // 别名名称，作为依赖项目需要使用项目名
          replacement: path.resolve(__dirname, 'src'), 
          customResolver: resolve({
            extensions: ['.js', '.jsx', '.vue', '.sass', '.scss']
          })
        }
      ]
    }),
  ],
}