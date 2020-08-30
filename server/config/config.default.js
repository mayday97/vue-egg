/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1598693067035_5639';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  
  config.security = {
    csrf: {
      enable: false, //必须加 否则： 403 Forbidden message: "missing csrf token"
      // ignoreJSON: true
    },
    // domainWhiteList: '*'
  };
  // 跨域
  config.cors = {
    origin:'*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };

  // config.cluster = {
  //     listen: {
  //       path: '',
  //       port: 3000,
  //       hostname: 'localhost',
  //     }
  // };

  return {
    ...config,
    ...userConfig,
  };
};
