import router from "./router";
import pinia from "./store/index"
import { userStore } from "./store/user";
import catchs from "./utils/cache";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Layout from '@/layout/index.vue'
const store = userStore(pinia)
const whiteList = ['/login', '/404']
router.beforeEach(async (to, form, next) => {
    NProgress.start();
    const Token = catchs.getStorage(catchs.state.TOKEN)

    if (Token) {
        if (to.path === '/login') {
            next({ path: '/' })
            NProgress.done()
        } else {
            await store.setRoutes()
            next()
            // next({ ...to, replace: true })
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