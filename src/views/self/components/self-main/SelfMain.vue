<script setup>
import { ref } from 'vue';
const activeName = ref('first');
const tabData = ref({ first: [], second: [], third: [], fourth: [] });
const retryKey = ref(0); // 全局重试key（可选）
</script>

<template>
	<el-tabs v-model="activeName" class="demo-tabs">
		<el-tab-pane label="作品" name="first" class="article">
			<div v-if="tabData.length" class="card-list">
				<ErrorBoundary v-for="(item, index) in tabData.first" :key="index + retryKey">
					<Card :data="item" />
				</ErrorBoundary>
			</div>
			<Empty />
		</el-tab-pane>
		<el-tab-pane label="推荐" name="second" class="article">
			<Empty />
		</el-tab-pane>
		<el-tab-pane label="喜欢" name="third" class="article">
			<Empty />
		</el-tab-pane>
		<el-tab-pane label="收藏" name="fourth" class="article">
			<Empty />
		</el-tab-pane>
	</el-tabs>
</template>

<style lang="scss" scoped>
.demo-tabs {
	z-index: 1000 !important;
}

.article {
	display: flex;
	flex-wrap: wrap;
}
</style>
