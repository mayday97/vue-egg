/*
 * @Author: xiaoyu
 * @Date: 2020-09-10 11:03:32
 * @LastEditTime: 2020-10-20 17:01:25
 */
"use strict";

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  jwt: {
    enable: true,
    package: "egg-jwt",
  },

  // 跨域配置
  cors: {
    enable: true,
    package: "egg-cors",
  },

  mysql: {
    enable: true,
    package: "egg-mysql",
  },
};
