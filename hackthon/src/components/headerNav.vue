<template>
    <div class="header">
        <div class="logo"></div>
        <el-menu>
            <el-menu-item v-for="(item, index) in nav" :key="index" :index="index+''">{{item.label}}</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                nav: [{
                    label: '行业洞察'
                }, {
                    label: '平台分析'
                }, {
                    label: '客户细分'
                }]
            };
        }
    };

</script>
