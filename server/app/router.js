"use strict";

/**
 * @param {Egg.Application} app - egg application
 */

const app = (app) => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.post("/api/commom/upload", controller.commom.upload.uploadFile); //上传文件接口
  router.get("/api/user/info", controller.user.userInfo);
  router.post("/api/user/edit", controller.user.editInfo);
  router.post("/api/user/login", controller.user.login);
  router.post("/api/house/list", controller.house.house.getList);
  router.post("/api/house/add", controller.house.house.addHouse);
};

// module.exports = app => {
//   const { router, controller } = app;
//   router.get('/', controller.home.index);
//   router.get('/api/user/info',controller.user.userInfo);
// };

module.exports = app;
