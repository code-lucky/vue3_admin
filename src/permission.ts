import router from "./router";
import catchs from "./utils/cache";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const whiteList = ['/login']
router.beforeEach(async(to,form,next)=>{
    NProgress.start();
    const Token = catchs.getStorage(catchs.state.TOKEN)

    if(Token){
        if (to.path === '/login') {
            next({ path: '/' })
            NProgress.done()
        } else {
            next()
            NProgress.done()
        }
    }else{
        if (whiteList.indexOf(to.path) !== -1) {
            next()
            NProgress.done()
        } else {
            next(`/login?redirect=${to.path}`)
            NProgress.done()
        }
    }
})