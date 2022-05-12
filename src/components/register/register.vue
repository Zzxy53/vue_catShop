<template>
  <div class="register_container">
    <div class="register_box">
      <div class="register_title">
        <h4>注册</h4>
        <p>请填写下列的帐户详细信息</p>
      </div>
      <!-- 注册表单 -->
      <el-form ref="registerFromRef" class="register_from" :model="registerFrom" :rules="registerFromJud">
        <el-form-item prop="email">
          <el-input prefix-icon="el-icon-message" v-model="registerFrom.email" type="email" placeholder="邮箱"></el-input>
        </el-form-item>
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-s-custom" v-model="registerFrom.username" placeholder="昵称"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" v-model="registerFrom.password" type="password" placeholder="密码" show-password></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <!-- <div class="Verification">
          <div class="ipt">
            <el-input placeholder="验证码"></el-input>
          </div>
      
          <span>看不清，换一个</span>
          <div class="clear"></div>
        </div> -->
        <el-form-item class="btns">
          <button class="register_btn" @click="regis">注册</button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
      user: {},
      //注册表单的数据绑定对象
      registerFrom: {
        username: '',
        password: '',
        email: ''
      },
      registerFromJud: {
        username: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetregisterFrom() {
      this.$refs.registerFromRef.resetFields()
    },
    regis() {
      if (this.registerFrom.email != '' && this.registerFrom.username != '' && this.registerFrom.password != '') {
        this.user.name = this.registerFrom.username
        this.user.email = this.registerFrom.email
        this.user.password = this.registerFrom.password
        this.user.arrData = []
        let data = JSON.stringify(this.user)
        let na = JSON.stringify(this.user.name)
        window.localStorage.setItem(na, data)
        this.$router.push('/loginPage')
      }
      console.log(this.user)
    }
  }
}
</script>

<style lang="less" scoped>
.register_container {
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 10px -6px rgb(0 0 0);
  position: relative;
}
.register_box {
  width: 550px;
  height: 418px;
  background-color: #fff;
  border-radius: 3px;
  position: relative;
  // top: 50%;
  // left: 50%;
  box-shadow: 0px 0px 10px -6px rgb(0 0 0);
  .register_title {
    padding: 30px 0 30px 0;
    text-align: center;
    h4 {
      font-size: 20px;
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
.register_from {
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  .btns {
    text-align: center;
    padding: 14px 0 0 0;
    .register_btn {
      width: 100%;
      height: 40px;
      color: #fff;
      background-color: black;
      border: 0;
      margin-top: 15px;
    }
  }
}
.Verification {
  position: relative;
  .ipt {
    width: 50%;
    float: left;
  }
  span {
    float: right;
    font-size: 15px;
  }
}
</style>
