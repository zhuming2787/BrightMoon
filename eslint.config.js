import eslint from '@eslint/js';
import vuePlugin from 'eslint-plugin-vue';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// 路径处理（适配ESModule）
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 环境变量判断
const isProduction = process.env.NODE_ENV === 'production';

export default [
  // 1. 忽略文件（替代原ignorePatterns）
  {
    ignores: ['node_modules/', 'dist/', '*.config.js', '*.config.cjs', 'public/', '*.md'],
  },

  // 2. 通用基础配置
  eslint.configs.recommended,

  // 3. TypeScript 配置
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'], // 作用于TS/Vue文件
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: path.resolve(__dirname, './tsconfig.json'), // 关联tsconfig（可选，提升TS校验精度）
        extraFileExtensions: ['.vue'], // 解析Vue中的TS
      },
      globals: {
        browser: true,
        node: true,
        es2021: true,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      // 自定义TS规则（和旧配置一致）
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      'no-unused-vars': 'off', // 关闭ESLint原生未使用变量检测
    },
  },

  // 4. Vue3 配置
  {
    files: ['**/*.vue'], // 仅作用于Vue文件
    languageOptions: {
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: tsParser, // Vue文件中的TS用tsParser解析
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      vue: vuePlugin,
    },
    rules: {
      ...vuePlugin.configs['vue3-essential'].rules,
      ...vuePlugin.configs['vue3-strongly-recommended'].rules,
      // 自定义Vue规则（和旧配置一致）
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'warn',
      'vue/attribute-hyphenation': 'off',
    },
  },

  // 5. Prettier 集成（解决格式冲突）
  prettierConfig, // 禁用ESLint与Prettier冲突的规则
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },

  // 6. 全局通用规则
  {
    files: ['**/*.js', '**/*.ts', '**/*.vue'],
    rules: {
      'no-console': isProduction ? 'warn' : 'off',
      'no-debugger': isProduction ? 'warn' : 'off',
    },
  },
];
