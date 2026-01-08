<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'; // 导入路由

const router = useRouter();
const canGoBack = ref(false); // 标记是否能返回上一页

// 页面挂载时检测历史记录到底上一个是否是在本网站内的
onMounted(() => {
  canGoBack.value = isPrevPageInCurrentSite();
});

// 检查是否来自本网站
const isPrevPageInCurrentSite = () => {
  const currentHost = window.location.host; //当前网站域名
  const referrer = document.referrer;

  if (referrer && referrer.includes(currentHost)) {
    return true;
  }

  if (!referrer && window.history.length > 2) {
    return true;
  }

  return false;
};

// 按钮点击事件：优先返回上一页，无历史则跳首页
const handleButtonClick = () => {
  if (canGoBack.value) {
    window.history.back(); // 返回上一页
    ElMessage.success('正在返回上一页～');
  } else {
    router.push('/'); // 跳转到首页
    ElMessage.info('无历史记录，回到首页啦～');
  }
};
</script>

<template>
  <div class="container">
    <div class="comic-brutal-button-container">
      <!-- 添加点击事件绑定 -->
      <button class="comic-brutal-button" @click="handleButtonClick">
        <div class="button-inner">
          <!-- 动态调整按钮文字：根据是否能返回显示不同文案 -->
          <span class="button-text"> 404! {{ canGoBack ? '回到上一页' : '回到首页' }} </span>
          <div class="halftone-overlay"></div>
          <div class="ink-splatter"></div>
        </div>
        <div class="button-shadow"></div>
        <div class="button-frame"></div>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100vw;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 新增：添加明月主题背景，贴合你的网站风格 */
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  :global(html.dark) & {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  }
}

/* From Uiverse.io by dopekid_9309 */
.comic-brutal-button-container {
  --primary-color: #ff3d3d;
  --secondary-color: #3d3dff;
  --text-color: #000000;
  --accent-color: #ffef00;
  --panel-color: #ffffff;
  --shadow-color: rgba(0, 0, 0, 0.75);
  /* 暗黑模式适配 */
  :global(html.dark) & {
    --primary-color: #ff5e5e;
    --secondary-color: #5e5eff;
    --text-color: #ffffff;
    --accent-color: #ffe100;
    --panel-color: #1a1a2e;
    --shadow-color: rgba(0, 0, 0, 0.9);
  }
}

.comic-brutal-button {
  position: relative;
  font-size: 4em;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  transform: rotate(-2deg);
  transform-origin: center;
  transition: transform 0.15s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.button-inner {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 0.8em 1.5em;
  z-index: 3;
  overflow: hidden;
  transform: skew(-3deg, 1deg);
  transition: transform 0.15s cubic-bezier(0.22, 0.61, 0.36, 1);
  clip-path: polygon(0% 10%, 3% 0%, 97% 0%, 100% 10%, 100% 90%, 97% 100%, 3% 100%, 0% 90%);
}

.button-text {
  position: relative;
  font-weight: 900;
  font-size: 1.2em;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  z-index: 5;
  color: var(--text-color);
  text-shadow:
    0.05em 0.05em 0 var(--panel-color),
    -0.05em -0.05em 0 var(--panel-color),
    0.05em -0.05em 0 var(--panel-color),
    -0.05em 0.05em 0 var(--panel-color);
  transform: rotate(2deg);
  /* 适配小屏幕文字大小 */
  @media (max-width: 768px) {
    font-size: 0.8em;
  }
}

.button-frame {
  position: absolute;
  top: -0.3em;
  left: -0.3em;
  right: -0.3em;
  bottom: -0.3em;
  background-color: var(--accent-color);
  border: 0.15em solid var(--text-color);
  z-index: 1;
  transition: transform 0.15s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.button-shadow {
  position: absolute;
  top: 0.4em;
  left: 0.4em;
  right: -0.4em;
  bottom: -0.4em;
  background-color: var(--shadow-color);
  z-index: 0;
  transition: all 0.15s cubic-bezier(0.22, 0.61, 0.36, 1);
}

/* Halftone effect using CSS */
.halftone-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle at 30% 30%, rgba(0, 0, 0, 0.2) 0.1em, transparent 0.1em);
  background-size: 0.5em 0.5em;
  background-position: 0 0;
  opacity: 0.3;
  z-index: 2;
  mix-blend-mode: multiply;
  /* 暗黑模式适配 */
  :global(html.dark) & {
    background-image: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0.1em, transparent 0.1em);
  }
}

/* Ink splatter effect using CSS gradients */
.ink-splatter {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.2s ease;
  background:
    radial-gradient(circle at 20% 30%, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.08) 20%, transparent 50%),
    radial-gradient(circle at 70% 65%, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.08) 25%, transparent 50%),
    radial-gradient(circle at 40% 50%, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.08) 30%, transparent 60%),
    radial-gradient(circle at 85% 15%, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.08) 15%, transparent 40%);
  /* 暗黑模式适配 */
  :global(html.dark) & {
    background:
      radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 20%, transparent 50%),
      radial-gradient(circle at 70% 65%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 25%, transparent 50%),
      radial-gradient(circle at 40% 50%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 30%, transparent 60%),
      radial-gradient(circle at 85% 15%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 15%, transparent 40%);
  }
}

/* Button hover state */
.comic-brutal-button:hover {
  transform: rotate(-1deg) scale(1.05);
}

.comic-brutal-button:hover .button-inner {
  transform: skew(-5deg, 2deg);
  background-color: var(--secondary-color);
}

.comic-brutal-button:hover .button-text {
  color: var(--panel-color);
  text-shadow:
    0.05em 0.05em 0 var(--text-color),
    -0.05em -0.05em 0 var(--text-color),
    0.05em -0.05em 0 var(--text-color),
    -0.05em 0.05em 0 var(--text-color);
}

.comic-brutal-button:hover .button-shadow {
  transform: translate(0.2em, 0.2em);
}

.comic-brutal-button:hover .ink-splatter {
  opacity: 1;
}

/* Button focus state */
.comic-brutal-button:focus {
  outline: none;
}

.comic-brutal-button:focus .button-frame {
  border-color: var(--secondary-color);
}

/* Button active state */
.comic-brutal-button:active {
  transform: rotate(0) scale(0.98);
}

.comic-brutal-button:active .button-inner {
  transform: skew(0, 0);
}

.comic-brutal-button:active .button-shadow {
  transform: translate(0.1em, 0.1em);
}

/* Comic burst animation */
@keyframes burst {
  0% {
    transform: scale(0.95);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.comic-brutal-button:active .button-text {
  animation: burst 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Add comic-style border on focus */
@keyframes dash {
  to {
    stroke-dashoffset: -20;
  }
}

.comic-brutal-button:focus::after {
  content: '';
  position: absolute;
  top: -0.5em;
  left: -0.5em;
  right: -0.5em;
  bottom: -0.5em;
  border: 0.15em dashed var(--text-color);
  z-index: 0;
  animation: dash 1s linear infinite;
  pointer-events: none;
}

/* Additional brutalist comic book elements */
.comic-brutal-button::before {
  content: '';
  position: absolute;
  top: 0.4em;
  left: 0.8em;
  width: 1em;
  height: 1em;
  background-color: var(--accent-color);
  border-radius: 50%;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.comic-brutal-button:hover::before {
  opacity: 0.7;
}

/* Action lines on click */
@keyframes action-lines {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1.2);
  }
}

.comic-brutal-button:active::before {
  content: '';
  position: absolute;
  top: -1em;
  left: -1em;
  right: -1em;
  bottom: -1em;
  background-image:
    radial-gradient(var(--text-color) 0%, transparent 70%),
    repeating-conic-gradient(transparent 0%, transparent 5%, var(--text-color) 5%, var(--text-color) 6%);
  opacity: 0;
  z-index: 6;
  mix-blend-mode: overlay;
  pointer-events: none;
  animation: action-lines 0.5s ease-out forwards;
}

/* 响应式适配：小屏幕缩小按钮 */
@media (max-width: 768px) {
  .comic-brutal-button {
    font-size: 2em;
  }
}
</style>
