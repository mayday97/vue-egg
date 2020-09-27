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

  async addHouse(params) {
    const result = await this.app.mysql.insert("house", { title: params.title, region: params.region, address: params.address, area: params.area });
    if (result.affectedRows === 1) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = HouseService;
