<template>
  <div class="flex mb-20">
    <el-input v-model="roleName" placeholder="请输入用户名称" clearable class="w-300" />
    <el-button class="ml-10" type="primary" plain @click="getRoleUserListByName">查询</el-button>
    <el-button class="ml-10" :icon="RefreshRight" @click="resetRoleName">重置</el-button>
  </div>
  <el-button type="primary" class="mb-20">添加角色</el-button>
  <el-table :data="roleUserList" border style="width: 100%">
    <el-table-column prop="id" label="用户编号" />
    <el-table-column prop="roleName" label="角色昵称" />
    <el-table-column prop="status" label="状态">
      <template  #default="scope">
        <el-tag :type="scope.row.status==0?`success`:`danger`">{{ statusArr[scope.row.status] }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="createTime" label="创建时间" />
    <el-table-column prop="createTime" label="更新时间" />
    <el-table-column prop="edit" label="编辑">
      <template #default>
        <el-button link type="primary" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { getRoleUserList } from '@/api/role';
import { RefreshRight } from '@element-plus/icons-vue'
import { onMounted, reactive, ref } from 'vue';

const statusArr = reactive(['显示','不显示'])
const roleUserList = ref([])
const roleName = ref('')

/**
 * 根据角色名称查询角色列表
 */
const getRoleUserListByName = () =>{
  getRoleUserList(roleName.value).then((res:any)=>{
    roleUserList.value = res.data
  })
}

/**
 * 查询角色列表
 */
const findRoleUserList = () =>{
  getRoleUserList(undefined).then((res:any)=>{
    roleUserList.value = res.data
  })
}

const resetRoleName = () =>{
  roleName.value = ''
}

onMounted(() => {
  findRoleUserList()
})

</script>
