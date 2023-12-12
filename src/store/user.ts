import { defineStore } from "pinia"
import catchs, { state } from "@/utils/cache"
import { getMenuList } from '@/api/menu'
import Layout from '@/layout/index.vue'
import { RouteRecordRaw } from "vue-router"
import router from "@/router"
import subView from "@/views/components/subView.vue"
const modules = import.meta.glob('@/views/*/*.vue')
export const userStore = defineStore('userInfo', {
	state: () => {
		return {
			userInfo: {},
			menuList: [] as Array<RouteRecordRaw>,
			hasRoutes: false as Boolean
		}
	},
	getters: {
		getUserInfo: (state) => {
			return state.userInfo
		},
		getMenuList: (state) => {
			const data: string = localStorage.getItem('menu-list') || '[]'
			return state.menuList.length > 0 ? state.menuList : JSON.parse(data)
		},
		getHasRoutes: (state) => {
			return state.hasRoutes
		}
	},
	// action 支持 async/await 的语法，可以自行添加使用
	// action 里的方法相互之间调用，直接用 this 访问即可
	actions: {
		async setUserInfo(userInfo: any) {
			this.userInfo = userInfo
			this.setToken(userInfo.accessToken)
		},
		setToken(token: any) {
			catchs.setStorage('TOKEN', token)
		},
		setHasRoutes(val: Boolean) {
			this.hasRoutes = val
		},
		async setRoutes() {
			const data: any = await getMenuList()
			const routes = await this.toTree(data.data, 0)
			this.menuList = routes
			routes.forEach((item: any) => {
				router.addRoute(item)
			})
			localStorage.setItem('menu-list', JSON.stringify(routes))
		},
		async toTree(treeList: any, pid: number) {
			const arr: any = []
			treeList.forEach(async (item: any) => {
				if (item.pid === pid) {
					const result = {
						path: item.component,
						redirect: pid === 0 ? item.component : undefined,
						name: item.name,
						component: item.pid === 0 ? Layout : modules[`../views${item.component}.vue`],
						hidden: item.isShow !== 0 ? true : false,
						icon: item.icon ? item.icon : '',
						children: []
					}
					const children = await this.toTree(treeList, item.id)
					if (children.length > 0) {
						result.children = children
						result.component = item.pid === 0 ? Layout : subView
					}
					arr.push(result)
				}
			})
			return arr;
		}
	},
})
