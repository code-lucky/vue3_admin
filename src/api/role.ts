import { request } from '../utils/request';


export function getRoleUserList(roleName: any) {
    return request({ url: `/role/getRoleUserList?${roleName ? 'roleName=' : ''}${roleName ? roleName : ''}`, method: 'get' })
}