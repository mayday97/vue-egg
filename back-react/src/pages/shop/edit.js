/*
 * @Author: xiaoyu
 * @Date: 2020-10-21 16:46:58
 * @LastEditTime: 2020-10-23 16:56:00
 */
import React, { Component } from "react";
import "@/style/shop/edit.scss";
import { Input, Button, message } from "antd";
import { apiAddShop } from "@/server/api";

import UploadImg from "@/component/UploadImg.js";

class edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      price: "",
      stock: "",
      thumb: "",
      images: "",
    };
  }

  inputTextChange(e, type) {
    this.setState({
      [type]: e.target.value,
    });
  }

  handleImgList(str, type) {
    this.setState({
      [type]: str,
    });
  }

  async submit() {
    let params = {
      title: this.state.title,
      price: this.state.price,
      stock: this.state.stock,
      thumb: this.state.thumb,
      images: this.state.images,
    };
    let ret = await apiAddShop(params);
    if (ret.code === 1) {
      message.success("添加成功").then(() => {
        this.props.history.goBack();
      });
    }
  }

  render() {
    return (
      <div className="shop-edit">
        <div className="edit-wrap">
          <div className="input-item">
            <span className="input-lable">标题：</span>
            <Input placeholder="请输入商品标题" style={{ width: 300 }} value={this.state.title} onChange={(e) => this.inputTextChange(e, "title")}></Input>
          </div>

          <div className="input-item">
            <span className="input-lable">价格：</span>
            <Input type="number" placeholder="请输入商品单价" style={{ width: 300 }} value={this.state.price} onChange={(e) => this.inputTextChange(e, "price")}></Input>
          </div>

          <div className="input-item">
            <span className="input-lable">库存：</span>
            <Input type="number" placeholder="请输入商品库存" style={{ width: 300 }} value={this.state.stock} onChange={(e) => this.inputTextChange(e, "stock")}></Input>
          </div>

          <div className="input-item">
            <span className="input-lable">封面图：</span>
            <UploadImg maxNum={1} multiple={false} getImgList={(str) => this.handleImgList(str, "thumb")}></UploadImg>
          </div>

          <div className="input-item">
            <span className="input-lable">轮播图：</span>
            <UploadImg maxNum={6} multiple={true} getImgList={(str) => this.handleImgList(str, "images")}></UploadImg>
          </div>

          <div className="rich-text"></div>

          <div className="btns">
            <Button
              type="primary"
              className="confirm-btn"
              onClick={() => {
                this.submit();
              }}
            >
              确定
            </Button>
            <Button type="default" className="cancle-btn" onClick={() => this.props.history.goBack()}>
              取消
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default edit;
