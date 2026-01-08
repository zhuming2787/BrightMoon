<script setup>
import LeftBar from './leftbar/leftbar.vue';
import RightMain from './rightmain/rightmain.vue';
import RightHeader from "./rightheader/rightheader.vue";
import { onMounted, onUnmounted, ref } from 'vue';
import Backtop from '@/components/Backtop/index.vue';
import {throttle} from '@/utils/tool.js';
</script>

<template>
  <el-container class="layout-container"> 
    <el-aside width="12%" class="left-aside">
      <LeftBar/>
    </el-aside>
    <el-container class="right-container">
      <el-header class="right-header">
        <RightHeader/>
      </el-header>
      <el-main class="main-content" id="layout-main">
          
          <RightMain/>

          <Backtop 
            target="#layout-main" 
            :right="50" 
            :bottom="50" 
            :visibility-height="50"
            :z-index="1000"
          />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">

/* 全局滚动条样式（作用于整个页面） */
::-webkit-scrollbar {
  /* 垂直滚动条宽度，水平滚动条高度 */
  width: 8px;    /* 垂直滚动条宽度 */
  height: 8px;   /* 水平滚动条高度 */
}

/* 滚动条轨道（背景） */
::-webkit-scrollbar-track {
  background: var(--bg-primary);  /* 轨道背景色 */
  border-radius: 4px;   /* 轨道圆角 */
}

/* 滚动条滑块（核心可拖动部分） */
::-webkit-scrollbar-thumb {
  background: var(--text-secondary);     /* 滑块默认颜色 */
  border-radius: 4px;   /* 滑块圆角（和轨道一致更美观） */
  /* 滑块hover效果 */
  &:hover {
    background: #999;   /* hover时加深颜色 */
  }
  /* 滑块激活（点击拖动时） */
  &:active {
    background: var(--el-color-primary);
  }
}

/* 滚动条角落（垂直+水平交汇） */
::-webkit-scrollbar-corner {
  background: var(--bg-primary);  /* 和轨道背景一致 */
}

/* 隐藏滚动条按钮（上下/左右箭头） */
::-webkit-scrollbar-button {
  display: none;
}


.layout-container {
  display: flex;
  height: 100vh; 
  overflow: hidden; 
}

.left-aside {
  position: relative;
  height: 100%;
  box-sizing: border-box;

  // 在left-aside旁边增加伪元素竖线
  &::after {
    // 伪元素必须有content！
    content: '';

    // 父相子绝
    position: absolute;
    top: 5%;
    right: 0;
    width: 2px;
    height: 90%;

    background-color: var(--el-color-info);
  }
}


.right-container {
  // flex自动占据剩余空间
  flex: 1; 

  // flex布局
  display: flex; 

  // 从上往下布局
  flex-direction: column; 
  height: 100%;
  margin-left: 10px;

  // 改变盒子模型，往内部挤压
  box-sizing: border-box;
}


.right-header {
  padding: 0; 
  height: 8vh; 

  // 防止header被挤压
  flex-shrink: 0; 
}


.main-content {
  flex: 1; 
  padding: 0;
  height: 92vh;

  // 隐藏横向滑动条
  overflow-x: hidden; 
  box-sizing: border-box;
}


@media (max-width: 768px){
  .left-aside{
    display: none;
  }
}
</style>