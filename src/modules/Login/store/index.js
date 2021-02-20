import * as types from "./types"
import * as globalTypes from "../../../store/globalTypes"
import actions from "./actions"
import AuthUtil from "../../../utils/AuthUtil"

const state = () => ({
    type: undefined,
    note: undefined,
    sessionUser: AuthUtil.getSessionUser()
})

// mutations
const mutations = {
    [globalTypes.ING](state, type) {
        state.type = type
    },
    [globalTypes.FAIL](state, { type, note }) {
        state.type = type
        state.note = note
    },
    [types.LOGIN_SUCCESS](state, sessionUser) {
        state.type = types.LOGIN_SUCCESS
        state.sessionUser = sessionUser
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
