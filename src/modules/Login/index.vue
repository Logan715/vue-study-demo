<template>
    <div class="login-home">
        <login-box @onSubmit="onSubmit"></login-box>
    </div>
</template>

<script>
import LoginBox from "./views/LoginBox";
import { mapActions, mapState } from "vuex";
import * as types from "./store/types";
export default {
    components: {
        "login-box": LoginBox
    },
    data() {
        return {};
    },
    computed: {
        ...mapState("user", ["type", "note", "user"])
    },
    watch: {
        type: function(value, oldValue) {
            if (value !== oldValue) {
                switch (value) {
                    case types.LOGIN_FAIL:
                        this.$message.error(this.note);
                        break;
                    case types.LOGIN_SUCCESS:
                        // const { menus } = AuthUtil.getSessionUser();
                        // const firstPath = findFirstPath(menus);
                        // if (firstPath) {
                        this.$router.push("/home");
                    // } else {
                    // this.$message.error("找不到对应的菜单");
                    // }

                    default:
                        break;
                }
            }
        }
    },
    methods: {
        ...mapActions("user", ["login"]),
        onSubmit: function(d) {
            this.login(d);
        }
    }
};
</script>
<style scoped>
.login-home {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/loginback.svg");
    background-color: #ffffff;
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
}
</style>
