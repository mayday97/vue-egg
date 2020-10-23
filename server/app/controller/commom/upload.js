/*
 * @Author: xiaoyu
 * @Date: 2020-09-28 14:42:51
 * @LastEditTime: 2020-10-23 14:15:29
 */
const BaseController = require("../base");

class CommomController extends BaseController {
  /**
   * 获取房产列表
   */
  async uploadFile() {
    const { ctx } = this;
    let ret = await ctx.service.commom.upload.saveFile(ctx.request.files[0]);
    if (ret === -1) {
      //上传失败
      this.error("上传失败");
    } else {
      this.success(ret);
    }
  }
}

module.exports = CommomController;
