/*
 * @Author: xiaoyu
 * @Date: 2020-10-19 15:13:42
 * @LastEditTime: 2020-10-20 17:07:49
 */
const Service = require("egg").Service;

class UserService extends Service {
  async handleLogin(params) {
    const userInfo = await this.app.mysql.get("user", { name: params.account });
    //无此用户

    if (!userInfo) {
      return "nouser";
    }
    if (params.password === userInfo.password) {
      const token = this.app.jwt.sign(
        {
          name: params.account,
          password: params.password,
        },
        this.app.config.jwt.secret
      );
      return token;
    } else {
      return "errorpw";
    }
  }
}

module.exports = UserService;
