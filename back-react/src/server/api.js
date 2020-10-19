/*
 * @Author: xiaoyu
 * @Date: 2020-10-19 15:05:01
 * @LastEditTime: 2020-10-19 15:08:04
 */
import { get, post } from "@/server/axios";

export const apiLogin = (params) => {
  const url = "/api/user/login";
  return post(url, params);
};
