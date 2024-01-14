import { request } from '../utils/request';

export function addMenu(params: any) {
    return request({ url: '/menu/addMenu', method: 'post', data: params })
}

export function updateMenu(params: any) {
    return request({ url: '/menu/updateMenu', method: 'post', data: params })
}

export function getMenuList() {
    return request({ url: '/menu/getMenuList', method: 'get' })
}

export function getMenuTree() {
    return request({ url: '/menu/getMenuTree', method: 'get' })
}

export function getMenuItemById(id: number) {
    return request({ url: `/menu/getMenuById?id=${id}`, method: 'get' })
}

export function getMenuByUserId(id: number) {
    return request({ url: `/menu/getMenuByUserId?id=${id}`, method: 'get' })
}
