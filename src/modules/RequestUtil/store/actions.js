import * as services from "../../../api/test";
import ActionUtil from "../../../utils/ActionUtil";
import * as types from "./types";

export default {
    async testSuccess({ commit }, payload) {
        ActionUtil.ing(commit, types.TEST_ING);
        // commit(globalTypes.ING, types.TEST_ING)
        const response = await services.testSuccessService(payload);
        if (response.code === 1) {
            ActionUtil.success(commit, types.TEST_SUCCESS, response.data);
            // commit(types.TEST_SUCCESS, response.data)
        } else {
            ActionUtil.fail(commit, types.TEST_FAIL, response.note);
            // commit(globalTypes.FAIL, {
            //     type: types.TEST_FAIL,
            //     note: response.note
            // });
        }
    },
    async testFail({ commit }, payload) {
        ActionUtil.ing(commit, types.TEST_ING);
        const response = await services.testFailService(payload);
        if (response.code === 1) {
            ActionUtil.success(commit, types.TEST_SUCCESS, response.data);
        } else {
            ActionUtil.fail(commit, types.TEST_FAIL, response.note);
        }
    },

    async testFail403({ commit }, payload) {
        ActionUtil.ing(commit, types.TEST_ING);
        const response = await services.testFail403Service(payload);
        if (response.code === 1) {
            ActionUtil.success(commit, types.TEST_SUCCESS, response.data);
        } else {
            ActionUtil.fail(commit, types.TEST_FAIL, response.note);
        }
    },
    async testFail404({ commit }, payload) {
        ActionUtil.ing(commit, types.TEST_ING);
        const response = await services.testFail404Service(payload);
        if (response.code === 1) {
            ActionUtil.success(commit, types.TEST_SUCCESS, response.data);
        } else {
            ActionUtil.fail(commit, types.TEST_FAIL, response.note);
        }
    },
    async testFail500({ commit }, payload) {
        ActionUtil.ing(commit, types.TEST_ING);
        const response = await services.testFail500Service(payload);
        if (response.code === 1) {
            ActionUtil.success(commit, types.TEST_SUCCESS, response.data);
        } else {
            ActionUtil.fail(commit, types.TEST_FAIL, response.note);
        }
    }
};
