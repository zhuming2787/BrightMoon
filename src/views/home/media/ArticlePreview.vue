<script setup>
defineProps({ content: Object });
</script>

<template>
  <div class="text-preview">
    {{ content.summary }}
  </div>
</template>

<style lang="scss" scoped>
.text-preview {
  margin: 1.4em;
  color: var(--text-primary);
  background-color: var(--bg-secondary);
}
</style>
