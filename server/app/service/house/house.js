const Service = require("egg").Service;

class HouseService extends Service {
  /**
   *  获取房产列表
   */
  async getHouseList({ page }) {
    const list = await this.app.mysql.select("house", {
      offset: parseInt(page) * 20 - 20,
      limit: 20,
    });
    return list;
  }

  /**
   * 添加房产
   */

  async addHouse(params) {
    const result = await this.app.mysql.insert("house", { title: params.title, region: params.region, address: params.address, area: params.area, thumb: params.thumb });
    if (result.affectedRows === 1) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = HouseService;
