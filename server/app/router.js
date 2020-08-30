'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

const app=app=>{
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/user/info',controller.user.userInfo);
  router.post('/api/user/edit',controller.user.editInfo)
}


// module.exports = app => {
//   const { router, controller } = app;
//   router.get('/', controller.home.index);
//   router.get('/api/user/info',controller.user.userInfo);
// };

module.exports=app
