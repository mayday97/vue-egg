import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'

//normalize
import 'normalize.css'

Vue.config.productionTip = false

//全局导入 
import {Message} from 'element-ui';
Vue.prototype.$message = Message;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')