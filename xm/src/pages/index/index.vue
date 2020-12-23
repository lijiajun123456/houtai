<template>
  <el-container>
    <el-aside width="150px">
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#20222a"
        text-color="#fff"
        active-text-color="#ccc"
        :unique-opened="true"
        router
      >
        <template v-for="item in user.menus">
          <!-- 这里遍历的是有目录的,即有children -->
          <el-submenu v-if="item.children" :index="item.title" :key="item.id">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.title}}</span>
            </template>
            <template v-for="i in item.children">
              <el-menu-item :key="i.id" :index="'/'+i.url">{{i.title}}</el-menu-item>
            </template>
          </el-submenu>
          <!-- 这里显示没有目录的,即没有children -->
          <el-menu-item v-if="!item.children" :key="item.id" :index="'/'+item.url">{{item.title}}</el-menu-item>
        </template>

        <!-- <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>系统设置</span>
          </template>
          <el-menu-item index="/menu">菜单管理</el-menu-item>
          <el-menu-item index="/role">角色管理</el-menu-item>
          <el-menu-item index="manager">管理员管理</el-menu-item>
        </el-submenu>-->

        <!-- <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-cooperation"></i>
            <span>商城管理</span>
          </template>
          <el-menu-item index="/category">商品分类</el-menu-item>
          <el-menu-item index="/specs">商品规格</el-menu-item>
          <el-menu-item index="/goods">商品管理</el-menu-item>
          <el-menu-item index="/member">会员管理</el-menu-item>
          <el-menu-item index="/banner">轮播管理</el-menu-item>
          <el-menu-item index="/seckill">秒杀活动</el-menu-item>
        </el-submenu>-->
      </el-menu>
    </el-aside>

    <el-container>
      <el-header height="80px">
        <span>admin</span>
        <el-button type="primary">退出</el-button>
      </el-header>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
};
</script>

<style scoped>
.el-aside {
  height: 100vh;
  color: white;
  background-color: #20222a;
}
.el-container .el-header {
  background-color: #b3c0d1;
  text-align: right;
  line-height: 80px;
}
.el-col {
  width: 150px;
  background-color: #333;
}
.el-breadcrumb {
  margin-bottom: 20px;
}
</style>