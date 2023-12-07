<template>
    <div class="continer">
        <el-form :model="submitData" label-width="120px">
            <el-form-item label="管理员账户" prop="userName">
                <el-input v-model="submitData.userName" placeholder="请输入管理员账号" />
            </el-form-item>
            <el-form-item label="管理员密码" prop="password">
                <el-input v-model="submitData.userName" placeholder="请输入管理员密码" />
            </el-form-item>
            <el-form-item label="管理员身份" prop="roleId">
                <el-select v-model="roleId" class="m-2" placeholder="Select" size="large">
                    <el-option v-for="item in roleList" :key="item.id" :label="item.roleName" :value="item.id" />
                </el-select>
            </el-form-item>
            <el-form-item label="管理员手机号" prop="phoneNumber">
                <el-input v-model="submitData.userName" placeholder="请输入管理员手机号" />
            </el-form-item>
            <el-form-item label="状态" prop="status">
                <el-switch v-model="submitData.status" class="ml-2" />
            </el-form-item>
            <el-form-item>
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
    </div>
</template>
<script lang="ts" setup>
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
const submitData = ref({
    userName: '',
    password: '',
    roleId: '',
    phoneNumber: '',
    status: true
})
const roleId = ref('')
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

onMounted(() => {
})
</script>
<style scoped lang="scss"></style>