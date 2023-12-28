export interface CreateUserDto{
    userName: string,
    password?: string,
    roleId: number | string,
    email: string,
    status: number
}