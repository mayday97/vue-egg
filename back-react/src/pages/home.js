/*
 * @Author: xiaoyu
 * @Date: 2020-10-19 09:46:57
 * @LastEditTime: 2020-10-19 14:40:09
 */
import React, { Component } from "react";

import "@/style/home.css";
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined, FundOutlined, AppstoreOutlined, BarsOutlined, UserOutlined } from "@ant-design/icons";

import { Switch, Route, Redirect } from "react-router-dom";
import DataBoard from "@/pages/dataBoard";
import ShopList from "@/pages/shop/list";
import Order from "@/pages/order";
import Users from "@/pages/users";

const { Header, Sider, Content } = Layout;
class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false, //false显示左侧菜单
      sideNavKey: ["databoard"],
    };
  }

  componentDidMount() {
    console.log(this);
    this.initSideNav();
  }

  //初始化菜单
  initSideNav() {
    const url = this.props.location.pathname;
    const key = url.slice(6);
    if (!key) {
      return;
    }
    this.setState({
      sideNavKey: [key],
    });
  }

  //展开/关闭菜单
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  //点击左侧菜单
  handleMenuChange = (e) => {
    this.props.history.push(`/home/${e}`);
    this.setState({
      sideNavKey: [e],
    });
  };

  render() {
    return (
      <div className="my-layout">
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" selectedKeys={this.state.sideNavKey}>
              <Menu.Item key="databoard" icon={<FundOutlined />} onClick={() => this.handleMenuChange("databoard")}>
                数据统计
              </Menu.Item>
              <Menu.Item key="shop" icon={<AppstoreOutlined />} onClick={() => this.handleMenuChange("shop")}>
                商品管理
              </Menu.Item>
              <Menu.Item key="order" icon={<BarsOutlined />} onClick={() => this.handleMenuChange("order")}>
                订单管理
              </Menu.Item>
              <Menu.Item key="users" icon={<UserOutlined />} onClick={() => this.handleMenuChange("users")}>
                用户管理
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="my-header site-layout-background" style={{ padding: 0 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: "trigger",
                onClick: this.toggle,
              })}
              <div className="user-wrap">小鱼</div>
            </Header>

            <Content className="my-content site-layout-background">
              <Switch>
                <Route path="/home/databoard" component={DataBoard}></Route>
                <Route path="/home/shop" component={ShopList}></Route>
                <Route path="/home/order" component={Order}></Route>
                <Route path="/home/users" component={Users}></Route>
                <Redirect from="/*" to="/home/databoard" />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default home;
