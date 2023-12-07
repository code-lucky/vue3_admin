<template>
    <div class="icon-continer">
        <el-input placeholder="请输入关键字" class="icon-continer-input" v-model="iconName" />
        <el-row>
            <el-col :span="4" v-for="(key, idx) in showIconList" :key="idx">
                <div class="icon-item" @click="getIconKey(key)">
                    <el-icon :size="28">
                        <component :is="key" />
                    </el-icon>
                    <div class="icon-item-typeface">{{ key }}</div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script setup lang="ts">
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { onMounted, ref, watch } from 'vue';
const iconList = ref<string[]>([])
const iconName = ref<string>('')
const showIconList = ref<string[]>([])
watch(iconName, (newVal, oldVal) => {
    showIconList.value = []
    if (newVal) {
        iconList.value.forEach((item, idx) => {
            if (item.indexOf(newVal) > -1) {
                showIconList.value.push(item)
            }
        })
    } else {
        showIconList.value = iconList.value
    }
})

const emit = defineEmits(['getIconKey'])

const getIconKey = (key: string) => {
    emit('getIconKey', key)
}

onMounted(() => {
    for (const [key] of Object.entries(ElementPlusIconsVue)) {
        iconList.value.push(key)
    }
    showIconList.value = iconList.value
})
</script>
<style scoped lang="scss">
.icon-continer {
    height: 60vh;
    overflow-y: auto;

    &-input {
        width: 40%;
    }
}

.icon-item {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    padding: 15px 5px;
    border-radius: 4px;
    cursor: pointer;

    &-typeface {
        margin-top: 10px;
        font-size: 14px;
    }
}

.icon-item:hover {
    background-color: rgb(217, 217, 217);
}
</style>