<template>
  <div ref="soll" class="pane2-container">
    <div class="tab-pane">
      <div class="row">
        <div class="single-shop" v-for="item in shopList" :key="item.id">
          <el-row>
            <el-col :span="8">
              <div class="shop-list-left">
                <div class="shop-img">
                  <a href="javascript:void(0);">
                    <img :src="require('@/assets/img/equal/' + item.id + '.jpg')" alt="" />
                  </a>
                  <div class="shop-quick-view">
                    <el-button type="text" @click="dialogTableVisible = true">
                      <a href="javascript:void(0);" class="alinajie">
                        <i class="el-icon-view"></i>
                      </a>
                    </el-button>
                  </div>
                  <div class="price-up-down">
                    <span class="sale-new" v-if="item.title != ''">{{ item.title }}</span>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="16">
              <div class="shop-list-right">
                <div class="shop-list-all">
                  <div class="shop-list-name">
                    <h3>
                      <a href="javascript:void(0);">{{ item.name }}</a>
                    </h3>
                  </div>
                  <div class="shop-list-rating">
                    <span class="ratting">
                      <i class="el-icon-star-on"></i>
                      <i class="el-icon-star-on"></i>
                      <i class="el-icon-star-on"></i>
                      <i class="el-icon-star-on"></i>
                      <i class="el-icon-star-on"></i>
                    </span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, adipiscing elit. Nam fringilla augue nec est auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, odio...</p>
                  <div class="shop-list-price">
                    <span class="list-price">
                      <span class="new">${{ item.new }}</span>
                      <span class="old">${{ item.old }}</span>
                    </span>
                  </div>
                  <div class="shop-list-cart">
                    <div class="shop-group">
                      <a href="javascript:void(0);">
                        <i class="el-icon-shopping-cart-2"></i>
                        加入购物车
                      </a>
                      <a href="javascript:void(0);">
                        <i class="ali-icon-love iconfont"></i>
                        收藏
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="dialogTableVisible">
      <el-row :gutter="30">
        <el-col :span="12">
          <div class="bg-purple">
            <el-tabs tab-position="bottom" type="border-card" stretch>
              <el-tab-pane>
                <span slot="label">
                  <el-avatar shape="square" :size="40" :src="require('@/assets/img/equal/' + 1 + '.jpg')"></el-avatar>
                </span>
                <img class="showimg" src="@/assets/img/shop/q1.jpg" alt="" />
              </el-tab-pane>
              <el-tab-pane>
                <span slot="label">
                  <el-avatar shape="square" :size="40" :src="require('@/assets/img/equal/' + 5 + '.jpg')"></el-avatar>
                </span>
                <img class="showimg" src="@/assets/img/shop/q2.jpg" alt="" />
              </el-tab-pane>
              <el-tab-pane>
                <span slot="label">
                  <el-avatar shape="square" :size="40" :src="require('@/assets/img/equal/' + 3 + '.jpg')"></el-avatar>
                </span>
                <img class="showimg" src="@/assets/img/shop/q3.jpg" alt="" />
              </el-tab-pane>
              <el-tab-pane>
                <span slot="label">
                  <el-avatar shape="square" :size="40" :src="require('@/assets/img/equal/' + 8 + '.jpg')"></el-avatar>
                </span>
                <img class="showimg" src="@/assets/img/shop/q4.jpg" alt="" />
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
        <el-col :span="12">
          <div>
            <h1 class="grid-content">产品名称</h1>
            <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}"> </el-rate>
            <span class="moneyN">￥120.00</span>
            <el-divider></el-divider>
            <div class="mtb-40">
              尺码：
              <el-radio-group v-model="radio">
                <el-radio :label="3">xxl</el-radio>
                <el-radio :label="6">xl</el-radio>
                <el-radio :label="9">m</el-radio>
                <el-radio :label="12">s</el-radio>
              </el-radio-group>
            </div>
            <div class="mtb-40">
              颜色：
              <el-radio-group v-model="radio2">
                <el-radio :label="1"> 深海蓝</el-radio>
                <el-radio :label="2">抹茶绿</el-radio>
                <el-radio :label="3">珊瑚红</el-radio>
                <el-radio :label="4">樱花粉</el-radio>
              </el-radio-group>
            </div>
            <el-divider></el-divider>
            <div>
              分享
              <el-button icon="ali-icon-facebook iconfont" circle></el-button>
              <el-button icon="ali-icon-twitter iconfont" circle></el-button>
              <el-button icon="ali-icon-googleplus iconfont" circle></el-button>
              <el-button icon="ali-icon-instagram iconfont" circle></el-button>
              <el-button icon="ali-icon-pinterest iconfont" circle></el-button>
            </div>
            <div class="mat">
              <el-button icon="ali-icon-love1 iconfont" circle></el-button>
              <el-button icon="ali-icon-refresh iconfont" circle></el-button>
              <el-button icon="ali-icon-envelope iconfont" circle></el-button>
            </div>
            <el-button>加入收藏</el-button>
          </div>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>
import golbal from '@/config/golbal.vue'
export default {
  name: 'pane2-container',

  data() {
    return {
      shopList: golbal.shopList,
      dialogTableVisible: false,
      value: 3.7,
      radio: 3,
      radio2: 1
    }
  },
  watch: {},
  mounted() {},

  methods: {}
}
</script>
<style lang="less" scoped>
.alinajie {
  background: rgb(0, 0, 0) none repeat scroll 0 0;
  border-radius: 50%;
  color: #fff;
  font-size: 30px;
  height: 60px;
  line-height: 60px;
  opacity: 0;
  position: absolute;
  text-align: center;
  transform: translateX(-50%) translateY(-50%) scale(0.6);
  transition: all 0.3s ease 0s;
  width: 65px;
}
.single-shop:hover .alinajie {
  opacity: 1;
}
.mat {
  margin: 40px 0;
}
.mtb-40 {
  margin-bottom: 40px;
}
.moneyN {
  display: block;
  padding-top: 20px;
  font-size: 20px;
}
.grid-content {
  margin-bottom: 20px;
}
.showimg {
  width: 100%;
}
.pane2-container {
  height: 1000px;
  margin-bottom: 20px;
  width: 100%;
  overflow: hidden;
}
.pane2-container:hover {
  overflow-y: auto;
}
.row {
  width: 950px;
}
.pane2-container::-webkit-scrollbar {
  width: 4px;
  transition: all 0.3s ease-out 0s;
}
.pane2-container::-webkit-scrollbar-track {
  border-radius: 100px;
}
.pane2-container::-webkit-scrollbar-thumb {
  background-color: #222;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 100px;
}
.single-shop {
  margin-bottom: 30px;
  width: 100%;
}
.shop-list-cart .shop-group a {
  background-color: #333;
  color: #fff;
  display: inline-block;
  font-size: 14px;
  margin-right: 20px;
  padding: 8px 20px;
  text-transform: uppercase;
}
.shop-list-rating {
  margin-bottom: 9px;
}
.ratting {
  color: #ffc741;

  i {
    margin-right: 2px;
    font-size: 14px;
  }
}
.shop-list-price {
  margin: 12px 0;
}
.list-price span.new {
  margin-right: 20px;
}

.list-price span {
  font-size: 20px;
}
.list-price span.old {
  color: #777;
  text-decoration: line-through;
}
.shop-list-name > h3 a {
  color: #333;
  display: block;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 7px;
  text-transform: capitalize;
}
.sale-new {
  background: #333 none repeat scroll 0 0;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  left: -24px;
  margin: 0;
  padding: 1px 30px;
  position: absolute;
  text-align: left;
  text-transform: uppercase;
  top: 12px;
  transform: rotate(-45deg);
  z-index: 99;
}
.shop-quick-view > a {
  background: rgb(0, 0, 0) none repeat scroll 0 0;
  border-radius: 50%;
  color: #fff;
  font-size: 18px;
  height: 45px;
  line-height: 47px;
  opacity: 0;
  position: absolute;
  text-align: center;
  transform: translateX(-50%) translateY(-50%) scale(0.6);
  transition: all 0.3s ease 0s;
  width: 45px;
}
.shop-quick-view {
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99;
}
.shop-list-left {
  display: inline-block;
  float: left;
  width: 267px;
  height: 267px;
}
.shop-img::after {
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  content: '';
  height: 0;
  left: 0;
  margin: auto;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: all 0.3s ease-in 0s;
  width: 0;
  z-index: 1;
}
.shop-list-left:hover .shop-img::after {
  height: 100%;
  width: 100%;
}
.shop-list-left:hover .shop-quick-view > a {
  opacity: 1;
  transform: translateX(-50%) translateY(-50%) scale(1);
}
.shop-img {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
  }
}
a {
  outline: medium none;
  color: #686868;
  transition: all 0.3s ease-out 0s;
}
</style>
