<template>
  <div class="app-container">
    <div class="flex mb-20">
      <el-input v-model="roleName" placeholder="请输入用户名称" clearable class="w-300" />
      <el-button class="ml-10" type="primary" plain @click="getRoleUserListByName">查询</el-button>
      <el-button class="ml-10" :icon="RefreshRight" @click="resetRoleName">重置</el-button>
    </div>
    <el-button type="primary" class="mb-20" @click="add">添加角色</el-button>
    <el-table :data="roleUserList" border style="width: 100%">
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
        <template #default="scope">
          <el-button link type="primary" size="small" @click="edit(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="isDialog" :title="addOrEdit === 'add' ? '添加角色' : '修改角色'" width="30%" center>
      <RoleModel v-if="isDialog && addOrEdit === 'add'" @addRole="addRole" @cancel="cancel" :treeList="threeList"
        :status="addOrEdit" />
      <RoleModel v-if="isDialog && addOrEdit === 'edit'" :showRole="showRole" @updateRole="updateRole" @cancel="cancel"
        :treeList="threeList" :status="addOrEdit" />
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { RefreshRight } from '@element-plus/icons-vue'
import { addRoleUser, getRoleUserList, updateRoleUser } from '@/api/role';
import { onMounted, reactive, ref } from 'vue';
import RoleModel from './components/role-model.vue'
import { formatDate } from '@/filters/index'
import { getMenuTree } from '@/api/menu';
import { RoleDto, Tree } from '#/role/role'
import { ElMessage } from 'element-plus';

const statusArr = reactive(['显示', '不显示'])
const roleUserList = ref([])
const roleName = ref('')
const isDialog = ref(false)
const threeList = ref<Tree>({
  id: 0,
  label: '',
  children: []
})
const addOrEdit = ref('add')
const showRole = ref({
  id: 0,
  roleName: '',
  isShow: 0,
  rules: []
})

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

// 添加角色
const addRole = (data: RoleDto) => {
  const subParams: RoleDto = {
    roleName: data.roleName,
    isShow: data.isShow,
    rules: data.rules
  }
  addRoleUser(subParams).then((res: any) => {
    if (res.data === '添加成功') {
      ElMessage.success(res.data)
      isDialog.value = false
      findRoleUserList()
    }
  })
}

// 更新角色信息
const updateRole = (data: RoleDto) => {
  console.log('data========>', data)
  updateRoleUser(data).then((res: any) => {
    if (res.data === '修改成功') {
      ElMessage.success(res.data)
      isDialog.value = false
      findRoleUserList()
    }
  })
}

// 取消按钮
const cancel = () => {
  isDialog.value = false
}

const getMenuTreeList = () => {
  getMenuTree().then((res: any) => {
    threeList.value = res.data
  })
}

// 需要修改的数据回显
const edit = (data: any) => {
  addOrEdit.value = 'edit'
  isDialog.value = true
  const result = {
    id: data.id,
    roleName: data.roleName,
    isShow: data.status,
    rules: data.rules
  }
  showRole.value = result
}

const add = () => {
  addOrEdit.value = 'add'
  isDialog.value = true
}
onMounted(() => {
  findRoleUserList()
  getMenuTreeList()
})

</script>
