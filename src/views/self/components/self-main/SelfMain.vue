<script setup>
import Card from "@/components/Card/index.vue"
import { ref } from "vue";
import Empty from "@/components/Empty/index.vue";
const activeName = ref("first");
const tabData = ref([]);

</script>

<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="作品" name="first" class="article">
      <!-- 有数据：循环渲染Card -->
      <div v-if="tabData.length" class="card-list">
        <Card v-for="(item, index) in tabData.first" :key="index" />
      </div>
        <Empty/>
    </el-tab-pane>
    <el-tab-pane label="推荐" name="second" class="article">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </el-tab-pane>
    <el-tab-pane label="喜欢" name="third" class="article">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </el-tab-pane>
    <el-tab-pane label="收藏" name="fourth" class="article">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </el-tab-pane>
  </el-tabs>
</template>

<style lang="scss" scoped>
.demo-tabs{
  z-index: 1000 !important;
}

.article{
  display: flex;
  flex-wrap: wrap;
}
</style>
