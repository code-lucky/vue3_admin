export const setStorage = (key:any,value:any) =>{
    localStorage.setItem(key,value)
}

export const getStorage = (key:any) =>{
    return localStorage.getItem(key)
}

//定义变量防止缓存字段太多导致混乱
export const state = {
    TOKEN:'TOKEN'
}

export const catchs = {setStorage,getStorage,state}

export default catchs