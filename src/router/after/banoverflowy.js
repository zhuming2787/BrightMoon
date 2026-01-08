export function setupBanOverFlowYGuard(router) {
    router.afterEach((to) => {
        const main = document.getElementById('layout-main');
        if(main){
            main.scrollTop = 0;
            main.style.overflowY = to.meta.BanOverFlowY ? 'hidden' : 'auto';
        }

        document.title = to.meta.title || 'BrightMoon';
    });
}
