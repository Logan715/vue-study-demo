import * as types from "./types";
// import * as globalTypes from "../../../../store/globalTypes"
import actions from "./actions";
import ActionUtil from "../../../../utils/ActionUtil";

const state = () => ({
    type: undefined,
    note: undefined
});

// mutations
const mutations = {
    [ActionUtil.TYPE_ING](state, type) {
        state.type = type;
    },
    [ActionUtil.TYPE_FAIL](state, { type, note }) {
        state.type = type;
        state.note = note;
    }
    // [types.LOGIN_SUCCESS](state, sessionUser) {
    //     state.type = types.LOGIN_SUCCESS;
    //     state.sessionUser = sessionUser;
    // }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
};
