<template>
  <div class="flex mb-20">
    <el-input v-model="roleName" placeholder="请输入用户名称" clearable class="w-300" />
    <el-button class="ml-10" type="primary" plain @click="getRoleUserListByName">查询</el-button>
    <el-button class="ml-10" :icon="RefreshRight" @click="resetRoleName">重置</el-button>
  </div>
  <el-button type="primary" class="mb-20" @click="isDialog = true">添加角色</el-button>
  <el-table :data="roleUserList" border style="width: 100%">
    <el-table-column prop="id" label="用户编号" />
    <el-table-column prop="roleName" label="角色昵称" />
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
  <el-dialog v-model="isDialog" title="添加角色" width="30%" center>
    <AddRole @addRole="addRole" @cancel="cancel"></AddRole>
  </el-dialog>
</template>

<script lang="ts" setup>
import { RefreshRight } from '@element-plus/icons-vue'
import { getRoleUserList } from '@/api/role';
import { onMounted, reactive, ref } from 'vue';
import AddRole from './components/add-role.vue'
import { formatDate } from '@/filters/index'

const statusArr = reactive(['显示', '不显示'])
const roleUserList = ref([])
const roleName = ref('')
const isDialog = ref(false)
/**
 * 根据角色名称查询角色列表
 */
const getRoleUserListByName = () => {
  getRoleUserList(roleName.value).then((res: any) => {
    roleUserList.value = res.data
  })
}

/**
 * 查询角色列表
 */
const findRoleUserList = () => {
  getRoleUserList(undefined).then((res: any) => {
    roleUserList.value = res.data
  })
}

const resetRoleName = () => {
  roleName.value = ''
}
const addRole = (data: Object) => {
  console.log('进行了addRole操作', data)
}
const cancel = () => {
  isDialog.value = false
}

onMounted(() => {
  findRoleUserList()
})

</script>