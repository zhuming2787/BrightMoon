<script setup>
import { onErrorCaptured, ref } from 'vue';

const hasError = ref(false);
const error = ref(null);
const errorInfo = ref(null);
const retryKey = ref(0);

onErrorCaptured((err, instance, info) => {
	hasError.value = true;
	error.value = err;
	errorInfo.value = { componentOptions: instance?.vnode?.componentOptions, info };

	// 开发环境打印错误（生产环境可上报到监控平台）
	if (import.meta.env.DEV) {
		console.error('ErrorBoundary捕获到错误：', err, instance, info);
	} else {
		// 生产环境：错误上报（如接入Sentry、阿里云监控等）
		// reportErrorToServer(err, instance, info)
	}

	// 返回true：阻止错误向上冒泡（避免父组件也触发错误）
	return true;
});

const handleRetry = () => {
	// 重置错误状态
	hasError.value = false;
	error.value = null;
	errorInfo.value = null;
	// 修改key值，强制子组件重新渲染（核心逻辑）
	retryKey.value += 1;
	// 提示用户
	ElMessage.info('正在重试加载组件...');
};

defineExpose({
	hasError,
	error,
	handleRetry,
});
</script>

<template>
	<main class="error-boundary">
		<!-- 错误状态UI -->
		<div v-if="hasError" class="error-content">
			<h3 class="error-title">阿鸥~ 组件加载出错了!</h3>
			<div class="error-detail">
				<p><strong>错误信息：</strong>{{ error.message }}</p>
				<p><strong>错误栈：</strong>{{ error.stack?.slice(0, 200) }}...</p>
				<p><strong>出错组件：</strong>{{ errorInfo.componentOptions?.tag }}</p>
			</div>
			<!-- 重试按钮 -->
			<el-button type="primary" size="small" @click="handleRetry" class="retry-btn">重新加载</el-button>

			<!-- 自定义插槽：允许外部覆盖错误提示 -->
			<slot name="error" :error="error" :retry="handleRetry" />
		</div>
		<!-- 正常状态：渲染子组件 -->
		<slot v-else />
	</main>
</template>

<style lang="scss" scoped>
.error-boundary {
	width: 100%;
	height: 100%;
}
.error-content {
	padding: 20px;
	text-align: center;
	background: #fef2f2;
	border-radius: 8px;
	color: #ef4444;
}
.error-title {
	margin: 0 0 10px 0;
	font-size: 16px;
}
.error-detail {
	margin: 10px 0;
	padding: 10px;
	background: #fff;
	border-radius: 4px;
	text-align: left;
	font-size: 12px;
	color: #666;
}
.retry-btn {
	margin-top: 10px;
}
</style>
