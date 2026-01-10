import { ElMessage, ElMessageBox } from 'element-plus';
import { asyncRoutes } from '../asyncRoutes';
import { filterAsyncRoutes } from './utils';
import { user } from '@/store';

let isRouteAdded = false;
// 预构建动态路由的「路径-元信息」映射表（解决动态路由未加载时to.meta为空的问题）
const asyncRouteMetaMap = {};
asyncRoutes.forEach(route => {
	if (route.path) {
		asyncRouteMetaMap[route.path] = route.meta || {};
	}
});

/**
 * 动态添加权限路由的核心方法
 * @param {全局路由} router
 * @param {规则} roles
 */
const addAccessRoutes = (router, roles) => {
	if (isRouteAdded) return;
	const accessRoutes = filterAsyncRoutes(asyncRoutes, roles);

	accessRoutes.forEach(route => {
		if (route.name && !router.hasRoute(route.name)) {
			router.addRoute('Layout', route);
		}
	});

	isRouteAdded = true;
};

/**
 * 注册全局权限守卫
 * @param {Router} router
 */
export function setupPermissionGuard(router) {
	router.beforeEach((to, from, next) => {
		const userStore = user();
		const token = userStore.getToken;
		const roles = userStore.getUserInfo?.username === 'admin' ? ['admin', 'user'] : ['user'];

		const targetMeta = asyncRouteMetaMap[to.path] || to.meta || {};
		const requiresAuth = targetMeta.requiresAuth || false;

		// 未登录且目标路由需要权限 → 跳首页+提示登录（优先判断）
		if (requiresAuth && !token) {
			ElMessage.error('请登录后重试');
			userStore.setShowLogin(true);
			return next('/home');
		}

		// 已登录但未添加动态路由 → 先添加路由，再重新导航到目标路由

		if (token && !isRouteAdded) {
			addAccessRoutes(router, roles);

			// 重新解析目标！
			const resolveRoute = router.resolve({
				path: to.path,
				query: to.query,
				hash: to.hash,
			});

			return next({
				...resolveRoute,
				replace: true,
			});
		}

		// 动态路由已添加 → 再判断路由是否存在（避免提前跳404）
		if (isRouteAdded) {
			const isRouteExist = router.hasRoute(to.name) || ['/404', '/home'].includes(to.path);
			if (!isRouteExist) {
				return next('/404');
			}
		}

		// 正常放行（动态路由未添加时，先放行让路由添加逻辑执行）
		next();
	});
}
