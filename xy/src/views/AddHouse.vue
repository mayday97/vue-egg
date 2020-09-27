<template>
  <div class="add-house">
    <el-input placeholder="请输入房产标题" v-model="title"></el-input>
    <el-input placeholder="请输入地址" v-model="address"></el-input>
    <el-input placeholder="请输入房产街道" v-model="region"></el-input>
    <el-input type="number" placeholder="请输入房产面积" v-model="area"></el-input>
    <el-button type="primary" @click="add">确定</el-button>
    <el-button @click="handleCancle">取消</el-button>
  </div>
</template>

<script>
import { Button, Input } from "element-ui";
import { addHouse } from "../server/api";

export default {
  name: "AddHouse",
  components: {
    [Button.name]: Button,
    [Input.name]: Input,
  },
  data() {
    return {
      title: "",
      address: "",
      region: "",
      area: 0,
    };
  },
  methods: {
    async add() {
      let ret = await addHouse({ title: this.title, region: this.region, address: this.address, area: this.area });
    },

    handleCancle() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
