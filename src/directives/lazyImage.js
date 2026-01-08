// 全局IntersectionObserve实例
let observer = null;

const initObserver = () => {
    if(observer) return observer;
    const observerOptions = {
        root:null,
        rootMargin: '0px 0px 100px 0px',
        threshold: 0
    }

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const img = entry.target;
            if(entry.isIntersecting){
                // 获取真实图片URL

                const realSrc = img.dataset.src;
                if(!realSrc) return;

                const image = new Image();
                image.src = realSrc;
                image.onload = () => {
                    img.src = realSrc;
                    // 移除占位样式（如果有）
                    img.classList.remove('lazy-placeholder');
                };
                image.onerror = () => {
                    img.src = img.dataset.errorSrc || 'https://placeholder.pics/svg/200x200/EEEEEE/999999/加载失败';
                };

                // 加载完成后取消监听（避免重复触发）
                observer?.unobserve(img);
            }else{
                //离开视口时候
            }
        });
    },observerOptions)

    return observer;
}

const lazyImageDirective = {
    mounted(el,binding){
        if(el.tagName !== 'IMG'){
            console.warn('v-lazy指令只支持img标签');
            return;
        }

        el.dataset.src = binding.value;

         // 设置占位图（优先用自定义占位图，无则用默认空白占位）
        const placeholder = el.dataset.placeholder || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        el.src = placeholder;
        el.classList.add('lazy-placeholder');

        if (!window.IntersectionObserver) {
        el.src = binding.value;
        el.classList.remove('lazy-placeholder');
        return;
        }

        // 初始化Observer并监听当前图片元素
        const observerInstance = initObserver();
        observerInstance.observe(el);
    },
    /**
     * 元素更新时触发（比如绑定的图片URL变化）
     * @param {图片元素} el 
     * @param {新的绑定值} binding 
     */
    updated(el, binding) {
        // 若URL未变化，无需处理
        if (binding.value === el.dataset.src) return;

        // 更新真实URL，重新监听
        el.dataset.src = binding.value;
        const observerInstance = initObserver();
        observerInstance.observe(el);
    },
    unmounted(el){
        if (observer) {
        observer.unobserve(el);
        // 可选：若所有图片都取消监听，销毁Observer实例（优化性能）
        if (observer.takeRecords().length === 0) {
          observer.disconnect();
          observer = null;
        }
        }
    }
}

// 注册为全局指令
export default function registerLazyImageDirective(app) {
  app.directive('lazy', lazyImageDirective)
}