import Vue from "vue";
const vm = Vue;

export const login = (params) => {
  return vm.axios.post("/api/user/login", params);
};

export const addHouse = (params) => {
  return vm.axios.post("/api/house/add", params);
};

export const houseList = (params) => {
  return vm.axios.post("/api/house/list", params);
};
