/*
 * @Author: xiaoyu
 * @Date: 2020-10-22 17:19:54
 * @LastEditTime: 2020-10-23 16:17:53
 */
import React, { Component } from "react";
import { Upload, Modal, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export default class UploadImg extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    multiple: this.props.multiple, //是否可以选择多张
    maxNum: this.props.maxNum, //可以上传几个文件
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [], //上传的文件列表
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };

  handleChange = ({ fileList, event }) => {
    //控制一次上传的个数
    if (fileList.length > this.state.maxNum) {
      fileList.splice(this.state.maxNum - 1, fileList.length - this.state.maxNum);
      console.log(`最多上传${this.state.maxNum}张图片`);
      message.warning(`最多上传${this.state.maxNum}张图片`);
    }
    let res = fileList.map((item) => {
      if (item.response && item.response.code === 1) {
        item.status = "done";
      } else {
        item.status = "error";
      }
      return item;
    });
    this.setState({ fileList: res });
    this.filterImgList(res);
  };

  filterImgList = (list) => {
    let arr1 = list.filter((item) => item.status === "done");
    let str2 = arr1.map((item) => {
      return item.response.data;
    });
    this.props.getImgList(str2.toString());
  };

  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <>
        <Upload
          action="http://localhost:7001/api/commom/upload"
          accept="image/*"
          multiple={this.state.multiple}
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= this.state.maxNum ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </>
    );
  }
}
