/*
 * @Author: xiaoyu
 * @Date: 2020-10-21 14:13:27
 * @LastEditTime: 2020-10-23 16:49:34
 */
const Service = require("egg").Service;

class AddService extends Service {
  /**
   * 添加商品
   */
  async addGood(params) {
    const result = await this.app.mysql.insert("goods", { title: params.title, price: params.price, stock: params.stock, thumb: params.thumb, images: params.images });
    console.log(result);
    if (result.affectedRows === 1) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = AddService;
