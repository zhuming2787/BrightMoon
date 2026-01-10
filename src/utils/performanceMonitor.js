class PerformanceMonitor {
	constructor(options = {}) {
		// 上报接口地址？
		this.reportUrl = options.reportUrl;
		this.retryCount = options.retryCount || 3;

		this.baseInfo = {
			url: window.location.href,
			referrer: document.referrer,
			userAgent: navigator.userAgent,
			timestamp: Date.now(),
		};
	}

	/**
	 * 初始化：监听首屏加载
	 */
	init() {
		// 监听首屏加载完成（load事件后计算更准确）
		window.addEventListener('load', this.monitorFirstScreen.bind(this));
		// 监听最大内容绘制（LCP，异步指标）
		this.monitorLCP();
	}

	/**
	 * 监控首屏加载耗时
	 */
	monitorFirstScreen() {
		try {
			// 1. 获取导航阶段数据
			const navigationEntry = performance.getEntriesByType('navigation')[0];
			if (!navigationEntry) return;

			// 导航开始时间（页面开始加载的时间）
			const navigationStart = navigationEntry.navigationStart;

			// 2. 获取首次内容绘制（FCP）
			const fcpEntry = performance.getEntriesByType('paint').find(item => item.name === 'first-contentful-paint');
			const firstContentfulPaint = fcpEntry ? fcpEntry.startTime - navigationStart : 0;

			// 3. 首屏总耗时（load事件完成时间 - 导航开始时间）
			const firstScreenTotal = navigationEntry.loadEventEnd - navigationStart;

			// 待上报的首屏数据
			const firstScreenData = {
				type: 'firstScreen', // 数据类型：首屏加载
				firstContentfulPaint: Math.round(firstContentfulPaint), // 取整，单位ms
				firstScreenTotal: Math.round(firstScreenTotal),
				...this.baseInfo,
			};

			// 上报首屏数据
			// this.reportData(firstScreenData);
			console.log(`${firstScreenData}`);
		} catch (error) {
			console.error('首屏监控异常：', error);
		}
	}

	/**
	 * 监控最大内容绘制（LCP）- 异步指标，需单独监听
	 */
	monitorLCP() {
		const observer = new PerformanceObserver(list => {
			const lcpEntry = list.getEntries()[0];
			if (lcpEntry) {
				const navigationStart = performance.getEntriesByType('navigation')[0]?.navigationStart || 0;
				const largestContentfulPaint = Math.round(lcpEntry.startTime - navigationStart);

				// 上报LCP数据
				// this.reportData({
				// 	type: 'lcp',
				// 	largestContentfulPaint,
				// 	...this.baseInfo,
				// });
				console.log(`监控最大内容绘制largestContentfulPaint ： ${largestContentfulPaint}`);
				observer.disconnect(); // 只监听一次
			}
		});

		observer.observe({ entryTypes: ['largest-contentful-paint'] });
	}

	/**
	 * 监控路由切换耗时（需在路由守卫中调用）
	 * @param {string} routeName - 路由名称
	 */
	monitorRouteChange(routeName) {
		// 路由切换开始标记
		const startMark = `routeStart_${routeName}`;
		// 路由切换结束标记
		const endMark = `routeEnd_${routeName}`;

		// 记录开始时间
		performance.mark(startMark);

		// 返回结束监控的函数（在路由切换完成后调用）
		return () => {
			try {
				// 记录结束时间
				performance.mark(endMark);
				// 计算耗时
				const measure = performance.measure(`route_${routeName}_duration`, startMark, endMark);
				// 路由切换耗时（ms）
				const routeChangeDuration = Math.round(measure.duration);

				// 上报路由切换数据
				// this.reportData({
				// 	type: 'routeChange',
				// 	routeName,
				// 	routeChangeDuration,
				// 	...this.baseInfo,
				// });
				console.log(`${routeName} ，路由更新时间 ： ${routeChangeDuration}`);

				// 清理mark和measure，避免内存占用
				performance.clearMarks(startMark);
				performance.clearMarks(endMark);
				performance.clearMeasures(`route_${routeName}_duration`);
			} catch (error) {
				console.error('路由切换监控异常：', error);
			}
		};
	}

	/**
	 * 上报数据到服务端
	 * @param {object} data - 待上报的数据
	 * @param {number} retry - 当前重试次数
	 */
	async reportData(data, retry = 0) {
		if (!this.reportUrl) {
			console.error('未配置上报接口地址');
			return;
		}

		try {
			const response = await fetch(this.reportUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
				timeout: 5000, // 超时时间5s
			});

			if (!response.ok) {
				throw new Error(`上报失败，状态码：${response.status}`);
			}

			console.log(`[${data.type}] 数据上报成功：`, data);
		} catch (error) {
			console.error(`[${data.type}] 上报失败（第${retry + 1}次）：`, error);
			// 重试机制
			if (retry < this.retryCount) {
				setTimeout(
					() => {
						this.reportData(data, retry + 1);
					},
					1000 * (retry + 1)
				); // 指数退避：1s、2s、3s
			}
		}
	}
}

export const performanceMonitor = new PerformanceMonitor({
	reportUrl: 'localhost:8888/api/performance/report', // 替换为你的上报接口
	retryCount: 3,
});
