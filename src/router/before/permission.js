// router/permission.js
import { ElMessage, ElMessageBox } from 'element-plus';
import { asyncRoutes } from '../asyncRoutes';
import { filterAsyncRoutes } from './utils';
import { user } from '@/store';
import { watch,ref } from 'vue';

let isRouteAdded = false;

/**
 * 动态添加权限路由的核心方法
 * @param {全局路由} router 
 * @param {规则} roles 
 */
const addAccessRoutes = (router,roles) => {
  if(isRouteAdded) return;
  const accesRoutes = filterAsyncRoutes(asyncRoutes,roles);
  
  accesRoutes.forEach(route => {
    if(!router.hasRoute(route.name)){
      console.log('route:',route);
      router.addRoute('Layout',route);
    }
  });

  isRouteAdded = true;
}

/**
 * 注册全局权限守卫
 * @param {Router} router
 */
export function setupPermissionGuard(router) {
  router.beforeEach((to, from, next) => {
    const userStore = user();
    const token = userStore.getToken;
    const roles = userStore.getUserInfo.username === "admin" ? ['admin','user'] : ['user'];
      
    for(let _to of asyncRoutes){
      if(_to.path === to.path){
        to = _to;
      }
    }
    
    if (to.meta.requiresAuth && !token) {
      ElMessage.error('请登录后重试');
      userStore.setShowLogin(true);
      return next('/home');
    }
    
    // 登录后动态添加权限路由
    if (token && !isRouteAdded) {
      const roles = userStore.getUserInfo?.username === "admin" ? ['admin','user'] : ['user'];
      addAccessRoutes(router,roles);
      return next({ path: to.path, query: to.query, hash: to.hash, replace: true });
    }


    // 兜底：只有动态路由添加完成后，才判断是否跳404
    const isRouteExist = router.hasRoute(to.name) || to.path === '/404' || to.path === '/home';
    if (!isRouteExist && isRouteAdded) {
      return next('/404');
    }

    next();
  });
}
