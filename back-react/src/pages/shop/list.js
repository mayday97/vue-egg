/*
 * @Author: xiaoyu
 * @Date: 2020-10-19 09:46:57
 * @LastEditTime: 2020-10-23 17:10:46
 */
import React, { Component } from "react";
import "@/style/shop/list.scss";
import { Table, Button, Image, Input } from "antd";
import { apiShopList } from "@/server/api";

const { Search } = Input;

const columns = [
  {
    title: "编号",
    dataIndex: "id",
    width: 100,
    align: "center",
  },
  {
    title: "封面图",
    dataIndex: "thumb",
    width: 150,
    align: "center",
    render: (thumb) => <Image width={120} height={120} src={thumb} />,
  },
  {
    title: "标题",
    dataIndex: "title",
    align: "center",
  },
  {
    title: "价格",
    dataIndex: "price",
    width: 100,
    align: "center",
  },
  {
    title: "库存",
    dataIndex: "stock",
    align: "center",
    width: 100,
  },
  {
    title: "状态",
    dataIndex: "status",
    align: "center",
    width: 100,
  },

  {
    title: "操作",
    dataIndex: "operate",
    width: 300,
    align: "center",
    render: (operate) => (
      <div>
        {operate.map((item, index) => {
          return (
            <Button className="operate-btn" key={index} style={{ color: item.color }}>
              {item.name}
            </Button>
          );
        })}
      </div>
    ),
  },
];

class list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopList: [],
    };
  }

  onSearch = (value) => {
    console.log(value);
  };

  async getShopList() {
    let res = await apiShopList({ page: 1 });
    if (res.code === 1) {
      let arr = res.data.map((item) => {
        let obj = {
          ...item,
          operate: [
            { name: "上架", color: "#1890FF" },
            { name: "下架", color: "#FF4D4F" },
            { name: "修改", color: "#CC0710" },
          ],
        };
        return obj;
      });
      this.setState({
        shopList: [...this.state.shopList, ...arr],
      });
    }
  }
  componentDidMount() {
    this.getShopList();
  }

  render() {
    return (
      <div className="goods-list">
        <div className="list-header">
          <Search className="search-list" placeholder="input search text" onSearch={() => this.onSearch} style={{ width: 200 }} enterButton />
          <Button type="primary" onClick={() => this.props.history.push("/home/shop/edit")}>
            添加商品
          </Button>
        </div>
        <Table rowKey="id" columns={columns} dataSource={this.state.shopList} pagination={{ pageSize: 20 }} scroll={{ y: 600 }} bordered />
      </div>
    );
  }
}

export default list;
