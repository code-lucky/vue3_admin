export interface UserFormDto{
    id?:number,
    userName: string,
    password: string,
    roleId: number | string,
    email: string,
    status: number
}