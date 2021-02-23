import * as services from "../../../api/login";
// import * as globalTypes from "../../../store/globalTypes"
import * as types from "./types";
import AuthUtil from "../../../utils/AuthUtil";
import ActionUtil from "../../../utils/ActionUtil";

export default {
    async login({ commit }, payload) {
        ActionUtil.ing(commit, types.LOGIN_ING);
        try {
            const response = await services.loginService(payload);
            if (response.code === 1) {
                const menuResponse = await services.getMenusService();
                if (menuResponse.code === 1) {
                    AuthUtil.setSessionUser({
                        user: response.data,
                        menus: menuResponse.records
                    });
                    ActionUtil.success(
                        commit,
                        types.LOGIN_SUCCESS,
                        response.data
                    );
                } else {
                    ActionUtil.fail(
                        commit,
                        types.LOGIN_FAIL,
                        menuResponse.note
                    );
                }
            } else {
                ActionUtil.fail(commit, types.LOGIN_FAIL, response.note);
                // commit(globalTypes.FAIL, {
                //     type: types.LOGIN_FAIL,
                //     note: response.note
                // })
            }
        } catch (e) {
            ActionUtil.fail(commit, types.LOGIN_FAIL, e.message);
            // commit(globalTypes.FAIL, {
            //     type: types.LOGIN_FAIL,
            //     note: e.message
            // })
        }
    }
};
