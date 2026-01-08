<script setup>
defineProps({
  loading:{
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'image'
  },
  title: {
    type: String,
    required: true
  },
  meta: {
    type: String,
    default: ''
  }
})
defineEmits(['click'])
</script>

<template>
  <div class="stack" @click="$emit('click')">
    <div class="card">
      <!-- 如果loading = true显示骨架屏，否则显示真实内容 -->
      <template v-if="loading">
        <div class="media skeleton-media">
          <el-skeleton animated variant="rect" style="width: 100%;height: 100%;"/>
          <span class="badge skeleton-badge">
            <el-skeleton animated variant="text" style="width: 40px;height: 16px;"/>
          </span>
        </div>

        <div class="info skeleton-info">
          <el-skeleton :rows="1" variant="text" animated style="width: 60%;height: 16px;"/>
          <el-skeleton v-if="meta" :rows="0" variant="text" animated style="width: 40%; height:12px;margin-top: 4px;"/>
        </div>
      </template>

      <template v-else>
          <!-- 内容展示区 -->
          <div class="media">
            <!-- 默认插槽：图片 / 像素画 / 自定义 -->
            <slot name="media" />
            <!-- 类型角标 -->
            <span class="badge">
              {{ type }}
            </span>
          </div>

          <!-- 信息区 -->
          <div class="info">
            <h3 class="title">{{ title }}</h3>
            <p v-if="meta" class="meta">{{ meta }}</p>
          </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.stack {
  margin: calc(2vw + 2%) auto;
  width: 100%;
  max-width: 500px;
  transition: 0.24s ease;

  &:hover {
    transform: rotate(5deg);

    .card::before {
      transform: translateY(-2%) rotate(-4deg);
    }

    .card::after {
      transform: translateY(2%) rotate(4deg);
    }
  }
  .card {
    aspect-ratio: 3 / 2;
    border: 4px solid;
    background: var(--bg-secondary);
    position: relative;
    padding: 5% 5% 12% 5%;
    cursor: pointer;
    transition: 0.15s ease;

    &::before,
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      border: 4px solid;
      background: var(--bg-secondary);
      z-index: -1;
      transition: 0.15s ease;
    }

    &::before {
      transform: translateY(-2%) rotate(-6deg);
    }

    &::after {
      transform: translateY(2%) rotate(6deg);
    }


    .media {
      position: relative;
      border: 4px solid;
      background: var(--bg-secondary);
      aspect-ratio: 1 / 1;
      overflow: hidden;
    }

    .badge {
      position: absolute;
      top: 6px;
      right: 6px;
      font-size: 12px;
      padding: 2px 6px;
      border: 2px solid;
      background: rgba(var(--bg-secondary), 0.7);
    }
  }
}


.info {
  margin-top: 8px;
}

.title {
  font-size: 16px;
  margin: 0;
}

.meta {
  font-size: 12px;
  color: var(--text-secondary);
  margin-top: 2px;
}
</style>
