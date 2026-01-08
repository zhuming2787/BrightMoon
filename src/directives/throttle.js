export default{
    mounted(el,binding){
        let fn,delay,event,leading

        if(typeof binding.value === 'function'){
            fn = binding.value;
            delay = Number(binding.arg) || 300;
            event = 'click';
            leading = false;
        }else{ 
            fn = binding.value.fn;
            delay = Number(binding.value.delay) || Number(binding.arg) || 300;
            event =  binding.value.event || 'click';
            leading = binding.value.leading ?? false;
        }
        
        if(typeof fn !== 'function'){
            console.warn('v-throttle 需要一个函数');
            return;
        }

        let timer = null;

        const handler = function(...args){
            if(!timer){
                timer = setTimeout(()=>{
                    fn.apply(this,args);
                    timer = null;
                },delay)
            }
        }

        el.__throttle__ = handler
        el.__throttleEvent__ = event

        el.addEventListener(event, handler)
    },

    unmounted(el){
        el.removeEventListener(el.__throttleEvent__, el.__throttle__);
        el.__throttle__ = null;
        el.__throttleEvent__ = null;
    }
}