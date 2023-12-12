<template>
  <el-menu style="height: 100vh;" class="el-menu-vertical" :collapse="isCollapse" background-color="#545c64"
    text-color="#fff" :router="true" active-text-color="#ffd04b" unique-opened="true" :default-active="activeMenu()">
    <SidebarItem v-for="(route, idx) in routes" :key="idx" :item="route" :base-path="route.path" />
  </el-menu>
</template>
  
<script lang="ts" setup>
import { userStore } from '@/store/user'
import SidebarItem from './SidebarItem.vue';
import { onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import eventBus from '@/utils/event-bus';
const store = userStore()
const $router = useRouter()
const $route = useRoute()
const routes = ref($router.options.routes)

const activeMenu = () => {
  return $route.path
}
const isCollapse = ref(false)
onMounted(() => {
  routes.value = routes.value.concat(store.getMenuList)
  console.log('routes-value', routes.value)
  eventBus.$on('changeCollapse', () => {
    isCollapse.value = !isCollapse.value
  })
})
</script>
  
<style scoped lang="scss">
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  height: calc(100vh);
}
</style>
  