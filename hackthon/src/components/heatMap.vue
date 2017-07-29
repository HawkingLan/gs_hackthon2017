<template>
    <div class="m-heat-map">
        <el-button v-if="currentDrillData.length - 1" class="drill-revert" 
                   size="small" icon="caret-left"
                   @click="revert">返回</el-button>
        <div class="chart-container"></div>
    </div>
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
                industries: [{
                    key: '广告投放',
                    categories: ['汽车', '数码', '旅游', '教育', '农业', '珠宝', '快消', '食品'],
                    children: [{
                        key: '汽车',
                        categories: ['小型家用', '豪华', '超跑'],
                        children: [{
                            key: '小型家用',
                            categories: ['广本飞度', '东风标致206', '北汽绅宝', 'POLO', '起亚K2', '东风日产阳光',
                                '北京现代瑞纳'
                            ]
                        }, {
                            key: '豪华',
                            categories: ['奥迪A8', '奔驰AMG', '宝马7系', '保时捷Panamera']
                        }, {
                            key: '超跑',
                            categories: ['柯尼塞格One1', '兰博基尼Aventador', '布加迪Veron', '迈凯伦P1',
                                '阿斯顿马丁one-77', 'W Motors Lykan', '法拉利LaFerrari',
                                '帕加尼ZondaR', 'Trion Nemesis'
                            ]
                        }]
                    }, {
                        key: '数码',
                        categories: ['PC', '手机', '相机']
                    }]
                }],
                chartObj: null
            };
        },
        computed: {
            ...mapGetters(['daterange', 'currentDrillData']),
            option() {
                let drill = this.currentDrillData;
                let lastDrill = drill.length ? drill[drill.length - 1] : this.industries[0].categories;
                return headMap.getOption(lastDrill, ...this.daterange);
            }
        },
        methods: {
            ...mapActions(['drillData', 'revertData']),
            searchCurrentCategory() {
                let drillObj = this.industries;
                this.currentDrillData.forEach((drill, drillDepth) => {
                    drillObj.some(ite => {
                        if (ite.key === drill.key) {
                            if (drillDepth < this.currentDrillData.length - 1) {
                                drillObj = ite.children;
                            } else {
                                drillObj = ite;
                            }
                            return true;
                        }
                    });
                });

                if (drillObj === this.industries) {
                    drillObj = this.industries[0];
                }

                return drillObj;
            },
            revert() {
                console.log('revert');
                this.revertData();
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
                this.chartObj = echarts.init(this.$el.querySelector('.chart-container'));
                this.drillData({
                    key: this.industries[0].key,
                    date: null,
                    childCategories: this.industries[0].categories,
                    value: null
                });
                this.chartObj.on('click', function(param) {
                    let drillObj = this.searchCurrentCategory();

                    if (Array.isArray(drillObj.children)) {
                        let nextDrill = headMap.getOneData(param);
                        let nextDrillObj = Array.find(drillObj.children, child => child.key ===
                            nextDrill.key);
                        nextDrill.childCategories = nextDrillObj && nextDrillObj.categories;
                        if (Array.isArray(nextDrill.childCategories)) {
                            this.drillData(nextDrill);
                        }
                    }
                }.bind(this));
                this.chartObj.setOption(this.option);
            });
        }
    };

</script>
<style rel="stylesheet/scss" lang="scss">
    .m-heat-map {
        position: relative;
        height: 50%;

        .drill-revert {
            position: absolute;
            right: 32px;
            z-index: 10;
        }

        .chart-container {
            height: 100%;
        }
    }

</style>
