const Service = require("egg").Service;

class HouseService extends Service {
  /**
   *  获取房产列表
   *  @param {string} region
   *  @param {string} sort  面积从大小；租金从高低
   */
  async getHouseList({ region, sort }) {
    const list = this.app.mysql.select("house", {
      where: { region: region },
      limit: 20,
    });
  }

  /**
   * 添加房产
   */

  async addHouse() {}
}

module.exports = HouseService;
