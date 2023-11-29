import { defineStore } from "pinia"
import catchs from "@/utils/cache"
export const userStore = defineStore('userInfo', {
	state: () => {
		return {
			userInfo:{}
		}
	},
	getters: {
		getUserInfo: (state) => {
			return state.userInfo
		},
	},
	// action 支持 async/await 的语法，可以自行添加使用
	// action 里的方法相互之间调用，直接用 this 访问即可
	actions: {
		setUserInfo(userInfo: any) {
			this.userInfo = userInfo
            this.setToken(userInfo.accessToken)
		},
        setToken(token:any){
            catchs.setStorage('TOKEN',token)
        }
	},
})