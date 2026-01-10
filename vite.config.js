import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { viteMockServe } from 'vite-plugin-mock';
import { visualizer } from 'rollup-plugin-visualizer';
import os from 'os';
import path from 'path';

const userHome = os.homedir();

// 判断是否为打包环境
const isAnalyze = process.env.ANALYZE === 'true';

// https://vite.dev/config/
export default defineConfig({
	base: './',
	root: process.cwd(),
	resolve: {
		alias: [
			{
				find: '@',
				replacement: resolve(__dirname, './src'),
			},
		],
	},
	plugins: [
		vue(), // 仅保留Vue插件
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			dts: true,
			dirs: 'src/components',
			resolvers: [ElementPlusResolver()], // ElementPlus按需加载
		}),
		viteMockServe({
			// mock文件的根目录（相对于项目根目录）
			mockPath: 'src/mock',
			// 是否启用本地mock文件（开发环境建议开启）
			localEnabled: true,
			// 生产环境是否启用mock（建议关闭）
			prodEnabled: false,
			// 是否支持TypeScript（如果用TS写mock文件需开启）
			supportTs: true,
			// 是否在控制台打印mock请求日志（方便调试）
			logger: true,
			// 自动注入mock服务（无需手动引入）
			injectCode: `
        import { setupProdMockServer } from './mockProdServer';
        setupProdMockServer();
      `,
			prefix: '/api', // 你的接口都是/api开头，指定前缀更易命中
		}),
		isAnalyze &&
			visualizer({
				// 生成的分析报告文件名
				filename: resolve(__dirname, 'dist/stats.html'),
				// 自动打开报告（打包完成后自动在浏览器打开）
				open: true,
				// 分析模式：treemap（旭日图，推荐）、pie（饼图）、network（网络拓扑图）
				template: 'treemap',
				// 显示gzip压缩后的体积（关键：真实部署时的体积）
				gzipSize: true,
				// 显示brotli压缩后的体积（部分服务器支持）
				brotliSize: true,
				// 排除node_modules以外的文件（聚焦第三方依赖分析）
				// exclude: /node_modules/,
			}),
	],
	server: {
		port: 8080,
		host: '0.0.0.0',
		https: false,
		open: true,
		fs: {
			allow: [
				process.cwd(), // 项目根目录（默认）
				resolve(userHome, 'node_modules'), // 加入用户目录下的 node_modules
			],
		},
		proxy: {
			'/api': {
				target: 'http://localhost:8888',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, ''),
			},
		},
	},
	build: {
		rollupOptions: {
			output: {
				// 按模块拆分代码
				manualChunks(id) {
					// 将node_modules中的依赖拆分为单独的chunk
					if (id.includes('node_modules')) {
						return id.toString().split('node_modules/')[1].split('/')[0].toString();
					}
				},
				// 输出文件命名规范
				chunkFileNames: 'js/[name]-[hash].js',
				entryFileNames: 'js/[name]-[hash].js',
			},
		},
		// 压缩代码（默认开启，可配置）
		minify: 'esbuild',
		// 生成生产环境sourcemap（分析时可关闭，减少打包时间）
		sourcemap: false,
	},
});
