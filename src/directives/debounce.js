export default {
  mounted(el, binding) {
    // el指的是用这个指令的元素
    // binding是指绑定该指令的内容
    // v-debounce:500.stop="click"
    // binding.value = click
    // binding.arg = 500
    // binding.modifiers = {stop:true}

    let fn, delay, event

    if (typeof binding.value === 'function') {
      fn = binding.value
      delay = Number(binding.arg) || 300
      event = 'click'
    } else {
      fn = binding.value.fn
      delay = binding.value.delay || 300
      event = binding.value.event || 'click'
    }

    if (typeof fn !== 'function') {
      console.warn('v-debounce 需要一个函数')
      return
    }

    let timer = null

    // 闭包函数
    const handler = function (...args) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, delay)
    }

    el.__debounce__ = handler
    el.__debounceEvent__ = event

    el.addEventListener(event, handler)
  },

  unmounted(el) {
    el.removeEventListener(el.__debounceEvent__, el.__debounce__)
    el.__debounce__ = null
  }
}
