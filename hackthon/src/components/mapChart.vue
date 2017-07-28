<template>
    <div class="m-map-chart"></div>
</template>
<script>
    import echarts from 'echarts';

    export default {
        data() {
            return {
                chartObj: null
            };
        },
        mounted() {
            this.$nextTick(() => {
                this.chartObj = echarts.init(this.$el);
            });
        }
    };

</script>
