<template>
    <div class="m-pie-chart"></div>
</template>
<script>
    import echarts from 'echarts';
    import * as pieChart from 'data/pie';
    import {
        mapGetters
    } from 'vuex';

    export default {
        data() {
            return {
                chartObj: null
            };
        },
        computed: {
            ...mapGetters(['daterange', 'currentDrillData']),
            option() {
                return pieChart.getOption(this.daterange, this.currentDrillData);
            }
        },
        watch: {
            daterange() {
                this.chartObj.setOption(this.option);
            },
            currentDrillData() {
                this.chartObj.setOption(this.option);
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.chartObj = echarts.init(this.$el);
                this.chartObj.setOption(this.option);
            });
        }
    };

</script>
