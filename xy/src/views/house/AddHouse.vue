<template>
  <div class="add-house">
    <div class="item flex">
      <span class="lable">标题：</span>
      <el-input placeholder="请输入房产标题" v-model="title"></el-input>
    </div>
    <div class="item flex">
      <span class="lable">地址：</span>
      <el-input class="input" placeholder="请输入地址" v-model="address"></el-input>
    </div>
    <div class="item flex">
      <span class="lable">街道：</span>
      <el-input class="input" placeholder="请输入房产街道" v-model="region"></el-input>
    </div>
    <div class="item flex">
      <span class="lable">面积：</span>
      <el-input class="input" type="number" placeholder="请输入房产面积" v-model="area"></el-input>
    </div>

    <div class="item flex">
      <span class="lable">类型：</span>
      <el-checkbox-group v-model="typeList">
        <el-checkbox label="复选框 A"></el-checkbox>
        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
      </el-checkbox-group>
    </div>

    <div class="item flex">
      <span class="lable">状态：</span>
      <el-radio v-model="status" label="1">备选项1</el-radio>
      <el-radio v-model="status" label="2">备选项2</el-radio>
    </div>

    <div class="item flex">
      <span class="lable">封面图：</span>
      <el-upload
        action="http://127.0.0.1:7001/api/commom/upload"
        list-type="picture-card"
        :file-list="bannerImg"
        :on-preview="handlePictureCardPreview"
        :on-success="handleUploadSuccess"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>
    </div>

    <el-button type="primary" @click="add">确定</el-button>
    <el-button @click="handleCancle">取消</el-button>
  </div>
</template>

<script>
import { Button, Input, Checkbox, CheckboxGroup, Radio, RadioGroup, Upload, Dialog } from "element-ui";
import { addHouse } from "@/server/api";

export default {
  name: "AddHouse",
  components: {
    [Button.name]: Button,
    [Input.name]: Input,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
    [Upload.name]: Upload,
    [Dialog.name]: Dialog,
  },
  data() {
    return {
      title: "",
      address: "",
      region: "",
      area: "",
      typeList: [],
      status: "",

      bannerImg: [],
      dialogImageUrl: "",
      dialogVisible: false,
    };
  },
  created() {},
  methods: {
    handleUploadSuccess(response, file, fileList) {
      //图片上传成功
      console.log(fileList);
      this.bannerImg = fileList;
    },

    handleRemove(file, fileList) {
      //删除上传的图片
      console.log(file, fileList);
    },

    handlePictureCardPreview(file) {
      //点击预览
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    async add() {
      const imgUrl = this.bannerImg[0].response.data;
      let ret = await addHouse({ title: this.title, region: this.region, address: this.address, area: this.area, thumb: imgUrl });
      if (ret.code === 1) {
        this.$message("添加成功");
        setTimeout(() => {
          this.$router.go(-1);
        }, 1500);
      }
    },

    handleCancle() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.add-house {
  padding: 0 20%;
  .item {
    align-items: center;
    margin-bottom: 20px;
    .lable {
      font-size: 14px;
      font-weight: bold;
      flex-shrink: 0;
      color: #666666;
    }
  }
}
</style>
