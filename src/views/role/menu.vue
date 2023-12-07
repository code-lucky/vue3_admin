<template>
  <div class="flex mb-20">
    <el-input v-model="userName" placeholder="请输入菜单名称" clearable class="w-300" />
    <el-button class="ml-10" type="primary" plain>查询</el-button>
  </div>
  <el-button type="primary" class="mb-20" @click="isDialog = true">新增</el-button>
  <el-table :data="userList" border style="width: 100%">
    <el-table-column prop="id" label="菜单名称" />
    <el-table-column prop="userName" label="图标" />
    <el-table-column prop="roleName" label="排序" />
    <el-table-column prop="status" label="权限标识" />
    <el-table-column prop="status" label="组件路径" />
    <el-table-column prop="status" label="状态" />
    <el-table-column prop="createTime" label="创建时间" />
    <el-table-column prop="createTime" label="更新时间" />
    <el-table-column prop="edit" label="编辑">
      <template #default>
        <el-button link type="primary" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog v-model="isDialog" title="新增菜单" width="40%">
    <MenuModel />
  </el-dialog>

  <IconModel />
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import MenuModel from './components/menu-model.vue'
import { formatDate } from '@/filters/index.js'
const isDialog = ref(false)
const statusArr = reactive(['开启', '关闭'])
const isDelete = reactive(['是', '否'])
const userName = ref('')
const userList = ref([])

onMounted(() => {

})

</script>
