/*
 * @Author: xiaoyu
 * @Date: 2020-09-10 11:03:32
 * @LastEditTime: 2020-10-21 14:29:19
 */
"use strict";

/**
 * @param {Egg.Application} app - egg application
 */

const app = (app) => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.post("/api/commom/upload", controller.commom.upload.uploadFile); //上传文件接口
  router.post("/api/user/login", controller.user.login.userLogin); //登录
  router.post("/api/goods/list", controller.goods.list.getList); //商品列表
};

module.exports = app;
