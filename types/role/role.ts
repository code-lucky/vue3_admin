export interface Tree {
    id: number
    label: string
    children?: []
}

export interface RoleDto{
    id?: number,
    roleName: string,
    isShow?: boolean,
    rules: number[]
}