/*
 * @Author: xiaoyu
 * @Date: 2020-10-19 15:05:01
 * @LastEditTime: 2020-10-23 16:36:26
 */
import { get, post } from "@/server/axios";

export const apiLogin = (params) => {
  const url = "/api/user/login";
  return post(url, params);
};

//获取商品列表
export const apiShopList = (params) => {
  const url = "/api/goods/list";
  return post(url, params);
};

//新增商品
export const apiAddShop = (params) => {
  const url = "/api/goods/add";
  return post(url, params);
};
