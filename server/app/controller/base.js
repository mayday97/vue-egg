/**
 * 公共controllera
 */

const { Controller } = require("egg");

class BaseController extends Controller {
  success(data) {
    this.ctx.body = {
      code: 1,
      data,
      msg: "成功",
    };
  }

  error(msg) {
    this.ctx.body = {
      code: 0,
      data: null,
      msg: msg,
    };
  }
}

module.exports = BaseController;
