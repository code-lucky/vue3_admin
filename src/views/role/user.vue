<template>
  <div class="app-container">
    <div class="flex mb-20">
      <el-input v-model="userName" placeholder="请输入用户名称" clearable class="w-300" />
      <el-button class="ml-10" type="primary" plain @click="findUserListByName">查询</el-button>
    </div>
    <el-button type="primary" class="mb-20" @click="add">添加管理员</el-button>
    <el-table :data="userList" border style="width: 100%">
      <el-table-column prop="id" label="用户编号" />
      <el-table-column prop="userName" label="用户昵称" />
      <el-table-column prop="roleName" label="用户身份" />
      <el-table-column prop="email" label="用户邮箱" />
      <el-table-column prop="status" label="状态">
        <template #default="scope">
          <el-tag :type="scope.row.status == 0 ? `success` : `danger`">{{ statusArr[scope.row.status] }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间">
        <template #default="scope">
          {{ formatDate(scope.row.createTime) }}
        </template>
      </el-table-column>
      <el-table-column prop="updateTime" label="更新时间">
        <template #default="scope">
          {{ formatDate(scope.row.updateTime) }}
        </template>
      </el-table-column>
      <el-table-column prop="edit" label="编辑">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="edit(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="isDialog" :title="isAddOrEdit === 'add' ? '新增管理员' : '修改管理员'" width="40%">
      <UserModule v-if="isAddOrEdit === 'add' && isDialog" :status="isAddOrEdit" :roleList="roleList" @addUser="addUser"
        @cancel="cancel"></UserModule>
      <UserModule v-if="isAddOrEdit === 'edit' && isDialog" :status="isAddOrEdit" :roleList="roleList"
        @editUser="editUser" @cancel="cancel" :userInfo="currentUser"></UserModule>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import UserModule from './components/user-module.vue'
import { onMounted, reactive, ref } from 'vue';
import { formatDate } from '@/filters/index'
import { createUser, getUserList, updateUser } from '@/api/user';
import { getRoleUserList } from '@/api/role'
import { UserFormDto } from '#/role/user';
import { ElMessage } from 'element-plus';

const statusArr = reactive(['开启', '关闭'])
const userName = ref('')
const userList = ref([])
const isDialog = ref(false)
const roleList = ref([])
const isAddOrEdit = ref('add')
const currentUser = ref({})

const findUserList = () => {
  getUserList(undefined).then((res: any) => {
    userList.value = res.data.userList
  })
}

const findUserListByName = () => {
  getUserList(userName.value).then((res: any) => {
    userList.value = res.data.userList
  })
}

const getRoleList = () => {
  getRoleUserList(undefined).then((res: any) => {
    roleList.value = res.data
  })
}

const cancel = () => {
  isDialog.value = false
}

const edit = (data: any) => {
  currentUser.value = data
  isDialog.value = true
  isAddOrEdit.value = 'edit'
}

const add = () => {
  isDialog.value = true
  isAddOrEdit.value = 'add'
}

const addUser = (data: UserFormDto) => {
  createUser(data).then((res: any) => {
    if (res.data === '添加成功') {
      ElMessage.success(res.data)
      isDialog.value = false
      findUserList()
    }
  })
}

const editUser = (data: UserFormDto) => {
  updateUser(data).then((res: any) => {
    if (res.data === '更新成功') {
      ElMessage.success(res.data)
      isDialog.value = false
      findUserList();
    }
  })
}

onMounted(() => {
  findUserList();
  getRoleList();
})

</script>
