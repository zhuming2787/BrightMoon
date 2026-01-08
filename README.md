blog前端开发任务:

# 一、基础体验增强（12 个）

核心目标：提升用户基础使用体验，减少 “卡顿感”“等待感”

## 1、页面加载骨架屏（Skeleton）：替代 loading，提升加载感知，基于 Vue3 组件封装实现

    1、利用ElementPlus中的骨架屏，给组件Card增加<el-skeleton/>
    2、然后在home页面中，在一开始令loading = true，当onMounted加载完数据，再让loading =false;
    3、因为我这里数据还没有从后端获取，这里使用setTimeout模拟从后端获取数据

    结果：进入主页的加载时，会出现空白骨架卡片渲染，提高系统流畅度，减少卡顿感!

## 2、路由切换过渡动画：用<Transition>/<TransitionGroup>实现页面 / 组件切换动效

    1、路由切换本质是router-view内部组件的替换。
    2、组件切换用Transition，组件列表切换用TransitionGroup
    3、用来包裹住router-view即可
    4、我这里实现在main组件的切换中使用transition
    5、在Layout组件中的rightmain中实现了Transition组件，成功样式淡入淡出

    结果：切换路由的时候，能明显感觉出页面是“淡入淡出”，而不是之前那种闪烁出现，明显提高用户体验！

## 3、全局加载遮罩（Loading）：异步请求时全局遮罩，结合 Pinia 管理加载状态

    1、在Pinia中创建useLoadingStore加载状态
    2、封装Axios拦截器，@/config/requrest.js
    3、开发全局Loading组件
    4、App.js全局挂载Loading组件!

    结果：当异步请求的时候，界面固定，并且出现全局遮罩层，出现一个“飞行员火速飞行”的全局遮罩样式，明显提高用户体验感！

## 4、页面刷新保留滚动位置：基于 Vue Router 4 的scrollBehavior实现

    本功能未实现（和我的回到顶部的功能冲突了），以下是主要思路
    1、全局注册beforeunload，
    2、退出的时候记录你滚动容器的scrollTop
    const mainContainer = document.getElementById('layout-main');
    上面这个是我滚动容器所在容器

## 5、404/500 等错误页面定制：路由兜底匹配，自定义视觉化错误页

    1、在router的最后增加path: '/:pathMatch(.*)*',配置路由。
    2、500错误页面没有实现，但是在服务器错误后，通过Axios响应拦截器中指出服务器错误的警告。

## 6、空状态组件：列表 / 表单无数据时的友好提示，封装通用空状态组件

    1、用el-empty封装组件Empty组件，让这个组件占据所有空间，并且放在最中心；

    结果：可以看个人作品中的作品。

## 7、回到顶部按钮：滚动监听 +scrollTo，结合 Vue3 的onMounted/onUnmounted监听

    1、定义props，让组件更加灵活
    2、获取props提供的滚动容器
    3、监听滚动事件，判断是否显示按钮
    4、给外部的外层增加一个Transition组件，实现动画消失和出现

## 8、面包屑导航：基于路由元信息（meta）自动生成，适配多级路由

    直接复用Element Plus中的el-breadcrumb

## 9、页面标题动态修改： 监听路由变化，通过document.title更新，结合路由 meta 配置

    1、在需要的meta增加title属性
    2、在全局后置守卫中，获取meta信息，然后通过document.title更新标题
    3、在特定页面，需要根据文章信息改动，可以到views中具体页面中，在获取到文章信息之后，直接通过document.title更新即可

    结果：页面标题随不同页面动态改动

## 10、暗黑模式切换：基于 CSS 变量 + Pinia 管理主题状态，实现全局主题切换

    1、在base.scss中定义两种不同的CSS变量
    2、在Pinia中定义主题状态
    3、封装ThemeToggle组件

    结果：通过暗黑模式，适应不同人群。

## 11、页面缩放控制：监听快捷键 / 按钮，调整根节点font-size或transform

    未实现...

## 12、语言国际化（i18n）：集成vue-i18n，实现文案 / 提示语多语言切换

    1、下载vue-i18n
    2、编写语言文案文件
    3、编写src/i18n.js
    4、全局引用i18n
    5、最后在需要文案的地方引用locale底下不同语言的版本即可

# 二、表单增强功能（15 个）

核心目标：解决表单开发痛点，提升表单易用性和健壮性

## 1. 表单一键重置：基于el-form（Element Plus）的resetFields，保留默认值逻辑

    1、resetFields会自动将表单恢复到默认状态
    2、所以我们只需设置el-form的初始值即可
    3、然后点击重置令表单为resetFields

## 2. 表单自动保存：定时（如 30s）或离开焦点时，将表单数据缓存到 localStorage

## 3. 表单验证自定义规则：扩展 Element Plus/Naive UI 的校验规则（如手机号 / 身份证 / 邮箱

## 4. 表单联动：基于watch监听表单字段变化，自动更新关联字段（如省市区联动）

## 5. 富文本编辑器：集成tinymce/wangEditor，封装为 Vue3 组件

    1、封装MdEditor，将vditor封装进来
    2、未来还可以查阅Vditor相关文档，新增功能。

## 6. 图片上传（单 / 多图）：支持预览、裁剪、压缩、拖拽上传，基于axios封装上传逻辑

2.  文件上传：支持断点续传、进度条、文件类型 / 大小校验，封装通用上传组件
3.  下拉选择远程搜索：结合el-select的remote-method，实现模糊搜索下拉选项
4.  级联选择器：封装通用级联组件，支持静态 / 动态加载选项
5.  表单只读 / 编辑模式切换：基于v-if/disabled，一键切换表单状态
6.  表单数据导出（Excel）：集成xlsx，将表单 / 列表数据导出为 Excel
7.  表单数据导入（Excel）：解析 Excel 文件，自动填充到表单 / 列表
8.  动态增减表单项：基于v-for+ref，实现表单项的新增 / 删除 / 排序
9.  表单提交防抖：封装debounce组合式函数，防止重复提交

# 三、数据展示与可视化（10 个）

核心目标：让数据展示更清晰、更直观

1.  表格列宽拖拽：基于vue-draggable-resizable实现表格列宽自定义
2.  表格列显隐切换：保存用户列配置到 localStorage/Pinia，实现列个性化
3.  表格行拖拽排序：集成vuedraggable，支持表格行拖拽调整顺序
4.  表格分页 / 筛选 / 排序：封装通用表格组件，统一处理分页参数、筛选逻辑
5.  表格数据导出：支持导出当前页 / 全部数据为 Excel/CSV
6.  树形表格：基于 Element Plus 的el-table实现树形结构数据展示
7.  数据可视化图表：集成ECharts5/Chart.js，封装折线 / 柱状 / 饼图等组件
8.  数据大屏适配：基于vw/vh/rem实现大屏自适应，结合 ECharts 响应式调整
9.  标签页（Tab）复用：缓存已打开的 Tab 页，切换时不重复请求数据
10. 数据懒加载：列表滚动到底部自动加载下一页，结合IntersectionObserver实现

# 四、交互与动画（10 个）

核心目标：提升交互流畅度，增强视觉反馈

## 1. 按钮点击防抖 / 节流：封装通用指令v-debounce/v-throttle

    1、首先写一个防抖函数：一个操作延迟执行 require
    2、然后在directives封装v-指令
    3、在main.js入口函数中注册这个指令
    4、在需要的按钮处用指令即可

## 2. 弹窗拖拽：基于@mousedown/@mousemove实现弹窗拖拽功能

    1、将mousedown和startDrag事件绑定
    2、然后startDrag启动mousemove和mouseup监听
    3、mousemove <-> onDrag,注意这里可以用throttledOnDrag(onDrag,10);对该事件进行节流操作。
    4、mouseup <-> stopDrag,然后移除两个事件即可。

    结果：可以去登录界面实现弹窗拖拽功能~

## 3. 弹窗自适应：弹窗大小随内容自适应，超出视口时滚动

## 4. 拖拽组件：集成vue3-draggable，实现任意元素拖拽排序

    1、下载vue3-draggable
    2、将<ul>元素改造成<Draggle tag="ul" ...>
    3、即可直接拖拽！
    4、更多功能可以去参考vue3-draggable

    结果：试试首页的卡片拖拽吧！

## 5. 右键菜单：监听contextmenu事件，自定义右键菜单组件

    1、在想要右键的元素上监听contextmenu事件
    2、阻止默认右键菜单e.preventDefault();
    3、保存鼠标此时的点击位置(x,y);
    4、显示自定义菜单组件出现在(x,y);
    5、当显示菜单时，需要绑定新的click，当点击的是外面的时候，visible.value=false,并且取消监听
    6、最后需要在组件销毁的时候摧毁监听，防止内存泄漏
    7、这里我把Context单独封装为一个组件

    结果：试试点击左边Icon（月亮）吧！会出现一个菜单栏

## 6. 提示框（Message）封装：基于 Element Plus 的ElMessage，封装全局提示方法

    直接用调用ElMessage即可，不用多此一举。
    除非想要基于ElMessage开发自己独特的Message，
    可以在这基础上统一添加自己的样式。

    不过日常使用中确实有很多地方需要ElMessage，
    所以后期可以添加自己的ElMessage

## 4. 确认框（Confirm）封装：封装通用确认弹窗，统一交互风格

    没有统一封装确认框，不过可以使用Element现有的ElMessageBox + ElMessage

    结果：点击退出登录的时候，会提示你，是否要退出。

## 5. 引导页 / 新手教程：集成driver.js，实现分步引导用户操作

    1、下载driver.js并学习
    2、封装引导页组件，当用户第一次登录的时候，可以引用这个组件（这里最好是按需导入，因为后续不用使用了）
    3、driver.js的关键词：高亮highlight、遮罩overlay、步骤steps
    4、引入driver.js的样式，导入{driver}
    5、const driverObj = driver({   showProgress:true, steps:[{},{},...]}) 创建driver
    6、driverObj.drive()启动引导！

    结果：我在用户注册后添加了一个引导功能，后续可以按需添加，仅仅只在注册页面增加了这个功能
    额外：
        const { driver } = await import('driver.js')，
        await import('driver.js/dist/driver.css')
        并且用await在js中异步加载driver.js和driver.css样式，按需导入这两个模块。

## 6. 数字滚动动画：封装数字从 0 到目标值的滚动组件（如数据统计面板）

    1、刚好昨天网友推荐了它自己的 “高性能文本差异动画滚动组件”，这里直接按需导入即可。
    2、npm install @tombcato/smart-ticker
    3、import '@tombcato/smart-ticker/style.css'
    4、import { Ticker } from '@tombcato/smart-ticker/vue';
    5、如下
    ```
    import '@tombcato/smart-ticker/style.css'
    import { Ticker } from '@tombcato/smart-ticker/vue';
    import { ref } from 'vue';

    const price = ref('73.18');
    </script>
    <template>
    <Ticker
        :value="price"
        :duration="800"
        easing="easeInOut"
        :char-width="1"
        :character-lists="['0123456789.,']"
    />
    </template>
    ```

    结果：应用在了右上角，当文本更改的时候，会体现文本差分效果。不过我这里只有“我的”和“登录”，所以是直接切换的，后续可以添加到倒计时效果里面。

## 7. 滚动动画：元素进入视口时触发渐入 / 滑入动画，基于IntersectionObserver封装v-intersection-animate指令

    1、封装全局自定义指令
    v-intersection-animate
    2、全局注册指令并引入样式
    3、创建全局动画样式文件
    4、在Vue组件中使用
    v-intersection-animate:slide-left

    结果：在leftbar（左侧）实现滚动动画

# 五、权限与安全（10 个）

核心目标：保障项目安全，实现精细化权限控制

## 1. 路由权限控制：基于 Vue Router 4 的路由守卫，动态生成可访问路由

    1、将router下的index.js拆分！
    2、index.js只负责创建router + 加载守卫
    3、创建constantRoutes.js 创建公共路由
    4、创建asyncRoutes.js 创建权限路由
    5、创建permission.js 全局路由守卫
    6、utils.js 创建路由权限工具函数
    7、添加README.md 路由说明
    8、最后将原来的后置路由拆分出来到after文件中。

    结果：router文件夹由单一的 index.js 变为现在直接看文件可以理解的 路由文件。并且增加异步路由和基础路由，
    还可以通过用户的权限来判断哪些路由可以被加载和执行

## 2. 按钮级权限控制：封装v-permission指令，控制按钮显隐 / 禁用

    1、配置Pinia存储用户权限
    2、封装v-permission指令
    3、在main.js中全局注册指令
    4、组件中可以使用

    结果：目前我还没有这样的需求，在我的组件库中展示了这个功能

## 3. 接口权限校验：请求拦截器中携带 Token，响应拦截器处理 401/403 错误

    1、封装axios实例
    2、请求拦截器：从Pinia的userStore中获取最新Token，添加到请求头，无Token则跳过
    3、响应拦截器：
    正常响应：剥离axios默认的data外层包装，直接返回核心数据；
    错误响应：
    401：清空用户Token/信息、显示登录弹窗，避免重复处理
    403：提示用户“操作权限不足”；
    其他错误：统一弹出错误提示；

    结果：实现了前后端接口权限的校验=-=

## 4. Token 过期自动刷新：无感刷新 Token，避免用户重复登录

    1、增加一个refreshToken在前端
    2、当后端中Token过期时，把refreshToken传给后端，这个refreshToken只保留
    3、总的来说access token 优先 “便捷”（带用户信息，接口验证不用查库），
        refreshToken 优先 “安全”（随机串 + 哈希存储 + 多条件校验）。

    结果：我这里后端还没有写refreshToken，但是我在pinia中增加了refreshToken令牌，并且每次登录的时候都存储了后端传来的双token。

## 5. 登录状态持久化：Token 存储到 localStorage+Pinia，页面刷新保留状态

    1、在Pinia中存储了用户信息和token令牌
    2、然后在axios的拦截器中带上了本地token
    3、页面刷新的时候会从userStore中获取
    4、pinia定义的时候设置persist，开启数据持久化

    结果：刷新页面，用户信息仍然存在

## 6. 防 XSS 攻击：对用户输入的富文本 / 文本内容进行转义，集成xss库

    1、安装xss库
    2、封装xssFilter.js工具：一个用来过滤普通文本，一个用来过滤html文本
    3、可能vditor过滤了xss，不过还需要二次过滤，甚至后端获取的文本也要进行xss过滤，而且最后前端展示页面仍然需要进行xss过滤，保证无论是哪个部分出现了意外，但是总体来看不会遇到XSS攻击。

    结果：创建了xssFilter.js工具，在需要的时候调用即可

## 7. 防 CSRF 攻击：请求头携带 CSRF Token，后端校验

    1、后端生成并返回CSRF Token
    2、前端获取CSRF Token，CSRF Token的会话级存储的，只会存在当前会话中，即使别人想要通过你的Cookie去访问目标网站也不会成功。
    3、给每个用户生成一个随机、唯一、时效性的CSRF Token，前端发起非Get请求的时候，将Token放在请求头里面，后端校验请求头中的Token和会话中存储的Token是否一致。
    简单来说：Cookie证明用户已登录，CSRF Token证明请求是用户主动发起的。

    结果：暂时没有增加CSRF Token，不过理解了有这个攻击。

## 8. 接口请求加密：敏感接口参数（如密码）加密传输（如 AES）

    1、封装通用AES加密/解密工具
    2、后端生成临时密钥/IV
    3、前端请求敏感接口，加密参数并提交
    4、后端解密参数，执行业务逻辑
    本质上：前端先向后端请求一个锁，然后后端根据这个请求生成一个专门的锁和钥匙，但是把这个打开的锁给前端，前端获取到这个锁以后，把锁跟自己的信息锁起来，没有钥匙打不开，即使前端自己这时候也打不开，然后发给后端，后端根据传来的锁上的信息，再匹配对应的钥匙，就能打开前端发来的信息？

    结果：对数据加密，防止数据被中间路由监听并窃取

## 9. 操作日志记录：记录用户关键操作（如登录、修改数据），保存到后端

    后端...后续添加...

## 10. 登录密码强度校验：封装密码强度检测函数，提示密码安全等级

    前后端都要添加... 防止前端抓包直接用js传输弱密码

# 六、性能优化功能（10 个）

核心目标：减少加载时间，降低运行时性能消耗

## 1. 路由懒加载：Vue Router 4 的动态导入（import()），拆分代码包

    1、将静态导入 -> 动态导入
    import Home from './views/Home.vue'
    =>
    const Home = () => import('./views/Home.vue');
    2、验证懒加载是否生效：打开F12，看app.js主包大小和home.js
    3、打包工具vite会自动将每个懒加载的组件拆分为独立的代码包chunk，大幅减小首屏加载的代码体积。

    结果：通过vite build 后的dist文件后，加载中的app.js文件包明显减少。

## 2. 组件懒加载：用defineAsyncComponent封装异步组件，按需加载

    1、路由懒加载针对的是页面级组件，而defineAsyncComponent针对的是普通组件，传统方式中，静态导入组件，组件代码会和父组件一起打包到同一个代码块，即使组件暂时不渲染，也会被加载。
    2、defineAsyncComponent
    // import ChildComponent from './AsyncComponent.vue'
    不推荐
    const ChildComponent = defineAsyncCompoent(()=>return import(./...))

    3、进阶用法
    defineAsyncComponent({
        loader: () => import('...'),
        //加载中显示的组件
        loadingComponent: LoadingComponent,
        //加载失败显示的组件
        errorComponent: ErrorComponent,
        //加载超时时间
        timeout: 3000,
        //是否延迟显示,避免闪屏
        delay: 200,
        //加载失败的回调
        onError(error,retry,fail,attempts){
            if(attempts < 3){
                retry()
            }else{
                fail();
            }
        }
    });

    4、全局注册异步组件
    const GlobalAsyncComponent = defineAsyncComponent(() => import('./components/GlobalAsyncComponent.vue'))
    app.component('GlobalAsyncComponent', GlobalAsyncComponent)

    结果：“页面级组件”渲染进一步提高效率

## 3. 图片懒加载：封装v-lazy指令，结合

    1、<img
        v-lazy="imageUrl"                                           //image
        data-placeholder="https://picsum.photos/800/600"            //加载图片
        data-error-src="https://picsum.photos/800/600"/>            //错误图像
    2、封装v-lazy指令，利用IntersectionObserver，将被观察的对象告诉浏览器给分配一个唯一的lazyobserver观察者
    3、在特定时候，浏览器会遍历所有的被观察的对象，判断是否在窗口
    4、如果当图片进入到窗口，就把imageUrl给真正的src属性，加载图片，并且删除这个观察
    5、最后还可以封装加载图片和错误图片。

    总结：因为我组件里面的图片一般都是用Element封装好的el-image，所以这里只是展示一下图片懒加载的底层原理

## 4. 缓存频繁请求数据：基于 Pinia/localStorage 缓存接口数据，设置过期时间

    1、定义同一的缓存数据的格式，确保能判断过期时间，同时兼容Pinia（内存）和localStorage（持久化）
    2、封装同一的缓存工具cache.ts
    3、创建Pinia缓存仓库：专门用来管理缓存数据的响应式状态，方便组件/请求层调用；
    4、集成到接口层，让缓存对业务组件透明；
    5、处理缓存的边界情况（提升鲁棒性）

    本质上：
    1、提高页面加载速度，当用户频繁切换页面或者刷新，每次请求接口都会有网络延迟，缓存后第一次请求存数据，后续直接从本地拿，页面瞬间展示数据，不会出现转圈加载的等待状态。

    2、减少不必要的网络请求，减少服务器的压力
    3、适配弱网/离线场景，请求接口容易失败的时候，只要刷新一次，用户就能看到数据，而不是有时候刷新为空白。

    建议场景：
        1）高频请求的静态场景，数据很少变化。
        2）用户频繁操作的页面，例子：列表页、标签页切换，缓存后切换页面不用重新请求，
        3）第三方接口有每天请求次数限制，缓存能避免触发限制导致接口报错。
        4）数据更新频率低的接口，比如有些接口数据一天才更新一次，缓存24小时大部分情况下没有问题。

    不需要的场景：
        1）实时性要求极高的数据，很快变化，无需缓存
        2）一次性请求的数据，只看一次，没必要缓存
        3）敏感数据，缓存可能会被别人截取，每次请求用完就删掉。

    总结：兼容内存+硬盘，将网络请求的结果进行缓存，如果需要的时候获取就可以了，主要用处理缓存的边界情况以提升鲁棒性（容错能力强）

## 5. 按需引入 UI 组件：Element Plus/Naive UI 等库开启按需引入，减小打包体积

    1、unplugin-auto-import和unplugin-vue-components两个插件实现全自动按需引入，是目前最便捷的方案。
    2、可以去ElementPlus官网查看具体步骤

## 6. 预加载关键资源：用<link rel="preload">预加载首屏关键 JS/CSS/ 图片

    <link rel="preload">是浏览器提供的资源预加载指令；
    在head中声明后，浏览器会在页面解析的最早期就优先请求该资源，并存入内存缓存中。

    优先预加载 字体、CSS、骨架屏、加载样式等内容。

    结果：我先将样式预加载了，可以了index.html页面

## 7. 减少首屏请求：合并小接口，或用服务端渲染（SSR）/ 静态生成（SSG）

    合并小接口：{
        1、后端创建聚合接口，在后端统一调用并返回。
        2、前端负责收集聚合接口，发送一次http请求
    }
    服务端渲染SSG：{
        构建时预生成HTML，硬盘持久化，减少后端反复请求数据库，
        前端调用接口的时候，直接返回静态的HTML页面
    }
    服务端渲染SSR:{
        请求时实时计算，内存动态生成 HTML，无持久化存储;
    }

    结果：目前我首页没有那么多小接口，所以还没有实现；服务端还未正式开工

## 8. 响应式数据优化：用shallowRef/shallowReactive减少响应式开销

    原理：只监听第一层，阻止默认的深响应，减少数据过度嵌套。
    语法：
        ref 👉 shallowRef
        reactive 👉 shallowReactive

    实现：在home页面，将contentListbody用shallowReactive响应式，
        因为我们不关注这个列表内部的数据变化，我们只在乎这个列表长度的变化从而去更新页面渲染。

## 9. 无用事件解绑：在onUnmounted中解绑滚动 / 鼠标等全局事件

    // ❌ 错误：匿名函数绑定，解绑时找不到对应引用
    onMounted(() => {
    // 绑定匿名函数
    window.addEventListener('scroll', () => {
        console.log('滚动了');
    });
    });

    onUnmounted(() => {
    // 解绑时用新的匿名函数，和绑定时的不是同一个引用，解绑失败！
    window.removeEventListener('scroll', () => {
        console.log('滚动了');
    });
    });

    总结：监听元素的时候不要用匿名函数，箭头函数等~ 防止无用事件解绑。
    看来我还是很规范的，项目没有出现过无用事件解绑~

# 七、工程化与开发效率（10 个）

核心目标：提升开发效率，规范代码质量

## 1. 接口请求封装：基于axios封装通用请求函数，统一处理请求 / 响应拦截

    1、http = axios.create({ baseURL:'',timeout:'10000',headers:{'Content-type' = "application/json;charset=utf-8"} });...
    2、http.interceptors.request.use(
        (config) => {
            ...
            ...
            return config;
        },
        (err) => {
            ...
        }
    );
    3、http.interceptors.response.use(
        (response) => {
            ...
            ...
            return response.data;
        },
        async (err) => {
            ...
        }
    );

    结果：我已经封装好了一个http在@/config/request,不过一开始是利用AI的。

## 2. 全局常量管理：封装constants.js，统一管理接口地址、枚举值等

    1、将constants.js 全局常量管理 放在utils，并且成功API地址封装为常量
    2、然后在api下将所有地址硬编码封装为常量
    3、后续优化可以把所有硬编码按照 业务配置、字符串常量 等等封装起来。（注意文案请封装到locales国际化包）
    结果：本质上是避免硬编码，后续如果想要更改内容，只用从常量地址从修改即可，提高开发效率。

## 3. 通用工具函数：封装日期格式化、数据类型判断、深拷贝等工具函数（Composables）

    1、typeOf精确判断数据类型，解决typeof的缺陷。
    利用JS原生方法，返回[object Type]格式字符串。
    然后直接放回下标splice(8,-1)后面所有，
    返回了Type

    2、深拷贝（解决循环引用）

    作用：复制复杂数据（对象/数组），避免[浅拷贝导致修改副本影响原数据]，
    同时解决循环引用，比如obj.a = obj 导致的栈溢出。

    实现：
        1、如果当前是数组，创建一个新的数组，然后递归返回deep(arr,cache).最后把这个新的数组返回即可。
        2、如果是基本类型就直接返回

    3、日期格式化

    作用：兼容多种日期输入（时间戳、字符串、Date对象），自定义格式输出（如YYYY-MM-DD,HH:mm）

    实现：
        1、将时间戳、字符串、Date对象统一转换为年份、月份、日期、小时、分钟、秒数。
        2、然后format默认是'YYYY-MM-DD HH:mm:ss'，最后返回的时候会把传入的format中的各种格式转换为想要的东西。

    用法：
        formatDate(date,"YYYY年MM月DD日，HH时mm分ss秒"),这里的date支持date/时间戳/日期字符串

    4、防抖函数（高频触发时只执行最后一次）

    作用：防止某些事件频繁触发，造成后端压力。

    实现：用timer=setTimeout闭包计时，每当时间结束的时候才会回调执行函数，并且timer不为0的时候，触发会直接clearTimeout(timer);

    用法: debounce(fn,delay=300)

    5、节流函数（高频触发时固定频率执行）

    作用：需要每段时间都可以触发，但是只有固定时间时候才能触发成功。

    实现：跟防抖类似，只不过如果Date.now()和上次时间小的话，这次的执行会被直接丢弃~

    用法：throttle(fn,delay=300)

    6、判断值是否为空，类型守卫+类型缩窄
    对于不同type，做出不同回应

    7、处理Ref/非Ref值（统一取值）

    结果：这些工具函数封装到了utils/useUtils.ts,后续可以直接添加。

## 4. 代码规范校验：集成 ESLint+Prettier，强制代码风格统一

    1、安装核心依赖
    2、配置ESLint eslintrc.config.js
    3、配置Prettier   / .prettierrc.cjs
    4、配置编辑器 VS Code自动格式化
    5、添加命令行脚本
    6、结合Husky，提交前强制校验
    7、验证配置是否生效
        1、故意写一段不规范代码 双引号遍历等
        2、保存文件VSCode自动修复

    结果：震碎我的三观，这也太好用了，感觉凌乱的代码瞬间成了规范的士兵qwq

## 5. 提交规范校验：用husky+commitlint约束 Git 提交信息格式

## 6. 环境变量区分：配置.env.development/.env.production，区分开发 / 生产环境

## 7. 组件自动注册：基于 Vite 的import.meta.glob，自动注册全局组件

## 8. 错误边界：封装ErrorBoundary组件，捕获子组件渲染错误

## 9. Mock 数据：集成vite-plugin-mock，本地模拟接口数据，无需依赖后端

## 10. 打包体积分析：用rollup-plugin-visualizer分析打包体积，优化大依赖

# 八、移动端适配（8 个）

核心目标：适配移动端场景，提升移动端体验

## 1. 移动端适配方案：基于postcss-px-to-viewport实现 px 转 vw/vh

## 2. 触摸事件封装：封装v-touch指令，支持点击 / 滑动 / 长按等触摸事件

## 3. 下拉刷新 / 上拉加载：封装移动端列表下拉刷新、上拉加载组件

## 4. 软键盘适配：监听软键盘弹出 / 收起，调整页面布局

## 5. 图片自适应：封装图片组件，支持移动端图片自适应缩放

## 6. 手势识别：集成hammer.js，支持双击、捏合、旋转等手势

## 7. 移动端复制功能：封装copyToClipboard函数，适配移动端剪贴板88. 横屏 / 竖屏提示：监听屏幕旋转，提示用户竖屏使用（如表单场景）

# 九、错误处理与监控（7 个）

核心目标：及时发现并解决问题，提升项目稳定性

## 1. 全局错误捕获：用app.config.errorHandler捕获 Vue 运行时错误

## 2. 接口错误统一处理：响应拦截器中统一处理 400/500 等接口错误，给出友好提示

## 3. 前端日志上报：封装日志上报函数，将错误日志 / 操作日志上报到后端

## 4. 接口超时处理：设置 axios 请求超时时间，超时后给出重试提示

## 5. 重试机制：接口请求失败后，支持手动 / 自动重试（如网络波动场景）

## 6. 断点调试工具：集成vconsole，移动端开发时调试日志

## 7. 性能监控：用performance API 监控首屏加载、路由切换耗时，上报分析

# 十、扩展与集成功能（5 个）

核心目标：丰富项目能力，对接常用第三方服务

## 1. 第三方登录：集成微信 / QQ / 支付宝等第三方登录（OAuth2.0）

## 2. 支付功能：集成微信支付 / 支付宝支付，处理支付回调

## 3. 地图集成：集成高德 / 百度地图 API，实现定位、标记、路径规划

## 4. 消息推送：集成 WebSocket / 第三方推送服务（如极光推送），实现实时消息

## 5. 二维码生成 / 解析：集成qrcode/jsqr，实现二维码生成和扫码解析

# 十一、Agent 集成功能（8 个）

核心目标：增加 Agent 集成能力，借助 AI 实现多 UX 交互的智能学习页面，自动生成学习答案并完成各学习阶段的分数评定，强化自主学习体验与效率

1. AI 学习模块搭建：基于 Vue 组件封装 AI 学习核心页面，支持学习主题选择、学习进度可视化、阶段目标设定等基础框架
2. 学习内容 AI 生成：集成大模型 API（如 OpenAI / 讯飞星火 / 文心一言），根据用户选择的学习主题（如前端知识点 / 编程题）自动生成定制化学习内容、练习题及标准答案
3. 学习阶段智能评分：AI 解析用户提交的学习作答内容，针对客观题自动判分、主观题语义分析打分，生成各学习阶段的分数和能力维度评估
4. 多 UX 交互增强：支持语音提问、文字输入、截图解析等多模态 UX 操作，AI 适配不同交互形式生成对应解答，提升学习操作体验
5. 学习数据持久化：基于 Pinia/Vuex + 本地缓存存储学习阶段、AI 评分结果、作答记录，支持进度续学和分数数据持久化
6. 分数趋势可视化：封装图表组件（如 ECharts），基于各阶段 AI 打分结果生成分数趋势图，直观展示学习效果变化
7. 个性化学习推荐：AI 根据历史学习分数、作答错误点，智能推荐薄弱知识点的补充学习内容和针对性练习题
8. AI 学习报告生成：自动汇总全阶段学习行为、分数数据、错题情况，生成可视化 AI 学习报告，给出个性化提升方案和下一阶段学习建议
