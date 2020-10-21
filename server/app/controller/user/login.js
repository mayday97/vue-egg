/*
 * @Author: xiaoyu
 * @Date: 2020-10-19 15:13:24
 * @LastEditTime: 2020-10-21 10:11:26
 */
const BaseController = require("../base");
class UserLogin extends BaseController {
  async userLogin() {
    const { ctx } = this;

    const ret = await ctx.service.user.login.handleLogin(ctx.request.body);
    this.ctx.body = ret;
  }
}

module.exports = UserLogin;
