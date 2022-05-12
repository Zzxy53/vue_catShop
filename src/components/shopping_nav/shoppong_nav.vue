<template>
  <div class="shopping_Nav_container">
    <div class="nav_logo zizhuan fl">
      <router-link to="/">
        <img src="../../assets/logo叮当猫.png" alt="叮当猫" />
      </router-link>
    </div>
    <div class="nav_right">
      <!-- <router-link to="shopPage"> -->
      <el-menu class="el-menu-demo" mode="horizontal" text-color="#333">
        <el-submenu index="1" :show-timeout="0" :hide-timeout="0">
          <template slot="title">日常用品</template>
          <router-link to="shopPage">
            <el-menu-item index="1-1">学习用品</el-menu-item>
            <el-menu-item index="1-2">化妆护肤</el-menu-item>
            <el-menu-item index="1-3">小工具</el-menu-item>
            <el-menu-item index="1-4">宿舍用品</el-menu-item>
            <el-menu-item index="1-5">箱子</el-menu-item>
            <el-menu-item index="1-6">其他</el-menu-item>
          </router-link>
        </el-submenu>
        <el-submenu index="2" :show-timeout="0" :hide-timeout="0">
          <template slot="title">数码产品</template>
          <router-link to="shopPage">
            <el-menu-item index="2-1">手机</el-menu-item>
            <el-menu-item index="2-2">笔记本电脑</el-menu-item>
            <el-menu-item index="2-3">电脑配件</el-menu-item>
            <el-menu-item index="2-4">手表相机</el-menu-item>
            <el-menu-item index="2-5">其他</el-menu-item>
          </router-link>
        </el-submenu>
        <el-submenu index="3" :show-timeout="0" :hide-timeout="0">
          <template slot="title">代步工具</template>
          <router-link to="shopPage">
            <el-menu-item index="3-1">自行车</el-menu-item>
            <el-menu-item index="3-2">平衡车</el-menu-item>
            <el-menu-item index="3-3">滑板</el-menu-item>
            <el-menu-item index="3-4">旱冰鞋</el-menu-item>
            <el-menu-item index="3-5">其他</el-menu-item>
          </router-link>
        </el-submenu>
        <el-submenu index="4" :show-timeout="0" :hide-timeout="0">
          <template slot="title">衣裤鞋帽</template>
          <router-link to="shopPage">
            <el-menu-item index="4-1">衣服</el-menu-item>
            <el-menu-item index="4-2">裤子</el-menu-item>
            <el-menu-item index="4-3">鞋子</el-menu-item>
            <el-menu-item index="4-4">帽子</el-menu-item>
            <el-menu-item index="4-5">其他</el-menu-item>
          </router-link>
        </el-submenu>
        <el-submenu index="5" :show-timeout="0" :hide-timeout="0">
          <template slot="title">书籍教材</template>
          <router-link to="shopPage">
            <el-menu-item index="5-1">教科书</el-menu-item>
            <el-menu-item index="5-2">文学</el-menu-item>
            <el-menu-item index="5-3">小说</el-menu-item>
            <el-menu-item index="5-4">电子书</el-menu-item>
            <el-menu-item index="5-5">电子书</el-menu-item>
          </router-link>
        </el-submenu>
        <div class="nav_icon fr">
          <i class="el-icon-search"></i>
        </div>
        <div class="nav_icon dorpdown fr">
          <i class="el-icon-user"></i>
          <ul>
            <li>账户：{{ this.$store.state.user.name }}</li>
            <li v-if="this.$store.state.user.name">
              <a href="javascript:void(0);">
                <i class="el-icon-star-on"></i>
                我的收藏
              </a>
            </li>
            <li v-if="this.$store.state.user.name">
              <router-link to="checkout">
                <a href="#">
                  <i class="el-icon-circle-check"></i>
                  我的订单
                </a>
              </router-link>
            </li>
            <li v-if="this.$store.state.user.name">
              <router-link to="updataShop">
                <a href="#">
                  <i class="el-icon-sell"></i>
                  商品发布
                </a>
              </router-link>
            </li>
            <li v-if="!this.$store.state.user.name">
              <a href="#">
                <router-link to="/loginPage">
                  <i class="el-icon-user-solid"></i>
                  登录
                </router-link>
              </a>
            </li>
            <li v-if="!this.$store.state.user.name">
              <a href="#">
                <router-link to="/register">
                  <i class="el-icon-circle-plus-outline"></i>
                  注册
                </router-link>
              </a>
            </li>
            <li v-if="this.$store.state.user.name">
              <a href="javascript:void(0);" @click="singOut">
                <i class="ali-icon-sign-out iconfont"></i>
                退出
              </a>
            </li>
          </ul>
        </div>
        <div class="nav_icon dorpdown shoppingdorpdown fr">
          <router-link to="/cart">
            <span v-if="this.$store.getters.cartNumber != 0">{{ this.$store.getters.cartNumber }}</span>
            <i class="el-icon-shopping-cart-2"></i>
          </router-link>
          <ul>
            <li>
              <a href="#" class="cardown">
                <b>总价：</b>
                <i>￥{{ this.$store.getters.moneyNumber }}.00</i>
              </a>
            </li>
            <li>
              <a href="#" class="cardown">
                <router-link to="/cart">
                  <b>购物车</b>
                </router-link>
                <router-link to="checkout">
                  <b>我的订单</b>
                </router-link>
              </a>
            </li>
            <div class="clear"></div>
          </ul>
        </div>
      </el-menu>
      <!-- </router-link> -->
    </div>
    <div class="clear"></div>
  </div>
</template>
<script>
export default {
  name: 'hopping_Nav_container',

  data() {
    return {}
  },
  mounted() {},

  methods: {
    singOut() {
      this.$store.state.user = {}
      this.$store.state.flag = 0
      this.$router.push('/')
    }
  }
}
</script>
<style lang="less" scoped>
.nav_right {
  float: right;
  padding-top: 10px;
}
.nav_icon {
  font-size: 30px;
  padding: 5px 0 20px 20px;
  position: relative;
}
.dorpdown {
  ul {
    display: none;
    // opacity: 0;
    position: absolute;
    top: 100%;
    background: #fff none repeat scroll 0 0;
    width: 180px;
    left: -30px;
    box-shadow: 0px 0px 10px -6px rgb(0 0 0);
    padding-bottom: 10px;
    transition: all 0.3s ease 0s;
    z-index: 999;
    li {
      padding: 10px 10px;
      i {
        margin: 5px;
      }
    }
  }
}
.shoppingdorpdown {
  position: relative;
  span {
    position: absolute;
    background-color: #333;
    width: 20px;
    height: 20px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    font-weight: 600;
    border-radius: 50px;
    line-height: 20px;
    right: -7px;
    transition: all 0.3s ease-out 0s;
  }
  ul {
    left: -110px;
  }
  .cardown {
    display: flex;
    justify-content: space-between;
    padding: 0 7px;
  }
}
.dorpdown:hover {
  ul {
    // opacity: 1;
    display: block;
  }
}
.nav_logo {
}
</style>
