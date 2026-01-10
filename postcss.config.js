export default {
	plugins: {
		autoprefixer: {},
		'postcss-px-to-viewport-8-plugin': {
			unitToConvert: 'px', // 需要转换的单位（默认就是 px）
			viewportWidth: 1385, // 设计稿宽度（关键参数！）
			unitPrecision: 6, // 转换后保留的小数位数
			propList: ['*'], // 要转换哪些 CSS 属性
			viewportUnit: 'vw', // 转换成为的视口单位
			fontViewportUnit: 'vw', // 字体转换成为的单位
			selectorBlackList: ['ignore'], // 不进行转换的选择器黑名单
			minPixelValue: 1, // 小于或等于 1px 的值不转换
			mediaQuery: true, // 是否允许在媒体查询中转换 px
			replace: true, // 转换后直接替换原值（而不是保留 px 作为 fallback）
			exclude: [/node_modules/], // 排除哪些文件不进行转换
		},
	},
};
