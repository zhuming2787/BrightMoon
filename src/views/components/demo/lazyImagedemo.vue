<template>
  <ComponentCard
    title="图片懒加载v-lazy"
    desc="基于 v-lazy 指令的按钮级权限控制"
    tag="LazyImage"
    >
    <img 
        v-lazy="imageUrl" 
        data-placeholder="https://picsum.photos/800/600" 
        data-error-src="https://picsum.photos/800/600" 
        alt="示例图片"
    >

    <img v-lazy="item.imageUrl" v-for="item in imageList" :key="item.id" alt="动态图片">

    <template #actions>
    </template>
  </ComponentCard>
</template>

<script setup>
import ComponentCard from '@/components/ComponentCard/index.vue';
import { ref } from 'vue';
// 示例URL
const imageUrl = ref('https://picsum.photos/800/600');
const imageList = ref([
  { id: 1, imageUrl: 'https://picsum.photos/800/600?1' },
  { id: 2, imageUrl: 'https://picsum.photos/800/600?2' }
]);
</script>

<style scoped>
.lazy-placeholder {
  background-color: #f5f5f5;
}
</style>