<template>
  <div class="flex mb-20">
    <el-input v-model="userName" placeholder="请输入菜单名称" clearable class="w-300" />
    <el-button class="ml-10" type="primary" plain>查询</el-button>
  </div>
  <el-button type="primary" class="mb-20" @click="isDialog = true">新增</el-button>
  <el-table :data="tableList" border style="width: 100%" row-key="id">
    <el-table-column prop="name" label="菜单名称" />
    <el-table-column prop="icon" label="图标" />
    <el-table-column prop="sort" label="排序" />
    <el-table-column prop="perms" label="权限标识" />
    <el-table-column prop="component" label="组件路径" />
    <el-table-column prop="isShow" label="状态">
      <template #default="scope">
        <el-tag>{{ statusList[scope.row.isShow] }}</el-tag>
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
        <el-button link type="primary" size="small" @click="getMenuItem(scope.row.id)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog v-model="isDialog" title="新增菜单" width="40%">
    <MenuModel @cancel="cancel" @add-menu="addMenuItem" :treeList="threeList" />
  </el-dialog>

  <el-dialog v-model="isUpdateDialog" title="编辑菜单" width="40%">
    <MenuModel @cancel="cancel" @update-menu="updateMenuItem" :menuItem="menuItem" :treeList="threeList" status="edit" />
  </el-dialog>
  <IconModel />
</template>

<script lang="ts" setup>
import { inject, onMounted, reactive, ref } from 'vue';
import MenuModel from './components/menu-model.vue'
import { formatDate } from '@/filters/index'
import { AddMenuParams } from '#/role/menu'
import { addMenu, getMenuItemById, getMenuList, getMenuTree, updateMenu } from '@/api/menu'
import { ElMessage } from 'element-plus';

const isDialog = ref(false)
const isUpdateDialog = ref(false)
const userName = ref('')
const tableList = ref([])
const statusList = reactive(['显示', '隐藏'])
const threeList = ref<Object[]>([])
const menuItem = ref({})

const cancel = () => {
  isDialog.value = false
  isUpdateDialog.value = false
}

const addMenuItem = (val: AddMenuParams) => {
  addMenu(val).then((res: any) => {
    ElMessage.success(res.data)
    isDialog.value = false
    window.location.reload()
  })
}

const updateMenuItem = (val: any) => {
  updateMenu(val).then((res: any) => {
    if (res.data === '更新成功') {
      ElMessage.success(res.data)
      isUpdateDialog.value = false
      window.location.reload()
    }
  })
}

const getMenuItem = (id: any) => {
  getMenuItemById(id).then((res: any) => {
    menuItem.value = res.data[0]
    isUpdateDialog.value = true
  })
}

const getMenuArr = () => {
  getMenuList().then((res: any) => {

  })
}

const getMenuTreeList = () => {
  getMenuTree().then((res: any) => {
    tableList.value = res.data
    const tree = [{
      value: 0,
      label: '主目录',
      children: res.data
    }]
    threeList.value = tree
  })
}
onMounted(() => {
  getMenuArr()
  getMenuTreeList()
})

</script>
<style scoped lang="scss"></style>
