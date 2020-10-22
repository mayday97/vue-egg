/*
 * @Author: xiaoyu
 * @Date: 2020-09-10 11:03:32
 * @LastEditTime: 2020-10-22 15:02:05
 */
"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = `
      <h1>嘿，九七！</h1>
      <img  src='../public/upload/2020-10-12/1.jpeg'/>
    `;
  }
}

module.exports = HomeController;
