/*
 * @Author: xiaoyu
 * @Date: 2020-09-25 13:07:02
 * @LastEditTime: 2020-10-21 14:12:31
 */
/*
 * @Author: xiaoyu
 * @Date: 2020-09-25 13:07:02
 * @LastEditTime: 2020-10-21 14:08:42
 */
const BaseController = require("../base");

class GoodsController extends BaseController {
  /**
   * 获取商品列表
   */
  async getList() {
    const { ctx } = this;
    const list = await ctx.service.goods.list.getGoodsList(ctx.request.body);
    if (list && list.length != 0) {
      this.success(list);
    } else {
      this.error("没有数据");
    }
  }
}

module.exports = GoodsController;
