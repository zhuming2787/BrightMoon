import { defineAsyncComponent } from 'vue';

/**
 * 自动注册全局组件
 * @param {App} app
 */
export function registerGlobalComponents(app) {
	const components = import.meta.glob('./**/*.vue', {
		eager: true,
		import: 'default',
	});

	Object.entries(components).forEach(([filePath, loadComponent]) => {
		// 从文件路径提取规范的组件名
		const componentName = getComponentName(filePath);

		app.component(
			componentName,
			defineAsyncComponent({
				loader: loadComponent,
				delay: 200,
				timeout: 3000,
				// 加载占位组件loadingComponent
				// 失败提示组件errorComponent
			})
		);

		console.log(`全局组件自动注册成功: ${componentName}`);
	});
}

/**
 * 获得组件名字：从文件路径提取PascalCase 规范的组件名(大驼峰)
 * @param {string} filePaht
 * @returns {string} 规范组件名(LayoutHeader)
 */
function getComponentName(filePath) {
	let name = filePath.replace(/^\.\//, '').replace(/\.vue$/, '');

	name = name
		.split('/')
		.map(part => {
			return part.replace(/-(\w)/g, (_, char) => char.toUpperCase()).replace(/^\w/, char => char.toUpperCase());
		})
		.join('');

	return name;
}
