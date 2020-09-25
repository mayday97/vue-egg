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

    const ret = await ctx.service.house.house.addHouse(ctx.request.body);
    if (ret) {
      this.success({ id: 1, title: "测试" });
    } else {
      // this.success({ id: 1, title: "测试" });
    }
  }
}

module.exports = HouseController;
