/*
 * @Author: xiaoyu
 * @Date: 2020-10-21 14:13:27
 * @LastEditTime: 2020-10-21 14:16:42
 */
const Service = require("egg").Service;

class AddService extends Service {
  /**
   * 添加房产
   */
  async addGood(params) {
    const result = await this.app.mysql.insert("house", { title: params.title, region: params.region, address: params.address, area: params.area, thumb: params.thumb });
    if (result.affectedRows === 1) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = AddService;
