import { defineStore } from "pinia"
import catchs, { state } from "@/utils/cache"
import { getMenuList } from '@/api/menu'
import Layout from '@/layout/index.vue'
import { RouteRecordRaw } from "vue-router"
import router from "@/router"
const modules = import.meta.glob('@/views/*/*.vue')
export const userStore = defineStore('userInfo', {
	state: () => {
		return {
			userInfo: {},
			menuList: [] as Array<RouteRecordRaw>
		}
	},
	getters: {
		getUserInfo: (state) => {
			return state.userInfo
		},
		getMenuList: (state) => {
			const data: string = localStorage.getItem('menu-list') || '[]'
			return state.menuList.length > 0 ? state.menuList : JSON.parse(data)
		}
	},
	// action 支持 async/await 的语法，可以自行添加使用
	// action 里的方法相互之间调用，直接用 this 访问即可
	actions: {
		async setUserInfo(userInfo: any) {
			this.userInfo = userInfo
			this.setToken(userInfo.accessToken)
			const data: any = await getMenuList()
			const resultMenu: any = await this.toTree(data.data, 0)
			this.menuList = resultMenu
			const routes: RouteRecordRaw[] = resultMenu
			routes.forEach((item => {
				router.addRoute(item)
			}))
			localStorage.setItem('menu-list', JSON.stringify(resultMenu))
		},
		setToken(token: any) {
			catchs.setStorage('TOKEN', token)
		},
		async toTree(treeList: any, pid: number) {
			const arr: any = []
			treeList.forEach(async (item: any) => {
				if (item.pid === pid) {
					const result = {
						path: item.component,
						redirect: item.component,
						name: item.name,
						component: item.pid === 0 ? Layout : modules[`../views${item.component}.vue`],
						children: []
					}
					const children = await this.toTree(treeList, item.id)
					if (children.length > 0) {
						result.children = children
					}
					arr.push(result)
				}
			})
			return arr;
		}
	},
})
