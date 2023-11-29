import { request } from '../utils/request';

export function login(userInfo: any) {
    return request({url: '/user/userLogin',method: 'post',data:userInfo})
}

export function logOut() {
    return request({url: '/user/logOut',method: 'post'})
}