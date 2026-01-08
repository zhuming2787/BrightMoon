<script setup>
defineProps({ content: Object });
</script>

<template>
  <div class="pixel-preview">
    <div
      v-for="(color, i) in content.payload.pixels.slice(0, 64)"
      :key="i"
      class="pixel"
      :style="{ backgroundColor: color }"
    />
  </div>
</template>

<style lang="scss" scoped>
.pixel-preview {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 1px;
  width: 100%;
  height: 100%;
}

.pixel {
  width: 100%px;
  height: 100%px;
}
</style>
