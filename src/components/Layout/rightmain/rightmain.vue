<script setup>
import { Suspense, computed, onMounted, onUnmounted } from 'vue'; 
import { useRoute } from 'vue-router'

const route = useRoute()

const routeAnimation = computed(() => route.meta.animation || 'fade');
const cacheRoutes = ['Home', 'List']; 
</script>

<template>
  <Transition :name="routeAnimation" mode="out-in">
    <Suspense>
      <router-view v-slot="{ Component }">
        <keep-alive :include="cacheRoutes">
          <component 
            :is="Component" 
            :key="$route.fullPath" 
          />
        </keep-alive>
        
      </router-view>
      
      <!-- Suspense加载兜底 -->
      <template #fallback>
        <div class="loading-container">加载中...</div>
      </template>
    </Suspense>
  </Transition>
</template>


<style lang="scss">
.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 16px;
  color: #606266;
}

/* 淡入淡出动画 */
.fade-enter-from, .fade-leave-to { 
  opacity: 0; 
  transform: translateX(0);
}
.fade-enter-to, .fade-leave-from { 
  opacity: 1; 
  transform: translateX(0);
}
.fade-enter-active, .fade-leave-active { 
  transition: opacity 0.3s ease, transform 0.3s ease;
}

/* 缩放动画 */
.scale-enter-from { opacity: 0; transform: scale(0.9); }
.scale-enter-to { opacity: 1; transform: scale(1); }
.scale-enter-active { transition: all 0.3s ease; }
.scale-leave-from { opacity: 1; transform: scale(1); }
.scale-leave-to { opacity: 0; transform: scale(0.9); }
.scale-leave-active { transition: all 0.3s ease; }

/* 滑动动画 */
.slide-enter-from { opacity: 0; transform: translateY(20px); }
.slide-enter-to { opacity: 1; transform: translateY(0); }
.slide-enter-active { transition: all 0.3s ease; }
.slide-leave-from { opacity: 1; transform: translateY(0); }
.slide-leave-to { opacity: 0; transform: translateY(-20px); }
.slide-leave-active { transition: all 0.3s ease; }
</style>

<!-- 当前组件的其他样式：单个scoped块 -->
<style lang="scss" scoped>
/* 仅放main组件自身的非动画样式，比如布局等 */
// .main-wrap {
//   width: 100%;
//   min-height: 100vh;
// }
</style>