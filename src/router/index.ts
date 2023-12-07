import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Layout from '@/layout/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: "/",
    redirect: '/dashboard',
    name: 'dashboard',
    component: Layout,
    children: [{
      path: 'dashboard',
      name: 'Dashboard1',
      component: () => import('@/views/dashboard/index.vue'),
    }]
  },
  {
    path: "/example",
    redirect: '/example/table',
    name: 'Example',
    component: Layout,
    children: [{
      path: 'table',
      name: 'Table',
      component: () => import('@/views/tabs/index.vue'),
    }, {
      path: 'collapse',
      name: 'Collapse',
      component: () => import('@/views/tabs/collapse.vue'),
    }]
  },
  {
    path: "/role",
    redirect: '/role/index',
    name: '权限管理',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '角色管理',
        component: () => import('@/views/role/role.vue'),
      }, {
        path: 'user',
        name: '用户管理',
        component: () => import('@/views/role/user.vue'),
      }, {
        path: 'menu',
        name: '权限管理',
        component: () => import('@/views/role/menu.vue'),
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  },
});

router.beforeEach((_to, _from) => {

  // 路由守卫逻辑
  // 通过 return turn;
  // 不通过 return false;
  return true;
});

export default router;
