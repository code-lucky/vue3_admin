<template>
    <div>
        <el-icon v-for="(key, idx) in iconList" :key="idx">
            <component :is="key" />
        </el-icon>
    </div>
</template>
<script setup lang="ts">
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue';
const iconList = ref<string[]>([])
onMounted(() => {
    for (const [key] of Object.entries(ElementPlusIconsVue)) {
        iconList.value.push(key)
    }
})
</script>