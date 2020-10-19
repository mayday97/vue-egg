/*
 * @Author: xiaoyu
 * @Date: 2020-10-14 14:54:37
 * @LastEditTime: 2020-10-14 15:59:56
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    name: "小鱼",
    locale:false
  },
  routes: [
    { path: '/', component: '@/pages/index' }
  ],
});
