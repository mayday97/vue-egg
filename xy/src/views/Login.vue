<template>
  <div class="home">
    <div class="login-wrap">
      <el-form>
        <el-form-item label="用户名" label-width="100px">
          <el-input type="text" placeholder="请输入账号" v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="100px">
          <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item class="form-content-left">
          <el-button type="primary" @click="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from "../server/api";
import { Form, FormItem, Input, Button } from "element-ui";
import { log } from "util";
export default {
  name: "Home",
  components: {
    [Form.name]: Form,
    [FormItem.name]: FormItem,
    [Input.name]: Input,
    [Button.name]: Button,
  },
  data() {
    return {
      form: {
        account: "",
        password: "",
      },
    };
  },
  methods: {
    async handleLogin() {
      let ret = await login(this.form);
      if(ret.code===1){
        this.$router.push('/home')
      }else{
        this.$message.error(ret.msg)
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-wrap {
  width: 500px;
  margin: 200px auto;
  .form-content-left {
    padding-left: 100px;
  }
}
</style>
