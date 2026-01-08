import { createI18n } from 'vue-i18n'
// 导入语言文案
import zhCN from './locales/zh-CN'
import enUS from './locales/en-US'

// 从localStorage读取持久化的语言，默认中文
const defaultLang = localStorage.getItem('app-lang') || 'zh-CN'

// 创建i18n实例
const i18n = createI18n({
  legacy: false, // 启用组合式API（Vue3推荐）
  locale: defaultLang, // 当前语言
  fallbackLocale: 'zh-CN', // 回退语言（当当前语言文案缺失时）
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS
  }
})

export default i18n