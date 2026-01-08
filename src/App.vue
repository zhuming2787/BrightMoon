<script setup>
import Login from '@/components/Login/login.vue';
import { storeToRefs } from 'pinia';
import { useThemeStore } from '@/store/theme.js';
import { onMounted } from 'vue';
import { useCacheStore } from './store/cacheStore.js';
import { clearExpiredCache } from './utils/cache';

onMounted(() => {
  const cacheStore = useCacheStore();
  // 页面刷新后清理过期缓存，同步localStorage到Pinia
  clearExpiredCache(cacheStore);
});

// 获取 Pinia 中的响应式状态（storeToRefs 保留响应式）
const themeStore = useThemeStore();
</script>

<template>
  <router-view></router-view>
  <Login v-model="showLogin" @login-success="handleLoginSuccess" />
  <Loading />
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>
