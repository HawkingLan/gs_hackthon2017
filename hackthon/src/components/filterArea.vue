<template>
    <div class="m-filter-area">
        <el-date-picker v-model="range" type="daterange" placeholder="请选择日期范围"
                        :picker-options="pickerOptions">
        </el-date-picker>
    </div>
</template>
<script>
    import moment from 'moment';
    import {
        mapGetters,
        mapActions
    } from 'vuex';

    export default {
        data() {
            return {
                pickerOptions: {
                    disabledDate: (date) => date > moment()
                }
            };
        },
        computed: {
            ...mapGetters(['daterange']),
            range: {
                get() {
                    return this.daterange;
                },
                set(val) {
                    this.updateDateRange(val);
                }
            }
        },
        methods: {
            ...mapActions(['updateDateRange'])
        }
    };

</script>
<style rel="stylesheet/scss" lang="scss">
    .m-filter-area {
        padding-bottom: 16px;
    }
</style>