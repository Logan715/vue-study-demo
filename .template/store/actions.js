import * as services from "../../../api/login";
import * as types from "./types";
import ActionUtil from "../../../utils/ActionUtil";

export default {
    // async login({ commit }, payload) {
    //     ActionUtil.ing(commit, types.LOGIN_ING);
    //     try {
    //         const response = await services.loginService(payload);
    //         if (response.code === 1) {
    //             ActionUtil.success(commit, types.LOGIN_SUCCESS, response.data);
    //         } else {
    //             ActionUtil.fail(commit, types.LOGIN_FAIL, menuResponse.note);
    //         }
    //     } catch (e) {
    //         ActionUtil.fail(commit, types.LOGIN_FAIL, e.message);
    //     }
    // }
};
