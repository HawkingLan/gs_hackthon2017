<template>
    <div class="m-chart-area full-height">
        <heat-map></heat-map>
        <div class="summary-chart">
            <pie-chart></pie-chart>
            <map-chart></map-chart>
        </div>
    </div>
</template>
<script>
    import heatMap from './heatMap';
    import pieChart from './pieChart';
    import mapChart from './mapChart';

    export default {
        components: {
            heatMap,
            pieChart,
            mapChart
        }
    };

</script>
<style rel="stylesheet/scss" lang="scss">
    .summary-chart {
        display: flex;
        height: 50%;

        & div {
            flex: 1;
            height: 100%;
        }
    }
</style>
