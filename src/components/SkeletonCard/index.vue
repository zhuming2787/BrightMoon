<template>
  <div class="skeleton-card-container">
    <!-- 骨架屏卡片 -->
    <el-card class="custom-card">
      <el-skeleton active>
        <div class="card-content">
          <!-- 左侧圆形骨架 -->
          <div class="card-left">
            <el-skeleton-item 
              shape="circle" 
              class="avatar-skeleton"
            />
          </div>
          <!-- 右侧两行文字骨架 -->
          <div class="card-right">
            <el-skeleton-item class="line-skeleton first-line" />
            <el-skeleton-item class="line-skeleton second-line" />
          </div>
        </div>
      </el-skeleton>
    </el-card>

    <!-- 可选：真实数据卡片示例（对比参考）
    <el-card class="custom-card" style="margin-top: 20px;">
      <div class="card-content">
        <div class="card-left">
          <img src="https://picsum.photos/seed/avatar/80/80" class="avatar" alt="头像">
        </div>
        <div class="card-right">
          <p class="real-line first-line">这是第一行真实文字内容</p>
          <p class="real-line second-line">这是第二行真实文字内容</p>
        </div>
      </div>
    </el-card> -->
  </div>
</template>

<script setup>
// 若为Vue2 + Element UI，需改为Options API写法，组件名保持一致
</script>

<style scoped lang="scss">
.skeleton-card-container {
  margin: 20px;
}

.custom-card {
  border: 1px solid #ebeef5;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}


.card-content {
  display: flex;
  align-items: center; // 左右垂直居中
  padding: 10px;
}

// 左侧区域样式
.card-left {
  margin-right: 16px; // 左右间距
}

// 圆形骨架样式
.avatar-skeleton {
  width: 80px;
  height: 80px; // 宽高一致才能显示正圆
  display: block;
}

// 真实头像样式（对比用）
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

// 右侧文字骨架区域
.card-right {
  flex: 1; // 占剩余宽度
  display: flex;
  flex-direction: column;
  gap: 12px; // 两行骨架的间距
}

// 文字骨架样式
.line-skeleton {
  display: block;
  height: 16px; // 骨架行高度
  border-radius: 4px;
}

// 第一行骨架宽度稍长，第二行稍短，模拟真实文字效果
.first-line {
  width: 100%;
}

.second-line {
  width: 70%;
}

// 真实文字样式（对比用）
.real-line {
  margin: 0;
  color: #333;
  line-height: 1.5;
  &.first-line {
    font-weight: 600;
    font-size: 16px;
  }
  &.second-line {
    font-size: 14px;
    color: #666;
  }
}
</style>