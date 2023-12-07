<template>
    <el-form :inline="true">
        <el-form-item label="上级菜单" class="w-hundred">
            <el-tree-select v-model="submitParam.pid" :data="menuSelects" check-strictly :render-after-expand="false"
                class="w-hundred" />
        </el-form-item>
        <el-form-item label="菜单类型" class="w-hundred">
            <el-radio-group v-model="submitParam.menuType" class="w-hundred">
                <el-radio :label="idx" v-for="(item, idx) in menuOptions" :key="idx">{{ item }}</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="菜单图标" class="w-hundred">
            <el-input placeholder="请选择菜单图标" v-model="submitParam.icon" class="w-hundred">
                <template #append>
                    <el-icon>
                        <CirclePlus />
                    </el-icon>
                </template>
            </el-input>
        </el-form-item>
        <el-form-item label="菜单名称">
            <el-input placeholder="请输入菜单名称" v-model="submitParam.name" />
        </el-form-item>
        <el-form-item label="显示排序">
            <el-input-number v-model="submitParam.sort" :min="1" :max="1000" controls-position="right"
                @change="handleChange" />
        </el-form-item>
        <el-form-item label="路径组件">
            <el-input placeholder="请输入组件路径" v-model="submitParam.component" />
        </el-form-item>
        <el-form-item label="显示状态">
            <el-radio-group v-model="submitParam.isShow">
                <el-radio :label="idx" v-for="(item, idx) in showStatus" :key="idx">{{ item }}</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item align="center">
            <template v-if="status === 'add'">
                <el-button type="primary">新增</el-button>
                <el-button>取消</el-button>
            </template>
            <template v-if="status === 'edit'">
                <el-button type="primary">更新</el-button>
                <el-button @click="cancel">取消</el-button>
            </template>
        </el-form-item>
    </el-form>
    <!-- <IconModel /> -->
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import IconModel from '@/components/icon-menu.vue'
const props = defineProps({
    status: {
        type: String,
        default: 'add'
    }
})
const menuSelects = reactive([])
const menuOptions = reactive(['目录', '菜单', '按钮'])
const showStatus = reactive(['显示', '隐藏'])

const submitParam = ref({
    pid: 0,
    menuType: 0,
    icon: '',
    name: '',
    sort: 0,
    component: '',
    isShow: 0
})

const handleChange = () => {
    console.log(submitParam.value.sort)
}

const cancel = () => {

}
</script>
<style lang="scss" scoped></style>