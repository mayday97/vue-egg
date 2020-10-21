/*
 * @Author: xiaoyu
 * @Date: 2020-10-19 09:46:57
 * @LastEditTime: 2020-10-21 17:04:50
 */
import React, { Component } from "react";
import "@/style/shop/list.scss";
import { Table, Button, Image, Input } from "antd";
const { Search } = Input;

const columns = [
  {
    title: "封面图",
    dataIndex: "thumb",
    width: 150,
    align: "center",
    render: (thumb) => <Image width={120} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />,
  },
  {
    title: "标题",
    dataIndex: "title",
    width: 200,
    align: "center",
  },
  {
    title: "价格",
    dataIndex: "price",
    width: 150,
    align: "center",
  },
  {
    title: "库存",
    dataIndex: "count",
    align: "center",
  },
  {
    title: "操作",
    dataIndex: "operate",
    width: 300,
    align: "center",
    render: (operate) => (
      <div>
        {operate.map((item) => {
          return (
            <Button className="operate-btn" style={{ color: item.color }}>
              {item.name}
            </Button>
          );
        })}
      </div>
    ),
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    title: `Edward King ${i}`,
    price: 32,
    count: `${i}`,
    operate: [
      { name: "上架", color: "#1890FF" },
      { name: "下架", color: "#FF4D4F" },
      { name: "修改", color: "#CC0710" },
      { name: "上架", color: "#1890FF" },
      { name: "下架", color: "#FF4D4F" },
      { name: "修改", color: "#CC0710" },
    ],
  });
}

class list extends Component {
  onSearch = (value) => {
    console.log(value);
  };

  render() {
    return (
      <div className="goods-list">
        <div className="list-header">
          <Search className="search-list" placeholder="input search text" onSearch={() => this.onSearch} style={{ width: 200 }} enterButton />
          <Button type="primary" onClick={() => this.props.history.push("/home/shop/edit")}>
            添加商品
          </Button>
        </div>
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 20 }} scroll={{ y: 600 }} bordered />
      </div>
    );
  }
}

export default list;
