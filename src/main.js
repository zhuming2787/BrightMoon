import { createApp } from 'vue'
import router from "./router/index";
import App from './App.vue'
import i18n from './i18n';

import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' // 导入新版插件
import 'element-plus'
import 'element-plus/dist/index.css'; 
const app = createApp(App);

// 全局注册指令
import debounce from './directives/debounce';
import throttle from './directives/throttle';
import registerIntersectionAnimate from './directives/intersectionAnimate'
import registerLazyImageDirective from './directives/lazyImage';
import { registerPermissionDirective } from './directives/permission';
app.directive('debounce',debounce);
app.directive('throttle',throttle);
registerIntersectionAnimate(app);
registerPermissionDirective(app);
registerLazyImageDirective(app);

// pinia注册
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

// i18n国际化
app.use(i18n);


app.use(router);
app.use(pinia);
app.mount("#app");