<template>
    <div class="m-header">
        <div class="logo">Logo</div>
        <el-menu class="header-menu" mode="horizontal" default-active="0">
            <el-menu-item class="header-menu-item" v-for="(item, index) in nav" :key="index" :index="index+''">{{item.label}}</el-menu-item>
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
<style lang="scss" rel="stylesheet/scss">
    .m-header {
        display: flex;
        box-shadow: 1px 1px 1px #cdcdcd;

        .logo {
            width: 200px;
            background: #20a0ff;
            font-size: 20px;
            color: #fff;
            text-align: center;
            line-height: 60px;
        }

        .header-menu {
            flex: 1;
            padding-left: 40px;
            background: #fff;
            border-bottom: 1px solid #cdcdcd;
        }

        .header-menu-item {
            margin: 0 20px;
        }
    }

</style>
