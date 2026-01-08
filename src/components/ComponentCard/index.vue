<template>
  <el-card class="component-card" shadow="hover">
    <template #header>
      <div class="header">
        <span class="title">{{ title }}</span>
        <el-tag size="small">{{ tag }}</el-tag>
      </div>
    </template>

    <div class="desc" v-if="desc">
      {{ desc }}
    </div>

    <div class="demo">
      <slot />
    </div>

    <div class="actions" v-if="$slots.actions">
      <slot name="actions" />
    </div>
  </el-card>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  desc?: string
  tag?: string
}>()
</script>

<style scoped>
.component-card {
  width: 420px !important;
  height: 220px !important;
  margin: 16px !important; 
  box-sizing: border-box;
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-weight: 600;
}

.desc {
  margin-bottom: 12px;
  color: var(--text-tertiary);
}

.demo {
  padding: 12px 0;
}

.actions {
  margin-top: 12px;
  text-align: right;
}
</style>
