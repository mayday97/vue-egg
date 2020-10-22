/*
 * @Author: xiaoyu
 * @Date: 2020-09-25 13:07:02
 * @LastEditTime: 2020-10-22 15:10:19
 */
const Service = require("egg").Service;

class GoodsService extends Service {
  /**
   *  获取商品列表
   */
  async getGoodsList({ page }) {
    const list = await this.app.mysql.select("goods", {
      offset: parseInt(page) * 20 - 20,
      limit: 20,
    });
    return list;
  }
}

module.exports = GoodsService;
