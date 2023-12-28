<template>
    <div class="continer">
        <el-form :model="submitData" label-width="120px">
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
import { CreateUserDto } from '#/role/user';
import { onMounted, ref } from 'vue';
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
const submitData = ref<CreateUserDto>({
    userName: '',
    password: '',
    roleId: '',
    email: '',
    status: 0
})
const roleList = props.roleList

const cancel = () => {
    emit('cancel')
}
const addUser = () => {
    emit('addUser', submitData.value)
}
const editUser = () => {
    emit('editUser', submitData.value)
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