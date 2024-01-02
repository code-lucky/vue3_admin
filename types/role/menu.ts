export interface MenuDto {
    id?: number,
    pid: number,
    menuType: number | string,
    icon: string,
    name: string,
    sort: number,
    component: string,
    path?: string,
    isShow: number
}