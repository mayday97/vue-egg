/*
 * @Author: xiaoyu
 * @Date: 2020-10-21 14:10:49
 * @LastEditTime: 2020-10-21 14:17:08
 */
const BaseController = require("../base");

class AddGoodsController extends BaseController {
  /**
   * 添加房产
   */
  async addHouse() {
    const { ctx, service } = this;
    const ret = await ctx.service.goods.add.addGood(ctx.request.body);
    if (ret) {
      this.success("上传成功");
    } else {
      this.error("上传失败");
    }
  }
}

module.exports = AddGoodsController;
