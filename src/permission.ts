import router from "./router";
import pinia from "./store/index"
import { userStore } from "./store/user";
import catchs from "./utils/cache";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const store = userStore(pinia)
const whiteList = ['/login', '/404']
router.beforeEach(async (to, form, next) => {
    NProgress.start();
    const Token = catchs.getStorage(catchs.state.TOKEN)
    const hasRoutes = store.getHasRoutes

    if (Token) {
        if (to.path === '/login') {
            next({ path: '/' })
            NProgress.done()
        } else {
            if (!hasRoutes) {
                await store.setRoutes()
                router.addRoute({
                    path: '/:catchAll(.*)',
                    name: 'not-found',
                    component: () => import('@/views/components/404.vue'),
                    hidden: true
                })
                next({ ...to })
                store.setHasRoutes(true)
            } else {
                next()
            }
            NProgress.done()
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
            NProgress.done()
        } else {
            next(`/login?redirect=${to.path}`)
            NProgress.done()
        }
    }
})