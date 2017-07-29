import moment from 'moment';

const state = {
    daterange: [moment().subtract(1, 'y'), moment()],
    dataDrill: []
};

let mutations = {
    'UPDATE_DATE_RANGE': (state, daterange) => {
        state.daterange = daterange;
    },
    'DRILL_DATA': (state, obj) => {
        state.dataDrill.push(obj);
    },
    'REVERT_DATA': (state) => {
        state.dataDrill.pop();
    }
};

let getters = {
    daterange: state => state.daterange,
    getCurrentDrillData: state => {
        let drill = state.dataDrill;
        return drill[drill.length - 1] || null;
    }
};

let actions = {
    updateDateRange: ({
        commit
    }, range) => {
        commit('UPDATE_DATE_RANGE', range);
    },
    drillData: ({
        commit
    }, obj) => {
        commit('DRILL_DATA', obj);
    },
    revertData: ({
        commit
    }) => {
        commit('REVERT_DATA');
    }
};

export default {
    state,
    mutations,
    getters,
    actions
};
