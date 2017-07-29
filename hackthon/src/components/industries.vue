<template>
    <div class="m-industries full-height">
        <filter-area></filter-area>
        <chart-area></chart-area>        
    </div>
</template>
<script>
    import filterArea from './filterArea.vue';
    import chartArea from './chartArea.vue';

    export default {
        components: {
            filterArea,
            chartArea
        }
    };

</script>
<style rel="stylesheet/scss" lang="scss">
    .m-industries {
        padding: 16px;
    }
</style>
