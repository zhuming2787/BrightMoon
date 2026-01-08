<script setup>
import { onMounted, onUnmounted, ref, watchEffect,watch } from 'vue';
// 定义props
import { throttle } from "@/utils/tool.js";

// 定义props
const props = defineProps({
    target:{
        type:String,
        default: 'window'
    },
    right:{
        type:Number,
        default: 100
    },
    bottom:{
        type:Number,
        default: 100
    },
    // 滚动超过多少像素显示按钮
    visibilityHeight:{
        type:Number,
        default: 50
    },
    // 按钮z-index 防止被遮挡
    zIndex:{
        type:Number,
        default: 1000
    },
    // 滚动时长(ms)
    duration:{
        type:Number,
        default: 300
    }
});

// 滚动容器
const isShow = ref(false);
let scrollContainer = null;

// 获取滚动容器
const getScrollContainer = () => {
    if(props.target === 'window'){
        return window;
    }
    return document.querySelector(props.target);
};

// 监听滚动事件，判断是否显示按钮
const handleScroll = () => {
    if(!scrollContainer) return;
    
    let scrollTop = 0;
    if(scrollContainer === window){
        scrollTop = window.scrollY || document.documentElement.scrollTop;
    }else{
        scrollTop = scrollContainer.scrollTop;
    }

    isShow.value = scrollTop > props.visibilityHeight;
};


const throttledHandleScroll = throttle(handleScroll,500);

// 回到顶部
const handleBackTop = () => {
    if(!scrollContainer) return;
    if (scrollContainer === window) {
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' 
        });
    } else {
        scrollContainer.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
        });
    }
}

onMounted(() => {
    scrollContainer = getScrollContainer();
    if (scrollContainer) {
        scrollContainer.addEventListener('scroll', throttledHandleScroll, { passive: true });
        handleScroll();
    }
});

onUnmounted(() => {
  if (scrollContainer) {
    scrollContainer.removeEventListener('scroll', throttledHandleScroll);
  }
});

watch(
  () => props.target,
  () => {
    // 移除旧容器监听
    if (scrollContainer) {
      scrollContainer.removeEventListener('scroll', throttledHandleScroll);
    }
    // 获取新容器并添加监听
    scrollContainer = getScrollContainer();
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', throttledHandleScroll, { passive: true });
      handleScroll();
    }
  }
);
</script>

<template>
    <Transition name="back-top-fade">
        <button 
            class="button"
            v-show="isShow"
            @click="handleBackTop"
            :style="{
                right: `${right}px`,
                bottom: `${bottom}px`,
                zIndex: zIndex
            }"    
        >
            <svg class="svgIcon" viewBox="0 0 384 512">
                <path
                d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                ></path>
            </svg>
        </button>
  </Transition>
</template>

<style lang="scss" scoped>
.back-top-fade-enter-from, // 进入动画的起始状态
.back-top-fade-leave-to {  // 离开动画的结束状态
  opacity: 0; // 透明
  transform: translateY(30px);
}

.back-top-fade-enter-active, // 进入动画的过程
.back-top-fade-leave-active { // 离开动画的过程
  transition: all 0.3s ease;
}

.back-top-fade-enter-to, // 进入动画的结束状态
.back-top-fade-leave-from { // 离开动画的起始状态
  opacity: 1; // 不透明
  transform: translateY(0); // 回到原位置
}
.button {
	position: fixed; // 固定定位，基于视口
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: rgba(255, 255, 255,0.9);
	border: none;
	font-weight: 600;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0px 0px 0px 4px rgba(180, 160, 255, 0.253);
	cursor: pointer;
	transition-duration: 0.3s;
	overflow: hidden;
}

.svgIcon {
	width: 12px;
	transition-duration: 0.3s;
}

.svgIcon path {
  	fill: var(--el-color-primary);
}

.button:hover {
	width: 140px;
	border-radius: 50px;
	transition-duration: 0.3s;
	background-color: rgb(181, 160, 255);
	align-items: center;
}

.button:hover .svgIcon {
	transition-duration: 0.3s;
	transform: translateY(-200%);
}

.button::before {
  position: absolute;
  bottom: -20px;
  content: "Back to Top";
  color: white;
  transition-duration: .3s;
  font-size: 0px;
}

.button:hover::before {
  font-size: 13px;
  opacity: 1;
  bottom: unset;
  transition-duration: 0.3s;
}

</style>

