// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import { constantRoutes } from './constantRoutes';
import { performanceMonitor } from '../utils/performanceMonitor';
// 前置路由守卫
import { setupPermissionGuard } from './before/permission';
// 后置路由守卫
import { setupBanOverFlowYGuard } from './after/banoverflowy';
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: constantRoutes,
});

// 动态路由前置守卫（基于beforeEach)
setupPermissionGuard(router);
// 动态路由禁止layout-main滚动(基于afterEach)
setupBanOverFlowYGuard(router);

router.beforeEach((to, from, next) => {
	window.endRouteMonitor = performanceMonitor.monitorRouteChange(to.name);
	next();
});

router.afterEach(() => {
	// 路由切换完成，执行结束监控
	if (window.endRouteMonitor) {
		window.endRouteMonitor();
		window.endRouteMonitor = null;
	}
});

export default router;
