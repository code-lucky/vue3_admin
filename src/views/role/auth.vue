<template>
  <div class="flex mb-20">
    <el-input v-model="userName" placeholder="请输入用户名称" clearable class="w-300" />
    <el-button class="ml-10" type="primary" plain >查询</el-button>
  </div>
  <el-button type="primary" class="mb-20">添加角色</el-button>
  <el-table :data="userList" border style="width: 100%">
    <el-table-column prop="id" label="用户编号" />
    <el-table-column prop="userName" label="用户昵称" />
    <el-table-column prop="roleName" label="用户身份"/>
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
import { onMounted, reactive, ref } from 'vue';
import { formatDate } from '@/filters/index.js'
const statusArr = reactive(['开启','关闭'])
const isDelete = reactive(['是','否'])
const userName = ref('')
const userList = ref([])

onMounted(() => {
  
})

</script>
