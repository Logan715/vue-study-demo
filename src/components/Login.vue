<template>
  <div>
  <div>登陆页面</div>
  <el-form ref="loginForm" :model="loginForm" :rules="rules">
    <el-form-item label="账号" prop="loginId">
      <el-input v-model="loginForm.loginId" />
    </el-form-item>
    <el-form-item label="密码" prop="pwd">
      <el-input v-model="loginForm.pwd" show-password placeholder="请输入密码" /> 
    </el-form-item>
     <el-form-item>
      <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
  
  export default {
    data(){
      return {
        loginForm: {
          loginId: '',
          pwd:''
        },
         rules: {
          loginId: [
            { required: true, message: '请输入活动名称',  },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
          ]
        }
        
      }
    },
    methods: {
       submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style>
   
</style>
