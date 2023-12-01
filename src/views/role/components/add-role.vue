<template>
    <div class="continer">
        <el-form :model="submitData" label-width="120px">
            <el-form-item label="角色名称" prop="userName">
                <el-input v-model="submitData.userName" placeholder="请输入角色名称" />
            </el-form-item>
            <el-form-item label="显示" prop="status">
                <el-switch v-model="submitData.status" class="ml-2"/>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">确定</el-button>
                <el-button @click="cancel">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const submitData = ref({
    userName: '',
    status: true
});

const emit = defineEmits(['addRole','cancel'])

const onSubmit = () =>{
    emit('addRole', submitData.value)
}
const cancel = () =>{
    emit('cancel')
}
</script>
<style scoped lang="scss"></style>