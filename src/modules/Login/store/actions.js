import * as services from "../../../api/login"
import * as globalTypes from "../../../store/globalTypes"
import * as types from "./types"
import AuthUtil from "../../../utils/AuthUtil"

export default {
    async login({ commit }, payload) {
        commit(globalTypes.ING, types.LOGIN_ING)
        try {
            const response = await services.loginService(payload)
            if (response.code === 1) {
                const menuResponse = await services.getMenusService()
                debugger
                if (menuResponse.code === 1) {
                    AuthUtil.setSessionUser({
                        user: response.data,
                        menus: menuResponse.records
                    })
                    commit(types.LOGIN_SUCCESS, response.data)
                } else {
                    commit(globalTypes.FAIL, {
                        type: types.LOGIN_FAIL,
                        note: menuResponse.note
                    })
                }
            } else {
                commit(globalTypes.FAIL, {
                    type: types.LOGIN_FAIL,
                    note: response.note
                })
            }
        } catch (e) {
            commit(globalTypes.FAIL, {
                type: types.LOGIN_FAIL,
                note: e.message
            })
        }
    }
}
