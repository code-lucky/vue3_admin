import { request } from '../utils/request';
import {CreateUserDto} from '#/role/user'

export function login(userInfo: any) {
    return request({url: '/user/userLogin',method: 'post',data:userInfo})
}

export function logOut() {
    return request({url: '/user/logOut',method: 'post'})
}

export function getUserList(userName:string | undefined | null){
    return request({url: `/user/getUserList${userName?`?userName=`+userName:''}`,method: 'get'})
}

export function createUser(createUser: CreateUserDto) {
    return request({url: '/user/createUser',method: 'post', data: createUser})
}
