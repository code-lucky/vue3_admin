<template>
    <div class="common-layout">
        <el-container>
            <Sidebar />
            <el-container>
                <el-header style="width: 100%;">
                    <nav-bar />
                </el-header>
                <el-main>
                    <AppMain />
                </el-main>
            </el-container>
        </el-container>
        <!-- <Sidebar />
        <div class="continer-right">
            <nav-bar />
            <AppMain />
        </div> -->
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
    --el-header-height: 30px;
}
</style>