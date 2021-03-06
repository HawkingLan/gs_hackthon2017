import Vue from 'vue';
import Vuex from 'vuex';
import main from './main';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production', // 严格模式，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误
    modules: {
        main
    }
});
