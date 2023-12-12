<template>
    <template v-if="!result.hidden">
        <!-- 只有一个子元素的时候显示 -->
        <template v-if="isShowChild(result)">
            <el-menu-item :index="resolvePath(oneChild.path || result.path)">
                <el-icon v-if="result.icon" :size="20">
                    <component :is="result.icon" />
                </el-icon>
                <template #title>
                    <span>{{ result.name }}</span>
                </template>
            </el-menu-item>
        </template>
        <!-- 子元素是一个列表显示 -->
        <el-sub-menu v-else :index="resolvePath(result.path)">
            <template #title>
                <el-icon v-if="result.icon" :size="20">
                    <component :is="result.icon" />
                </el-icon>
                <span>{{ result.name }}</span>
            </template>
            <template v-if="result.children.length > 0 && result.children">
                <SidebarItem v-for="(route, idx) in result.children || []" :key="idx" :item="route"
                    :base-path="result.path" />
            </template>
        </el-sub-menu>
    </template>
</template>
<script setup lang="ts">
import path from 'path-browserify'
import { reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const $route = useRoute()
const that_path = ref($route.path)
interface Props {
    item?: Object,
    basePath?: String
}
const props = defineProps<Props>()
const result = reactive(props.item as any)
const oneChild = ref({} as any)
const isShowChild = (item: any): Boolean => {
    const arr = reactive(item.children || [])
    arr.filter((res: any) => {
        if (res.hidden) {
            return false
        } else {
            oneChild.value = res
            return true
        }
    })
    if (arr.length == 0) {
        oneChild.value = { ...item, path: '' }
        return true
    }
    if (arr.length == 1) {
        console.log('arr=====>', arr)
        return true
    }
    return false
}

const resolvePath = (routePath: any): String => {
    return path.resolve(props.basePath as any, routePath)
}

watch(() => $route.path, (newPath: any, oldPath: any) => {
    that_path.value = newPath
}, { immediate: true })
</script>
<style lang="scss" scoped></style>