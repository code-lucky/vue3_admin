<template>
    <div class="continer">
        <el-form ref="ruleFormRef" :model="submitData" label-width="120px">
            <el-form-item label="角色名称" prop="roleName" :rules="[{ required: true, message: '请输入角色名称', trigger: 'blur' }]">
                <el-input v-model="submitData.roleName" placeholder="请输入角色名称" />
            </el-form-item>
            <el-form-item label="显示" prop="status">
                <el-switch v-model="submitData.isShow" class="ml-2" :active-value="0" :inactive-value="1" />
            </el-form-item>
            <el-form-item>
                <el-tree :data="treeList" ref="treeRef" :props="defaultProps" node-key="id" show-checkbox />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" v-if="status === 'add'">新增</el-button>
                <el-button type="primary" @click="updateRole" v-if="status === 'edit'">更新</el-button>
                <el-button @click="cancel">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script lang="ts" setup>
import { ElTree, FormInstance } from 'element-plus';
import { Tree } from 'element-plus/es/components/tree-v2/src/types';
import { onMounted, ref } from 'vue';

interface props {
    treeList: {
        id: number,
        label: string,
        children?: Tree[]
    },
    status: string,
    showRole?: {
        id: number,
        roleName: string,
        isShow: number,
        rules: number[]
    }
}

const props = defineProps<props>()

const treeRef = ref<InstanceType<typeof ElTree>>()

const ruleFormRef = ref<FormInstance>()

const defaultProps = {
    children: 'children',
    label: 'label'
}

const submitData = ref({
    roleName: '',
    isShow: 0
})

const rules = ref<number[]>([])

const emit = defineEmits(['addRole', 'cancel', 'updateRole'])

const onSubmit = () => {
    let rules: any[] = []
    rules = rules.concat(treeRef.value!.getHalfCheckedKeys())
    rules = rules.concat(treeRef.value!.getCheckedKeys(false))
    const data = {
        roleName: submitData.value.roleName,
        isShow: submitData.value.isShow,
        rules: rules
    }
    ruleFormRef.value?.validate((valid) => {
        if (valid) {
            emit('addRole', data)
        }
    })
}

const updateRole = () => {
    let rules: any[] = []
    rules = rules.concat(treeRef.value!.getHalfCheckedKeys())
    rules = rules.concat(treeRef.value!.getCheckedKeys(false))
    const data = {
        id: props.showRole?.id,
        roleName: submitData.value.roleName,
        isShow: submitData.value.isShow,
        rules: rules
    }
    ruleFormRef.value?.validate((valid) => {
        if (valid) {
            emit('updateRole', data)
        }
    })
}

const cancel = () => {
    emit('cancel')
}

const init = () => {
    if (props.status === 'edit') {
        submitData.value.roleName = props.showRole?.roleName || ''
        submitData.value.isShow = props.showRole?.isShow || 0
        rules.value = props.showRole?.rules || []
        rules.value.forEach(item => {
            const node = treeRef.value!.getNode(item)
            if (node.isLeaf) {
                treeRef.value!.setChecked(node, true, false)
            }
        })
    }
}
onMounted(() => {
    init()
})

</script>
<style scoped lang="scss"></style>