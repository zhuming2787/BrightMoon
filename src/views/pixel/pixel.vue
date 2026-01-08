<template>
  <iframe
    ref="pixelIframe"
    src="https://pixel.9link.vip/zh"
    class="pixel-iframe"
  />
</template>

<script setup>
import { ref } from 'vue'

const pixelIframe = ref(null)
</script>

<style scoped>
.pixel-iframe {
  width: 100%;
  height: 99%;
  border: none;
}
</style>
