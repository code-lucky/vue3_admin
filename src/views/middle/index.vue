<template></template>
<script lang="ts" setup>
import { getMenuByUserId } from '@/api/menu'
import { useRouter } from 'vue-router';
const router = useRouter()
const init = () => {
    getMenuByUserId(localStorage.getItem('userId') || 0).then((res: any) => {
        router.push({ path: res.data[1].path })
    })
}
onMounted(() => {
    init()
})
</script>