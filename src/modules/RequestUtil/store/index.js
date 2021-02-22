import * as types from "./types";
// import * as globalTypes from "../../../store/globalTypes";
import actions from "./actions";
import ActionUtil from "../../../utils/ActionUtil";

const state = () => ({
    type: undefined,
    note: undefined,
    info: {}
});

// mutations
const mutations = {
    [ActionUtil.TYPE_ING](state, type) {
        state.type = type;
    },
    [ActionUtil.TYPE_FAIL](state, { type, note }) {
        state.type = type;
        state.note = note;
    },
    [types.TEST_SUCCESS](state, info) {
        state.type = types.TEST_SUCCESS;
        state.info = info;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
};
