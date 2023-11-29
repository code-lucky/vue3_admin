<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(route,idx) in list.values" :to="{ path: `${route.path}` }" :key="idx"><span class="navbar-bread-pointer">{{route.name}}</span></el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script lang="ts" setup>
import { reactive, watch } from 'vue';
import { useRoute } from 'vue-router';
const $route = useRoute()
const arr = reactive({values:[] as any})
const list = reactive({values:[{path:'/dashboard',name:'/dashboard'}] as any})

const isIndexRoute = () =>{
    arr.values = $route.matched.filter((item:any)=>!item.hidden&&item.name)
    if(arr.values.filter((res:any)=>res.path==list.values[0].path).length>0){
    }else{
        list.values = list.values.concat(arr.values)
    }
}
isIndexRoute()
watch(() => $route.matched,(newRoute:any,oldRoute:any) =>{
    list.values = [{path:'/dashboard',name:'dashboard'}]
    arr.values = newRoute
    console.log('arr',arr.values)
    if(arr.values.filter((res:any)=>res.path == list.values[0].path).length > 0){
    }else{
        //如果当前元素的子元素只有一个则不进行下一个元素push
        for(let i = 0;i < arr.values.length;i++){
            if(arr.values[i].children.length == 1){
                list.values.push(arr.values[i])
                return
            }else{
                list.values.push(arr.values[i])
            }
        }
    }
},{ immediate: true })
</script>
<style lang="scss" scoped>
.navbar-bread-pointer{
    cursor: pointer;
}
</style>