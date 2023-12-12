import { createApp } from 'vue'
import App from '@/App.vue'
//引用element-ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//全局引入icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引用router
import router from "@/router"
import '@/permission'
//导入pinia状态管理
import store from './store/index'
import './styles/style.scss'

const app = createApp(App)
// 注册全局icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
