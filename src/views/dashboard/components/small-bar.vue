<template>
    <div class="content">
        <div class="item" id="main1"></div>
        <div class="item" id="main2"></div>
        <div class="item" id="main3"></div>
    </div>
</template>
<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';
const init1 = () => {
    var myChart = echarts.init(document.getElementById('main1'));
    const option = {
        title: {
            text: 'Referer of a Website',
            subtext: 'Fake Data',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }
    myChart.setOption(option)
}

const init2 = () => {
    var myChart = echarts.init(document.getElementById('main2'));
    const option = {
        legend: {},
        tooltip: {},
        dataset: {
            source: [
                ['product', '2015', '2016', '2017'],
                ['Matcha Latte', 43.3, 85.8, 93.7],
                ['Milk Tea', 83.1, 73.4, 55.1],
                ['Cheese Cocoa', 86.4, 65.2, 82.5],
                ['Walnut Brownie', 72.4, 53.9, 39.1]
            ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
    }
    myChart.setOption(option)
}

const init3 = () => {
    var myChart = echarts.init(document.getElementById('main3'));
    const option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }
        ]
    }
    myChart.setOption(option)

}
onMounted(() => {
    init1()
    init2()
    init3()
})
</script>
<style scoped>
.content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 30px 0px;
}

.item {
    width: 32%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    padding: 20px 30px;
    border-radius: 10px;
}
</style>