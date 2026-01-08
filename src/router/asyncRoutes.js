// 权限路由~
export const asyncRoutes = [
  {
    path: '/self',
    name: 'Self',
    meta: {
      title: '我的',
      requiresAuth: true,
      roles: ['user', 'admin']
    },
    component: () => import('@/views/self/self.vue')
  },
  {
    path: '/notes',
    name: 'Notes',
    meta: {
      title: '文章管理',
      requiresAuth: true,
      BanOverFlowY: true,
      roles: ['admin','user']
    },
    component: () => import('@/views/notes/notes.vue')
  },
  {
    path: '/draw',
    name: 'Draw',
    meta: {
      title: '绘图管理',
      requiresAuth: true,
      BanOverFlowY: true,
      roles: ['admin','user']
    },
    component: () => import('@/views/draw/draw.vue')
  },
  {
    path: '/pixel',
    name: 'Pixel',
    meta: {
        requiresAuth: true,
        BanOverFlowY: true
    },
    component: () => import('@/views/pixel/pixel.vue')
  }
];
