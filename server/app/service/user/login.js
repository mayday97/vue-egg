/*
 * @Author: xiaoyu
 * @Date: 2020-10-19 15:13:42
 * @LastEditTime: 2020-10-21 13:38:57
 */
const Service = require("egg").Service;

class UserService extends Service {
  async handleLogin(params) {
    const userInfo = await this.app.mysql.get("user", { name: params.name });
    //无此用户
    if (!userInfo) {
      return {
        code: -1,
        data: null,
        msg: "无此用户",
      };
    }
    if (params.password === userInfo.password) {
      const expTime = Math.round((new Date().getTime() + 24 * 60 * 60 * 1000) / 1000); //过期时间
      const token = this.app.jwt.sign(
        {
          name: params.name,
          password: params.password,
          exp: expTime,
        },
        this.app.config.jwt.secret
      );
      return {
        code: 1,
        data: {
          token: token,
        },
        msg: "成功",
      };
    } else {
      return {
        code: 0,
        data: null,
        msg: "密码错误",
      };
    }
  }
}

module.exports = UserService;
