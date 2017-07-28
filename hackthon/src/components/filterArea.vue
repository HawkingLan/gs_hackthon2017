<template>
    <div class="m-filter-area">
        <el-date-picker v-model="daterange" type="daterange" placeholder="请选择日期范围"
                        :picker-options="pickerOptions">
        </el-date-picker>
    </div>
</template>
<script>
    import moment from 'moment';

    export default {
        props: {
            value: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                pickerOptions: {
                    disabledDate: (date) => date > moment()
                }
            };
        },
        computed: {
            daterange: {
                get() {
                    return this.value;
                },
                set(val) {
                    this.$emit('input', val);
                }
            }
        }
    };

</script>
<style rel="stylesheet/scss" lang="scss">
    .m-filter-area {
        padding-bottom: 16px;
    }
</style>