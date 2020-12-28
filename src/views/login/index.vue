<template>
    <div class="login">
        <el-form :rules="loginRules" :model="loginForm" ref="loginForm" class="login-box">
            <el-image class="login-box-logo" :src="logo"/>
            <el-form-item class="login-box-input" prop="username">
                <el-input v-model="loginForm.username" class="login-box-username" placeholder="请输入用户名" type="text"/>
            </el-form-item>
            <el-form-item  class="login-box-input" prop="password">
                <el-input  v-model="loginForm.password" class="login-box-password" placeholder="请输入用户名" type="password"/>
            </el-form-item>
            <el-form-item>
                <el-button class="login-box-btn" :loading="loading" @click="login()">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import LOGO_IMAGE from '../../assets/login/user.jpg';
export default {
    data() {
        return {
            logo: LOGO_IMAGE, // logo图标

            // 登录信息
            loginForm: {
                username: '',
                password: ''
            },

            // 校验规则
            loginRules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            },

            // 加载框
            loading: false,


        }
    },
    methods: {
        login() {
            this.$refs.loginForm.validate(valid => {
                console.log(valid)
                if (valid) {
                    // this.loading = true;
                    this.$store.dispatch('user/doLogin', this.loginForm).then(res => {
                        console.log(res)
                    }).catch((error) => {
                        console.log(error)
                    })
                }
            });
        }
    }
}
</script>

<style lang="less" scoped>
.login {
    width: 100%;
    height: 100%;
    background: url(../../assets/login/login_bg.jpg) no-repeat;
    background-size: cover;
    background-position: center top;

    &-box {
        width: 500px;
        height: 700px;
        margin: 0 auto;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        overflow:hidden;
        background-color: rgba(255,255,255,0.3);
        border-radius: 5px;

        &-logo {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            display: block;
            margin: 40px auto;
        }

        &-input {
           width: 80%;
           display: block;
           margin: 40px auto;
           color: #f58612;
           border: none; 
           background-size: cover;
           position: relative;

           ::v-deep .el-input__inner {
              height: 50px;
              padding-left: 35px;
           }
        }

        &-username {
            ::v-deep .el-input__inner {
                background: #fff url(../../assets/login/username.png) no-repeat;
                background-size: 20px;
                background-position: 6px center;
            }
        }

        &-password {
            ::v-deep .el-input__inner {
                background: #fff url(../../assets/login/password.png) no-repeat;
                background-size: 20px;
                background-position: 6px center;
            }
        }

        &-btn {
           width: 80%;
           display: block;
           margin: 10px auto;
           font-size: 20px;
           background-color: #f5e39d;
           border: none;
           color: #f58612;
           cursor: pointer;
        }
    }

    &-box:after {
        content: '';
        width: 500px;
        height: 700px;
        position: absolute;
        top: 0;
        left: 0;
        background: url(../../assets/login/login_bg.jpg) no-repeat;
        background-size: cover;
        z-index: -1;
        filter: blur(6px);
    }
}
</style>