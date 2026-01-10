import { createApp } from 'vue';
import router from './router/index';
import App from './App.vue';
import i18n from './i18n';

import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'; // 导入新版插件
import 'element-plus';
import 'element-plus/dist/index.css';
const app = createApp(App);

// Vue全局错误捕获app.config.errorHandler捕获 Vue 运行时错误~
app.config.errorHandler = (err, instance, info) => {
	// 打印错误信息（开发环境调试用）
	console.error('【Vue 全局错误捕获】', {
		error: err, // 错误对象（包含错误栈、消息等）
		component: instance, // 出错的组件实例（可能为 null，如全局方法出错）
		info: info, // 错误上下文信息（如："render" / "setup" / "event handler"）
	});

	// 给用户展示友好提示（生产环境）
	if (process.env.NODE_ENV === 'production') {
		ElMessage.error('系统异常，请稍后重试');
	}

	// 错误日志上报（生产环境，对接后端日志系统）
	// if (process.env.NODE_ENV === 'production') {
	//   fetch('/api/log/error', {
	//     method: 'POST',
	//     body: JSON.stringify({
	//       message: err.message,
	//       stack: err.stack,
	//       component: instance?.$options.name || '未知组件',
	//       info: info,
	//       url: window.location.href
	//     })
	//   })
	// }
};

// 初始化性能监控（首屏加载）
import { performanceMonitor } from './utils/performanceMonitor.js';
performanceMonitor.init();

// 全局注册指令
import debounce from './directives/debounce';
import throttle from './directives/throttle';
import registerIntersectionAnimate from './directives/intersectionAnimate';
import registerLazyImageDirective from './directives/lazyImage';
import { registerPermissionDirective } from './directives/permission';
app.directive('debounce', debounce);
app.directive('throttle', throttle);
registerIntersectionAnimate(app);
registerPermissionDirective(app);
registerLazyImageDirective(app);

// 全局注册组件
import { registerGlobalComponents } from './components';
import { ElMessage } from 'element-plus';
registerGlobalComponents(app);

// pinia注册
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

// i18n国际化
app.use(i18n);
app.use(router);
app.use(pinia);
app.mount('#app');
