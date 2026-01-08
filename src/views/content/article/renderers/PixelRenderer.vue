<script setup>
import { computed } from 'vue'

// 定义组件属性，明确content的结构（增加类型校验）
defineProps({
  content: {
    type: Object,
    required: true,
    default: () => ({
      payload: { width: 0, height: 0, pixels: [] }
    })
  }
})



// 每个像素格子的基础尺寸（可根据需求调整，也可改为计算属性做自适应）
const pixelBaseSize = 20

// 计算像素画布的整体样式（动态宽高）
const canvasStyle = computed(() => {
  const { width, height } = content.payload
  return {
    width: `${width * pixelBaseSize}px`,
    height: `${height * pixelBaseSize}px`
  }
})

// 计算单个像素的基础样式（复用）
const getPixelStyle = (index) => {
  const { width } = content.payload
  return {
    backgroundColor: content.payload.pixels[index],
    left: `${(index % width) * pixelBaseSize}px`,
    top: `${Math.floor(index / width) * pixelBaseSize}px`,
    width: `${pixelBaseSize}px`,
    height: `${pixelBaseSize}px`
  }
}
</script>

<template>
  <div class="pixel-content">
    <!-- 空数据提示：当像素数据不完整时展示 -->
    <div class="pixel-empty" v-if="!content.payload || content.payload.pixels.length === 0">
      <div class="empty-text">暂无像素画数据</div>
    </div>

    <!-- 像素画渲染容器（核心） -->
    <div class="pixel-canvas-wrapper" v-else>
      <!-- 像素画画布：相对定位承载所有像素格子 -->
      <div 
        class="pixel-canvas" 
        :style="canvasStyle"
      >
        <!-- 遍历像素数组，渲染每个像素格子 -->
        <div 
          class="pixel-cell"
          v-for="(color, index) in content.payload.pixels"
          :key="index"
          :style="getPixelStyle(index)"
        ></div>
      </div>

      <!-- 可选：展示像素画尺寸信息 -->
      <div class="pixel-size-info">
        像素尺寸：{{ content.payload.width }} × {{ content.payload.height }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.pixel-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
}

/* 空数据样式 */
.pixel-empty {
  padding: 40px;
  color: #606266;
  font-size: 14px;
}

/* 像素画布容器 */
.pixel-canvas-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

/* 像素画画布：核心容器 */
.pixel-canvas {
  position: relative;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  background-color: #ffffff;
  /* 关键：保证像素风格无模糊，边缘清晰 */
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}

/* 单个像素格子：绝对定位的方块 */
.pixel-cell {
  position: absolute;
  box-sizing: border-box;
  /* 可选：添加细微边框区分像素（不需要可注释） */
  border: 0.5px solid rgba(0, 0, 0, 0.05);
  /* 过渡效果：修改颜色时更顺滑（可选） */
  transition: background-color 0.2s ease;
}

/* 像素尺寸信息 */
.pixel-size-info {
  color: #606266;
  font-size: 14px;
  margin-top: 8px;
}

/* 响应式适配：小屏幕自动缩小像素尺寸 */
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