// 根据用户权限来跳转的中间页面
<template>
    <div></div>
</template>
<script lang="ts" setup>
import { getMenuByUserId } from '@/api/menu'
import { useRouter } from 'vue-router';
import { onMounted} from 'vue'
const router = useRouter()
const init = () => {
    getMenuByUserId(Number(localStorage.getItem('userId')) || 0).then((res: any) => {
        router.push({ path: res.data[0].path ? res.data[0].path : res.data[0].component })
    })
}
onMounted(() => {
    init()
})
</script>