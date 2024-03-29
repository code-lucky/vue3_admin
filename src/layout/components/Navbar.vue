<template>
    <div class="navbar">
        <div class="navbar-folding" @click="changeCollapse">
            <el-icon :size="24" v-if="isCollapse">
                <Expand />
            </el-icon>
            <el-icon :size="24" v-else>
                <Fold />
            </el-icon>
        </div>
        <div class="navbar-bread">
            <Breadcrumb />
        </div>
        <div class="navbar-info">
            <div class="navbar-info-right" @click="isFullScreen">
                <svgIcon class="navbar-info-right-img" :src="isFull ? 'exit-fullscreen.svg' : 'screen-full.svg'" />
            </div>
            <el-dropdown class="navbar-info-right">
                <el-avatar :src="squareUrl" />
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item><a :href="gitUrl" target="_blank">GitHub</a></el-dropdown-item>
                        <el-dropdown-item @click="logout()">Log out</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
    <div class="navigation">
        <el-dropdown v-for="(i, idx) in routes" trigger="contextmenu">
            <el-tag type="info" :key="i.name" class="mx-1 navigation-item" :closable="i.name !== routes[0].name"
                :disable-transitions="false" size="large" @click="goRoute(i.path)" @close="delRoute(i)">{{
                    i.name
                }}</el-tag>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="delRoute(i)">关闭</el-dropdown-item>
                    <el-dropdown-item @click="delElseRoute(i)">关闭其他标签页</el-dropdown-item>
                    <el-dropdown-item @click="delRightRoute(idx)">关闭右侧标签页</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref, toRefs, watch } from "vue";
import Breadcrumb from "./Breadcrumb/index.vue";
import svgIcon from "@/components/svg-icon.vue";
import eventBus from "@/utils/event-bus";
import router from "@/router";

interface routeType {
    name: string,
    path: string
}
const screenWidth = ref(document.body.clientWidth)
const state = reactive({
    squareUrl:
        'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
})
const gitUrl = ref("https://github.com/code-lucky")

const routes = ref([{
    name: '',
    path: '/'
}])

const isFull = ref(false)

const isFullScreen = () => {
    let el: any
    el = document.documentElement
    if (isFull.value) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (el.webkitCancelFullScreen) {
            el.webkitCancelFullScreen();
        } else if (el.mozCancelFullScreen) {
            el.mozCancelFullScreen();
        } else if (el.msExitFullscreen) {
            el.msExitFullscreen();
        }
    } else {
        if (el.requestFullscreen) {
            el.requestFullscreen();
        } else if (el.webkitRequestFullScreen) {
            el.webkitRequestFullScreen();
        } else if (el.mozRequestFullScreen) {
            el.mozRequestFullScreen();
        } else if (el.msRequestFullscreen) {
            // IE11
            el.msRequestFullscreen();
        }
    }
}

const addRouteList = () => {
    // 初始化时，获取menu中第一个路由
    const menuList = JSON.parse(localStorage.getItem('menu-list') || '')
    routes.value = [{
        name: menuList[0].children[0].name,
        path: menuList[0].children[0].path
    }]
    eventBus.$on('route-list', (data: any) => {
        const route = {
            name: data.name,
            path: data.path
        }
        if (!JSON.stringify(routes.value).includes(JSON.stringify(route))) {
            routes.value.push(route)
        }
    })
}

const goRoute = (path: string) => {
    router.push(path)
}

const delRoute = (data: routeType) => {
    routes.value = routes.value.filter((item) => item.name !== data.name && item.path !== data.path)
}

const delElseRoute = (data: routeType) => {
    routes.value = []
    routes.value.push(data)
}

const delRightRoute = (index: number) => {
    routes.value = routes.value.splice(0, index + 1)
}

const logout = () => {
    window.localStorage.clear()
    window.location.reload()
}
const isCollapse = ref(false)
const changeCollapse = () => {
    isCollapse.value = !isCollapse.value
    eventBus.$emit('changeCollapse', isCollapse.value)
}

const { squareUrl } = toRefs(state)


onMounted(() => {
    addRouteList()
    if (document.body.clientWidth < 500) {
        isCollapse.value = true
        eventBus.$emit('changeCollapse', isCollapse.value)
    }
    document.addEventListener("fullscreenchange", () => {
        isFull.value = !isFull.value
    })
    document.addEventListener("mozfullscreenchange", () => {
        isFull.value = !isFull.value
    })
    document.addEventListener("webkitfullscreenchange", () => {
        isFull.value = !isFull.value
    })
    document.addEventListener("msfullscreenchange", () => {
        isFull.value = !isFull.value
    })
})

onUnmounted(() => {

})

watch(screenWidth, (newVal, oldVal) => {
    if (newVal > 500) {
        isCollapse.value = false
    } else {
        isCollapse.value = true
    }
    eventBus.$emit('changeCollapse', isCollapse.value)
})
</script>
<style scoped lang="scss">
.navbar {
    height: 50px;
    width: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

    &-folding {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    &-folding:hover {
        background-color: rgba(147, 146, 146, 0.1);
    }

    &-bread {
        width: 100%;
    }

    &-info {
        display: flex;

        &-right {
            display: flex;
            align-items: center;
            margin-right: 10px;
            padding: 5px;

            &-img {
                width: 20px;
                height: 20px;
            }
        }

        &-right:hover {
            background-color: #eee;
            cursor: pointer;
        }
    }
}

.example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
}

.navigation {
    width: 100%;
    height: 50px;
    padding: 10px 10px 0px 10px;
    display: flex;
    align-items: center;
    overflow-x: auto;

    &-item {
        margin-left: 10px;
        background-color: #fff;
        padding: 0 15px;
    }

    &-item:hover {
        background-color: rgb(250, 250, 250);
        cursor: pointer;
    }
}
</style>