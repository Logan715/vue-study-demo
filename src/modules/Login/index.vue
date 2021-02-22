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
                        this.$message(this.note);
                        break;
                    case types.LOGIN_SUCCESS:
                        this.$router.push("/home");
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
    background-image: url("../../assets/loginback.jpg");
}
</style>
