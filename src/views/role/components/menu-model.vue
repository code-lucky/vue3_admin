<template>
    <el-form ref="ruleFormRef" :model="submitParam" :rules="rules" label-width="100px">
        <el-row>
            <el-col :span="24">
                <el-form-item label="上级菜单" class="w-hundred" prop="pid">
                    <el-tree-select v-model="submitParam.pid" :data="treeList" check-strictly :render-after-expand="false"
                        class="w-hundred" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-form-item label="菜单类型" class="w-hundred" prop="menuType">
                    <el-radio-group v-model="submitParam.menuType" class="w-hundred">
                        <el-radio :label="idx" v-for="(item, idx) in menuOptions" :key="idx">{{ item }}</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-form-item label="菜单图标" class="w-hundred" prop="icon">
                    <el-input placeholder="请选择菜单图标" v-model="submitParam.icon" class="w-hundred">
                        <template #append>
                            <el-icon @click="isShowIcon = true">
                                <CirclePlus />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="菜单名称" prop="name">
                    <el-input placeholder="请输入菜单名称" v-model="submitParam.name" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="显示排序" prop="sort">
                    <el-input-number v-model="submitParam.sort" :min="0" :max="1000" controls-position="right" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item prop="component">
                    <template #label>
                        <label>
                            <el-tooltip content="组件路径，如：`dashboard/index`，默认在`views`目录下" placement="top">
                                <el-icon>
                                    <QuestionFilled />
                                </el-icon>
                            </el-tooltip>
                            组件路径
                        </label>
                    </template>

                    <el-input placeholder="请输入组件路径" v-model="submitParam.component" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item prop="path">
                    <template #label>
                        <label>
                            <el-tooltip content="路由路径，如`/dashboard/index`，在网页搜索的路由路径http://localhost:3003/#/dashboard/index。如果为空，默认使用组件路径" placement="top">
                                <el-icon>
                                    <QuestionFilled />
                                </el-icon>
                            </el-tooltip>
                            路由路径
                        </label>
                    </template>

                    <el-input placeholder="请输入组件路径" v-model="submitParam.path" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-form-item prop="isShow">
                    <template #label>
                        <label>
                            <el-tooltip content="侧边栏菜单是否显示" placement="top">
                                <el-icon>
                                    <QuestionFilled />
                                </el-icon>
                            </el-tooltip>
                            显示状态
                        </label>
                    </template>
                    <el-radio-group v-model="submitParam.isShow">
                        <el-radio :label="idx" v-for="(item, idx) in showStatus" :key="idx">{{ item }}</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-col>
        </el-row>
        <el-form-item align="center">
            <template v-if="status === 'add'">
                <el-button type="primary" @click="addMenuItem">新增</el-button>
                <el-button @click="cancel">取消</el-button>
            </template>
            <template v-if="status === 'edit'">
                <el-button type="primary" @click="updateMenu()">更新</el-button>
                <el-button @click="cancel">取消</el-button>
            </template>
        </el-form-item>
    </el-form>
    <el-dialog v-model="isShowIcon" title="菜单图标">
        <IconModel @getIconKey="getIconKey" />
    </el-dialog>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import IconModel from '@/components/icon-menu.vue'
import { MenuDto } from '#/role/menu'
import { FormInstance, FormRules } from 'element-plus';
const props = defineProps({
    status: {
        type: String,
        default: 'add'
    },
    treeList: {
        type: [Object],
        default: [{
            value: 0,
            label: '主目录',
            children: []
        }]
    },
    menuItem: {
        type: Object,
        defalut: {}
    }
})
const emit = defineEmits(['cancel', 'addMenu', 'updateMenu'])
const isShowIcon = ref(false)
const menuOptions = reactive(['目录', '菜单', '按钮'])
const showStatus = reactive(['显示', '隐藏'])

const ruleFormRef = ref<FormInstance>()

const submitParam = ref<MenuDto>({
    pid: 0,
    menuType: 0,
    icon: '',
    name: '',
    sort: 0,
    component: '',
    path: '',
    isShow: 0,
})

const menuId = ref('')

const rules = reactive<FormRules<MenuDto>>({
    pid: [{ required: true, message: '请选择上级菜单', trigger: 'blur' }],
    menuType: [{ required: true, message: '请选择菜单类型', trigger: 'blur' }],
    name: [{ required: true, message: '请输入菜单名称', trigger: 'blur' }],
    sort: [{ required: true, message: '请输入排序', trigger: 'blur' }],
    component: [{ required: true, message: '请输入组件路径', trigger: 'blur' }],
    isShow: [{ required: true, message: '请选择是否显示', trigger: 'blur' }],
})

const cancel = () => {
    emit('cancel')
}
const addMenuItem = () => {
    ruleFormRef.value?.validate((valid) => {
        if(valid){
            emit('addMenu', submitParam.value)
        }
    })
}

const getIconKey = (key: string) => {
    submitParam.value.icon = key
    isShowIcon.value = false
}

const updateMenu = () => {
    const { pid, menuType, icon, name, sort, component, path, isShow } = submitParam.value
    const menuItem = { pid, menuType, icon, name, sort, component, path, isShow, id: menuId.value }
    ruleFormRef.value?.validate((valid) => {
        if(valid){
            emit('updateMenu', menuItem)
        }
    })
}

const init = () => {
    if (props.menuItem) {
        const { id, pid, menuType, icon, name, sort, component, path, isShow } = props.menuItem;
        submitParam.value = { pid, menuType, icon, name, sort, component, path, isShow }
        menuId.value = id
    }
}
onMounted(() => {
    init()
})
</script>
<style scoped lang="scss"></style>