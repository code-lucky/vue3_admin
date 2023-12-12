<template>
    <div class="app-continer">
        <router-view :key="key" />
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const $router = useRouter()
const key = ref($router.currentRoute.value.fullPath)
</script>
<style scoped lang="scss">
.app-continer {
    padding: 20px;
    background-color: #fff;
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
</style>