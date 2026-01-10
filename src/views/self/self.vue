<script setup>
import { defineAsyncComponent } from 'vue';
import Loading from 'element-plus/es/components/loading/src/service';

// 普通用法
const SelfHeader = defineAsyncComponent(() => {
	return import('./components/self-header/SelfHeader.vue');
});

// 进阶用法
const SelfMain = defineAsyncComponent({
	loader: () => import('./components/self-main/SelfMain.vue'),
	loadingComponent: Loading,
	errorComponent: () => import('@/components/ErrorComponent/index.vue'),
	timeout: 3000,
	delay: 200,
	onError(error, retry, fail, attempts) {
		if (attempts < 3) {
			retry();
		} else {
			fail();
		}
	},
});
</script>

<template>
	<div class="common-layout">
		<el-container>
			<el-header height="30vh">
				<SelfHeader></SelfHeader>
			</el-header>
			<el-main>
				<SelfMain></SelfMain>
			</el-main>
		</el-container>
	</div>
</template>

<style lang="scss" scoped></style>
