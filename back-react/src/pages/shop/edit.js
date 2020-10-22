/*
 * @Author: xiaoyu
 * @Date: 2020-10-21 16:46:58
 * @LastEditTime: 2020-10-22 17:32:17
 */
import React, { Component } from "react";
import "@/style/shop/edit.scss";
import { Input } from "antd";

import UploadImg from "@/component/UploadImg.js";

class edit extends Component {
  render() {
    return (
      <div className="shop-edit">
        <div className="edit-wrap">
          <div className="input-item">
            <span className="input-lable">标题：</span>
            <Input placeholder="请输入商品标题" style={{ width: 300 }}></Input>
          </div>

          <div className="input-item">
            <span className="input-lable">价格：</span>
            <Input type="number" placeholder="请输入商品单价" style={{ width: 300 }}></Input>
          </div>

          <div className="input-item">
            <span className="input-lable">库存：</span>
            <Input type="number" placeholder="请输入商品库存" style={{ width: 300 }}></Input>
          </div>

          <div className="input-item">
            <span className="input-lable">封面图：</span>
            <UploadImg></UploadImg>
          </div>
        </div>
      </div>
    );
  }
}

export default edit;
