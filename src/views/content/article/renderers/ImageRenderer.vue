<script setup>
defineProps({
  content: Object
})
</script>

<template>
  <div class="image-content">
        <img :src="content?.payload?.url"/>
  </div>
</template>

<style scoped>
.article-summary {
  margin-bottom: 30px;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 6px;
}
.article-body pre {
  background: #f0f0f0;
  padding: 20px;
  border-radius: 6px;
  white-space: pre-wrap;
}
</style>
