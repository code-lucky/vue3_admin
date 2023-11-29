<template>
  <div class="flex mb-20">
    <el-input v-model="input" placeholder="请输入用户名称" clearable class="w-300" />
    <el-button class="ml-10" type="primary" plain>查询</el-button>
    <el-button class="ml-10" :icon="RefreshRight">重置</el-button>
  </div>
  <el-button type="primary" class="mb-20">添加角色</el-button>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="date" label="用户编号" />
    <el-table-column prop="name" label="角色昵称" />
    <el-table-column prop="address" label="状态" />
    <el-table-column prop="date" label="创建时间" />
    <el-table-column prop="name" label="更新时间" />
    <el-table-column prop="address" label="编辑">
      <template #default>
        <el-button link type="primary" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { RefreshRight } from '@element-plus/icons-vue'
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
