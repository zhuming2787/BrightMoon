import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import { resolve } from "path";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import os from 'os';
import path from "path";

const userHome = os.homedir();

// https://vite.dev/config/
export default defineConfig({
  base: './',
  root: process.cwd(),
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "./src"),
      },
    ],
  },
  plugins: [
    vue(), // 仅保留Vue插件
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: true,
      dirs: "src/components",
      resolvers: [ElementPlusResolver()], // ElementPlus按需加载
    }),
  ],
  server:{
    port : 8080,
    host: "0.0.0.0",
    https:false,
    open:true,
    fs: {
      allow: [
        process.cwd(), // 项目根目录（默认）
        resolve(userHome, 'node_modules'), // 加入用户目录下的 node_modules
      ]
    },
    proxy:{
      "/api":{
        target: "http://localhost:8888",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  }
})