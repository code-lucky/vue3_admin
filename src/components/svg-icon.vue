<template>
    <img :src="getAssetURL(src)"/>
</template>
<script setup lang="ts">
interface Props{
    src: string,
}
defineProps<Props>()

const getAssetURL = (image: string) =>{
    return new URL(`../assets/${image}`, import.meta.url).href
}
</script>