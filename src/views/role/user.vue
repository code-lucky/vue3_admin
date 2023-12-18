<template>
  <div class="flex mb-20">
    <el-input v-model="userName" placeholder="请输入用户名称" clearable class="w-300" />
    <el-button class="ml-10" type="primary" plain @click="findUserListByName">{{ $t('permission_user.query') }}</el-button>
  </div>
  <el-button type="primary" class="mb-20" @click="isDialog = true">{{ $t('permission_user.newAdmin') }}</el-button>
  <el-table :data="userList" border style="width: 100%">
    <el-table-column prop="id" label="用户编号" />
    <el-table-column prop="userName" label="用户昵称" />
    <el-table-column prop="roleName" label="用户身份" />
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
      <template #default>
        <el-button link type="primary" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog v-model="isDialog" title="新增管理员" width="40%">
    <UserModule status="add" :roleList="roleList"></UserModule>
  </el-dialog>
</template>

<script lang="ts" setup>
import UserModule from './components/user-module.vue'
import { onMounted, reactive, ref } from 'vue';
import { formatDate } from '@/filters/index'
import { getUserList } from '@/api/user';
import { getRoleUserList } from '@/api/role'
const statusArr = reactive(['开启', '关闭'])
const isDelete = reactive(['是', '否'])
const userName = ref('')
const userList = ref([])
const isDialog = ref(false)
const roleList = ref([])

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

const addUser = (val: any) => {
  console.log('val====>', val)
}

const editUser = () => {

}

onMounted(() => {
  findUserList();
  getRoleList();
})

</script>
