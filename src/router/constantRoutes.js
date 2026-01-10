import Layout from '@/components/Layout/index.vue';
import Home from '@/views/home/home.vue';
export const constantRoutes = [
	{
		path: '/',
		component: Layout,
		name: 'Layout',
		redirect: '/home',
		children: [
			{
				path: '/home',
				name: 'Home',
				meta: { title: '首页' },
				component: Home,
			},
			{
				path: '/content',
				name: 'Content',
				component: () => import('@/views/content/index.vue'),
				children: [
					{
						path: '/content/article/:id',
						name: 'ArticleDetail',
						component: () => import('@/views/content/article/index.vue'),
					},
					{
						path: '/content/pixel/:id',
						name: 'PixelDetail',
						component: () => import('@/views/content/pixel/index.vue'),
					},
					{
						path: 'image/:id',
						name: 'DrawDetail',
						component: () => import('@/views/content/draw/index.vue'),
					},
				],
			},
			{
				path: '/recommend',
				name: 'Recommend',
				component: () => import('@/views/recommend/recommend.vue'),
			},
			{
				path: '/follow',
				name: 'Follow',
				component: () => import('@/views/follow/follow.vue'),
			},
			{
				path: '/components',
				name: 'Components',
				component: () => import('@/views/components/index.vue'),
			},
		],
	},
	{
		path: '/:pathMatch(.*)*',
		name: '404',
		component: () => import('@/views/404/index.vue'),
	},
];
