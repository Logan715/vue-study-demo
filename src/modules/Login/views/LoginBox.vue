<template>
    <div class="login-box">
        <div class="login-title">测试demo</div>
        <el-form ref="loginForm" :model="loginForm" :rules="rules">
            <el-form-item label="账号" prop="loginId">
                <el-input v-model="loginForm.loginId" />
            </el-form-item>
            <el-form-item label="密码" prop="pwd">
                <el-input
                    v-model="loginForm.pwd"
                    show-password
                    placeholder="请输入密码"
                />
            </el-form-item>
            <el-form-item class="login-button">
                <el-button
                    type="primary"
                    @click.prevent="submitForm('loginForm')"
                    native-type="submit"
                >
                    登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginForm: {
                loginId: "",
                pwd: ""
            },
            rules: {
                loginId: [
                    { required: true, message: "请输入登录账号" },
                    {
                        min: 3,
                        max: 10,
                        message: "登录账号长度在 3 到 10 个字符"
                    }
                ],
                pwd: [
                    { required: true, message: "请输入登录密码" },
                    {
                        min: 6,
                        max: 20,
                        message: "登录密码长度在 6 到 20 个字符"
                    }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.$emit("onSubmit", this.$data.loginForm);
                } else {
                    return false;
                }
            });
        }
    }
};
</script>

<style>
.login-box {
    width: 400px;
    height: 280px;
    background-color: white;
    padding: 24px;
    border-radius: 12px;
}
.login-title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
}
.login-button {
    text-align: center;
}
</style>
