<template>
    <div class="continer">
        <el-form ref="ruleFormRef" status-icon :model="submitData" :rules="rules" label-width="120px">
            <el-form-item label="用户账号" prop="userName">
                <el-input v-model="submitData.userName" placeholder="请输入用户账号" />
            </el-form-item>
            <el-form-item label="用户密码" prop="password">
                <el-input v-model="submitData.password" placeholder="请输入用户密码" />
            </el-form-item>
            <el-form-item label="用户身份" prop="roleId">
                <el-select v-model="submitData.roleId" class="m-2" placeholder="Select" size="large">
                    <el-option v-for="item in roleList" :key="item.id" :label="item.roleName" :value="item.id" />
                </el-select>
            </el-form-item>
            <el-form-item label="用户邮箱" prop="email">
                <el-input v-model="submitData.email" placeholder="用户账户邮箱" />
            </el-form-item>
            <el-form-item label="状态" prop="status">
                <el-switch v-model="submitData.status" class="ml-2" :active-value="0" :inactive-value="1" />
            </el-form-item>
            <el-form-item>
                <template v-if="status === 'add'">
                    <el-button type="primary" @click="addUser">新增</el-button>
                    <el-button @click="cancel">取消</el-button>
                </template>
                <template v-if="status === 'edit'">
                    <el-button type="primary" @click="editUser">更新</el-button>
                    <el-button @click="cancel">取消</el-button>
                </template>
            </el-form-item>
        </el-form>
    </div>
</template>
<script lang="ts" setup>
import { UserFormDto } from '#/role/user';
import type { FormInstance, FormRules } from 'element-plus';
import { onMounted, reactive, ref } from 'vue';
const props = defineProps({
    status: {
        type: String,
        default: '',
    },
    roleList: {
        type: Object,
        default: []
    },
    userInfo: {
        type: Object,
        default: {}
    }
})

const emit = defineEmits(['addUser', 'cancel', 'editUser'])

const ruleFormRef = ref<FormInstance>()

const submitData = ref<UserFormDto>({
    userName: '',
    password: '',
    roleId: '',
    email: '',
    status: 0
})

const rules = reactive<FormRules<UserFormDto>>({
    userName: [
        { required: true, message: '用户账号不能为空', trigger: 'blur' },
        { min: 3, message: '用户账户不能小于3位数', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '用户密码不能为空', trigger: 'blur' },
        { min: 6, message: '用户密码不能小于6位数', trigger: 'blur' }
    ],
    roleId: [
        { required: true, message: '请选择用户权限', trigger: 'blur' },
    ],
    email: [
        { required: true, message: '用户邮箱不能为空', trigger: 'blur' },
        { type: 'email', message: '请输入正确的用户邮箱', trigger: 'blur' }
    ],
    status: [
        { required: true, message: '请选择用户状态', trigger: 'blur' }
    ]
})

const roleList = props.roleList

const cancel = () => {
    emit('cancel')
}
const addUser = () => {
    ruleFormRef.value?.validate((valid) => {
        if (valid) {
            emit('addUser', submitData.value)
        }
    })
}
const editUser = () => {
    ruleFormRef.value?.validate((valid) => {
        if (valid) {
            emit('editUser', submitData.value)
        }
    })
}

const init = () => {
    if (props.status === 'edit') {
        const { userName, roleId, email, status } = props.userInfo
        submitData.value.userName = userName
        submitData.value.roleId = roleId
        submitData.value.email = email
        submitData.value.status = status
    }
}

onMounted(() => {
    init()
})
</script>
<style scoped lang="scss"></style>