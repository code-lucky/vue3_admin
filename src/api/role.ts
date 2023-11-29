import { request } from '../utils/request';

export function adminMenu(){
    return request({url:'/role/getMenuList', method: 'get',})
}