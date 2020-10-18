<template>
  <div class="list-page">
    <div class="top">
      <el-button class="add-btn" type="primary" @click="handleAdd">新增</el-button>
    </div>
    <el-table :data="list" border height="86%">
      <el-table-column label="ID" width="80">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column label="房产图" width="150" align="center">
        <!--  -->
        <template slot-scope="scope">
          <el-image style="width: 100px; height: 100px" :src="scope.row.thumb" fit="fill"></el-image>
        </template>
      </el-table-column>

      <el-table-column label="房产信息">
        <template slot-scope="scope">
          <p>标题: {{ scope.row.title }}</p>
          <p>地址: {{ scope.row.address }}</p>
          <p>街道: {{ scope.row.region }}</p>
          <p>面积: {{ scope.row.area }}</p>
          <!-- <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div> -->
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="bottom"></div>
  </div>
</template>

<script>
import { houseList } from "@/server/api";
import { Table, TableColumn, Button, Image } from "element-ui";
export default {
  name: "list",
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Button.name]: Button,
    [Image.name]: Image,
  },
  data() {
    return {
      list: [],
      page: 1,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleAdd() {
      this.$router.push("/house/add");
    },

    async getList() {
      let ret = await houseList({ page: this.page });
      if (ret.code === 1) {
        this.list = [...this.list, ...ret.data];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.list-page {
  height: calc(100vh - 100px);
  background-color: #fff;
  padding: 20px;
  border-radius: 6px;
  .top,
  .bottom {
    height: 5%;
    width: 100%;
  }
  .top {
    margin-bottom: 10px;
    .add-btn {
      float: right;
    }
  }
}
</style>
