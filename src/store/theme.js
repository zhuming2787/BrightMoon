// src/store/modules/theme.js
import { defineStore } from 'pinia';
import { useLocalStorage, usePreferredDark, useToggle } from '@vueuse/core';
import { watch } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  // 1. 检测系统暗黑模式偏好（返回响应式布尔值）
  const isSystemDark = usePreferredDark();

  const isDark = useLocalStorage(
    'app-theme-dark', // localStorage 的 key
    isSystemDark.value // 初始值：系统主题偏好
  );

  // 3. 简化切换逻辑：useToggle 自动反转 isDark 的值（替代手动写 if/else）
  const toggleTheme = useToggle(isDark);

  // 4. 同步更新 html 类名（核心：让 CSS 变量生效）
  const syncHtmlTheme = () => {
    const html = document.documentElement;
    if (isDark.value) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  };

  // 初始化时同步一次
  syncHtmlTheme();
  // 监听 isDark 变化，自动同步类名
  watch(isDark, syncHtmlTheme);

  return {
    isDark, // 响应式状态：true=暗黑，false=亮色
    toggleTheme, // 切换方法：调用即反转主题
    syncHtmlTheme // 手动同步类名（可选）
  };
});