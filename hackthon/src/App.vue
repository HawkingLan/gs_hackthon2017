<template>
    <div class="full-height">
        <header-nav></header-nav>
        <router-view></router-view>
    </div>
</template>

<script>
    import headerNav from 'components/headerNav.vue';

    export default {
        name: 'app',
        components: {
            headerNav
        },
        mounted() {
            this.$router.push('/industries');
        }
    };

</script>

<style rel="stylesheet/scss" lang="scss">
    @import './App.scss';

</style>
