<template>
    <div class="continer">
        <Sidebar/>
        <div class="continer-right">
            <nav-bar/>
            <AppMain/>
        </div>
    </div>
</template>
<script setup lang="ts">
import NavBar from './components/Navbar.vue'
import Sidebar from './components/Sidebar/index.vue';
import AppMain from './components/AppMain.vue';

</script>
<style lang="scss" scoped>
.continer{
    display: flex;
    &-right{
        width: 100%;
    }
}
</style>