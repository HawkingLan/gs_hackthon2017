<template>
    <div class="m-map-chart"></div>
</template>
<script>
    import echarts from 'echarts';
    import 'china';
    import * as mapChart from 'data/map';
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
                return mapChart.getOption(this.daterange, this.currentDrillData);
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
