<template>
    <div class="common-layout">
        <el-container>
            <Sidebar />
            <el-container>
                <el-header>
                    <nav-bar />
                </el-header>
                <el-main>
                    <AppMain />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup lang="ts">
import NavBar from './components/Navbar.vue'
import Sidebar from './components/Sidebar/index.vue';
import AppMain from './components/AppMain.vue';

</script>
<style lang="scss" scoped>
.el-header {
    --el-header-padding: 0 0px;
    --el-header-height: 90px;
}

.common-layout {
    background-color: rgb(250, 250, 250);
}
</style>