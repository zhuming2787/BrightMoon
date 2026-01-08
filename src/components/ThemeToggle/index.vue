<script setup>
import { Moon,Sunny } from '@element-plus/icons-vue';

import { useThemeStore } from '@/store/theme.js';
import { storeToRefs } from 'pinia';
const themeStore = useThemeStore();
const { isDark } = storeToRefs(themeStore);

</script>

<template>
    <el-switch
        v-model="isDark"
        size="large"
    />
</template>

<style lang="scss" scoped>
/* 可选：调整开关样式 */
:deep(.el-switch) {
  margin: 0 10px;
}
</style>
