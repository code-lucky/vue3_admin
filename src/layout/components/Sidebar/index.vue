<template>
  <div class="sidebar">
    <el-menu style="height: 100%;" class="el-menu-vertical" :collapse="isCollapse" background-color="#2d3a4b"
      text-color="#fff" :router="true" active-text-color="#ffd04b" unique-opened="true" :default-active="activeMenu()">
      <SidebarItem v-for="(route, idx) in routes" :key="idx" :item="route" :base-path="route.path" />
    </el-menu>
  </div>
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
  eventBus.$on('changeCollapse', (val: boolean) => {
    isCollapse.value = val
  })
})
</script>
  
<style scoped lang="scss">
.sidebar{
  // height: 100vh;
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 260px;
  height: calc(100vh);
}
</style>
  