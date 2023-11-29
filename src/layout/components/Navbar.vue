<template>
    <div class="navbar">
        <div class="navbar-folding">
            <el-icon :size="24">
                <Fold/>
            </el-icon>
        </div>
        <div class="navbar-bread">
            <Breadcrumb/>
        </div>
        <div class="navbar-info">
            <el-dropdown>
                <el-avatar :src="squareUrl"/>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item><a :href="gitUrl" target="_blank">Gitee</a></el-dropdown-item>
                        <el-dropdown-item @click="logout()">Log out</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive, ref, toRefs } from "vue";
import Breadcrumb from "./Breadcrumb/index.vue";
import { logOut } from "@/api/user";
import { ElMessage } from "element-plus";
const state = reactive({
    squareUrl:
    'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
})
const gitUrl = ref("https://gitee.com/saylife_admin/vue3_admin.git")

const logout = () =>{
    window.localStorage.clear()
    window.location.reload()
}
const { squareUrl } = toRefs(state)
</script>
<style scoped lang="scss">
.navbar{
    height: 50px;
    width: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    &-folding{
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    &-folding:hover{
        background-color: rgba(147, 146, 146, 0.1);
    }
    &-bread{
        width: 100%;
    }
    &-info{
        width: 60px;
    }
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>