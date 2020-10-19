/*
 * @Author: xiaoyu
 * @Date: 2020-10-19 15:13:24
 * @LastEditTime: 2020-10-19 15:43:17
 */
const BaseController = require("../base");
class UserLogin extends BaseController {
  async userLogin() {
    const { ctx } = this;

    const ret = await ctx.service.user.login.handleLogin(ctx.request.body);

    if (ret === "nouser") {
      this.error("无此用户");
    } else if (ret === "errorpw") {
      this.error("密码错误");
    } else {
      this.success("登录成功");
    }

    // let userInfo = ctx.request.body;
    // let ret = await this.app.mysql.get("user", { name: userInfo.account });
    // console.log(ret);
    // if (!ret) {
    //   //无此用户
    //   this.error("无此用户");
    // } else if (ret && ret.password === userInfo.password) {
    //   this.success("登录成功");
    // } else {
    //   //
    //   this.error("密码错误");
    // }
  }
}

module.exports = UserLogin;
