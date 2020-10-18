const BaseController = require("../base");

class HouseController extends BaseController {
  /**
   * 获取房产列表
   */
  async getList() {
    const { ctx } = this;
    const list = await ctx.service.house.house.getHouseList(ctx.request.body);
    if (list && list.length != 0) {
      this.success(list);
    } else {
      this.error("没有数据");
    }
  }

  /**
   * 添加房产
   */
  async addHouse() {
    const { ctx, service } = this;
    console.log(ctx.request.body);
    const ret = await ctx.service.house.house.addHouse(ctx.request.body);
    if (ret) {
      this.success("上传成功");
    } else {
      // this.success({ id: 1, title: "测试" });
      this.error("上传失败");
    }
  }
}

module.exports = HouseController;
