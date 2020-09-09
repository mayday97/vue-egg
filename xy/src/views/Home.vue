<template>
  <div class="home">
    <el-container>
      <el-header class="header">
        <div class="brand">
          <span>八戒</span>
        </div>
        <div class="header-main">
          <div class="menu-icon" @click="showAside = !showAside">
            <i :class="showAside ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside-nav">
          <el-menu default-active="1-2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#1c2b36" text-color="#fff" active-text-color="#ffd04b">
            <template v-for="fnav in asideMenu">
              <!-- 有子级 -->
              <el-submenu v-if="fnav.child" :key="fnav.id" :index="fnav.id">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{ fnav.title }}</span>
                </template>
                <template v-for="snav in fnav.child">
                  <el-menu-item :key="snav.id" :index="snav.id">{{ snav.title }}</el-menu-item>
                </template>
              </el-submenu>
              <!-- 没有子级 -->
              <el-menu-item v-else :key="fnav.id" :index="fnav.id">
                <i class="el-icon-location"></i>
                <span>{{ fnav.title }}</span>
              </el-menu-item>
            </template>
          </el-menu>
        </el-aside>

        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { Input, Button, Container, Header, Aside, Main, Footer, Icon, Menu, Submenu, MenuItem, MenuItemGroup } from "element-ui";
export default {
  name: "Home",
  components: {
    [Input.name]: Input,
    [Button.name]: Button,
    [Container.name]: Container,
    [Header.name]: Header,
    [Aside.name]: Aside,
    [Main.name]: Main,
    [Footer.name]: Footer,
    [Icon.name]: Icon,
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem,
    [MenuItemGroup.name]: MenuItemGroup,
    [Submenu.name]: Submenu,
  },
  data() {
    return {
      showAside: true, //展示侧边导航

      asideMenu: [
        {
          id: "1",
          title: "控制台",
        },
        {
          id: "2",
          title: "用户管理",
          child: [
            {
              id: "2-1",
              title: "分组一",
              child: [
                { id: "2-1-1", title: "选项一" },
                { id: "2-1-2", title: "选项二" },
              ],
            },
            {
              id: "2-2",
              title: "分组二",
            },
          ],
        },

        {
          id: "3",
          title: "导航二",
        },
      ],
    };
  },
  created() {},
  methods: {
    handleOpen() {},

    handleClose() {},
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-color: #f5f5f5;
  .el-container {
    min-height: 100vh;
  }
  .el-header {
    background-color: #132237;
  }
  .el-aside {
    background-color: #1c2b36;
  }

  .header {
    display: flex;
    .brand {
      width: 180px;
      padding-right: 20px;
      line-height: 60px;
      color: cornsilk;
      font-size: 22px;
      text-align: center;
    }
    .header-main {
      .menu-icon {
        line-height: 60px;
        font-size: 30px;
        color: cornsilk;
      }
    }
  }

  // .aside-nav {
  // }
}
</style>
