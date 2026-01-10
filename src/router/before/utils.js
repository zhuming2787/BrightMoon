// 根据roles判断用户是否可以加载这个路由
export function hasPermission(route, roles) {
	if (!route.meta?.roles) return true;
	return roles.some(role => route.meta.roles.includes(role));
}

// 过滤器
export function filterAsyncRoutes(routes, roles) {
	const res = [];

	routes.forEach(route => {
		const r = { ...route };
		if (hasPermission(r, roles)) {
			if (r.children) {
				r.children = filterAsyncRoutes(r.children, roles);
			}
			res.push(r);
		}
	});

	return res;
}
