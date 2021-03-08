<template>
  <div class="login">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-container">
      <div class="title">
        <h3>登录</h3>
      </div>
      <el-form-item prop="username">
        <el-input 
          v-model="loginForm.username"
          type="text"
          prefix-icon="iconfont icon-user"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input 
          v-model="loginForm.password" 
          type="password"
          show-password 
          prefix-icon="iconfont icon-password" 
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitLoginForm('loginForm')" style="width: 100%">
          <i v-if="loading" class="el-icon-loading"></i>
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Login',
  data () {
    const validateLoginForm = (rule, value, callback) => {
      if (value.trim()) {
        callback();
      } else {
        if (rule.fullField === 'username') {
          callback(new Error('用户名不能为空'));
        } else {
          callback(new Error('密码不能为空'));
        }
      }
    };
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginRules: {
        username: [
          { required: true, validator: validateLoginForm, trigger: 'blur' }
        ],
        password: [
          { required: true, validator: validateLoginForm, trigger: 'blur' }
        ]
      },
      loading: false
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    submitLoginForm (refName) {
      this.$refs[refName].validate(valid => {
        if (valid) {
          this.loading = true;
          this.$http.post('login',this.loginForm)
            .then(res => {
              const { data: response } = res
              if (response.meta.status === 200) {
                sessionStorage.setItem('token' ,response.data.token)
                this.$router.replace('/')
                this.$message({ message: '登录成功', type: 'success' })
              } else {
                this.$message({ message: '登录失败，请检查用户名和密码', type: 'error' })
              }
            })
            .catch(err => {
              this.$alert('服务器繁忙，请稍后重试！', '登录失败', {
                confirmButtonText: '确定'
              })
              throw new Error(err)
            })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@backgroundColor: #2d3a4b;
@lightGray: #eee;

.login {
  width: 100vw;
  min-height: 100vh;
  background-color: @backgroundColor;

  .login-container {
    width: 420px;
    font-size: 26px;
    text-align: center;
    color: @lightGray;
    padding: 160px 35px 0;
    margin: 0 auto;

    .title {
      h3 {
        font-size: 26px;
        margin: 0 auto 40px;
      }
    }
  }
}
</style>
