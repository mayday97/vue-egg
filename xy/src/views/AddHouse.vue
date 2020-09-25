<template>
  <div class="add-house">
    <input type="text" placeholder="房产名" v-model="name" />
    <input type="text" placeholder="地址" v-model="region" />
    <div @click="add">添加</div>
  </div>
</template>

<script>
import { addHouse } from "../server/api";
export default {
  data() {
    return {
      name: "",
      region: "",
    };
  },
  methods: {
    async add() {
      let ret = await addHouse({ name: this.name, region: this.region });
    },
  },
};
</script>

<style></style>
