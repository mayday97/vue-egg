import React, { Component, Children } from 'react';
import { router } from 'umi';
import { Layout, Menu, Icon } from 'antd';

import style from './index.css';

const { Header, Sider, Content } = Layout;

class BasicLayout extends Component {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
    
  }

  state = {
    collapsed: false, //收起/展开侧边导航
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  render() {
    return (
      <Layout className={style.layout}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className={style.logo} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" onClick={()=>router.push('/')}>
              <Icon type="video-camera" />
              <span>基础信息</span>
            </Menu.Item>
            <Menu.Item key="2" onClick={()=>router.push('/users')}>
              <Icon type="user"/>
              <span>用户管理</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={style.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
