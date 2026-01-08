<script setup>
defineProps({ content: Object })
</script>

<template>
  <img
    :src="content.payload.url"
  />
</template>
<style lang="scss" scoped>
img{
  width: 100%;
  height: 100%;
  object-fit:cover;
  object-position: center;
}
</style>

