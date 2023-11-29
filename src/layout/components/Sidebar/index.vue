<template>
  <div class="sidebar">
    <el-menu
      style="height: 100vh;"
      class="el-menu-vertical"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      :router="true"
      active-text-color="#ffd04b"
      unique-opened="true"
      :default-active="activeMenu()"
    >
      <SidebarItem v-for="(route,idx) in routes" :key="idx" :item="route" :base-path="route.path"></SidebarItem>
    </el-menu>
  </div>
</template>
  
<script lang="ts" setup>
import SidebarItem from './SidebarItem.vue';
import {onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
const $router = useRouter()
const $route = useRoute()
const routes = reactive($router.options.routes)
console.log('path',$route.path)
const activeMenu = () =>{
  return $route.path
}
const isCollapse = ref(false)
onMounted(() => {
})
</script>
  
<style>
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .sidebar{
    width: 200px;
  }
</style>
  