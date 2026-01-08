import { user } from '@/store/index'

const hasPermission = (requiredPermission) => {
    const userStore = user();

    // 如果不需要权限，返回true
    if(!requiredPermission) return true;
    // 如果需要权限，看用户有没有
    if(!userStore.token) return false;

    // 这里根据username是否为admin增加权限组,后续可以在后端添加权限组
    const roles = userStore.getUserInfo.username === "admin" ? ['admin','user'] : ['user'];

    return roles.includes(requiredPermission);
}

const clearPermissionEffect = (el, binding) => {
  const isDisabledMode = binding.modifiers.disabled;
  if (isDisabledMode) {
    // 恢复元素初始的disabled状态
    el.disabled = el._originDisabled ?? false;
    el.classList.remove('permission-disabled');
    // 清理自定义属性，避免内存泄漏
    delete el._originDisabled;
  } else {
    // 恢复元素初始的display状态
    el.style.display = el._originDisplay ?? '';
    // 清理自定义属性
    delete el._originDisplay;
  }
};


export const registerPermissionDirective = (app) => {
    app.directive('permission',{
        // el是属性
        // v-permission:500.stop="click"
        // binding.value = click
        // binding.arg = 500
        // binding.modifiers = {stop:true}
        mounted(el,binding){
            const requiredPermission = binding.value; 
            const isDisabledMode = binding.modifiers.disabled;
            const hasAuth = hasPermission(requiredPermission);
            
            if(isDisabledMode){
                // 禁用模式
                el.disabled = !hasAuth;
                if(!hasAuth){
                    el.classList.add('permission-disabled');
                }else{
                    el.classList.remove('permission-disabled');
                }
            }else{
                // 显隐模式
                if(!hasAuth){
                    el.style.display = 'none';
                }else{
                    el.style.display = '';
                }
            }
        },
        unmounted(el,binding) {
            clearPermissionEffect(el, binding); // 执行清理，而非调用mounted
        },
    })
}