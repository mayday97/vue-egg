const BaseController = require("../base");

class CommomController extends BaseController {
  /**
   * 获取房产列表
   */
  async uploadFile() {
    const { ctx } = this;
    let ret = await ctx.service.commom.upload.saveFile(ctx.request.files[0]);
    this.success("chengg ");
  }
}

module.exports = CommomController;
