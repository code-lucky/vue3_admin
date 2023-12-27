export interface Tree {
    id: number
    label: string
    children?: []
}

export interface RoleDto{
    roleName: string,
    isShow?: boolean,
    rules: number[]
}