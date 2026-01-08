<template>
  <ComponentCard
    title="按钮级权限控制"
    desc="基于 v-permission 指令的按钮级权限控制"
    tag="Permission"
  >
    <el-button v-permission="'user'">新增用户</el-button>
    <el-button
      class="ml-2"
      v-permission.disabled="'admin'"
    >
      编辑用户
    </el-button>

    <template #actions>
      <el-button
        size="small"
        type="primary"
        v-permission="'admin'"
      >
        设置权限
      </el-button>
    </template>
  </ComponentCard>
</template>

<script setup>
import ComponentCard from '@/components/ComponentCard/index.vue';
</script>
