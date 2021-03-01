<template>
    <el-row :gutter="20">
        <el-col :span="24" class="mb">
            <el-button type="primary" @click="testSuccess">测试成功</el-button>
        </el-col>
        <el-col :span="24" class="mb">
            <el-input type="textarea" :value="dataStr"></el-input>
        </el-col>
        <el-col :span="24" class="mb">
            <el-button-group>
                <el-button @click="testFail">测试失败</el-button>
                <el-button @click="testFail403">测试失败403</el-button>
                <el-button @click="testFail404">测试失败404</el-button>
                <el-button @click="testFail500">测试失败500</el-button>
            </el-button-group>
        </el-col>
    </el-row>
</template>

<script>
import { mapActions, mapState } from "vuex";
import * as types from "./store/types";
export default {
    computed: {
        ...mapState("requestUtil", ["type", "note", "info"]),
        dataStr: vm => JSON.stringify(vm.info)
    },
    watch: {
        type: function(value, oldValue) {
            if (value !== oldValue) {
                switch (value) {
                    case types.TEST_FAIL:
                        this.$message.error(this.note);
                        break;
                    case types.TEST_SUCCESS:
                        this.$message.success("成功");
                        break;
                    default:
                        break;
                }
            }
        }
    },
    methods: {
        ...mapActions("requestUtil", [
            "testSuccess",
            "testFail",
            "testFail403",
            "testFail404",
            "testFail500"
        ])
    }
};
</script>

<style scoped>
.mb {
    margin-bottom: 12px;
}
</style>
