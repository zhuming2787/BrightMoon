<script setup>
defineProps({
  content: Object
})
</script>

<template>
  <div class="image-content">
    <el-image :src="content?.payload?.url"/>
  </div>
</template>

<style scoped>
.image-content{
    object-fit: cover;
    object-position: center;
}
</style>
