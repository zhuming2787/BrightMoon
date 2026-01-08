<template>
  <div class="components-container" aria-label="A complete example of page header">
    <el-page-header @back="onBack">
      <template #content>
        <div class="flex items-center">
          <el-avatar
            class="mr-3"
            :size="32"
            :src="imageSrc"
          />
          <span class="text-large font-600 mr-3"> 组件库 </span>
          <span
            class="text-sm mr-2"
            style="color: var(--el-text-color-regular)"
          >
          o(*￣▽￣*)ブ
          </span>
          <el-tag>Default</el-tag>
        </div>
      </template>
    </el-page-header>

    <main class="component-list">
        <permissiondemo/>
        <lazyImagedemo/>
    </main>

  </div>
</template>

<script setup>
import { ElNotification as notify } from 'element-plus'
import { useRoute, useRouter } from 'vue-router';
import Permissiondemo from './demo/permissiondemo.vue';
import lazyImagedemo from './demo/lazyImagedemo.vue';
import {user} from '@/store/index.js';
import { ref } from 'vue';

const router = useRouter();
const userStore = user();
const userInfo = userStore.getUserInfo;
const imageSrc = userInfo.avatar;

const onBack = () => {
    notify('Back')
    router.go(-1);
}
</script>


<style lang="scss" scoped>
.components-container{
  height: 100%;
  width: 100%;
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

main{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    background-color: var(--bg-primarys);
}

.component-list {
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
}
</style>
