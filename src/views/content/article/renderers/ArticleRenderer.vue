<script setup>
import { onMounted } from 'vue';

defineProps({
  content: Object
})
</script>

<template>
  <div class="article-content">
    <div class="article-summary">
      <h3>摘要：</h3>
      <p>{{ content.summary }}</p>
    </div>

    <div class="article-body">
      <h3>正文：</h3>
      <pre>{{ content.payload.content }}</pre>
    </div>
  </div>
</template>

<style scoped>
.article-summary {
  margin-bottom: 30px;
  padding: 20px;
  background: var(--bg-secondary);
  border-radius: 6px;
}
.article-body pre {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: 6px;
  white-space: pre-wrap;
}
</style>
