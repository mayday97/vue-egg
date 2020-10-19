/*
 * @Author: xiaoyu
 * @Date: 2020-09-10 11:03:32
 * @LastEditTime: 2020-10-19 15:17:37
 */
const BaseController = require("../base");

class UserController extends BaseController {
  async userInfo() {
    const { ctx } = this;
    try {
      const userInfo = await this.app.mysql.get("user", {
        id: 1,
      });
      this.success({
        ...userInfo,
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async editInfo() {
    const { ctx } = this;
    const ret = ctx.request.body;
    this.success("成功");
  }

  async login() {
    const { ctx } = this;
    let userInfo = ctx.request.body;
    let ret = await this.app.mysql.get("user", { name: userInfo.account });
    console.log(ret);
    if (!ret) {
      //无此用户
      this.error("无此用户");
    } else if (ret && ret.password === userInfo.password) {
      this.success("登录成功");
    } else {
      //
      this.error("密码错误");
    }
  }
}
module.exports = UserController;
