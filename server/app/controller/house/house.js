const BaseController = require("../base");

class HouseController extends BaseController {
  /**
   * 获取房产列表
   */
  async getList() {
    const { ctx, service } = this;
    // const list = service.house.getHouseList(ctx.query);
    this.success({ id: 1, title: "测试" });
  }

  /**
   * 添加房产
   */
  async addHouse() {
    const { ctx, service } = this;
    const ret = service.house.addHouse(ctx.query);
  }
}

module.exports = HouseController;
