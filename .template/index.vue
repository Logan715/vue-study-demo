<template>
    <div>
        在这边添加自己的代码
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import * as types from "./store/types";
export default {
    components: {
        // "login-box": LoginBox
    },
    data() {
        return {};
    },
    computed: {
        ...mapState("${camelCaseModule}", ["type", "note"])
    },
    watch: {
        type: function(value, oldValue) {
            if (value !== oldValue) {
                switch (value) {
                    // case types.LOGIN_FAIL:
                    //     this.$message.error(this.note);
                    //     break;
                    // case types.LOGIN_SUCCESS:
                    //     //TODO
                    //     break;
                    default:
                        break;
                }
            }
        }
    },
    methods: {
        ...mapActions("${camelCaseModule}", [])
    }
};
</script>
<style scoped></style>
