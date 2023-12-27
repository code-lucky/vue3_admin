import { RoleDto } from '#/role/role';
import { request } from '../utils/request';

export function getRoleUserList(roleName: any) {
    return request({ url: `/role/getRoleUserList?${roleName ? 'roleName=' : ''}${roleName ? roleName : ''}`, method: 'get' })
}

export function addRoleUser(roleDto: RoleDto) {
    return request({ url: `/role/addRoleUser`, method: 'post', data: roleDto })
}