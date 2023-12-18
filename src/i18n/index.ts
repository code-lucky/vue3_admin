import { createI18n } from 'vue-i18n'

const messages = {
    zh: {
        global: {
            closeTab: '关闭',
            closeOtherTabs: '关闭其他标签页',
            closeRightTabs: '关闭右侧标签',
        },
        label_page:{
            首页: '首页',
            权限管理: '权限管理',
            用户管理: '用户管理',
            角色管理: '角色管理'
        },
        permission_user:{
            query: '查询',
            newAdmin: '添加管理员',
            id: '用户编号',
            username: '用户名称',
            userIdentity: '用户身份',
            status: '状态',
            createTime: '创建时间',
            updateTime: '更新时间',
            phoneNumber: '管理员手机号',
            confirm: '新增'
        }
    },
    en: {
        global: {
            closeTab: 'Close tab',
            closeOtherTabs: 'Close other tabs',
            closeRightTabs: 'Close tabs to the right'
        },
        label_page:{
            首页: 'Dashboard',
            权限管理: 'Permission management',
            用户管理: 'User management',
            角色管理: 'Role management'
        },
        permission_user:{
            query: 'query',
            newAdmin: 'New admin',
            id: 'id',
            username: 'username',
            userIdentity: 'User identity',
            status: 'Status',
            createTime: 'Create time',
            updateTime: 'Update time',
            phoneNumber: 'Phone number',
            confirm: 'confirm',
        }
    }
}

const i18n = createI18n({
    locale: localStorage.getItem('lang') || 'zh', // 设置当前语言类型
    legacy: false, // 如果要支持compositionAPI，此项必须设置为false;
    globalInjection: true, // 全局注册$t方法
    messages
})

export default i18n
