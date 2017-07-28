<template>
    <div class="m-industries full-height">
        <filter-area v-model="daterange"></filter-area>
        <chart-area :daterange="daterange"></chart-area>        
    </div>
</template>
<script>
    import moment from 'moment';
    import filterArea from './filterArea.vue';
    import chartArea from './chartArea.vue';

    export default {
        components: {
            filterArea,
            chartArea
        },
        data() {
            return {
                daterange: [moment().subtract(1, 'y'), moment()]
            };
        }
    };

</script>
<style rel="stylesheet/scss" lang="scss">
    .m-industries {
        padding: 16px;
        height: calc(100% - 61px);
    }
</style>
