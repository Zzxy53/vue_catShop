<template>
  <div class="login_container">
    <div class="login_box">
      <div class="login_title">
        <h4>登录</h4>
        <p>请填写下列的帐户详细信息</p>
      </div>
      <!-- 登录表单 -->
      <el-form ref="loginFromRef" class="login_from" :model="loginFrom" :rules="loginFromJud">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-s-custom" v-model="loginFrom.username" placeholder="用户"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" v-model="loginFrom.password" type="password" placeholder="密码" show-password></el-input>
        </el-form-item>
        <el-checkbox v-model="checked">记住密码</el-checkbox>
        <a href="#" class="fr">忘记密码?</a>
        <el-form-item class="btns">
          <button class="login_btn" @click="loginBtn">登录</button>
        </el-form-item>
        <p>新来的？<a href="#/register">创建一个新账户</a></p>
      </el-form>
    </div>
  </div>
</template>

<script>
// import bus from '@/components/eventBus.js'

export default {
  name: 'login',
  components: {},
  data() {
    return {
      //登录表单的数据绑定对象
      user: {},
      checked: '',
      loginFrom: {
        username: '',
        password: ''
      },
      loginFromJud: {
        username: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetLoginFrom() {
      this.$refs.loginFromRef.resetFields()
    },
    // login() {
    //   this.$refs.loginFromRef.validate(async val => {
    //     if (!val) return
    //     const res = await this.$http.post('login', this.loginFrom)
    //     console.log(res)
    //   })
    // },
    loginBtn() {
      let storage = window.localStorage
      let name = this.loginFrom.username
      let msg = storage.getItem(JSON.stringify(name))
      if (msg != null) {
        let pswd = this.loginFrom.password
        msg = JSON.parse(msg)
        if (msg.password == pswd) {
          this.$message.success('登录成功')
          this.user = msg
          this.$store.commit('updateuser', this.user)
          // console.log(this.user)
          this.$router.push('/')
        } else {
          this.$message.error('密码错误')
        }
      } else {
        this.$message.error('用户不存在')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  width: 100%;
  height: 100%;
  background-color: #2b4b6b;
  position: relative;
}
.login_box {
  width: 550px;
  height: 410px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 0px 10px -6px rgb(0 0 0);
  position: relative;
  // transform: translate(-50%, -50%);
  .login_title {
    padding: 30px 0 30px 0;
    text-align: center;
    h4 {
      font-size: 27px;
      font-weight: 500;
      margin-bottom: 10px;
      font-style: normal;
      color: #333;
    }
    p {
      font-size: 14px;
      font-weight: normal;
      line-height: 24px;
      color: #666;
    }
  }
}
.login_from {
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  a {
    color: #666;
    font-size: 14px;
    text-decoration: none;
  }
  p {
    text-align: center;
  }
  .btns {
    text-align: center;
    padding: 14px 0 0 0;
    .login_btn {
      width: 100%;
      height: 40px;
      color: #fff;
      background-color: black;
      border: 0;
    }
  }
}
</style>
