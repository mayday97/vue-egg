const Service = require("egg").Service;

class GoodsService extends Service {
  /**
   *  获取房产列表
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
