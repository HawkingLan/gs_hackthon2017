<template>
    <div class="m-pie-chart"></div>
</template>
<script>
    import echarts from 'echarts';
    import * as pieChart from 'data/pie';

    export default {
        data() {
            return {
                chartObj: null
            };
        },
        mounted() {
            this.$nextTick(() => {
                this.chartObj = echarts.init(this.$el);
                this.chartObj.setOption(pieChart.getOption());
            });
        }
    };

</script>
