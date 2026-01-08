<script setup>
import { computed, onMounted } from 'vue'

// 1. 修正Props定义：加required+default，避免content为undefined
const props = defineProps({
  content: {
    type: Object,
    required: false, // 设为false，配合default兜底；如果必须传则设为true
    default: () => ({ // 兜底默认值，避免content为undefined
      payload: {
        width: 0,
        height: 0,
        pixels: []
      }
    })
  }
})

// 每个像素格子的基础尺寸
const pixelBaseSize = 20

// 2. 计算画布样式：添加可选链+空值兜底，避免报错
const canvasStyle = computed(() => {
  // 先兜底payload，避免content.payload不存在
  const payload = props.content?.payload || { width: 0, height: 0 }
  return {
    width: `${payload.width * pixelBaseSize}px`,
    height: `${payload.height * pixelBaseSize}px`
  }
})

// 3. 计算单个像素样式：增加空值保护
const getPixelStyle = (index) => {
  const payload = props.content?.payload || { width: 0, pixels: [] }
  return {
    backgroundColor: payload.pixels[index] || 'transparent', // 颜色兜底
    left: `${(index % payload.width) * pixelBaseSize}px`,
    top: `${Math.floor(index / payload.width) * pixelBaseSize}px`,
    width: `${pixelBaseSize}px`,
    height: `${pixelBaseSize}px`
  }
}

onMounted(() => {
  // 4. 打印时加可选链，避免console报错
  console.log('content数据：', props.content);
})
</script>

<template>
  <div class="pixel-content">
    <!-- 空数据提示：优化判断逻辑，用props.content兜底 -->
    <div class="pixel-empty" v-if="!props.content?.payload || props.content.payload.pixels.length === 0">
      <div class="empty-text">暂无像素画数据</div>
    </div>

    <!-- 像素画渲染容器：用props.content明确访问 -->
    <div class="pixel-canvas-wrapper" v-else>
      <div 
        class="pixel-canvas" 
        :style="canvasStyle"
      >
        <div 
          class="pixel-cell"
          v-for="(color, index) in props.content.payload.pixels"
          :key="index"
          :style="getPixelStyle(index)"
        ></div>
      </div>

      <div class="pixel-size-info">
        像素尺寸：{{ props.content.payload.width }} × {{ props.content.payload.height }}
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 样式部分不变，保留你原有的样式 */
.pixel-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
}

.pixel-empty {
  padding: 40px;
  color: #606266;
  font-size: 14px;
}

.pixel-canvas-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.pixel-canvas {
  position: relative;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  background-color: #ffffff;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}

.pixel-cell {
  position: absolute;
  box-sizing: border-box;
  border: 0.5px solid rgba(0, 0, 0, 0.05);
  transition: background-color 0.2s ease;
}

.pixel-size-info {
  color: #606266;
  font-size: 14px;
  margin-top: 8px;
}

@media (max-width: 768px) {
  .pixel-cell {
    width: 15px !important;
    height: 15px !important;
  }
  .pixel-canvas {
    width: calc(var(--pixel-width) * 15px) !important;
    height: calc(var(--pixel-height) * 15px) !important;
  }
}

@media (max-width: 480px) {
  .pixel-cell {
    width: 10px !important;
    height: 10px !important;
  }
  .pixel-canvas {
    width: calc(var(--pixel-width) * 10px) !important;
    height: calc(var(--pixel-height) * 10px) !important;
  }
}
</style>