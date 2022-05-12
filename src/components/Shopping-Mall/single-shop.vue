<template>
  <div class="single-shop">
    <div class="shop-img">
      <img :src="require('@/assets/img/equal/' + imgNubs + '.jpg')" alt="" />
      <div class="shop-quick-view">
        <el-button type="text" @click="dialogTableVisible = true">
          <a href="javascript:void(0);" @click.prevent="QuickView" class="alinajie">
            <i class="el-icon-view"></i>
          </a>
        </el-button>
      </div>
      <div class="price-up-down">
        <span class="sale-new" v-if="this.titles != ''">{{ titles }}</span>
      </div>
      <div class="button-group">
        <a href="javascript:void(0);" @click="addData">
          <i class="el-icon-shopping-cart-2"></i>
          加入购物车
        </a>
        <a href="#">
          <i class="el-icon-alilove"></i>
          收藏
        </a>
      </div>
    </div>
    <div class="shop-text-all">
      <div class="title-c">
        <div class="shop-title fl">
          <h3>
            <a href="#">{{ ShopTitles }}</a>
          </h3>
        </div>
        <div class="price fr">
          <span class="new">${{ moneys }}</span>
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
export default {
  props: {
    titles: {
      type: String,
      default: ''
    },
    moneys: {
      type: Number,
      default: 240
    },
    ShopTitles: {
      type: String,
      default: '商品'
    },
    imgNubs: {
      type: Number,
      default: 1
    }
  },
  name: 'single-shop',
  data() {
    return {
      value: 3.7,
      radio: 3,
      radio2: 1,
      dialogTableVisible: false,
      arr: this.$store.state.user.arrData
    }
  },
  methods: {
    QuickView() {
      console.log('弹出遮罩层，商品详情')
    },
    addData() {
      // this.arr.push({ id: this.imgNubs, num: 1 })
      console.log(this.arr)
      if (!this.arr.length) {
        this.arr.push({ id: this.imgNubs, new: this.moneys, num: 1 })
        this.$store.commit('update', this.arr)
        console.log('长度为空')
        return
      }
      for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i].id == this.imgNubs) {
          this.arr[i].num++
          this.$store.commit('update', this.arr)
          return
        } // console.log(this.arr[i].id)
      }
      this.arr.push({ id: this.imgNubs, new: this.moneys, num: 1 })
      // this.$store.state.user.arrData = this.arr
      this.$store.commit('update', this.arr)
      console.log(this.arr)
      // console.log(this.arr)
      // console.log(this.imgNubs)
    }
  }
}
</script>
<style lang="less" scoped>
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
.single-shop {
  width: 260px;
  height: 330px;
  .shop-img {
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
    }
    .shop-quick-view {
      position: absolute;
      left: 0;
      right: 0;
      text-align: center;
      top: 50%;
      transform: translateY(-50%);
      z-index: 99;
    }
    .button-group {
      background-color: #333;
      bottom: -20px;
      left: 0;
      opacity: 0;
      padding: 10px 10px 13px;
      position: absolute;
      text-align: center;
      transition: all 0.3s ease 0s;
      width: 100%;
      z-index: 99;
      a {
        border-left: 1px solid #777;
        color: #fff;
        display: block;
        float: left;
        font-size: 12px;
        height: 17px;
        line-height: 17px;
        width: 50%;
        i {
          font-size: 16px;
          position: relative;
          top: 2px;
          margin-right: 8px;
        }
      }
      a:first-child {
        border-left: 0 solid #333;
      }
    }
  }
}
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
.single-shop:hover .button-group > {
  bottom: 0;
  opacity: 1;
}
.shop-img::after {
  content: '';
  background: rgba(0, 0, 0, 0.5);
  bottom: 0;
  height: 0;
  left: 0;
  margin: auto;
  pointer-events: none; //元素不对指针做出反应
  position: absolute;
  right: 0;
  top: 0;
  transition: all 0.3s ease-in 0s;
  width: 0;
  z-index: 1;
}
.single-shop:hover .shop-img::after {
  width: 100%;
  height: 100%;
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
  top: 12px;
  transform: rotate(-45deg);
  z-index: 99;
}
.shop-text-all {
  border-color: navy #eee #eee;
  border-image: none;
  border-style: none solid solid;
  border-width: medium 1px 1px;
  padding: 26px 15px 24px;
  .title-c {
    overflow: hidden;
    .shop-title > h3 {
      color: #929292;
      display: inline-block;
      font-size: 13px;
      font-weight: 500;
      margin-bottom: 0px;
    }
    .price > span {
      font-size: 15px;
    }
  }
}
</style>
