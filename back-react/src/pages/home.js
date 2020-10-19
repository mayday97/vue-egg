import React, { Component } from "react";

import "@/style/home.css";
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined, FundOutlined, AppstoreOutlined, BarsOutlined } from "@ant-design/icons";

import { Switch, Route } from "react-router-dom";
import DataBoard from "@/pages/dataBoard";
import ShopList from "@/pages/shop/list";
import Order from "@/pages/order";

const { Header, Sider, Content } = Layout;
class home extends Component {
  state = {
    collapsed: false,
    sideNavKey: ["databoard"],
  };

  componentDidMount() {
    console.log(this);
    this.initSideNav();
  }

  initSideNav() {
    const url = this.props.location.pathname;
    if (url === "/home/databoard") {
      this.setState({
        sideNavKey: ["databoard"],
      });
    } else if (url === "/home/shop/list") {
      this.setState({
        sideNavKey: ["shopList"],
      });
    } else if (url === "/home/order") {
      this.setState({
        sideNavKey: ["order"],
      });
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div className="my-layout">
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={this.state.sideNavKey}>
              <Menu.Item
                key="databoard"
                icon={<FundOutlined />}
                onClick={() => {
                  this.props.history.push("/home/databoard");
                }}
              >
                数据统计
              </Menu.Item>

              <Menu.Item
                key="shopList"
                icon={<AppstoreOutlined />}
                onClick={() => {
                  this.props.history.push("/home/shop/list");
                }}
              >
                商品管理
              </Menu.Item>
              <Menu.Item
                key="order"
                icon={<BarsOutlined />}
                onClick={() => {
                  this.props.history.push("/home/order");
                }}
              >
                订单管理
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: "trigger",
                onClick: this.toggle,
              })}
              <div className="user-wrap">小鱼</div>
            </Header>

            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 1280,
              }}
            >
              <Switch>
                <Route path="/home/databoard" component={DataBoard}></Route>
                <Route path="/home/shop/list" component={ShopList}></Route>
                <Route path="/home/order" component={Order}></Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default home;
