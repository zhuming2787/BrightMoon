
export const contentList = [
  {
    id: 1,
    type: 'article',
    title: "Vue3 + Pinia 企业级博客系统从0到1搭建",
    author_name: "前端老周",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    summary: "本文详细讲解Vue3+Pinia搭建企业级博客系统的全流程。",
    meta: {
      category_name: "前端开发",
      view_count: 5892,
      like_count: 326
    },
    payload: {
      content: `### 一、项目初始化
使用 Vite 快速初始化 Vue3 项目：
\`\`\`bash
npm create vite@latest blog-system -- --template vue
cd blog-system
npm install
\`\`\`
### 二、Pinia 状态管理配置
安装Pinia并创建根存储，实现全局状态共享...`
    }
  },
  {
    id: 2,
    type: 'pixel',
    title: "小猫",
    author_name: "宫崎骏",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {
      category_name: "像素艺术",
      view_count: 589,
      like_count: 326
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff",
        "#ffffff", "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000", "#ffffff",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#ffffff", "#000000", "#ffccaa", "#000000", "#000000", "#ffccaa", "#000000", "#ffffff",
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff",
      ]
    }
  },
  {
    id: 3,
    type: "image",
    title: "Moon",
    author_name: "Pigming",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {},
    payload: {
      url: "https://th.bing.com/th/id/R.987f582c510be58755c4933cda68d525?rik=C0D21hJDYvXosw&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1305%2f16%2fc4%2f20990657_1368686545122.jpg&ehk=netN2qzcCVS4ALUQfDOwxAwFcy41oxC%2b0xTFvOYy5ds%3d&risl=&pid=ImgRaw&r=0",
      size: "2560 * 1600",
    }
  },

  // ========== 新增 Article 类型（3条） ==========
  {
    id: 4,
    type: 'article',
    title: "Element Plus 按需引入与主题定制实战",
    author_name: "UI小枫",
    created_at: "2025-12-03 09:15:00",
    updated_at: "2025-12-06 11:40:00",
    summary: "详解Element Plus的按需引入配置方法，以及通过SCSS变量实现主题色自定义的技巧。",
    meta: {
      category_name: "UI组件",
      view_count: 3258,
      like_count: 189
    },
    payload: {
      content: `### 一、按需引入配置
使用unplugin-vue-components和unplugin-auto-import实现自动按需引入：
\`\`\`javascript
// vite.config.js
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] })
  ]
})
\`\`\`
### 二、主题定制
创建styles/element/index.scss覆盖默认变量：
\`\`\`scss
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    primary: #409eff,
    success: #67c23a
  )
);
\`\`\``
    }
  },
  {
    id: 5,
    type: 'article',
    title: "Vite 性能优化：从打包体积到热更新速度",
    author_name: "性能调优师",
    created_at: "2025-12-05 14:20:00",
    updated_at: "2025-12-07 09:35:00",
    summary: "分享Vite项目的核心优化手段，包括依赖预构建、代码分割、图片压缩等实用技巧。",
    meta: {
      category_name: "工程化",
      view_count: 4120,
      like_count: 256
    },
    payload: {
      content: `### 一、依赖预构建优化
Vite默认会预构建第三方依赖，通过optimizeDeps配置自定义预构建范围：
\`\`\`javascript
// vite.config.js
export default defineConfig({
  optimizeDeps: {
    include: ['axios', 'lodash-es'],
    exclude: ['vue']
  }
})
\`\`\`
### 二、打包体积优化
1. 使用rollup-plugin-visualizer分析包体积：
\`\`\`bash
npm i rollup-plugin-visualizer -D
\`\`\`
2. 开启图片压缩：安装vite-plugin-imagemin插件自动压缩图片。`
    }
  },
  {
    id: 6,
    type: 'article',
    title: "Vue3 组合式API与选项式API的对比与迁移指南",
    author_name: "Vue爱好者",
    created_at: "2025-12-07 16:00:00",
    updated_at: "2025-12-08 13:10:00",
    summary: "对比组合式API和选项式API的优劣，以及如何将老项目从选项式API迁移到组合式API。",
    meta: {
      category_name: "Vue进阶",
      view_count: 6789,
      like_count: 412
    },
    payload: {
      content: `### 一、API 设计理念差异
- 选项式API：采用面向对象的组织方式，按data、methods、computed等选项划分逻辑。
- 组合式API：采用函数式的逻辑复用方式，按业务逻辑聚合代码。

### 二、迁移步骤
1. 抽离data为ref/reactive响应式数据；
2. 抽离methods为普通函数，配合setup语法糖使用；
3. 抽离生命周期钩子，如created替换为setup内直接执行代码。

### 三、迁移示例
\`\`\`vue
<!-- 选项式API -->
<script>
export default {
  data() { return { count: 0 } },
  methods: { add() { this.count++ } }
}
</script>

<!-- 组合式API -->
<script setup>
import { ref } from 'vue'
const count = ref(0)
const add = () => count.value++
</script>
\`\`\``
    }
  },

  // ========== 新增 Pixel 类型（3条） ==========
  {
    id: 7,
    type: 'pixel',
    title: "小狗",
    author_name: "像素小子",
    created_at: "2025-12-02 11:25:00",
    updated_at: "2025-12-04 17:10:00",
    meta: {
      category_name: "像素艺术",
      view_count: 456,
      like_count: 218
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff", "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff",
        "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0", "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0",
        "#e0e0e0", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#e0e0e0",
        "#ffffff", "#8b4513", "#000000", "#8b4513", "#8b4513", "#000000", "#8b4513", "#ffffff",
        "#ffffff", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#ffffff",
        "#e0e0e0", "#ffffff", "#8b4513", "#ffffff", "#ffffff", "#8b4513", "#ffffff", "#e0e0e0",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 8,
    type: 'pixel',
    title: "爱心",
    author_name: "浪漫像素",
    created_at: "2025-12-04 15:30:00",
    updated_at: "2025-12-06 18:25:00",
    meta: {
      category_name: "像素艺术",
      view_count: 789,
      like_count: 520
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b",
        "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff",
        "#ffffff", "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 9,
    type: 'pixel',
    title: "星星",
    author_name: "星空画师",
    created_at: "2025-12-06 10:00:00",
    updated_at: "2025-12-08 12:15:00",
    meta: {
      category_name: "像素艺术",
      view_count: 623,
      like_count: 289
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#000000", "#000000", "#ffff00", "#ffff00", "#000000", "#000000", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000"
      ]
    }
  },

  // ========== 新增 Image 类型（3条） ==========
  {
    id: 10,
    type: "image",
    title: "极光",
    author_name: "摄影师大鹏",
    created_at: "2025-12-02 14:40:00",
    updated_at: "2025-12-05 16:25:00",
    meta: {
      category_name: "自然风光",
      view_count: 2890,
      like_count: 456
    },
    payload: {
      url: "https://img1.baidu.com/it/u=1279821252,3873242399&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3840 * 2160",
    }
  },
  {
    id: 11,
    type: "image",
    title: "樱花",
    author_name: "日系摄影师",
    created_at: "2025-12-04 09:50:00",
    updated_at: "2025-12-07 11:30:00",
    meta: {
      category_name: "花卉摄影",
      view_count: 3560,
      like_count: 621
    },
    payload: {
      url: "https://img2.baidu.com/it/u=2222967939,4210231275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "2400 * 1600",
    }
  },
  {
    id: 12,
    type: "image",
    title: "城市夜景",
    author_name: "城市探索者",
    created_at: "2025-12-08 18:10:00",
    updated_at: "2025-12-09 10:20:00",
    meta: {
      category_name: "城市风光",
      view_count: 1980,
      like_count: 312
    },
    payload: {
      url: "https://img0.baidu.com/it/u=3090436529,1829102275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3000 * 2000",
    }
  },
  {
    id: 1,
    type: 'article',
    title: "Vue3 + Pinia 企业级博客系统从0到1搭建",
    author_name: "前端老周",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    summary: "本文详细讲解Vue3+Pinia搭建企业级博客系统的全流程。",
    meta: {
      category_name: "前端开发",
      view_count: 5892,
      like_count: 326
    },
    payload: {
      content: `### 一、项目初始化
使用 Vite 快速初始化 Vue3 项目：
\`\`\`bash
npm create vite@latest blog-system -- --template vue
cd blog-system
npm install
\`\`\`
### 二、Pinia 状态管理配置
安装Pinia并创建根存储，实现全局状态共享...`
    }
  },
  {
    id: 2,
    type: 'pixel',
    title: "小猫",
    author_name: "宫崎骏",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {
      category_name: "像素艺术",
      view_count: 589,
      like_count: 326
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff",
        "#ffffff", "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000", "#ffffff",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#ffffff", "#000000", "#ffccaa", "#000000", "#000000", "#ffccaa", "#000000", "#ffffff",
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 3,
    type: "image",
    title: "Moon",
    author_name: "Pigming",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {},
    payload: {
      url: "https://th.bing.com/th/id/R.987f582c510be58755c4933cda68d525?rik=C0D21hJDYvXosw&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1305%2f16%2fc4%2f20990657_1368686545122.jpg&ehk=netN2qzcCVS4ALUQfDOwxAwFcy41oxC%2b0xTFvOYy5ds%3d&risl=&pid=ImgRaw&r=0",
      size: "2560 * 1600",
    }
  },

  // ========== 新增 Article 类型（3条） ==========
  {
    id: 4,
    type: 'article',
    title: "Element Plus 按需引入与主题定制实战",
    author_name: "UI小枫",
    created_at: "2025-12-03 09:15:00",
    updated_at: "2025-12-06 11:40:00",
    summary: "详解Element Plus的按需引入配置方法，以及通过SCSS变量实现主题色自定义的技巧。",
    meta: {
      category_name: "UI组件",
      view_count: 3258,
      like_count: 189
    },
    payload: {
      content: `### 一、按需引入配置
使用unplugin-vue-components和unplugin-auto-import实现自动按需引入：
\`\`\`javascript
// vite.config.js
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] })
  ]
})
\`\`\`
### 二、主题定制
创建styles/element/index.scss覆盖默认变量：
\`\`\`scss
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    primary: #409eff,
    success: #67c23a
  )
);
\`\`\``
    }
  },
  {
    id: 5,
    type: 'article',
    title: "Vite 性能优化：从打包体积到热更新速度",
    author_name: "性能调优师",
    created_at: "2025-12-05 14:20:00",
    updated_at: "2025-12-07 09:35:00",
    summary: "分享Vite项目的核心优化手段，包括依赖预构建、代码分割、图片压缩等实用技巧。",
    meta: {
      category_name: "工程化",
      view_count: 4120,
      like_count: 256
    },
    payload: {
      content: `### 一、依赖预构建优化
Vite默认会预构建第三方依赖，通过optimizeDeps配置自定义预构建范围：
\`\`\`javascript
// vite.config.js
export default defineConfig({
  optimizeDeps: {
    include: ['axios', 'lodash-es'],
    exclude: ['vue']
  }
})
\`\`\`
### 二、打包体积优化
1. 使用rollup-plugin-visualizer分析包体积：
\`\`\`bash
npm i rollup-plugin-visualizer -D
\`\`\`
2. 开启图片压缩：安装vite-plugin-imagemin插件自动压缩图片。`
    }
  },
  {
    id: 6,
    type: 'article',
    title: "Vue3 组合式API与选项式API的对比与迁移指南",
    author_name: "Vue爱好者",
    created_at: "2025-12-07 16:00:00",
    updated_at: "2025-12-08 13:10:00",
    summary: "对比组合式API和选项式API的优劣，以及如何将老项目从选项式API迁移到组合式API。",
    meta: {
      category_name: "Vue进阶",
      view_count: 6789,
      like_count: 412
    },
    payload: {
      content: `### 一、API 设计理念差异
- 选项式API：采用面向对象的组织方式，按data、methods、computed等选项划分逻辑。
- 组合式API：采用函数式的逻辑复用方式，按业务逻辑聚合代码。

### 二、迁移步骤
1. 抽离data为ref/reactive响应式数据；
2. 抽离methods为普通函数，配合setup语法糖使用；
3. 抽离生命周期钩子，如created替换为setup内直接执行代码。

### 三、迁移示例
\`\`\`vue
<!-- 选项式API -->
<script>
export default {
  data() { return { count: 0 } },
  methods: { add() { this.count++ } }
}
</script>

<!-- 组合式API -->
<script setup>
import { ref } from 'vue'
const count = ref(0)
const add = () => count.value++
</script>
\`\`\``
    }
  },

  // ========== 新增 Pixel 类型（3条） ==========
  {
    id: 7,
    type: 'pixel',
    title: "小狗",
    author_name: "像素小子",
    created_at: "2025-12-02 11:25:00",
    updated_at: "2025-12-04 17:10:00",
    meta: {
      category_name: "像素艺术",
      view_count: 456,
      like_count: 218
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff", "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff",
        "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0", "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0",
        "#e0e0e0", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#e0e0e0",
        "#ffffff", "#8b4513", "#000000", "#8b4513", "#8b4513", "#000000", "#8b4513", "#ffffff",
        "#ffffff", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#ffffff",
        "#e0e0e0", "#ffffff", "#8b4513", "#ffffff", "#ffffff", "#8b4513", "#ffffff", "#e0e0e0",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 8,
    type: 'pixel',
    title: "爱心",
    author_name: "浪漫像素",
    created_at: "2025-12-04 15:30:00",
    updated_at: "2025-12-06 18:25:00",
    meta: {
      category_name: "像素艺术",
      view_count: 789,
      like_count: 520
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b",
        "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff",
        "#ffffff", "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 9,
    type: 'pixel',
    title: "星星",
    author_name: "星空画师",
    created_at: "2025-12-06 10:00:00",
    updated_at: "2025-12-08 12:15:00",
    meta: {
      category_name: "像素艺术",
      view_count: 623,
      like_count: 289
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#000000", "#000000", "#ffff00", "#ffff00", "#000000", "#000000", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000"
      ]
    }
  },

  // ========== 新增 Image 类型（3条） ==========
  {
    id: 10,
    type: "image",
    title: "极光",
    author_name: "摄影师大鹏",
    created_at: "2025-12-02 14:40:00",
    updated_at: "2025-12-05 16:25:00",
    meta: {
      category_name: "自然风光",
      view_count: 2890,
      like_count: 456
    },
    payload: {
      url: "https://img1.baidu.com/it/u=1279821252,3873242399&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3840 * 2160",
    }
  },
  {
    id: 11,
    type: "image",
    title: "樱花",
    author_name: "日系摄影师",
    created_at: "2025-12-04 09:50:00",
    updated_at: "2025-12-07 11:30:00",
    meta: {
      category_name: "花卉摄影",
      view_count: 3560,
      like_count: 621
    },
    payload: {
      url: "https://img2.baidu.com/it/u=2222967939,4210231275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "2400 * 1600",
    }
  },
  {
    id: 12,
    type: "image",
    title: "城市夜景",
    author_name: "城市探索者",
    created_at: "2025-12-08 18:10:00",
    updated_at: "2025-12-09 10:20:00",
    meta: {
      category_name: "城市风光",
      view_count: 1980,
      like_count: 312
    },
    payload: {
      url: "https://img0.baidu.com/it/u=3090436529,1829102275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3000 * 2000",
    }
  },
  {
    id: 1,
    type: 'article',
    title: "Vue3 + Pinia 企业级博客系统从0到1搭建",
    author_name: "前端老周",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    summary: "本文详细讲解Vue3+Pinia搭建企业级博客系统的全流程。",
    meta: {
      category_name: "前端开发",
      view_count: 5892,
      like_count: 326
    },
    payload: {
      content: `### 一、项目初始化
使用 Vite 快速初始化 Vue3 项目：
\`\`\`bash
npm create vite@latest blog-system -- --template vue
cd blog-system
npm install
\`\`\`
### 二、Pinia 状态管理配置
安装Pinia并创建根存储，实现全局状态共享...`
    }
  },
  {
    id: 2,
    type: 'pixel',
    title: "小猫",
    author_name: "宫崎骏",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {
      category_name: "像素艺术",
      view_count: 589,
      like_count: 326
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff",
        "#ffffff", "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000", "#ffffff",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#ffffff", "#000000", "#ffccaa", "#000000", "#000000", "#ffccaa", "#000000", "#ffffff",
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 3,
    type: "image",
    title: "Moon",
    author_name: "Pigming",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {},
    payload: {
      url: "https://th.bing.com/th/id/R.987f582c510be58755c4933cda68d525?rik=C0D21hJDYvXosw&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1305%2f16%2fc4%2f20990657_1368686545122.jpg&ehk=netN2qzcCVS4ALUQfDOwxAwFcy41oxC%2b0xTFvOYy5ds%3d&risl=&pid=ImgRaw&r=0",
      size: "2560 * 1600",
    }
  },

  // ========== 新增 Article 类型（3条） ==========
  {
    id: 4,
    type: 'article',
    title: "Element Plus 按需引入与主题定制实战",
    author_name: "UI小枫",
    created_at: "2025-12-03 09:15:00",
    updated_at: "2025-12-06 11:40:00",
    summary: "详解Element Plus的按需引入配置方法，以及通过SCSS变量实现主题色自定义的技巧。",
    meta: {
      category_name: "UI组件",
      view_count: 3258,
      like_count: 189
    },
    payload: {
      content: `### 一、按需引入配置
使用unplugin-vue-components和unplugin-auto-import实现自动按需引入：
\`\`\`javascript
// vite.config.js
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] })
  ]
})
\`\`\`
### 二、主题定制
创建styles/element/index.scss覆盖默认变量：
\`\`\`scss
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    primary: #409eff,
    success: #67c23a
  )
);
\`\`\``
    }
  },
  {
    id: 5,
    type: 'article',
    title: "Vite 性能优化：从打包体积到热更新速度",
    author_name: "性能调优师",
    created_at: "2025-12-05 14:20:00",
    updated_at: "2025-12-07 09:35:00",
    summary: "分享Vite项目的核心优化手段，包括依赖预构建、代码分割、图片压缩等实用技巧。",
    meta: {
      category_name: "工程化",
      view_count: 4120,
      like_count: 256
    },
    payload: {
      content: `### 一、依赖预构建优化
Vite默认会预构建第三方依赖，通过optimizeDeps配置自定义预构建范围：
\`\`\`javascript
// vite.config.js
export default defineConfig({
  optimizeDeps: {
    include: ['axios', 'lodash-es'],
    exclude: ['vue']
  }
})
\`\`\`
### 二、打包体积优化
1. 使用rollup-plugin-visualizer分析包体积：
\`\`\`bash
npm i rollup-plugin-visualizer -D
\`\`\`
2. 开启图片压缩：安装vite-plugin-imagemin插件自动压缩图片。`
    }
  },
  {
    id: 6,
    type: 'article',
    title: "Vue3 组合式API与选项式API的对比与迁移指南",
    author_name: "Vue爱好者",
    created_at: "2025-12-07 16:00:00",
    updated_at: "2025-12-08 13:10:00",
    summary: "对比组合式API和选项式API的优劣，以及如何将老项目从选项式API迁移到组合式API。",
    meta: {
      category_name: "Vue进阶",
      view_count: 6789,
      like_count: 412
    },
    payload: {
      content: `### 一、API 设计理念差异
- 选项式API：采用面向对象的组织方式，按data、methods、computed等选项划分逻辑。
- 组合式API：采用函数式的逻辑复用方式，按业务逻辑聚合代码。

### 二、迁移步骤
1. 抽离data为ref/reactive响应式数据；
2. 抽离methods为普通函数，配合setup语法糖使用；
3. 抽离生命周期钩子，如created替换为setup内直接执行代码。

### 三、迁移示例
\`\`\`vue
<!-- 选项式API -->
<script>
export default {
  data() { return { count: 0 } },
  methods: { add() { this.count++ } }
}
</script>

<!-- 组合式API -->
<script setup>
import { ref } from 'vue'
const count = ref(0)
const add = () => count.value++
</script>
\`\`\``
    }
  },

  // ========== 新增 Pixel 类型（3条） ==========
  {
    id: 7,
    type: 'pixel',
    title: "小狗",
    author_name: "像素小子",
    created_at: "2025-12-02 11:25:00",
    updated_at: "2025-12-04 17:10:00",
    meta: {
      category_name: "像素艺术",
      view_count: 456,
      like_count: 218
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff", "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff",
        "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0", "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0",
        "#e0e0e0", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#e0e0e0",
        "#ffffff", "#8b4513", "#000000", "#8b4513", "#8b4513", "#000000", "#8b4513", "#ffffff",
        "#ffffff", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#ffffff",
        "#e0e0e0", "#ffffff", "#8b4513", "#ffffff", "#ffffff", "#8b4513", "#ffffff", "#e0e0e0",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 8,
    type: 'pixel',
    title: "爱心",
    author_name: "浪漫像素",
    created_at: "2025-12-04 15:30:00",
    updated_at: "2025-12-06 18:25:00",
    meta: {
      category_name: "像素艺术",
      view_count: 789,
      like_count: 520
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b",
        "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff",
        "#ffffff", "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 9,
    type: 'pixel',
    title: "星星",
    author_name: "星空画师",
    created_at: "2025-12-06 10:00:00",
    updated_at: "2025-12-08 12:15:00",
    meta: {
      category_name: "像素艺术",
      view_count: 623,
      like_count: 289
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#000000", "#000000", "#ffff00", "#ffff00", "#000000", "#000000", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000"
      ]
    }
  },

  // ========== 新增 Image 类型（3条） ==========
  {
    id: 10,
    type: "image",
    title: "极光",
    author_name: "摄影师大鹏",
    created_at: "2025-12-02 14:40:00",
    updated_at: "2025-12-05 16:25:00",
    meta: {
      category_name: "自然风光",
      view_count: 2890,
      like_count: 456
    },
    payload: {
      url: "https://img1.baidu.com/it/u=1279821252,3873242399&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3840 * 2160",
    }
  },
  {
    id: 11,
    type: "image",
    title: "樱花",
    author_name: "日系摄影师",
    created_at: "2025-12-04 09:50:00",
    updated_at: "2025-12-07 11:30:00",
    meta: {
      category_name: "花卉摄影",
      view_count: 3560,
      like_count: 621
    },
    payload: {
      url: "https://img2.baidu.com/it/u=2222967939,4210231275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "2400 * 1600",
    }
  },
  {
    id: 12,
    type: "image",
    title: "城市夜景",
    author_name: "城市探索者",
    created_at: "2025-12-08 18:10:00",
    updated_at: "2025-12-09 10:20:00",
    meta: {
      category_name: "城市风光",
      view_count: 1980,
      like_count: 312
    },
    payload: {
      url: "https://img0.baidu.com/it/u=3090436529,1829102275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3000 * 2000",
    }
  },
  {
    id: 1,
    type: 'article',
    title: "Vue3 + Pinia 企业级博客系统从0到1搭建",
    author_name: "前端老周",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    summary: "本文详细讲解Vue3+Pinia搭建企业级博客系统的全流程。",
    meta: {
      category_name: "前端开发",
      view_count: 5892,
      like_count: 326
    },
    payload: {
      content: `### 一、项目初始化
使用 Vite 快速初始化 Vue3 项目：
\`\`\`bash
npm create vite@latest blog-system -- --template vue
cd blog-system
npm install
\`\`\`
### 二、Pinia 状态管理配置
安装Pinia并创建根存储，实现全局状态共享...`
    }
  },
  {
    id: 2,
    type: 'pixel',
    title: "小猫",
    author_name: "宫崎骏",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {
      category_name: "像素艺术",
      view_count: 589,
      like_count: 326
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff",
        "#ffffff", "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000", "#ffffff",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#ffffff", "#000000", "#ffccaa", "#000000", "#000000", "#ffccaa", "#000000", "#ffffff",
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 3,
    type: "image",
    title: "Moon",
    author_name: "Pigming",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {},
    payload: {
      url: "https://th.bing.com/th/id/R.987f582c510be58755c4933cda68d525?rik=C0D21hJDYvXosw&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1305%2f16%2fc4%2f20990657_1368686545122.jpg&ehk=netN2qzcCVS4ALUQfDOwxAwFcy41oxC%2b0xTFvOYy5ds%3d&risl=&pid=ImgRaw&r=0",
      size: "2560 * 1600",
    }
  },

  // ========== 新增 Article 类型（3条） ==========
  {
    id: 4,
    type: 'article',
    title: "Element Plus 按需引入与主题定制实战",
    author_name: "UI小枫",
    created_at: "2025-12-03 09:15:00",
    updated_at: "2025-12-06 11:40:00",
    summary: "详解Element Plus的按需引入配置方法，以及通过SCSS变量实现主题色自定义的技巧。",
    meta: {
      category_name: "UI组件",
      view_count: 3258,
      like_count: 189
    },
    payload: {
      content: `### 一、按需引入配置
使用unplugin-vue-components和unplugin-auto-import实现自动按需引入：
\`\`\`javascript
// vite.config.js
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] })
  ]
})
\`\`\`
### 二、主题定制
创建styles/element/index.scss覆盖默认变量：
\`\`\`scss
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    primary: #409eff,
    success: #67c23a
  )
);
\`\`\``
    }
  },
  {
    id: 5,
    type: 'article',
    title: "Vite 性能优化：从打包体积到热更新速度",
    author_name: "性能调优师",
    created_at: "2025-12-05 14:20:00",
    updated_at: "2025-12-07 09:35:00",
    summary: "分享Vite项目的核心优化手段，包括依赖预构建、代码分割、图片压缩等实用技巧。",
    meta: {
      category_name: "工程化",
      view_count: 4120,
      like_count: 256
    },
    payload: {
      content: `### 一、依赖预构建优化
Vite默认会预构建第三方依赖，通过optimizeDeps配置自定义预构建范围：
\`\`\`javascript
// vite.config.js
export default defineConfig({
  optimizeDeps: {
    include: ['axios', 'lodash-es'],
    exclude: ['vue']
  }
})
\`\`\`
### 二、打包体积优化
1. 使用rollup-plugin-visualizer分析包体积：
\`\`\`bash
npm i rollup-plugin-visualizer -D
\`\`\`
2. 开启图片压缩：安装vite-plugin-imagemin插件自动压缩图片。`
    }
  },
  {
    id: 6,
    type: 'article',
    title: "Vue3 组合式API与选项式API的对比与迁移指南",
    author_name: "Vue爱好者",
    created_at: "2025-12-07 16:00:00",
    updated_at: "2025-12-08 13:10:00",
    summary: "对比组合式API和选项式API的优劣，以及如何将老项目从选项式API迁移到组合式API。",
    meta: {
      category_name: "Vue进阶",
      view_count: 6789,
      like_count: 412
    },
    payload: {
      content: `### 一、API 设计理念差异
- 选项式API：采用面向对象的组织方式，按data、methods、computed等选项划分逻辑。
- 组合式API：采用函数式的逻辑复用方式，按业务逻辑聚合代码。

### 二、迁移步骤
1. 抽离data为ref/reactive响应式数据；
2. 抽离methods为普通函数，配合setup语法糖使用；
3. 抽离生命周期钩子，如created替换为setup内直接执行代码。

### 三、迁移示例
\`\`\`vue
<!-- 选项式API -->
<script>
export default {
  data() { return { count: 0 } },
  methods: { add() { this.count++ } }
}
</script>

<!-- 组合式API -->
<script setup>
import { ref } from 'vue'
const count = ref(0)
const add = () => count.value++
</script>
\`\`\``
    }
  },

  // ========== 新增 Pixel 类型（3条） ==========
  {
    id: 7,
    type: 'pixel',
    title: "小狗",
    author_name: "像素小子",
    created_at: "2025-12-02 11:25:00",
    updated_at: "2025-12-04 17:10:00",
    meta: {
      category_name: "像素艺术",
      view_count: 456,
      like_count: 218
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff", "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff",
        "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0", "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0",
        "#e0e0e0", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#e0e0e0",
        "#ffffff", "#8b4513", "#000000", "#8b4513", "#8b4513", "#000000", "#8b4513", "#ffffff",
        "#ffffff", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#ffffff",
        "#e0e0e0", "#ffffff", "#8b4513", "#ffffff", "#ffffff", "#8b4513", "#ffffff", "#e0e0e0",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 8,
    type: 'pixel',
    title: "爱心",
    author_name: "浪漫像素",
    created_at: "2025-12-04 15:30:00",
    updated_at: "2025-12-06 18:25:00",
    meta: {
      category_name: "像素艺术",
      view_count: 789,
      like_count: 520
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b",
        "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff",
        "#ffffff", "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 9,
    type: 'pixel',
    title: "星星",
    author_name: "星空画师",
    created_at: "2025-12-06 10:00:00",
    updated_at: "2025-12-08 12:15:00",
    meta: {
      category_name: "像素艺术",
      view_count: 623,
      like_count: 289
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#000000", "#000000", "#ffff00", "#ffff00", "#000000", "#000000", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000"
      ]
    }
  },

  // ========== 新增 Image 类型（3条） ==========
  {
    id: 10,
    type: "image",
    title: "极光",
    author_name: "摄影师大鹏",
    created_at: "2025-12-02 14:40:00",
    updated_at: "2025-12-05 16:25:00",
    meta: {
      category_name: "自然风光",
      view_count: 2890,
      like_count: 456
    },
    payload: {
      url: "https://img1.baidu.com/it/u=1279821252,3873242399&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3840 * 2160",
    }
  },
  {
    id: 11,
    type: "image",
    title: "樱花",
    author_name: "日系摄影师",
    created_at: "2025-12-04 09:50:00",
    updated_at: "2025-12-07 11:30:00",
    meta: {
      category_name: "花卉摄影",
      view_count: 3560,
      like_count: 621
    },
    payload: {
      url: "https://img2.baidu.com/it/u=2222967939,4210231275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "2400 * 1600",
    }
  },
  {
    id: 12,
    type: "image",
    title: "城市夜景",
    author_name: "城市探索者",
    created_at: "2025-12-08 18:10:00",
    updated_at: "2025-12-09 10:20:00",
    meta: {
      category_name: "城市风光",
      view_count: 1980,
      like_count: 312
    },
    payload: {
      url: "https://img0.baidu.com/it/u=3090436529,1829102275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3000 * 2000",
    }
  },
  {
    id: 1,
    type: 'article',
    title: "Vue3 + Pinia 企业级博客系统从0到1搭建",
    author_name: "前端老周",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    summary: "本文详细讲解Vue3+Pinia搭建企业级博客系统的全流程。",
    meta: {
      category_name: "前端开发",
      view_count: 5892,
      like_count: 326
    },
    payload: {
      content: `### 一、项目初始化
使用 Vite 快速初始化 Vue3 项目：
\`\`\`bash
npm create vite@latest blog-system -- --template vue
cd blog-system
npm install
\`\`\`
### 二、Pinia 状态管理配置
安装Pinia并创建根存储，实现全局状态共享...`
    }
  },
  {
    id: 2,
    type: 'pixel',
    title: "小猫",
    author_name: "宫崎骏",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {
      category_name: "像素艺术",
      view_count: 589,
      like_count: 326
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff",
        "#ffffff", "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000", "#ffffff",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#ffffff", "#000000", "#ffccaa", "#000000", "#000000", "#ffccaa", "#000000", "#ffffff",
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 3,
    type: "image",
    title: "Moon",
    author_name: "Pigming",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {},
    payload: {
      url: "https://th.bing.com/th/id/R.987f582c510be58755c4933cda68d525?rik=C0D21hJDYvXosw&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1305%2f16%2fc4%2f20990657_1368686545122.jpg&ehk=netN2qzcCVS4ALUQfDOwxAwFcy41oxC%2b0xTFvOYy5ds%3d&risl=&pid=ImgRaw&r=0",
      size: "2560 * 1600",
    }
  },

  // ========== 新增 Article 类型（3条） ==========
  {
    id: 4,
    type: 'article',
    title: "Element Plus 按需引入与主题定制实战",
    author_name: "UI小枫",
    created_at: "2025-12-03 09:15:00",
    updated_at: "2025-12-06 11:40:00",
    summary: "详解Element Plus的按需引入配置方法，以及通过SCSS变量实现主题色自定义的技巧。",
    meta: {
      category_name: "UI组件",
      view_count: 3258,
      like_count: 189
    },
    payload: {
      content: `### 一、按需引入配置
使用unplugin-vue-components和unplugin-auto-import实现自动按需引入：
\`\`\`javascript
// vite.config.js
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] })
  ]
})
\`\`\`
### 二、主题定制
创建styles/element/index.scss覆盖默认变量：
\`\`\`scss
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    primary: #409eff,
    success: #67c23a
  )
);
\`\`\``
    }
  },
  {
    id: 5,
    type: 'article',
    title: "Vite 性能优化：从打包体积到热更新速度",
    author_name: "性能调优师",
    created_at: "2025-12-05 14:20:00",
    updated_at: "2025-12-07 09:35:00",
    summary: "分享Vite项目的核心优化手段，包括依赖预构建、代码分割、图片压缩等实用技巧。",
    meta: {
      category_name: "工程化",
      view_count: 4120,
      like_count: 256
    },
    payload: {
      content: `### 一、依赖预构建优化
Vite默认会预构建第三方依赖，通过optimizeDeps配置自定义预构建范围：
\`\`\`javascript
// vite.config.js
export default defineConfig({
  optimizeDeps: {
    include: ['axios', 'lodash-es'],
    exclude: ['vue']
  }
})
\`\`\`
### 二、打包体积优化
1. 使用rollup-plugin-visualizer分析包体积：
\`\`\`bash
npm i rollup-plugin-visualizer -D
\`\`\`
2. 开启图片压缩：安装vite-plugin-imagemin插件自动压缩图片。`
    }
  },
  {
    id: 6,
    type: 'article',
    title: "Vue3 组合式API与选项式API的对比与迁移指南",
    author_name: "Vue爱好者",
    created_at: "2025-12-07 16:00:00",
    updated_at: "2025-12-08 13:10:00",
    summary: "对比组合式API和选项式API的优劣，以及如何将老项目从选项式API迁移到组合式API。",
    meta: {
      category_name: "Vue进阶",
      view_count: 6789,
      like_count: 412
    },
    payload: {
      content: `### 一、API 设计理念差异
- 选项式API：采用面向对象的组织方式，按data、methods、computed等选项划分逻辑。
- 组合式API：采用函数式的逻辑复用方式，按业务逻辑聚合代码。

### 二、迁移步骤
1. 抽离data为ref/reactive响应式数据；
2. 抽离methods为普通函数，配合setup语法糖使用；
3. 抽离生命周期钩子，如created替换为setup内直接执行代码。

### 三、迁移示例
\`\`\`vue
<!-- 选项式API -->
<script>
export default {
  data() { return { count: 0 } },
  methods: { add() { this.count++ } }
}
</script>

<!-- 组合式API -->
<script setup>
import { ref } from 'vue'
const count = ref(0)
const add = () => count.value++
</script>
\`\`\``
    }
  },

  // ========== 新增 Pixel 类型（3条） ==========
  {
    id: 7,
    type: 'pixel',
    title: "小狗",
    author_name: "像素小子",
    created_at: "2025-12-02 11:25:00",
    updated_at: "2025-12-04 17:10:00",
    meta: {
      category_name: "像素艺术",
      view_count: 456,
      like_count: 218
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff", "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff",
        "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0", "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0",
        "#e0e0e0", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#e0e0e0",
        "#ffffff", "#8b4513", "#000000", "#8b4513", "#8b4513", "#000000", "#8b4513", "#ffffff",
        "#ffffff", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#ffffff",
        "#e0e0e0", "#ffffff", "#8b4513", "#ffffff", "#ffffff", "#8b4513", "#ffffff", "#e0e0e0",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 8,
    type: 'pixel',
    title: "爱心",
    author_name: "浪漫像素",
    created_at: "2025-12-04 15:30:00",
    updated_at: "2025-12-06 18:25:00",
    meta: {
      category_name: "像素艺术",
      view_count: 789,
      like_count: 520
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b",
        "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff",
        "#ffffff", "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 9,
    type: 'pixel',
    title: "星星",
    author_name: "星空画师",
    created_at: "2025-12-06 10:00:00",
    updated_at: "2025-12-08 12:15:00",
    meta: {
      category_name: "像素艺术",
      view_count: 623,
      like_count: 289
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#000000", "#000000", "#ffff00", "#ffff00", "#000000", "#000000", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000"
      ]
    }
  },

  // ========== 新增 Image 类型（3条） ==========
  {
    id: 10,
    type: "image",
    title: "极光",
    author_name: "摄影师大鹏",
    created_at: "2025-12-02 14:40:00",
    updated_at: "2025-12-05 16:25:00",
    meta: {
      category_name: "自然风光",
      view_count: 2890,
      like_count: 456
    },
    payload: {
      url: "https://img1.baidu.com/it/u=1279821252,3873242399&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3840 * 2160",
    }
  },
  {
    id: 11,
    type: "image",
    title: "樱花",
    author_name: "日系摄影师",
    created_at: "2025-12-04 09:50:00",
    updated_at: "2025-12-07 11:30:00",
    meta: {
      category_name: "花卉摄影",
      view_count: 3560,
      like_count: 621
    },
    payload: {
      url: "https://img2.baidu.com/it/u=2222967939,4210231275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "2400 * 1600",
    }
  },
  {
    id: 12,
    type: "image",
    title: "城市夜景",
    author_name: "城市探索者",
    created_at: "2025-12-08 18:10:00",
    updated_at: "2025-12-09 10:20:00",
    meta: {
      category_name: "城市风光",
      view_count: 1980,
      like_count: 312
    },
    payload: {
      url: "https://img0.baidu.com/it/u=3090436529,1829102275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3000 * 2000",
    }
  },
  {
    id: 1,
    type: 'article',
    title: "Vue3 + Pinia 企业级博客系统从0到1搭建",
    author_name: "前端老周",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    summary: "本文详细讲解Vue3+Pinia搭建企业级博客系统的全流程。",
    meta: {
      category_name: "前端开发",
      view_count: 5892,
      like_count: 326
    },
    payload: {
      content: `### 一、项目初始化
使用 Vite 快速初始化 Vue3 项目：
\`\`\`bash
npm create vite@latest blog-system -- --template vue
cd blog-system
npm install
\`\`\`
### 二、Pinia 状态管理配置
安装Pinia并创建根存储，实现全局状态共享...`
    }
  },
  {
    id: 2,
    type: 'pixel',
    title: "小猫",
    author_name: "宫崎骏",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {
      category_name: "像素艺术",
      view_count: 589,
      like_count: 326
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff",
        "#ffffff", "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000", "#ffffff",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#ffffff", "#000000", "#ffccaa", "#000000", "#000000", "#ffccaa", "#000000", "#ffffff",
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 3,
    type: "image",
    title: "Moon",
    author_name: "Pigming",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {},
    payload: {
      url: "https://th.bing.com/th/id/R.987f582c510be58755c4933cda68d525?rik=C0D21hJDYvXosw&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1305%2f16%2fc4%2f20990657_1368686545122.jpg&ehk=netN2qzcCVS4ALUQfDOwxAwFcy41oxC%2b0xTFvOYy5ds%3d&risl=&pid=ImgRaw&r=0",
      size: "2560 * 1600",
    }
  },

  // ========== 新增 Article 类型（3条） ==========
  {
    id: 4,
    type: 'article',
    title: "Element Plus 按需引入与主题定制实战",
    author_name: "UI小枫",
    created_at: "2025-12-03 09:15:00",
    updated_at: "2025-12-06 11:40:00",
    summary: "详解Element Plus的按需引入配置方法，以及通过SCSS变量实现主题色自定义的技巧。",
    meta: {
      category_name: "UI组件",
      view_count: 3258,
      like_count: 189
    },
    payload: {
      content: `### 一、按需引入配置
使用unplugin-vue-components和unplugin-auto-import实现自动按需引入：
\`\`\`javascript
// vite.config.js
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] })
  ]
})
\`\`\`
### 二、主题定制
创建styles/element/index.scss覆盖默认变量：
\`\`\`scss
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    primary: #409eff,
    success: #67c23a
  )
);
\`\`\``
    }
  },
  {
    id: 5,
    type: 'article',
    title: "Vite 性能优化：从打包体积到热更新速度",
    author_name: "性能调优师",
    created_at: "2025-12-05 14:20:00",
    updated_at: "2025-12-07 09:35:00",
    summary: "分享Vite项目的核心优化手段，包括依赖预构建、代码分割、图片压缩等实用技巧。",
    meta: {
      category_name: "工程化",
      view_count: 4120,
      like_count: 256
    },
    payload: {
      content: `### 一、依赖预构建优化
Vite默认会预构建第三方依赖，通过optimizeDeps配置自定义预构建范围：
\`\`\`javascript
// vite.config.js
export default defineConfig({
  optimizeDeps: {
    include: ['axios', 'lodash-es'],
    exclude: ['vue']
  }
})
\`\`\`
### 二、打包体积优化
1. 使用rollup-plugin-visualizer分析包体积：
\`\`\`bash
npm i rollup-plugin-visualizer -D
\`\`\`
2. 开启图片压缩：安装vite-plugin-imagemin插件自动压缩图片。`
    }
  },
  {
    id: 6,
    type: 'article',
    title: "Vue3 组合式API与选项式API的对比与迁移指南",
    author_name: "Vue爱好者",
    created_at: "2025-12-07 16:00:00",
    updated_at: "2025-12-08 13:10:00",
    summary: "对比组合式API和选项式API的优劣，以及如何将老项目从选项式API迁移到组合式API。",
    meta: {
      category_name: "Vue进阶",
      view_count: 6789,
      like_count: 412
    },
    payload: {
      content: `### 一、API 设计理念差异
- 选项式API：采用面向对象的组织方式，按data、methods、computed等选项划分逻辑。
- 组合式API：采用函数式的逻辑复用方式，按业务逻辑聚合代码。

### 二、迁移步骤
1. 抽离data为ref/reactive响应式数据；
2. 抽离methods为普通函数，配合setup语法糖使用；
3. 抽离生命周期钩子，如created替换为setup内直接执行代码。

### 三、迁移示例
\`\`\`vue
<!-- 选项式API -->
<script>
export default {
  data() { return { count: 0 } },
  methods: { add() { this.count++ } }
}
</script>

<!-- 组合式API -->
<script setup>
import { ref } from 'vue'
const count = ref(0)
const add = () => count.value++
</script>
\`\`\``
    }
  },

  // ========== 新增 Pixel 类型（3条） ==========
  {
    id: 7,
    type: 'pixel',
    title: "小狗",
    author_name: "像素小子",
    created_at: "2025-12-02 11:25:00",
    updated_at: "2025-12-04 17:10:00",
    meta: {
      category_name: "像素艺术",
      view_count: 456,
      like_count: 218
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff", "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff",
        "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0", "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0",
        "#e0e0e0", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#e0e0e0",
        "#ffffff", "#8b4513", "#000000", "#8b4513", "#8b4513", "#000000", "#8b4513", "#ffffff",
        "#ffffff", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#ffffff",
        "#e0e0e0", "#ffffff", "#8b4513", "#ffffff", "#ffffff", "#8b4513", "#ffffff", "#e0e0e0",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 8,
    type: 'pixel',
    title: "爱心",
    author_name: "浪漫像素",
    created_at: "2025-12-04 15:30:00",
    updated_at: "2025-12-06 18:25:00",
    meta: {
      category_name: "像素艺术",
      view_count: 789,
      like_count: 520
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b",
        "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff",
        "#ffffff", "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 9,
    type: 'pixel',
    title: "星星",
    author_name: "星空画师",
    created_at: "2025-12-06 10:00:00",
    updated_at: "2025-12-08 12:15:00",
    meta: {
      category_name: "像素艺术",
      view_count: 623,
      like_count: 289
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#000000", "#000000", "#ffff00", "#ffff00", "#000000", "#000000", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000"
      ]
    }
  },

  // ========== 新增 Image 类型（3条） ==========
  {
    id: 10,
    type: "image",
    title: "极光",
    author_name: "摄影师大鹏",
    created_at: "2025-12-02 14:40:00",
    updated_at: "2025-12-05 16:25:00",
    meta: {
      category_name: "自然风光",
      view_count: 2890,
      like_count: 456
    },
    payload: {
      url: "https://img1.baidu.com/it/u=1279821252,3873242399&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3840 * 2160",
    }
  },
  {
    id: 11,
    type: "image",
    title: "樱花",
    author_name: "日系摄影师",
    created_at: "2025-12-04 09:50:00",
    updated_at: "2025-12-07 11:30:00",
    meta: {
      category_name: "花卉摄影",
      view_count: 3560,
      like_count: 621
    },
    payload: {
      url: "https://img2.baidu.com/it/u=2222967939,4210231275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "2400 * 1600",
    }
  },
  {
    id: 12,
    type: "image",
    title: "城市夜景",
    author_name: "城市探索者",
    created_at: "2025-12-08 18:10:00",
    updated_at: "2025-12-09 10:20:00",
    meta: {
      category_name: "城市风光",
      view_count: 1980,
      like_count: 312
    },
    payload: {
      url: "https://img0.baidu.com/it/u=3090436529,1829102275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3000 * 2000",
    }
  },
  {
    id: 1,
    type: 'article',
    title: "Vue3 + Pinia 企业级博客系统从0到1搭建",
    author_name: "前端老周",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    summary: "本文详细讲解Vue3+Pinia搭建企业级博客系统的全流程。",
    meta: {
      category_name: "前端开发",
      view_count: 5892,
      like_count: 326
    },
    payload: {
      content: `### 一、项目初始化
使用 Vite 快速初始化 Vue3 项目：
\`\`\`bash
npm create vite@latest blog-system -- --template vue
cd blog-system
npm install
\`\`\`
### 二、Pinia 状态管理配置
安装Pinia并创建根存储，实现全局状态共享...`
    }
  },
  {
    id: 2,
    type: 'pixel',
    title: "小猫",
    author_name: "宫崎骏",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {
      category_name: "像素艺术",
      view_count: 589,
      like_count: 326
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff",
        "#ffffff", "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000", "#ffffff",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#ffffff", "#000000", "#ffccaa", "#000000", "#000000", "#ffccaa", "#000000", "#ffffff",
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 3,
    type: "image",
    title: "Moon",
    author_name: "Pigming",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {},
    payload: {
      url: "https://th.bing.com/th/id/R.987f582c510be58755c4933cda68d525?rik=C0D21hJDYvXosw&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1305%2f16%2fc4%2f20990657_1368686545122.jpg&ehk=netN2qzcCVS4ALUQfDOwxAwFcy41oxC%2b0xTFvOYy5ds%3d&risl=&pid=ImgRaw&r=0",
      size: "2560 * 1600",
    }
  },

  // ========== 新增 Article 类型（3条） ==========
  {
    id: 4,
    type: 'article',
    title: "Element Plus 按需引入与主题定制实战",
    author_name: "UI小枫",
    created_at: "2025-12-03 09:15:00",
    updated_at: "2025-12-06 11:40:00",
    summary: "详解Element Plus的按需引入配置方法，以及通过SCSS变量实现主题色自定义的技巧。",
    meta: {
      category_name: "UI组件",
      view_count: 3258,
      like_count: 189
    },
    payload: {
      content: `### 一、按需引入配置
使用unplugin-vue-components和unplugin-auto-import实现自动按需引入：
\`\`\`javascript
// vite.config.js
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] })
  ]
})
\`\`\`
### 二、主题定制
创建styles/element/index.scss覆盖默认变量：
\`\`\`scss
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    primary: #409eff,
    success: #67c23a
  )
);
\`\`\``
    }
  },
  {
    id: 5,
    type: 'article',
    title: "Vite 性能优化：从打包体积到热更新速度",
    author_name: "性能调优师",
    created_at: "2025-12-05 14:20:00",
    updated_at: "2025-12-07 09:35:00",
    summary: "分享Vite项目的核心优化手段，包括依赖预构建、代码分割、图片压缩等实用技巧。",
    meta: {
      category_name: "工程化",
      view_count: 4120,
      like_count: 256
    },
    payload: {
      content: `### 一、依赖预构建优化
Vite默认会预构建第三方依赖，通过optimizeDeps配置自定义预构建范围：
\`\`\`javascript
// vite.config.js
export default defineConfig({
  optimizeDeps: {
    include: ['axios', 'lodash-es'],
    exclude: ['vue']
  }
})
\`\`\`
### 二、打包体积优化
1. 使用rollup-plugin-visualizer分析包体积：
\`\`\`bash
npm i rollup-plugin-visualizer -D
\`\`\`
2. 开启图片压缩：安装vite-plugin-imagemin插件自动压缩图片。`
    }
  },
  {
    id: 6,
    type: 'article',
    title: "Vue3 组合式API与选项式API的对比与迁移指南",
    author_name: "Vue爱好者",
    created_at: "2025-12-07 16:00:00",
    updated_at: "2025-12-08 13:10:00",
    summary: "对比组合式API和选项式API的优劣，以及如何将老项目从选项式API迁移到组合式API。",
    meta: {
      category_name: "Vue进阶",
      view_count: 6789,
      like_count: 412
    },
    payload: {
      content: `### 一、API 设计理念差异
- 选项式API：采用面向对象的组织方式，按data、methods、computed等选项划分逻辑。
- 组合式API：采用函数式的逻辑复用方式，按业务逻辑聚合代码。

### 二、迁移步骤
1. 抽离data为ref/reactive响应式数据；
2. 抽离methods为普通函数，配合setup语法糖使用；
3. 抽离生命周期钩子，如created替换为setup内直接执行代码。

### 三、迁移示例
\`\`\`vue
<!-- 选项式API -->
<script>
export default {
  data() { return { count: 0 } },
  methods: { add() { this.count++ } }
}
</script>

<!-- 组合式API -->
<script setup>
import { ref } from 'vue'
const count = ref(0)
const add = () => count.value++
</script>
\`\`\``
    }
  },

  // ========== 新增 Pixel 类型（3条） ==========
  {
    id: 7,
    type: 'pixel',
    title: "小狗",
    author_name: "像素小子",
    created_at: "2025-12-02 11:25:00",
    updated_at: "2025-12-04 17:10:00",
    meta: {
      category_name: "像素艺术",
      view_count: 456,
      like_count: 218
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff", "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff",
        "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0", "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0",
        "#e0e0e0", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#e0e0e0",
        "#ffffff", "#8b4513", "#000000", "#8b4513", "#8b4513", "#000000", "#8b4513", "#ffffff",
        "#ffffff", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#ffffff",
        "#e0e0e0", "#ffffff", "#8b4513", "#ffffff", "#ffffff", "#8b4513", "#ffffff", "#e0e0e0",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 8,
    type: 'pixel',
    title: "爱心",
    author_name: "浪漫像素",
    created_at: "2025-12-04 15:30:00",
    updated_at: "2025-12-06 18:25:00",
    meta: {
      category_name: "像素艺术",
      view_count: 789,
      like_count: 520
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b",
        "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff",
        "#ffffff", "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 9,
    type: 'pixel',
    title: "星星",
    author_name: "星空画师",
    created_at: "2025-12-06 10:00:00",
    updated_at: "2025-12-08 12:15:00",
    meta: {
      category_name: "像素艺术",
      view_count: 623,
      like_count: 289
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#000000", "#000000", "#ffff00", "#ffff00", "#000000", "#000000", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000"
      ]
    }
  },

  // ========== 新增 Image 类型（3条） ==========
  {
    id: 10,
    type: "image",
    title: "极光",
    author_name: "摄影师大鹏",
    created_at: "2025-12-02 14:40:00",
    updated_at: "2025-12-05 16:25:00",
    meta: {
      category_name: "自然风光",
      view_count: 2890,
      like_count: 456
    },
    payload: {
      url: "https://img1.baidu.com/it/u=1279821252,3873242399&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3840 * 2160",
    }
  },
  {
    id: 11,
    type: "image",
    title: "樱花",
    author_name: "日系摄影师",
    created_at: "2025-12-04 09:50:00",
    updated_at: "2025-12-07 11:30:00",
    meta: {
      category_name: "花卉摄影",
      view_count: 3560,
      like_count: 621
    },
    payload: {
      url: "https://img2.baidu.com/it/u=2222967939,4210231275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "2400 * 1600",
    }
  },
  {
    id: 12,
    type: "image",
    title: "城市夜景",
    author_name: "城市探索者",
    created_at: "2025-12-08 18:10:00",
    updated_at: "2025-12-09 10:20:00",
    meta: {
      category_name: "城市风光",
      view_count: 1980,
      like_count: 312
    },
    payload: {
      url: "https://img0.baidu.com/it/u=3090436529,1829102275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3000 * 2000",
    }
  },
  {
    id: 1,
    type: 'article',
    title: "Vue3 + Pinia 企业级博客系统从0到1搭建",
    author_name: "前端老周",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    summary: "本文详细讲解Vue3+Pinia搭建企业级博客系统的全流程。",
    meta: {
      category_name: "前端开发",
      view_count: 5892,
      like_count: 326
    },
    payload: {
      content: `### 一、项目初始化
使用 Vite 快速初始化 Vue3 项目：
\`\`\`bash
npm create vite@latest blog-system -- --template vue
cd blog-system
npm install
\`\`\`
### 二、Pinia 状态管理配置
安装Pinia并创建根存储，实现全局状态共享...`
    }
  },
  {
    id: 2,
    type: 'pixel',
    title: "小猫",
    author_name: "宫崎骏",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {
      category_name: "像素艺术",
      view_count: 589,
      like_count: 326
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff",
        "#ffffff", "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000", "#ffffff",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#ffffff", "#000000", "#ffccaa", "#000000", "#000000", "#ffccaa", "#000000", "#ffffff",
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 3,
    type: "image",
    title: "Moon",
    author_name: "Pigming",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {},
    payload: {
      url: "https://th.bing.com/th/id/R.987f582c510be58755c4933cda68d525?rik=C0D21hJDYvXosw&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1305%2f16%2fc4%2f20990657_1368686545122.jpg&ehk=netN2qzcCVS4ALUQfDOwxAwFcy41oxC%2b0xTFvOYy5ds%3d&risl=&pid=ImgRaw&r=0",
      size: "2560 * 1600",
    }
  },

  // ========== 新增 Article 类型（3条） ==========
  {
    id: 4,
    type: 'article',
    title: "Element Plus 按需引入与主题定制实战",
    author_name: "UI小枫",
    created_at: "2025-12-03 09:15:00",
    updated_at: "2025-12-06 11:40:00",
    summary: "详解Element Plus的按需引入配置方法，以及通过SCSS变量实现主题色自定义的技巧。",
    meta: {
      category_name: "UI组件",
      view_count: 3258,
      like_count: 189
    },
    payload: {
      content: `### 一、按需引入配置
使用unplugin-vue-components和unplugin-auto-import实现自动按需引入：
\`\`\`javascript
// vite.config.js
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] })
  ]
})
\`\`\`
### 二、主题定制
创建styles/element/index.scss覆盖默认变量：
\`\`\`scss
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    primary: #409eff,
    success: #67c23a
  )
);
\`\`\``
    }
  },
  {
    id: 5,
    type: 'article',
    title: "Vite 性能优化：从打包体积到热更新速度",
    author_name: "性能调优师",
    created_at: "2025-12-05 14:20:00",
    updated_at: "2025-12-07 09:35:00",
    summary: "分享Vite项目的核心优化手段，包括依赖预构建、代码分割、图片压缩等实用技巧。",
    meta: {
      category_name: "工程化",
      view_count: 4120,
      like_count: 256
    },
    payload: {
      content: `### 一、依赖预构建优化
Vite默认会预构建第三方依赖，通过optimizeDeps配置自定义预构建范围：
\`\`\`javascript
// vite.config.js
export default defineConfig({
  optimizeDeps: {
    include: ['axios', 'lodash-es'],
    exclude: ['vue']
  }
})
\`\`\`
### 二、打包体积优化
1. 使用rollup-plugin-visualizer分析包体积：
\`\`\`bash
npm i rollup-plugin-visualizer -D
\`\`\`
2. 开启图片压缩：安装vite-plugin-imagemin插件自动压缩图片。`
    }
  },
  {
    id: 6,
    type: 'article',
    title: "Vue3 组合式API与选项式API的对比与迁移指南",
    author_name: "Vue爱好者",
    created_at: "2025-12-07 16:00:00",
    updated_at: "2025-12-08 13:10:00",
    summary: "对比组合式API和选项式API的优劣，以及如何将老项目从选项式API迁移到组合式API。",
    meta: {
      category_name: "Vue进阶",
      view_count: 6789,
      like_count: 412
    },
    payload: {
      content: `### 一、API 设计理念差异
- 选项式API：采用面向对象的组织方式，按data、methods、computed等选项划分逻辑。
- 组合式API：采用函数式的逻辑复用方式，按业务逻辑聚合代码。

### 二、迁移步骤
1. 抽离data为ref/reactive响应式数据；
2. 抽离methods为普通函数，配合setup语法糖使用；
3. 抽离生命周期钩子，如created替换为setup内直接执行代码。

### 三、迁移示例
\`\`\`vue
<!-- 选项式API -->
<script>
export default {
  data() { return { count: 0 } },
  methods: { add() { this.count++ } }
}
</script>

<!-- 组合式API -->
<script setup>
import { ref } from 'vue'
const count = ref(0)
const add = () => count.value++
</script>
\`\`\``
    }
  },

  // ========== 新增 Pixel 类型（3条） ==========
  {
    id: 7,
    type: 'pixel',
    title: "小狗",
    author_name: "像素小子",
    created_at: "2025-12-02 11:25:00",
    updated_at: "2025-12-04 17:10:00",
    meta: {
      category_name: "像素艺术",
      view_count: 456,
      like_count: 218
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff", "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff",
        "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0", "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0",
        "#e0e0e0", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#e0e0e0",
        "#ffffff", "#8b4513", "#000000", "#8b4513", "#8b4513", "#000000", "#8b4513", "#ffffff",
        "#ffffff", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#ffffff",
        "#e0e0e0", "#ffffff", "#8b4513", "#ffffff", "#ffffff", "#8b4513", "#ffffff", "#e0e0e0",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 8,
    type: 'pixel',
    title: "爱心",
    author_name: "浪漫像素",
    created_at: "2025-12-04 15:30:00",
    updated_at: "2025-12-06 18:25:00",
    meta: {
      category_name: "像素艺术",
      view_count: 789,
      like_count: 520
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b",
        "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff",
        "#ffffff", "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 9,
    type: 'pixel',
    title: "星星",
    author_name: "星空画师",
    created_at: "2025-12-06 10:00:00",
    updated_at: "2025-12-08 12:15:00",
    meta: {
      category_name: "像素艺术",
      view_count: 623,
      like_count: 289
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#000000", "#000000", "#ffff00", "#ffff00", "#000000", "#000000", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000"
      ]
    }
  },

  // ========== 新增 Image 类型（3条） ==========
  {
    id: 10,
    type: "image",
    title: "极光",
    author_name: "摄影师大鹏",
    created_at: "2025-12-02 14:40:00",
    updated_at: "2025-12-05 16:25:00",
    meta: {
      category_name: "自然风光",
      view_count: 2890,
      like_count: 456
    },
    payload: {
      url: "https://img1.baidu.com/it/u=1279821252,3873242399&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3840 * 2160",
    }
  },
  {
    id: 11,
    type: "image",
    title: "樱花",
    author_name: "日系摄影师",
    created_at: "2025-12-04 09:50:00",
    updated_at: "2025-12-07 11:30:00",
    meta: {
      category_name: "花卉摄影",
      view_count: 3560,
      like_count: 621
    },
    payload: {
      url: "https://img2.baidu.com/it/u=2222967939,4210231275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "2400 * 1600",
    }
  },
  {
    id: 12,
    type: "image",
    title: "城市夜景",
    author_name: "城市探索者",
    created_at: "2025-12-08 18:10:00",
    updated_at: "2025-12-09 10:20:00",
    meta: {
      category_name: "城市风光",
      view_count: 1980,
      like_count: 312
    },
    payload: {
      url: "https://img0.baidu.com/it/u=3090436529,1829102275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3000 * 2000",
    }
  },
  {
    id: 1,
    type: 'article',
    title: "Vue3 + Pinia 企业级博客系统从0到1搭建",
    author_name: "前端老周",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    summary: "本文详细讲解Vue3+Pinia搭建企业级博客系统的全流程。",
    meta: {
      category_name: "前端开发",
      view_count: 5892,
      like_count: 326
    },
    payload: {
      content: `### 一、项目初始化
使用 Vite 快速初始化 Vue3 项目：
\`\`\`bash
npm create vite@latest blog-system -- --template vue
cd blog-system
npm install
\`\`\`
### 二、Pinia 状态管理配置
安装Pinia并创建根存储，实现全局状态共享...`
    }
  },
  {
    id: 2,
    type: 'pixel',
    title: "小猫",
    author_name: "宫崎骏",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {
      category_name: "像素艺术",
      view_count: 589,
      like_count: 326
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff",
        "#ffffff", "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000", "#ffffff",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#ffffff", "#000000", "#ffccaa", "#000000", "#000000", "#ffccaa", "#000000", "#ffffff",
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 3,
    type: "image",
    title: "Moon",
    author_name: "Pigming",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {},
    payload: {
      url: "https://th.bing.com/th/id/R.987f582c510be58755c4933cda68d525?rik=C0D21hJDYvXosw&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1305%2f16%2fc4%2f20990657_1368686545122.jpg&ehk=netN2qzcCVS4ALUQfDOwxAwFcy41oxC%2b0xTFvOYy5ds%3d&risl=&pid=ImgRaw&r=0",
      size: "2560 * 1600",
    }
  },

  // ========== 新增 Article 类型（3条） ==========
  {
    id: 4,
    type: 'article',
    title: "Element Plus 按需引入与主题定制实战",
    author_name: "UI小枫",
    created_at: "2025-12-03 09:15:00",
    updated_at: "2025-12-06 11:40:00",
    summary: "详解Element Plus的按需引入配置方法，以及通过SCSS变量实现主题色自定义的技巧。",
    meta: {
      category_name: "UI组件",
      view_count: 3258,
      like_count: 189
    },
    payload: {
      content: `### 一、按需引入配置
使用unplugin-vue-components和unplugin-auto-import实现自动按需引入：
\`\`\`javascript
// vite.config.js
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] })
  ]
})
\`\`\`
### 二、主题定制
创建styles/element/index.scss覆盖默认变量：
\`\`\`scss
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    primary: #409eff,
    success: #67c23a
  )
);
\`\`\``
    }
  },
  {
    id: 5,
    type: 'article',
    title: "Vite 性能优化：从打包体积到热更新速度",
    author_name: "性能调优师",
    created_at: "2025-12-05 14:20:00",
    updated_at: "2025-12-07 09:35:00",
    summary: "分享Vite项目的核心优化手段，包括依赖预构建、代码分割、图片压缩等实用技巧。",
    meta: {
      category_name: "工程化",
      view_count: 4120,
      like_count: 256
    },
    payload: {
      content: `### 一、依赖预构建优化
Vite默认会预构建第三方依赖，通过optimizeDeps配置自定义预构建范围：
\`\`\`javascript
// vite.config.js
export default defineConfig({
  optimizeDeps: {
    include: ['axios', 'lodash-es'],
    exclude: ['vue']
  }
})
\`\`\`
### 二、打包体积优化
1. 使用rollup-plugin-visualizer分析包体积：
\`\`\`bash
npm i rollup-plugin-visualizer -D
\`\`\`
2. 开启图片压缩：安装vite-plugin-imagemin插件自动压缩图片。`
    }
  },
  {
    id: 6,
    type: 'article',
    title: "Vue3 组合式API与选项式API的对比与迁移指南",
    author_name: "Vue爱好者",
    created_at: "2025-12-07 16:00:00",
    updated_at: "2025-12-08 13:10:00",
    summary: "对比组合式API和选项式API的优劣，以及如何将老项目从选项式API迁移到组合式API。",
    meta: {
      category_name: "Vue进阶",
      view_count: 6789,
      like_count: 412
    },
    payload: {
      content: `### 一、API 设计理念差异
- 选项式API：采用面向对象的组织方式，按data、methods、computed等选项划分逻辑。
- 组合式API：采用函数式的逻辑复用方式，按业务逻辑聚合代码。

### 二、迁移步骤
1. 抽离data为ref/reactive响应式数据；
2. 抽离methods为普通函数，配合setup语法糖使用；
3. 抽离生命周期钩子，如created替换为setup内直接执行代码。

### 三、迁移示例
\`\`\`vue
<!-- 选项式API -->
<script>
export default {
  data() { return { count: 0 } },
  methods: { add() { this.count++ } }
}
</script>

<!-- 组合式API -->
<script setup>
import { ref } from 'vue'
const count = ref(0)
const add = () => count.value++
</script>
\`\`\``
    }
  },

  // ========== 新增 Pixel 类型（3条） ==========
  {
    id: 7,
    type: 'pixel',
    title: "小狗",
    author_name: "像素小子",
    created_at: "2025-12-02 11:25:00",
    updated_at: "2025-12-04 17:10:00",
    meta: {
      category_name: "像素艺术",
      view_count: 456,
      like_count: 218
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff", "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff",
        "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0", "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0",
        "#e0e0e0", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#e0e0e0",
        "#ffffff", "#8b4513", "#000000", "#8b4513", "#8b4513", "#000000", "#8b4513", "#ffffff",
        "#ffffff", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#ffffff",
        "#e0e0e0", "#ffffff", "#8b4513", "#ffffff", "#ffffff", "#8b4513", "#ffffff", "#e0e0e0",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 8,
    type: 'pixel',
    title: "爱心",
    author_name: "浪漫像素",
    created_at: "2025-12-04 15:30:00",
    updated_at: "2025-12-06 18:25:00",
    meta: {
      category_name: "像素艺术",
      view_count: 789,
      like_count: 520
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b",
        "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff",
        "#ffffff", "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 9,
    type: 'pixel',
    title: "星星",
    author_name: "星空画师",
    created_at: "2025-12-06 10:00:00",
    updated_at: "2025-12-08 12:15:00",
    meta: {
      category_name: "像素艺术",
      view_count: 623,
      like_count: 289
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#000000", "#000000", "#ffff00", "#ffff00", "#000000", "#000000", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000"
      ]
    }
  },

  // ========== 新增 Image 类型（3条） ==========
  {
    id: 10,
    type: "image",
    title: "极光",
    author_name: "摄影师大鹏",
    created_at: "2025-12-02 14:40:00",
    updated_at: "2025-12-05 16:25:00",
    meta: {
      category_name: "自然风光",
      view_count: 2890,
      like_count: 456
    },
    payload: {
      url: "https://img1.baidu.com/it/u=1279821252,3873242399&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3840 * 2160",
    }
  },
  {
    id: 11,
    type: "image",
    title: "樱花",
    author_name: "日系摄影师",
    created_at: "2025-12-04 09:50:00",
    updated_at: "2025-12-07 11:30:00",
    meta: {
      category_name: "花卉摄影",
      view_count: 3560,
      like_count: 621
    },
    payload: {
      url: "https://img2.baidu.com/it/u=2222967939,4210231275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "2400 * 1600",
    }
  },
  {
    id: 12,
    type: "image",
    title: "城市夜景",
    author_name: "城市探索者",
    created_at: "2025-12-08 18:10:00",
    updated_at: "2025-12-09 10:20:00",
    meta: {
      category_name: "城市风光",
      view_count: 1980,
      like_count: 312
    },
    payload: {
      url: "https://img0.baidu.com/it/u=3090436529,1829102275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3000 * 2000",
    }
  },
  {
    id: 1,
    type: 'article',
    title: "Vue3 + Pinia 企业级博客系统从0到1搭建",
    author_name: "前端老周",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    summary: "本文详细讲解Vue3+Pinia搭建企业级博客系统的全流程。",
    meta: {
      category_name: "前端开发",
      view_count: 5892,
      like_count: 326
    },
    payload: {
      content: `### 一、项目初始化
使用 Vite 快速初始化 Vue3 项目：
\`\`\`bash
npm create vite@latest blog-system -- --template vue
cd blog-system
npm install
\`\`\`
### 二、Pinia 状态管理配置
安装Pinia并创建根存储，实现全局状态共享...`
    }
  },
  {
    id: 2,
    type: 'pixel',
    title: "小猫",
    author_name: "宫崎骏",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {
      category_name: "像素艺术",
      view_count: 589,
      like_count: 326
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff",
        "#ffffff", "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000", "#ffffff",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#ffffff", "#000000", "#ffccaa", "#000000", "#000000", "#ffccaa", "#000000", "#ffffff",
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 3,
    type: "image",
    title: "Moon",
    author_name: "Pigming",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {},
    payload: {
      url: "https://th.bing.com/th/id/R.987f582c510be58755c4933cda68d525?rik=C0D21hJDYvXosw&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1305%2f16%2fc4%2f20990657_1368686545122.jpg&ehk=netN2qzcCVS4ALUQfDOwxAwFcy41oxC%2b0xTFvOYy5ds%3d&risl=&pid=ImgRaw&r=0",
      size: "2560 * 1600",
    }
  },

  // ========== 新增 Article 类型（3条） ==========
  {
    id: 4,
    type: 'article',
    title: "Element Plus 按需引入与主题定制实战",
    author_name: "UI小枫",
    created_at: "2025-12-03 09:15:00",
    updated_at: "2025-12-06 11:40:00",
    summary: "详解Element Plus的按需引入配置方法，以及通过SCSS变量实现主题色自定义的技巧。",
    meta: {
      category_name: "UI组件",
      view_count: 3258,
      like_count: 189
    },
    payload: {
      content: `### 一、按需引入配置
使用unplugin-vue-components和unplugin-auto-import实现自动按需引入：
\`\`\`javascript
// vite.config.js
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] })
  ]
})
\`\`\`
### 二、主题定制
创建styles/element/index.scss覆盖默认变量：
\`\`\`scss
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    primary: #409eff,
    success: #67c23a
  )
);
\`\`\``
    }
  },
  {
    id: 5,
    type: 'article',
    title: "Vite 性能优化：从打包体积到热更新速度",
    author_name: "性能调优师",
    created_at: "2025-12-05 14:20:00",
    updated_at: "2025-12-07 09:35:00",
    summary: "分享Vite项目的核心优化手段，包括依赖预构建、代码分割、图片压缩等实用技巧。",
    meta: {
      category_name: "工程化",
      view_count: 4120,
      like_count: 256
    },
    payload: {
      content: `### 一、依赖预构建优化
Vite默认会预构建第三方依赖，通过optimizeDeps配置自定义预构建范围：
\`\`\`javascript
// vite.config.js
export default defineConfig({
  optimizeDeps: {
    include: ['axios', 'lodash-es'],
    exclude: ['vue']
  }
})
\`\`\`
### 二、打包体积优化
1. 使用rollup-plugin-visualizer分析包体积：
\`\`\`bash
npm i rollup-plugin-visualizer -D
\`\`\`
2. 开启图片压缩：安装vite-plugin-imagemin插件自动压缩图片。`
    }
  },
  {
    id: 6,
    type: 'article',
    title: "Vue3 组合式API与选项式API的对比与迁移指南",
    author_name: "Vue爱好者",
    created_at: "2025-12-07 16:00:00",
    updated_at: "2025-12-08 13:10:00",
    summary: "对比组合式API和选项式API的优劣，以及如何将老项目从选项式API迁移到组合式API。",
    meta: {
      category_name: "Vue进阶",
      view_count: 6789,
      like_count: 412
    },
    payload: {
      content: `### 一、API 设计理念差异
- 选项式API：采用面向对象的组织方式，按data、methods、computed等选项划分逻辑。
- 组合式API：采用函数式的逻辑复用方式，按业务逻辑聚合代码。

### 二、迁移步骤
1. 抽离data为ref/reactive响应式数据；
2. 抽离methods为普通函数，配合setup语法糖使用；
3. 抽离生命周期钩子，如created替换为setup内直接执行代码。

### 三、迁移示例
\`\`\`vue
<!-- 选项式API -->
<script>
export default {
  data() { return { count: 0 } },
  methods: { add() { this.count++ } }
}
</script>

<!-- 组合式API -->
<script setup>
import { ref } from 'vue'
const count = ref(0)
const add = () => count.value++
</script>
\`\`\``
    }
  },

  // ========== 新增 Pixel 类型（3条） ==========
  {
    id: 7,
    type: 'pixel',
    title: "小狗",
    author_name: "像素小子",
    created_at: "2025-12-02 11:25:00",
    updated_at: "2025-12-04 17:10:00",
    meta: {
      category_name: "像素艺术",
      view_count: 456,
      like_count: 218
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff", "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff",
        "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0", "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0",
        "#e0e0e0", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#e0e0e0",
        "#ffffff", "#8b4513", "#000000", "#8b4513", "#8b4513", "#000000", "#8b4513", "#ffffff",
        "#ffffff", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#ffffff",
        "#e0e0e0", "#ffffff", "#8b4513", "#ffffff", "#ffffff", "#8b4513", "#ffffff", "#e0e0e0",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 8,
    type: 'pixel',
    title: "爱心",
    author_name: "浪漫像素",
    created_at: "2025-12-04 15:30:00",
    updated_at: "2025-12-06 18:25:00",
    meta: {
      category_name: "像素艺术",
      view_count: 789,
      like_count: 520
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b",
        "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff",
        "#ffffff", "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 9,
    type: 'pixel',
    title: "星星",
    author_name: "星空画师",
    created_at: "2025-12-06 10:00:00",
    updated_at: "2025-12-08 12:15:00",
    meta: {
      category_name: "像素艺术",
      view_count: 623,
      like_count: 289
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#000000", "#000000", "#ffff00", "#ffff00", "#000000", "#000000", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000"
      ]
    }
  },

  // ========== 新增 Image 类型（3条） ==========
  {
    id: 10,
    type: "image",
    title: "极光",
    author_name: "摄影师大鹏",
    created_at: "2025-12-02 14:40:00",
    updated_at: "2025-12-05 16:25:00",
    meta: {
      category_name: "自然风光",
      view_count: 2890,
      like_count: 456
    },
    payload: {
      url: "https://img1.baidu.com/it/u=1279821252,3873242399&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3840 * 2160",
    }
  },
  {
    id: 11,
    type: "image",
    title: "樱花",
    author_name: "日系摄影师",
    created_at: "2025-12-04 09:50:00",
    updated_at: "2025-12-07 11:30:00",
    meta: {
      category_name: "花卉摄影",
      view_count: 3560,
      like_count: 621
    },
    payload: {
      url: "https://img2.baidu.com/it/u=2222967939,4210231275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "2400 * 1600",
    }
  },
  {
    id: 12,
    type: "image",
    title: "城市夜景",
    author_name: "城市探索者",
    created_at: "2025-12-08 18:10:00",
    updated_at: "2025-12-09 10:20:00",
    meta: {
      category_name: "城市风光",
      view_count: 1980,
      like_count: 312
    },
    payload: {
      url: "https://img0.baidu.com/it/u=3090436529,1829102275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3000 * 2000",
    }
  },
  {
    id: 1,
    type: 'article',
    title: "Vue3 + Pinia 企业级博客系统从0到1搭建",
    author_name: "前端老周",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    summary: "本文详细讲解Vue3+Pinia搭建企业级博客系统的全流程。",
    meta: {
      category_name: "前端开发",
      view_count: 5892,
      like_count: 326
    },
    payload: {
      content: `### 一、项目初始化
使用 Vite 快速初始化 Vue3 项目：
\`\`\`bash
npm create vite@latest blog-system -- --template vue
cd blog-system
npm install
\`\`\`
### 二、Pinia 状态管理配置
安装Pinia并创建根存储，实现全局状态共享...`
    }
  },
  {
    id: 2,
    type: 'pixel',
    title: "小猫",
    author_name: "宫崎骏",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {
      category_name: "像素艺术",
      view_count: 589,
      like_count: 326
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff",
        "#ffffff", "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000", "#ffffff",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#ffffff", "#000000", "#ffccaa", "#000000", "#000000", "#ffccaa", "#000000", "#ffffff",
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 3,
    type: "image",
    title: "Moon",
    author_name: "Pigming",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {},
    payload: {
      url: "https://th.bing.com/th/id/R.987f582c510be58755c4933cda68d525?rik=C0D21hJDYvXosw&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1305%2f16%2fc4%2f20990657_1368686545122.jpg&ehk=netN2qzcCVS4ALUQfDOwxAwFcy41oxC%2b0xTFvOYy5ds%3d&risl=&pid=ImgRaw&r=0",
      size: "2560 * 1600",
    }
  },

  // ========== 新增 Article 类型（3条） ==========
  {
    id: 4,
    type: 'article',
    title: "Element Plus 按需引入与主题定制实战",
    author_name: "UI小枫",
    created_at: "2025-12-03 09:15:00",
    updated_at: "2025-12-06 11:40:00",
    summary: "详解Element Plus的按需引入配置方法，以及通过SCSS变量实现主题色自定义的技巧。",
    meta: {
      category_name: "UI组件",
      view_count: 3258,
      like_count: 189
    },
    payload: {
      content: `### 一、按需引入配置
使用unplugin-vue-components和unplugin-auto-import实现自动按需引入：
\`\`\`javascript
// vite.config.js
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] })
  ]
})
\`\`\`
### 二、主题定制
创建styles/element/index.scss覆盖默认变量：
\`\`\`scss
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    primary: #409eff,
    success: #67c23a
  )
);
\`\`\``
    }
  },
  {
    id: 5,
    type: 'article',
    title: "Vite 性能优化：从打包体积到热更新速度",
    author_name: "性能调优师",
    created_at: "2025-12-05 14:20:00",
    updated_at: "2025-12-07 09:35:00",
    summary: "分享Vite项目的核心优化手段，包括依赖预构建、代码分割、图片压缩等实用技巧。",
    meta: {
      category_name: "工程化",
      view_count: 4120,
      like_count: 256
    },
    payload: {
      content: `### 一、依赖预构建优化
Vite默认会预构建第三方依赖，通过optimizeDeps配置自定义预构建范围：
\`\`\`javascript
// vite.config.js
export default defineConfig({
  optimizeDeps: {
    include: ['axios', 'lodash-es'],
    exclude: ['vue']
  }
})
\`\`\`
### 二、打包体积优化
1. 使用rollup-plugin-visualizer分析包体积：
\`\`\`bash
npm i rollup-plugin-visualizer -D
\`\`\`
2. 开启图片压缩：安装vite-plugin-imagemin插件自动压缩图片。`
    }
  },
  {
    id: 6,
    type: 'article',
    title: "Vue3 组合式API与选项式API的对比与迁移指南",
    author_name: "Vue爱好者",
    created_at: "2025-12-07 16:00:00",
    updated_at: "2025-12-08 13:10:00",
    summary: "对比组合式API和选项式API的优劣，以及如何将老项目从选项式API迁移到组合式API。",
    meta: {
      category_name: "Vue进阶",
      view_count: 6789,
      like_count: 412
    },
    payload: {
      content: `### 一、API 设计理念差异
- 选项式API：采用面向对象的组织方式，按data、methods、computed等选项划分逻辑。
- 组合式API：采用函数式的逻辑复用方式，按业务逻辑聚合代码。

### 二、迁移步骤
1. 抽离data为ref/reactive响应式数据；
2. 抽离methods为普通函数，配合setup语法糖使用；
3. 抽离生命周期钩子，如created替换为setup内直接执行代码。

### 三、迁移示例
\`\`\`vue
<!-- 选项式API -->
<script>
export default {
  data() { return { count: 0 } },
  methods: { add() { this.count++ } }
}
</script>

<!-- 组合式API -->
<script setup>
import { ref } from 'vue'
const count = ref(0)
const add = () => count.value++
</script>
\`\`\``
    }
  },

  // ========== 新增 Pixel 类型（3条） ==========
  {
    id: 7,
    type: 'pixel',
    title: "小狗",
    author_name: "像素小子",
    created_at: "2025-12-02 11:25:00",
    updated_at: "2025-12-04 17:10:00",
    meta: {
      category_name: "像素艺术",
      view_count: 456,
      like_count: 218
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff", "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff",
        "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0", "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0",
        "#e0e0e0", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#e0e0e0",
        "#ffffff", "#8b4513", "#000000", "#8b4513", "#8b4513", "#000000", "#8b4513", "#ffffff",
        "#ffffff", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#ffffff",
        "#e0e0e0", "#ffffff", "#8b4513", "#ffffff", "#ffffff", "#8b4513", "#ffffff", "#e0e0e0",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 8,
    type: 'pixel',
    title: "爱心",
    author_name: "浪漫像素",
    created_at: "2025-12-04 15:30:00",
    updated_at: "2025-12-06 18:25:00",
    meta: {
      category_name: "像素艺术",
      view_count: 789,
      like_count: 520
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b",
        "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff",
        "#ffffff", "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 9,
    type: 'pixel',
    title: "星星",
    author_name: "星空画师",
    created_at: "2025-12-06 10:00:00",
    updated_at: "2025-12-08 12:15:00",
    meta: {
      category_name: "像素艺术",
      view_count: 623,
      like_count: 289
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#000000", "#000000", "#ffff00", "#ffff00", "#000000", "#000000", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000"
      ]
    }
  },

  // ========== 新增 Image 类型（3条） ==========
  {
    id: 10,
    type: "image",
    title: "极光",
    author_name: "摄影师大鹏",
    created_at: "2025-12-02 14:40:00",
    updated_at: "2025-12-05 16:25:00",
    meta: {
      category_name: "自然风光",
      view_count: 2890,
      like_count: 456
    },
    payload: {
      url: "https://img1.baidu.com/it/u=1279821252,3873242399&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3840 * 2160",
    }
  },
  {
    id: 11,
    type: "image",
    title: "樱花",
    author_name: "日系摄影师",
    created_at: "2025-12-04 09:50:00",
    updated_at: "2025-12-07 11:30:00",
    meta: {
      category_name: "花卉摄影",
      view_count: 3560,
      like_count: 621
    },
    payload: {
      url: "https://img2.baidu.com/it/u=2222967939,4210231275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "2400 * 1600",
    }
  },
  {
    id: 12,
    type: "image",
    title: "城市夜景",
    author_name: "城市探索者",
    created_at: "2025-12-08 18:10:00",
    updated_at: "2025-12-09 10:20:00",
    meta: {
      category_name: "城市风光",
      view_count: 1980,
      like_count: 312
    },
    payload: {
      url: "https://img0.baidu.com/it/u=3090436529,1829102275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3000 * 2000",
    }
  },
  {
    id: 1,
    type: 'article',
    title: "Vue3 + Pinia 企业级博客系统从0到1搭建",
    author_name: "前端老周",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    summary: "本文详细讲解Vue3+Pinia搭建企业级博客系统的全流程。",
    meta: {
      category_name: "前端开发",
      view_count: 5892,
      like_count: 326
    },
    payload: {
      content: `### 一、项目初始化
使用 Vite 快速初始化 Vue3 项目：
\`\`\`bash
npm create vite@latest blog-system -- --template vue
cd blog-system
npm install
\`\`\`
### 二、Pinia 状态管理配置
安装Pinia并创建根存储，实现全局状态共享...`
    }
  },
  {
    id: 2,
    type: 'pixel',
    title: "小猫",
    author_name: "宫崎骏",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {
      category_name: "像素艺术",
      view_count: 589,
      like_count: 326
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff",
        "#ffffff", "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000", "#ffffff",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#ffffff", "#000000", "#ffccaa", "#000000", "#000000", "#ffccaa", "#000000", "#ffffff",
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 3,
    type: "image",
    title: "Moon",
    author_name: "Pigming",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {},
    payload: {
      url: "https://th.bing.com/th/id/R.987f582c510be58755c4933cda68d525?rik=C0D21hJDYvXosw&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1305%2f16%2fc4%2f20990657_1368686545122.jpg&ehk=netN2qzcCVS4ALUQfDOwxAwFcy41oxC%2b0xTFvOYy5ds%3d&risl=&pid=ImgRaw&r=0",
      size: "2560 * 1600",
    }
  },

  // ========== 新增 Article 类型（3条） ==========
  {
    id: 4,
    type: 'article',
    title: "Element Plus 按需引入与主题定制实战",
    author_name: "UI小枫",
    created_at: "2025-12-03 09:15:00",
    updated_at: "2025-12-06 11:40:00",
    summary: "详解Element Plus的按需引入配置方法，以及通过SCSS变量实现主题色自定义的技巧。",
    meta: {
      category_name: "UI组件",
      view_count: 3258,
      like_count: 189
    },
    payload: {
      content: `### 一、按需引入配置
使用unplugin-vue-components和unplugin-auto-import实现自动按需引入：
\`\`\`javascript
// vite.config.js
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] })
  ]
})
\`\`\`
### 二、主题定制
创建styles/element/index.scss覆盖默认变量：
\`\`\`scss
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    primary: #409eff,
    success: #67c23a
  )
);
\`\`\``
    }
  },
  {
    id: 5,
    type: 'article',
    title: "Vite 性能优化：从打包体积到热更新速度",
    author_name: "性能调优师",
    created_at: "2025-12-05 14:20:00",
    updated_at: "2025-12-07 09:35:00",
    summary: "分享Vite项目的核心优化手段，包括依赖预构建、代码分割、图片压缩等实用技巧。",
    meta: {
      category_name: "工程化",
      view_count: 4120,
      like_count: 256
    },
    payload: {
      content: `### 一、依赖预构建优化
Vite默认会预构建第三方依赖，通过optimizeDeps配置自定义预构建范围：
\`\`\`javascript
// vite.config.js
export default defineConfig({
  optimizeDeps: {
    include: ['axios', 'lodash-es'],
    exclude: ['vue']
  }
})
\`\`\`
### 二、打包体积优化
1. 使用rollup-plugin-visualizer分析包体积：
\`\`\`bash
npm i rollup-plugin-visualizer -D
\`\`\`
2. 开启图片压缩：安装vite-plugin-imagemin插件自动压缩图片。`
    }
  },
  {
    id: 6,
    type: 'article',
    title: "Vue3 组合式API与选项式API的对比与迁移指南",
    author_name: "Vue爱好者",
    created_at: "2025-12-07 16:00:00",
    updated_at: "2025-12-08 13:10:00",
    summary: "对比组合式API和选项式API的优劣，以及如何将老项目从选项式API迁移到组合式API。",
    meta: {
      category_name: "Vue进阶",
      view_count: 6789,
      like_count: 412
    },
    payload: {
      content: `### 一、API 设计理念差异
- 选项式API：采用面向对象的组织方式，按data、methods、computed等选项划分逻辑。
- 组合式API：采用函数式的逻辑复用方式，按业务逻辑聚合代码。

### 二、迁移步骤
1. 抽离data为ref/reactive响应式数据；
2. 抽离methods为普通函数，配合setup语法糖使用；
3. 抽离生命周期钩子，如created替换为setup内直接执行代码。

### 三、迁移示例
\`\`\`vue
<!-- 选项式API -->
<script>
export default {
  data() { return { count: 0 } },
  methods: { add() { this.count++ } }
}
</script>

<!-- 组合式API -->
<script setup>
import { ref } from 'vue'
const count = ref(0)
const add = () => count.value++
</script>
\`\`\``
    }
  },

  // ========== 新增 Pixel 类型（3条） ==========
  {
    id: 7,
    type: 'pixel',
    title: "小狗",
    author_name: "像素小子",
    created_at: "2025-12-02 11:25:00",
    updated_at: "2025-12-04 17:10:00",
    meta: {
      category_name: "像素艺术",
      view_count: 456,
      like_count: 218
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff", "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff",
        "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0", "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0",
        "#e0e0e0", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#e0e0e0",
        "#ffffff", "#8b4513", "#000000", "#8b4513", "#8b4513", "#000000", "#8b4513", "#ffffff",
        "#ffffff", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#ffffff",
        "#e0e0e0", "#ffffff", "#8b4513", "#ffffff", "#ffffff", "#8b4513", "#ffffff", "#e0e0e0",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 8,
    type: 'pixel',
    title: "爱心",
    author_name: "浪漫像素",
    created_at: "2025-12-04 15:30:00",
    updated_at: "2025-12-06 18:25:00",
    meta: {
      category_name: "像素艺术",
      view_count: 789,
      like_count: 520
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b",
        "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff",
        "#ffffff", "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 9,
    type: 'pixel',
    title: "星星",
    author_name: "星空画师",
    created_at: "2025-12-06 10:00:00",
    updated_at: "2025-12-08 12:15:00",
    meta: {
      category_name: "像素艺术",
      view_count: 623,
      like_count: 289
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#000000", "#000000", "#ffff00", "#ffff00", "#000000", "#000000", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000"
      ]
    }
  },

  // ========== 新增 Image 类型（3条） ==========
  {
    id: 10,
    type: "image",
    title: "极光",
    author_name: "摄影师大鹏",
    created_at: "2025-12-02 14:40:00",
    updated_at: "2025-12-05 16:25:00",
    meta: {
      category_name: "自然风光",
      view_count: 2890,
      like_count: 456
    },
    payload: {
      url: "https://img1.baidu.com/it/u=1279821252,3873242399&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3840 * 2160",
    }
  },
  {
    id: 11,
    type: "image",
    title: "樱花",
    author_name: "日系摄影师",
    created_at: "2025-12-04 09:50:00",
    updated_at: "2025-12-07 11:30:00",
    meta: {
      category_name: "花卉摄影",
      view_count: 3560,
      like_count: 621
    },
    payload: {
      url: "https://img2.baidu.com/it/u=2222967939,4210231275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "2400 * 1600",
    }
  },
  {
    id: 12,
    type: "image",
    title: "城市夜景",
    author_name: "城市探索者",
    created_at: "2025-12-08 18:10:00",
    updated_at: "2025-12-09 10:20:00",
    meta: {
      category_name: "城市风光",
      view_count: 1980,
      like_count: 312
    },
    payload: {
      url: "https://img0.baidu.com/it/u=3090436529,1829102275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3000 * 2000",
    }
  },
  {
    id: 1,
    type: 'article',
    title: "Vue3 + Pinia 企业级博客系统从0到1搭建",
    author_name: "前端老周",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    summary: "本文详细讲解Vue3+Pinia搭建企业级博客系统的全流程。",
    meta: {
      category_name: "前端开发",
      view_count: 5892,
      like_count: 326
    },
    payload: {
      content: `### 一、项目初始化
使用 Vite 快速初始化 Vue3 项目：
\`\`\`bash
npm create vite@latest blog-system -- --template vue
cd blog-system
npm install
\`\`\`
### 二、Pinia 状态管理配置
安装Pinia并创建根存储，实现全局状态共享...`
    }
  },
  {
    id: 2,
    type: 'pixel',
    title: "小猫",
    author_name: "宫崎骏",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {
      category_name: "像素艺术",
      view_count: 589,
      like_count: 326
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff",
        "#ffffff", "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000", "#ffffff",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#ffffff", "#000000", "#ffccaa", "#000000", "#000000", "#ffccaa", "#000000", "#ffffff",
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 3,
    type: "image",
    title: "Moon",
    author_name: "Pigming",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {},
    payload: {
      url: "https://th.bing.com/th/id/R.987f582c510be58755c4933cda68d525?rik=C0D21hJDYvXosw&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1305%2f16%2fc4%2f20990657_1368686545122.jpg&ehk=netN2qzcCVS4ALUQfDOwxAwFcy41oxC%2b0xTFvOYy5ds%3d&risl=&pid=ImgRaw&r=0",
      size: "2560 * 1600",
    }
  },

  // ========== 新增 Article 类型（3条） ==========
  {
    id: 4,
    type: 'article',
    title: "Element Plus 按需引入与主题定制实战",
    author_name: "UI小枫",
    created_at: "2025-12-03 09:15:00",
    updated_at: "2025-12-06 11:40:00",
    summary: "详解Element Plus的按需引入配置方法，以及通过SCSS变量实现主题色自定义的技巧。",
    meta: {
      category_name: "UI组件",
      view_count: 3258,
      like_count: 189
    },
    payload: {
      content: `### 一、按需引入配置
使用unplugin-vue-components和unplugin-auto-import实现自动按需引入：
\`\`\`javascript
// vite.config.js
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] })
  ]
})
\`\`\`
### 二、主题定制
创建styles/element/index.scss覆盖默认变量：
\`\`\`scss
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    primary: #409eff,
    success: #67c23a
  )
);
\`\`\``
    }
  },
  {
    id: 5,
    type: 'article',
    title: "Vite 性能优化：从打包体积到热更新速度",
    author_name: "性能调优师",
    created_at: "2025-12-05 14:20:00",
    updated_at: "2025-12-07 09:35:00",
    summary: "分享Vite项目的核心优化手段，包括依赖预构建、代码分割、图片压缩等实用技巧。",
    meta: {
      category_name: "工程化",
      view_count: 4120,
      like_count: 256
    },
    payload: {
      content: `### 一、依赖预构建优化
Vite默认会预构建第三方依赖，通过optimizeDeps配置自定义预构建范围：
\`\`\`javascript
// vite.config.js
export default defineConfig({
  optimizeDeps: {
    include: ['axios', 'lodash-es'],
    exclude: ['vue']
  }
})
\`\`\`
### 二、打包体积优化
1. 使用rollup-plugin-visualizer分析包体积：
\`\`\`bash
npm i rollup-plugin-visualizer -D
\`\`\`
2. 开启图片压缩：安装vite-plugin-imagemin插件自动压缩图片。`
    }
  },
  {
    id: 6,
    type: 'article',
    title: "Vue3 组合式API与选项式API的对比与迁移指南",
    author_name: "Vue爱好者",
    created_at: "2025-12-07 16:00:00",
    updated_at: "2025-12-08 13:10:00",
    summary: "对比组合式API和选项式API的优劣，以及如何将老项目从选项式API迁移到组合式API。",
    meta: {
      category_name: "Vue进阶",
      view_count: 6789,
      like_count: 412
    },
    payload: {
      content: `### 一、API 设计理念差异
- 选项式API：采用面向对象的组织方式，按data、methods、computed等选项划分逻辑。
- 组合式API：采用函数式的逻辑复用方式，按业务逻辑聚合代码。

### 二、迁移步骤
1. 抽离data为ref/reactive响应式数据；
2. 抽离methods为普通函数，配合setup语法糖使用；
3. 抽离生命周期钩子，如created替换为setup内直接执行代码。

### 三、迁移示例
\`\`\`vue
<!-- 选项式API -->
<script>
export default {
  data() { return { count: 0 } },
  methods: { add() { this.count++ } }
}
</script>

<!-- 组合式API -->
<script setup>
import { ref } from 'vue'
const count = ref(0)
const add = () => count.value++
</script>
\`\`\``
    }
  },

  // ========== 新增 Pixel 类型（3条） ==========
  {
    id: 7,
    type: 'pixel',
    title: "小狗",
    author_name: "像素小子",
    created_at: "2025-12-02 11:25:00",
    updated_at: "2025-12-04 17:10:00",
    meta: {
      category_name: "像素艺术",
      view_count: 456,
      like_count: 218
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff", "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff",
        "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0", "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0",
        "#e0e0e0", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#e0e0e0",
        "#ffffff", "#8b4513", "#000000", "#8b4513", "#8b4513", "#000000", "#8b4513", "#ffffff",
        "#ffffff", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#ffffff",
        "#e0e0e0", "#ffffff", "#8b4513", "#ffffff", "#ffffff", "#8b4513", "#ffffff", "#e0e0e0",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 8,
    type: 'pixel',
    title: "爱心",
    author_name: "浪漫像素",
    created_at: "2025-12-04 15:30:00",
    updated_at: "2025-12-06 18:25:00",
    meta: {
      category_name: "像素艺术",
      view_count: 789,
      like_count: 520
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b",
        "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff",
        "#ffffff", "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 9,
    type: 'pixel',
    title: "星星",
    author_name: "星空画师",
    created_at: "2025-12-06 10:00:00",
    updated_at: "2025-12-08 12:15:00",
    meta: {
      category_name: "像素艺术",
      view_count: 623,
      like_count: 289
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#000000", "#000000", "#ffff00", "#ffff00", "#000000", "#000000", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000"
      ]
    }
  },

  // ========== 新增 Image 类型（3条） ==========
  {
    id: 10,
    type: "image",
    title: "极光",
    author_name: "摄影师大鹏",
    created_at: "2025-12-02 14:40:00",
    updated_at: "2025-12-05 16:25:00",
    meta: {
      category_name: "自然风光",
      view_count: 2890,
      like_count: 456
    },
    payload: {
      url: "https://img1.baidu.com/it/u=1279821252,3873242399&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3840 * 2160",
    }
  },
  {
    id: 11,
    type: "image",
    title: "樱花",
    author_name: "日系摄影师",
    created_at: "2025-12-04 09:50:00",
    updated_at: "2025-12-07 11:30:00",
    meta: {
      category_name: "花卉摄影",
      view_count: 3560,
      like_count: 621
    },
    payload: {
      url: "https://img2.baidu.com/it/u=2222967939,4210231275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "2400 * 1600",
    }
  },
  {
    id: 12,
    type: "image",
    title: "城市夜景",
    author_name: "城市探索者",
    created_at: "2025-12-08 18:10:00",
    updated_at: "2025-12-09 10:20:00",
    meta: {
      category_name: "城市风光",
      view_count: 1980,
      like_count: 312
    },
    payload: {
      url: "https://img0.baidu.com/it/u=3090436529,1829102275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3000 * 2000",
    }
  },
  {
    id: 1,
    type: 'article',
    title: "Vue3 + Pinia 企业级博客系统从0到1搭建",
    author_name: "前端老周",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    summary: "本文详细讲解Vue3+Pinia搭建企业级博客系统的全流程。",
    meta: {
      category_name: "前端开发",
      view_count: 5892,
      like_count: 326
    },
    payload: {
      content: `### 一、项目初始化
使用 Vite 快速初始化 Vue3 项目：
\`\`\`bash
npm create vite@latest blog-system -- --template vue
cd blog-system
npm install
\`\`\`
### 二、Pinia 状态管理配置
安装Pinia并创建根存储，实现全局状态共享...`
    }
  },
  {
    id: 2,
    type: 'pixel',
    title: "小猫",
    author_name: "宫崎骏",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {
      category_name: "像素艺术",
      view_count: 589,
      like_count: 326
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff",
        "#ffffff", "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000", "#ffffff",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#ffffff", "#000000", "#ffccaa", "#000000", "#000000", "#ffccaa", "#000000", "#ffffff",
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 3,
    type: "image",
    title: "Moon",
    author_name: "Pigming",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {},
    payload: {
      url: "https://th.bing.com/th/id/R.987f582c510be58755c4933cda68d525?rik=C0D21hJDYvXosw&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1305%2f16%2fc4%2f20990657_1368686545122.jpg&ehk=netN2qzcCVS4ALUQfDOwxAwFcy41oxC%2b0xTFvOYy5ds%3d&risl=&pid=ImgRaw&r=0",
      size: "2560 * 1600",
    }
  },

  // ========== 新增 Article 类型（3条） ==========
  {
    id: 4,
    type: 'article',
    title: "Element Plus 按需引入与主题定制实战",
    author_name: "UI小枫",
    created_at: "2025-12-03 09:15:00",
    updated_at: "2025-12-06 11:40:00",
    summary: "详解Element Plus的按需引入配置方法，以及通过SCSS变量实现主题色自定义的技巧。",
    meta: {
      category_name: "UI组件",
      view_count: 3258,
      like_count: 189
    },
    payload: {
      content: `### 一、按需引入配置
使用unplugin-vue-components和unplugin-auto-import实现自动按需引入：
\`\`\`javascript
// vite.config.js
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] })
  ]
})
\`\`\`
### 二、主题定制
创建styles/element/index.scss覆盖默认变量：
\`\`\`scss
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    primary: #409eff,
    success: #67c23a
  )
);
\`\`\``
    }
  },
  {
    id: 5,
    type: 'article',
    title: "Vite 性能优化：从打包体积到热更新速度",
    author_name: "性能调优师",
    created_at: "2025-12-05 14:20:00",
    updated_at: "2025-12-07 09:35:00",
    summary: "分享Vite项目的核心优化手段，包括依赖预构建、代码分割、图片压缩等实用技巧。",
    meta: {
      category_name: "工程化",
      view_count: 4120,
      like_count: 256
    },
    payload: {
      content: `### 一、依赖预构建优化
Vite默认会预构建第三方依赖，通过optimizeDeps配置自定义预构建范围：
\`\`\`javascript
// vite.config.js
export default defineConfig({
  optimizeDeps: {
    include: ['axios', 'lodash-es'],
    exclude: ['vue']
  }
})
\`\`\`
### 二、打包体积优化
1. 使用rollup-plugin-visualizer分析包体积：
\`\`\`bash
npm i rollup-plugin-visualizer -D
\`\`\`
2. 开启图片压缩：安装vite-plugin-imagemin插件自动压缩图片。`
    }
  },
  {
    id: 6,
    type: 'article',
    title: "Vue3 组合式API与选项式API的对比与迁移指南",
    author_name: "Vue爱好者",
    created_at: "2025-12-07 16:00:00",
    updated_at: "2025-12-08 13:10:00",
    summary: "对比组合式API和选项式API的优劣，以及如何将老项目从选项式API迁移到组合式API。",
    meta: {
      category_name: "Vue进阶",
      view_count: 6789,
      like_count: 412
    },
    payload: {
      content: `### 一、API 设计理念差异
- 选项式API：采用面向对象的组织方式，按data、methods、computed等选项划分逻辑。
- 组合式API：采用函数式的逻辑复用方式，按业务逻辑聚合代码。

### 二、迁移步骤
1. 抽离data为ref/reactive响应式数据；
2. 抽离methods为普通函数，配合setup语法糖使用；
3. 抽离生命周期钩子，如created替换为setup内直接执行代码。

### 三、迁移示例
\`\`\`vue
<!-- 选项式API -->
<script>
export default {
  data() { return { count: 0 } },
  methods: { add() { this.count++ } }
}
</script>

<!-- 组合式API -->
<script setup>
import { ref } from 'vue'
const count = ref(0)
const add = () => count.value++
</script>
\`\`\``
    }
  },

  // ========== 新增 Pixel 类型（3条） ==========
  {
    id: 7,
    type: 'pixel',
    title: "小狗",
    author_name: "像素小子",
    created_at: "2025-12-02 11:25:00",
    updated_at: "2025-12-04 17:10:00",
    meta: {
      category_name: "像素艺术",
      view_count: 456,
      like_count: 218
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff", "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff",
        "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0", "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0",
        "#e0e0e0", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#e0e0e0",
        "#ffffff", "#8b4513", "#000000", "#8b4513", "#8b4513", "#000000", "#8b4513", "#ffffff",
        "#ffffff", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#ffffff",
        "#e0e0e0", "#ffffff", "#8b4513", "#ffffff", "#ffffff", "#8b4513", "#ffffff", "#e0e0e0",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 8,
    type: 'pixel',
    title: "爱心",
    author_name: "浪漫像素",
    created_at: "2025-12-04 15:30:00",
    updated_at: "2025-12-06 18:25:00",
    meta: {
      category_name: "像素艺术",
      view_count: 789,
      like_count: 520
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b",
        "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff",
        "#ffffff", "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 9,
    type: 'pixel',
    title: "星星",
    author_name: "星空画师",
    created_at: "2025-12-06 10:00:00",
    updated_at: "2025-12-08 12:15:00",
    meta: {
      category_name: "像素艺术",
      view_count: 623,
      like_count: 289
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#000000", "#000000", "#ffff00", "#ffff00", "#000000", "#000000", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000"
      ]
    }
  },

  // ========== 新增 Image 类型（3条） ==========
  {
    id: 10,
    type: "image",
    title: "极光",
    author_name: "摄影师大鹏",
    created_at: "2025-12-02 14:40:00",
    updated_at: "2025-12-05 16:25:00",
    meta: {
      category_name: "自然风光",
      view_count: 2890,
      like_count: 456
    },
    payload: {
      url: "https://img1.baidu.com/it/u=1279821252,3873242399&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3840 * 2160",
    }
  },
  {
    id: 11,
    type: "image",
    title: "樱花",
    author_name: "日系摄影师",
    created_at: "2025-12-04 09:50:00",
    updated_at: "2025-12-07 11:30:00",
    meta: {
      category_name: "花卉摄影",
      view_count: 3560,
      like_count: 621
    },
    payload: {
      url: "https://img2.baidu.com/it/u=2222967939,4210231275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "2400 * 1600",
    }
  },
  {
    id: 12,
    type: "image",
    title: "城市夜景",
    author_name: "城市探索者",
    created_at: "2025-12-08 18:10:00",
    updated_at: "2025-12-09 10:20:00",
    meta: {
      category_name: "城市风光",
      view_count: 1980,
      like_count: 312
    },
    payload: {
      url: "https://img0.baidu.com/it/u=3090436529,1829102275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3000 * 2000",
    }
  },
  {
    id: 1,
    type: 'article',
    title: "Vue3 + Pinia 企业级博客系统从0到1搭建",
    author_name: "前端老周",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    summary: "本文详细讲解Vue3+Pinia搭建企业级博客系统的全流程。",
    meta: {
      category_name: "前端开发",
      view_count: 5892,
      like_count: 326
    },
    payload: {
      content: `### 一、项目初始化
使用 Vite 快速初始化 Vue3 项目：
\`\`\`bash
npm create vite@latest blog-system -- --template vue
cd blog-system
npm install
\`\`\`
### 二、Pinia 状态管理配置
安装Pinia并创建根存储，实现全局状态共享...`
    }
  },
  {
    id: 2,
    type: 'pixel',
    title: "小猫",
    author_name: "宫崎骏",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {
      category_name: "像素艺术",
      view_count: 589,
      like_count: 326
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff",
        "#ffffff", "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000", "#ffffff",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#ffffff", "#000000", "#ffccaa", "#000000", "#000000", "#ffccaa", "#000000", "#ffffff",
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 3,
    type: "image",
    title: "Moon",
    author_name: "Pigming",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {},
    payload: {
      url: "https://th.bing.com/th/id/R.987f582c510be58755c4933cda68d525?rik=C0D21hJDYvXosw&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1305%2f16%2fc4%2f20990657_1368686545122.jpg&ehk=netN2qzcCVS4ALUQfDOwxAwFcy41oxC%2b0xTFvOYy5ds%3d&risl=&pid=ImgRaw&r=0",
      size: "2560 * 1600",
    }
  },

  // ========== 新增 Article 类型（3条） ==========
  {
    id: 4,
    type: 'article',
    title: "Element Plus 按需引入与主题定制实战",
    author_name: "UI小枫",
    created_at: "2025-12-03 09:15:00",
    updated_at: "2025-12-06 11:40:00",
    summary: "详解Element Plus的按需引入配置方法，以及通过SCSS变量实现主题色自定义的技巧。",
    meta: {
      category_name: "UI组件",
      view_count: 3258,
      like_count: 189
    },
    payload: {
      content: `### 一、按需引入配置
使用unplugin-vue-components和unplugin-auto-import实现自动按需引入：
\`\`\`javascript
// vite.config.js
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] })
  ]
})
\`\`\`
### 二、主题定制
创建styles/element/index.scss覆盖默认变量：
\`\`\`scss
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    primary: #409eff,
    success: #67c23a
  )
);
\`\`\``
    }
  },
  {
    id: 5,
    type: 'article',
    title: "Vite 性能优化：从打包体积到热更新速度",
    author_name: "性能调优师",
    created_at: "2025-12-05 14:20:00",
    updated_at: "2025-12-07 09:35:00",
    summary: "分享Vite项目的核心优化手段，包括依赖预构建、代码分割、图片压缩等实用技巧。",
    meta: {
      category_name: "工程化",
      view_count: 4120,
      like_count: 256
    },
    payload: {
      content: `### 一、依赖预构建优化
Vite默认会预构建第三方依赖，通过optimizeDeps配置自定义预构建范围：
\`\`\`javascript
// vite.config.js
export default defineConfig({
  optimizeDeps: {
    include: ['axios', 'lodash-es'],
    exclude: ['vue']
  }
})
\`\`\`
### 二、打包体积优化
1. 使用rollup-plugin-visualizer分析包体积：
\`\`\`bash
npm i rollup-plugin-visualizer -D
\`\`\`
2. 开启图片压缩：安装vite-plugin-imagemin插件自动压缩图片。`
    }
  },
  {
    id: 6,
    type: 'article',
    title: "Vue3 组合式API与选项式API的对比与迁移指南",
    author_name: "Vue爱好者",
    created_at: "2025-12-07 16:00:00",
    updated_at: "2025-12-08 13:10:00",
    summary: "对比组合式API和选项式API的优劣，以及如何将老项目从选项式API迁移到组合式API。",
    meta: {
      category_name: "Vue进阶",
      view_count: 6789,
      like_count: 412
    },
    payload: {
      content: `### 一、API 设计理念差异
- 选项式API：采用面向对象的组织方式，按data、methods、computed等选项划分逻辑。
- 组合式API：采用函数式的逻辑复用方式，按业务逻辑聚合代码。

### 二、迁移步骤
1. 抽离data为ref/reactive响应式数据；
2. 抽离methods为普通函数，配合setup语法糖使用；
3. 抽离生命周期钩子，如created替换为setup内直接执行代码。

### 三、迁移示例
\`\`\`vue
<!-- 选项式API -->
<script>
export default {
  data() { return { count: 0 } },
  methods: { add() { this.count++ } }
}
</script>

<!-- 组合式API -->
<script setup>
import { ref } from 'vue'
const count = ref(0)
const add = () => count.value++
</script>
\`\`\``
    }
  },

  // ========== 新增 Pixel 类型（3条） ==========
  {
    id: 7,
    type: 'pixel',
    title: "小狗",
    author_name: "像素小子",
    created_at: "2025-12-02 11:25:00",
    updated_at: "2025-12-04 17:10:00",
    meta: {
      category_name: "像素艺术",
      view_count: 456,
      like_count: 218
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff", "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff",
        "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0", "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0",
        "#e0e0e0", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#e0e0e0",
        "#ffffff", "#8b4513", "#000000", "#8b4513", "#8b4513", "#000000", "#8b4513", "#ffffff",
        "#ffffff", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#ffffff",
        "#e0e0e0", "#ffffff", "#8b4513", "#ffffff", "#ffffff", "#8b4513", "#ffffff", "#e0e0e0",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 8,
    type: 'pixel',
    title: "爱心",
    author_name: "浪漫像素",
    created_at: "2025-12-04 15:30:00",
    updated_at: "2025-12-06 18:25:00",
    meta: {
      category_name: "像素艺术",
      view_count: 789,
      like_count: 520
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b",
        "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff",
        "#ffffff", "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 9,
    type: 'pixel',
    title: "星星",
    author_name: "星空画师",
    created_at: "2025-12-06 10:00:00",
    updated_at: "2025-12-08 12:15:00",
    meta: {
      category_name: "像素艺术",
      view_count: 623,
      like_count: 289
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#000000", "#000000", "#ffff00", "#ffff00", "#000000", "#000000", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000"
      ]
    }
  },

  // ========== 新增 Image 类型（3条） ==========
  {
    id: 10,
    type: "image",
    title: "极光",
    author_name: "摄影师大鹏",
    created_at: "2025-12-02 14:40:00",
    updated_at: "2025-12-05 16:25:00",
    meta: {
      category_name: "自然风光",
      view_count: 2890,
      like_count: 456
    },
    payload: {
      url: "https://img1.baidu.com/it/u=1279821252,3873242399&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3840 * 2160",
    }
  },
  {
    id: 11,
    type: "image",
    title: "樱花",
    author_name: "日系摄影师",
    created_at: "2025-12-04 09:50:00",
    updated_at: "2025-12-07 11:30:00",
    meta: {
      category_name: "花卉摄影",
      view_count: 3560,
      like_count: 621
    },
    payload: {
      url: "https://img2.baidu.com/it/u=2222967939,4210231275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "2400 * 1600",
    }
  },
  {
    id: 12,
    type: "image",
    title: "城市夜景",
    author_name: "城市探索者",
    created_at: "2025-12-08 18:10:00",
    updated_at: "2025-12-09 10:20:00",
    meta: {
      category_name: "城市风光",
      view_count: 1980,
      like_count: 312
    },
    payload: {
      url: "https://img0.baidu.com/it/u=3090436529,1829102275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3000 * 2000",
    }
  },
  {
    id: 1,
    type: 'article',
    title: "Vue3 + Pinia 企业级博客系统从0到1搭建",
    author_name: "前端老周",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    summary: "本文详细讲解Vue3+Pinia搭建企业级博客系统的全流程。",
    meta: {
      category_name: "前端开发",
      view_count: 5892,
      like_count: 326
    },
    payload: {
      content: `### 一、项目初始化
使用 Vite 快速初始化 Vue3 项目：
\`\`\`bash
npm create vite@latest blog-system -- --template vue
cd blog-system
npm install
\`\`\`
### 二、Pinia 状态管理配置
安装Pinia并创建根存储，实现全局状态共享...`
    }
  },
  {
    id: 2,
    type: 'pixel',
    title: "小猫",
    author_name: "宫崎骏",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {
      category_name: "像素艺术",
      view_count: 589,
      like_count: 326
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff",
        "#ffffff", "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000", "#ffffff",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#ffccaa", "#000000",
        "#000000", "#ffccaa", "#000000", "#ffccaa", "#ffccaa", "#000000", "#ffccaa", "#000000",
        "#ffffff", "#000000", "#ffccaa", "#000000", "#000000", "#ffccaa", "#000000", "#ffffff",
        "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 3,
    type: "image",
    title: "Moon",
    author_name: "Pigming",
    created_at: "2025-12-01 10:30:00",
    updated_at: "2025-12-05 15:20:00",
    meta: {},
    payload: {
      url: "https://th.bing.com/th/id/R.987f582c510be58755c4933cda68d525?rik=C0D21hJDYvXosw&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1305%2f16%2fc4%2f20990657_1368686545122.jpg&ehk=netN2qzcCVS4ALUQfDOwxAwFcy41oxC%2b0xTFvOYy5ds%3d&risl=&pid=ImgRaw&r=0",
      size: "2560 * 1600",
    }
  },

  // ========== 新增 Article 类型（3条） ==========
  {
    id: 4,
    type: 'article',
    title: "Element Plus 按需引入与主题定制实战",
    author_name: "UI小枫",
    created_at: "2025-12-03 09:15:00",
    updated_at: "2025-12-06 11:40:00",
    summary: "详解Element Plus的按需引入配置方法，以及通过SCSS变量实现主题色自定义的技巧。",
    meta: {
      category_name: "UI组件",
      view_count: 3258,
      like_count: 189
    },
    payload: {
      content: `### 一、按需引入配置
使用unplugin-vue-components和unplugin-auto-import实现自动按需引入：
\`\`\`javascript
// vite.config.js
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] })
  ]
})
\`\`\`
### 二、主题定制
创建styles/element/index.scss覆盖默认变量：
\`\`\`scss
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    primary: #409eff,
    success: #67c23a
  )
);
\`\`\``
    }
  },
  {
    id: 5,
    type: 'article',
    title: "Vite 性能优化：从打包体积到热更新速度",
    author_name: "性能调优师",
    created_at: "2025-12-05 14:20:00",
    updated_at: "2025-12-07 09:35:00",
    summary: "分享Vite项目的核心优化手段，包括依赖预构建、代码分割、图片压缩等实用技巧。",
    meta: {
      category_name: "工程化",
      view_count: 4120,
      like_count: 256
    },
    payload: {
      content: `### 一、依赖预构建优化
Vite默认会预构建第三方依赖，通过optimizeDeps配置自定义预构建范围：
\`\`\`javascript
// vite.config.js
export default defineConfig({
  optimizeDeps: {
    include: ['axios', 'lodash-es'],
    exclude: ['vue']
  }
})
\`\`\`
### 二、打包体积优化
1. 使用rollup-plugin-visualizer分析包体积：
\`\`\`bash
npm i rollup-plugin-visualizer -D
\`\`\`
2. 开启图片压缩：安装vite-plugin-imagemin插件自动压缩图片。`
    }
  },
  {
    id: 6,
    type: 'article',
    title: "Vue3 组合式API与选项式API的对比与迁移指南",
    author_name: "Vue爱好者",
    created_at: "2025-12-07 16:00:00",
    updated_at: "2025-12-08 13:10:00",
    summary: "对比组合式API和选项式API的优劣，以及如何将老项目从选项式API迁移到组合式API。",
    meta: {
      category_name: "Vue进阶",
      view_count: 6789,
      like_count: 412
    },
    payload: {
      content: `### 一、API 设计理念差异
- 选项式API：采用面向对象的组织方式，按data、methods、computed等选项划分逻辑。
- 组合式API：采用函数式的逻辑复用方式，按业务逻辑聚合代码。

### 二、迁移步骤
1. 抽离data为ref/reactive响应式数据；
2. 抽离methods为普通函数，配合setup语法糖使用；
3. 抽离生命周期钩子，如created替换为setup内直接执行代码。

### 三、迁移示例
\`\`\`vue
<!-- 选项式API -->
<script>
export default {
  data() { return { count: 0 } },
  methods: { add() { this.count++ } }
}
</script>

<!-- 组合式API -->
<script setup>
import { ref } from 'vue'
const count = ref(0)
const add = () => count.value++
</script>
\`\`\``
    }
  },

  // ========== 新增 Pixel 类型（3条） ==========
  {
    id: 7,
    type: 'pixel',
    title: "小狗",
    author_name: "像素小子",
    created_at: "2025-12-02 11:25:00",
    updated_at: "2025-12-04 17:10:00",
    meta: {
      category_name: "像素艺术",
      view_count: 456,
      like_count: 218
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff", "#ffffff", "#e0e0e0", "#e0e0e0", "#ffffff",
        "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0", "#e0e0e0", "#8b4513", "#8b4513", "#e0e0e0",
        "#e0e0e0", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#e0e0e0",
        "#ffffff", "#8b4513", "#000000", "#8b4513", "#8b4513", "#000000", "#8b4513", "#ffffff",
        "#ffffff", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#8b4513", "#ffffff",
        "#e0e0e0", "#ffffff", "#8b4513", "#ffffff", "#ffffff", "#8b4513", "#ffffff", "#e0e0e0",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 8,
    type: 'pixel',
    title: "爱心",
    author_name: "浪漫像素",
    created_at: "2025-12-04 15:30:00",
    updated_at: "2025-12-06 18:25:00",
    meta: {
      category_name: "像素艺术",
      view_count: 789,
      like_count: 520
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b",
        "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b",
        "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff",
        "#ffffff", "#ffffff", "#ff6b6b", "#ff8787", "#ff8787", "#ff6b6b", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ff6b6b", "#ff6b6b", "#ffffff", "#ffffff", "#ffffff",
        "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"
      ]
    }
  },
  {
    id: 9,
    type: 'pixel',
    title: "星星",
    author_name: "星空画师",
    created_at: "2025-12-06 10:00:00",
    updated_at: "2025-12-08 12:15:00",
    meta: {
      category_name: "像素艺术",
      view_count: 623,
      like_count: 289
    },
    payload: {
      width: 8,
      height: 8,
      pixels: [
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00", "#000000", "#ffff00", "#ffff00",
        "#000000", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#ffff00", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000",
        "#000000", "#000000", "#000000", "#ffff00", "#ffff00", "#000000", "#000000", "#000000",
        "#000000", "#000000", "#ffff00", "#000000", "#000000", "#ffff00", "#000000", "#000000"
      ]
    }
  },

  // ========== 新增 Image 类型（3条） ==========
  {
    id: 10,
    type: "image",
    title: "极光",
    author_name: "摄影师大鹏",
    created_at: "2025-12-02 14:40:00",
    updated_at: "2025-12-05 16:25:00",
    meta: {
      category_name: "自然风光",
      view_count: 2890,
      like_count: 456
    },
    payload: {
      url: "https://img1.baidu.com/it/u=1279821252,3873242399&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3840 * 2160",
    }
  },
  {
    id: 11,
    type: "image",
    title: "樱花",
    author_name: "日系摄影师",
    created_at: "2025-12-04 09:50:00",
    updated_at: "2025-12-07 11:30:00",
    meta: {
      category_name: "花卉摄影",
      view_count: 3560,
      like_count: 621
    },
    payload: {
      url: "https://img2.baidu.com/it/u=2222967939,4210231275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "2400 * 1600",
    }
  },
  {
    id: 12,
    type: "image",
    title: "城市夜景",
    author_name: "城市探索者",
    created_at: "2025-12-08 18:10:00",
    updated_at: "2025-12-09 10:20:00",
    meta: {
      category_name: "城市风光",
      view_count: 1980,
      like_count: 312
    },
    payload: {
      url: "https://img0.baidu.com/it/u=3090436529,1829102275&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      size: "3000 * 2000",
    }
  }
];