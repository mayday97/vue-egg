/*
 * @Author: xiaoyu
 * @Date: 2020-10-19 15:13:24
 * @LastEditTime: 2020-10-20 17:08:00
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
      this.success(ret);
    }
  }
}

module.exports = UserLogin;
