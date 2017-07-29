<template>
    <div class="m-heat-map"></div>
</template>
<script>
    import echarts from 'echarts';
    import * as headMap from 'data/heatMap';
    import {
        mapGetters,
        mapActions
    } from 'vuex';

    export default {
        data() {
            return {
                industries: ['汽车', '数码', '旅游', '教育', '农业', '珠宝', '快消', '食品'],
                chartObj: null
            };
        },
        computed: {
            ...mapGetters(['daterange']),
            option() {
                return headMap.getOption(this.industries, this.daterange[0], this.daterange[1]);
            }
        },
        methods: {
            ...mapActions(['drillData', 'revertData'])
        },
        watch: {
            daterange() {
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
<style rel="stylesheet/scss" lang="scss">
    .m-heat-map {
        height: 50%;
    }

</style>
