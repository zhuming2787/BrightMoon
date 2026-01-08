<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import { contentList } from '@/mock/contentList'
import ArticleRenderer from './renderers/ArticleRenderer.vue'

const route = useRoute()
const router = useRouter()
const currentContent = ref(null)

const loadContent = () => {
  const id = Number(route.params.id)
  currentContent.value =
    contentList.find(item => item.id === id) || null
}

watch(() => route.params.id, loadContent, { immediate: true })

const goBack = () => router.go(-1)
const goHome = () => router.push('/home')

// 渲染器映射（未来直接扩展）
const renderMap = {
  article: ArticleRenderer
}
</script>

<template>
  <div class="content-detail">

    <div class="back_next">
      <button class="back-btn" @click="goBack">← 返回</button>
    </div>

    <div v-if="!currentContent" class="not-found">
      <h2>内容不存在或已被删除</h2>
      <button @click="goHome">返回首页</button>
    </div>

    <div v-else>
      <!-- 通用头部 -->
      <h1 class="article-title">{{ currentContent.title }}</h1>

      <div class="article-meta">
        <span>作者：{{ currentContent.author_name }}</span>
        <span v-if="currentContent.meta?.category_name">
          分类：{{ currentContent.meta.category_name }}
        </span>
        <span v-if="currentContent.meta?.view_count">
          阅读量：{{ currentContent.meta.view_count }}
        </span>
        <span v-if="currentContent.meta?.like_count">
          点赞数：{{ currentContent.meta.like_count }}
        </span>
      </div>

      <!-- 🔥 关键：交给渲染器 -->
      <component
        :is="renderMap[currentContent.type]"
        :content="currentContent"
      />
    </div>
  </div>
</template>


<!-- 替换步骤2的<style scoped>部分 -->
<style scoped>

.back_next{
    display: flex;
    justify-content:space-between;
}

/* 页面整体容器 */
.article-detail {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
  box-sizing: border-box;
}

/* 文章不存在提示 */
.not-found {
  text-align: center;
  padding: 50px 0;
  background: #f5f5f5;
  border-radius: 8px;
  margin-top: 50px;
}
.not-found button {
  padding: 8px 20px;
  background: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
}

/* 文章内容区 */
.article-content {
  margin-top: 30px;
}

/* 返回按钮 */
.back-btn {
  padding: 6px 12px;
  background: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}
.back-btn:hover {
  background: #e0e0e0;
}

/* 文章标题 */
.article-title {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin: 30px 0;
  line-height: 1.5;
}

/* 元信息区 */
.article-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  font-size: 14px;
  color: #666;
  padding: 10px;
  background: #f9f9f9;
  border-radius: 6px;
  margin-bottom: 30px;
}

/* 摘要区 */
.article-summary {
  margin-bottom: 30px;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 6px;
}
.article-summary h3 {
  margin-top: 0;
  color: #444;
}
.article-summary p {
  font-size: 16px;
  line-height: 1.8;
  color: #333;
}

/* 正文区 */
.article-body {
  font-size: 16px;
  line-height: 2;
  color: #333;
}
.article-body pre {
  background: #f0f0f0;
  padding: 20px;
  border-radius: 6px;
  overflow-x: auto;
  white-space: pre-wrap; /* 自动换行 */
}

/* 响应式适配（手机端） */
@media (max-width: 768px) {
  .article-title {
    font-size: 22px;
  }
  .article-meta {
    gap: 10px;
    font-size: 12px;
  }
  .article-summary p, .article-body {
    font-size: 14px;
  }
}
</style>