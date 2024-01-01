import { defineStore } from "pinia"
import catchs from "@/utils/cache"
import { getMenuByUserId } from '@/api/menu'
import Layout from '@/layout/index.vue'
import { RouteRecordRaw } from "vue-router"
import router from "@/router"
import subView from "@/views/components/subView.vue"
const modules = import.meta.glob('@/views/*/*.vue')
export const userStore = defineStore('userInfo', {
	state: () => {
		return {
			userInfo: {
				accessToken: '',
				refreshToken: '',
				userInfo: {
					id: 0
				}
			},
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
			localStorage.setItem('userId', userInfo.userInfo.id)
		},
		setToken(token: any) {
			catchs.setStorage('TOKEN', token)
		},
		setHasRoutes(val: Boolean) {
			this.hasRoutes = val
		},
		async setRoutes() {
			const user = this.userInfo.userInfo;
			const userId = localStorage.getItem('userId') || 0
			const data: any = await getMenuByUserId(user.id === 0 || '' ? Number(userId) : user.id)
			const routes = await this.toTree(data.data, 0)
			this.menuList = routes
			routes.forEach((item: any) => {
				router.addRoute(item)
			})
			localStorage.setItem('menu-list', JSON.stringify(routes))
		},
		async toTree(treeList: any, pid: number) {
			const arr: any = []
			treeList.forEach(async (item: any, idx: number) => {
				if (item.pid === pid) {
					const result = {
						path: item.component,
						redirect: pid === 0 ? item.component : undefined,
						name: item.name,
						component: item.pid === 0 ? Layout : modules[`../views${item.component}.vue`],
						hidden: item.isShow !== 0 ? true : false,
						icon: item.icon ? item.icon : '',
						children: [] as any
					}

					const children = await this.toTree(treeList, item.id)

					// 用于多级菜单赋值给children值
					if (children.length > 0) {
						result.children = children
						result.component = item.pid === 0 ? Layout : subView
						result.path = children[0].path
						result.redirect = children[0].path
					}

					// 如果只有一层菜单，则再增加一级用于跳转
					if (result.children.length === 0 && item.pid === 0) {
						result.children = [{
							path: result.path,
							redirect: undefined,
							name: result.name,
							component: modules[`../views${result.path}.vue`],
							hidden: false,
							icon: result.icon ? result.icon : '',
							children: [] as any
						}]
					}

					arr.push(result)
				}
			})
			return arr;
		}
	},
})
