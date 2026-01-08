// 全局 IntersectionObserver 实例（复用实例，优化性能）
let observer = null;

// 初始化观察者
const initObserver = () => {
    if(observer) return observer; //全局IntersecionObserver实例，保证只有一个
    const observerOptions = {
        root:null,
        rootMargin: '0px 0px -50px 0px', // 元素底部进入视口50px触发
        threshold: 0
    }

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const target = entry.target
            //获取到刚刚进入视口的元素
            if(entry.isIntersecting){
                target.classList.add('animate-active')
                observer?.unobserve(target)
            }else{
                //离开视口的时候
            }
        })
    },observerOptions)

    return observer
}


const intersectionAnimate = {
    mounted(el,binding){
        // 1、获取指令传参，默认fade-in
        const animateType = binding.arg || 'fade-in';
        // 2、添加动画样式animate-item和指定类型的类（fade-in)
        el.classList.add('animate-item',animateType);
        // 3、初始化观察者并监听当前元素
        const observerInstance = initObserver();
        observerInstance.observe(el);
    },
    // 避免内存泄漏
    unmounted(el){
        if(observer){
            observer.unobserve(el);
        }
    }
}

// 注册为全局指令
export default function registerIntersectionAnimate(app) {
  app.directive('intersection-animate', intersectionAnimate)
}