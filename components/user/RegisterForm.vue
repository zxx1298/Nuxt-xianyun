<template>
  <el-form :model="form" ref="form" :rules="rules" class="form">
    <el-form-item class="form-item" prop="username">
      <el-input v-model="form.username" placeholder="用户名手机"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="captcha">
      <el-input v-model="form.captcha" placeholder="验证码">
        <template slot="append">
          <el-button @click="handleSendCaptcha">发送验证码</el-button>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="nickname">
      <el-input v-model="form.nickname" placeholder="你的名字"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="password">
      <el-input v-model="form.password" placeholder="密码" type="password"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="confirmPassword">
      <el-input placeholder="确认密码" type="password" v-model="form.confirmPassword"></el-input>
    </el-form-item>

    <el-button class="submit" type="primary" @click="handleRegSubmit">注册</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致"));
      } else {
        callback();
      }
    };
    var validateUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号码"));
      }
    };
    var validatePassWord = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
    };
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入昵称"));
      }
    };

    return {
      // 表单数据
      form: {
        username: "",
        nickname: "",
        captcha: "",
        password: "",
        confirmPassword: ""
      },
      // 表单规则
      rules: {
        username: [
          {
            required: true,
            validator: validateUserName,
            message: "请输入手机号码",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            validator: validatePassWord,
            message: "请输入密码",
            trigger: "blur"
          }
        ],
        confirmPassword: [
          {
            validator: validatePass,
            trigger: "blur"
          }
        ],
        nickname: [
          {
            required: true,
            validator: validateName,
            message: "请输入昵称",
            trigger: "blur"
          }
        ],
        captcha: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    // 发送验证码
    handleSendCaptcha() {
      // console.log(111);
      if (!this.form.username) {
        this.$message("手机号码不能为空");
        return;
      }
      this.$store.dispatch('user/sendCaptcha',this.form.username).then(res=>{
          this.$message.success("验证码已经发送到手机上：000000");
      })
    },

    // 注册
    handleRegSubmit() {
        this.$axios({
            url:'/accounts/register',
            method:'POST',
            data:{
                username:this.form.username,
                nickname:this.form.nickname,
                captcha:this.form.captcha,
                password:this.form.password
            }
        }).then(res=>{
            // console.log(res)
            if(res.status===200){
                 this.$alert('注册成功,请登录');
                this.$emit('userBack')
            }
        })
    }
  }
};
</script>

<style scoped lang="less">
.form {
  padding: 25px;
}

.form-item {
  margin-bottom: 20px;
}

.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}

.submit {
  width: 100%;
  margin-top: 10px;
}
</style>