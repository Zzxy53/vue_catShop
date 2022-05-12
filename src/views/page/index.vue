<template>
  <div class="index-page">
    <Rotation></Rotation>
    <div class="service-area w">
      <div class="container">
        <div class="row">
          <div class="single-service">
            <router-link to="shopPage">
              <div class="service-icon">
                <a href="#">
                  <i class="ali-icon-Plane iconfont"></i>
                </a>
              </div>
              <div class="service-text">
                <h3><a href="#">租借/兼职</a></h3>
                <p><a href="#">Rent / Post-time Job</a></p>
              </div>
            </router-link>
          </div>
          <div class="single-service">
            <router-link to="shopPage">
              <div class="service-icon">
                <a href="#">
                  <i class="ali-icon-shopping iconfont"></i>
                </a>
              </div>
              <div class="service-text">
                <h3><a href="#">购物商城</a></h3>
                <p><a href="#">Shopping Mail</a></p>
              </div>
            </router-link>
          </div>
          <div class="single-service">
            <router-link to="campus">
              <div class="service-icon">
                <a href="#">
                  <i class="ali-icon-school iconfont"></i>
                </a>
              </div>
              <div class="service-text">
                <h3><a href="#">校园动态</a></h3>
                <p><a href="#">Campus Dynamic</a></p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <p class="clear"></p>
    </div>
    <div class="protfolio-area w">
      <div class="container">
        <div class="section-title">
          <h2>猜你喜欢</h2>
          <i class="el-icon-shopping-cart-1"></i>
        </div>
        <div class="shop-menu">
          <el-tabs v-model="activeName" stretch>
            <el-tab-pane label="全部" name="first">
              <div class="grid">
                <div class="row fl" v-for="item in shopList1" :key="item.id">
                  <div class="shop-item">
                    <ShopMall :titles="item.title" :moneys="item.new" :ShopTitles="item.name" :imgNubs="item.id"></ShopMall>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="租借" name="second">
              <div class="grid">
                <div class="row fl" v-for="item in shopList2" :key="item.id">
                  <div class="shop-item">
                    <ShopMall :titles="item.title" :moneys="item.new" :ShopTitles="item.name" :imgNubs="item.id"></ShopMall>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="兼职" name="third">
              <div class="grid">
                <div class="row fl" v-for="item in shopList3" :key="item.id">
                  <div class="shop-item">
                    <ShopMall :titles="item.title" :moneys="item.new" :ShopTitles="item.name" :imgNubs="item.id"></ShopMall>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="购物商城" name="fourth">
              <div class="grid">
                <div class="row fl" v-for="item in shopList4" :key="item.id">
                  <div class="shop-item">
                    <ShopMall :titles="item.title" :moneys="item.new" :ShopTitles="item.name" :imgNubs="item.id"></ShopMall>
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="alern">
          <router-link to="shopPage">
            <a href="javascript:void(0)" class="shutter-out">
              更多
              <i class="el-icon-d-arrow-right"></i>
            </a>
          </router-link>
        </div>
      </div>
    </div>
    <div class="off-area shop-text">
      <div class="container w">
        <div class="subscribe-bg pth-80">
          <div class="row">
            <div class="offer-text">
              <h3>所有商品</h3>
              <div>
                <router-link to="shopPage">
                  <a href="javascript:void(0);" class="shutter-out">
                    现在去逛
                    <i class="el-icon-d-arrow-right"></i>
                  </a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="special-offer w">
      <div class="container">
        <div class="section-title">
          <h2>新品上市</h2>
          <i class="el-icon-shopping-cart-1"></i>
        </div>
        <div class="row">
          <div class="special-slider-active owl-carousel owl-loaded owl-drag">
            <div class="owl-stage-outer">
              <div ref="owl" class="owl-stage" @mouseover="clearInt" @mouseleave="biginInt">
                <div class="owl-item cloned" style="width: 292.5px" v-for="item in shopList1" :key="item.id">
                  <div class="single-row">
                    <ShopMall :moneys="shopList1.new" :ShopTitles="item.name" :imgNubs="item.id" :titles="item.title"></ShopMall>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="blog-area">
      <div class="container w">
        <div class="section-title">
          <h2>最近校园动态</h2>
          <i class="el-icon-shopping-cart-1"></i>
        </div>
        <div class="row">
          <div class="owl-carousel owl-loaded owl-drag">
            <div ref="owltwo" class="owl-stage" @mouseover="clearIntTwo" @mouseleave="biginIntTwo">
              <div class="blog-details fl">
                <div class="blog-img">
                  <a href="javascript:void(0);">
                    <img src="@/assets/img/school/1.jpg" alt="" />
                  </a>
                  <div class="blog-quick-view">
                    <a href="javascript:void(0);">
                      <i class="el-icon-paperclip"> </i>
                    </a>
                  </div>
                </div>
                <div class="blog-meta">
                  <h4>
                    <a href="javascript:void(0);"> Kid’s Fashion 2022 </a>
                  </h4>
                  <ul class="meta">
                    <li>
                      By
                      <a href="javascript:void(0);">admin</a>
                    </li>
                    <li>25 june 2022</li>
                  </ul>
                  <p>Lorem Ipsum is that it has a more-or-less normal of letters, as opposed to using 'Content here, distribution content here..</p>
                  <a href="javascript:void(0);"> 阅读更多 </a>
                </div>
              </div>
              <div class="blog-details fl">
                <div class="blog-img">
                  <a href="javascript:void(0);">
                    <img src="@/assets/img/school/2.jpg" alt="" />
                  </a>
                  <div class="blog-quick-view">
                    <a href="javascript:void(0);">
                      <i class="el-icon-paperclip"> </i>
                    </a>
                  </div>
                </div>
                <div class="blog-meta">
                  <h4>
                    <a href="javascript:void(0);"> Kid’s Fashion 2022 </a>
                  </h4>
                  <ul class="meta">
                    <li>
                      By
                      <a href="javascript:void(0);">admin</a>
                    </li>
                    <li>25 june 2022</li>
                  </ul>
                  <p>Lorem Ipsum is that it has a more-or-less normal of letters, as opposed to using 'Content here, distribution content here..</p>
                  <a href="javascript:void(0);"> 阅读更多 </a>
                </div>
              </div>
              <div class="blog-details fl">
                <div class="blog-img">
                  <a href="javascript:void(0);">
                    <img src="@/assets/img/school/3.jpg" alt="" />
                  </a>
                  <div class="blog-quick-view">
                    <a href="javascript:void(0);">
                      <i class="el-icon-paperclip"> </i>
                    </a>
                  </div>
                </div>
                <div class="blog-meta">
                  <h4>
                    <a href="javascript:void(0);"> Kid’s Fashion 2022 </a>
                  </h4>
                  <ul class="meta">
                    <li>
                      By
                      <a href="javascript:void(0);">admin</a>
                    </li>
                    <li>25 june 2022</li>
                  </ul>
                  <p>Lorem Ipsum is that it has a more-or-less normal of letters, as opposed to using 'Content here, distribution content here..</p>
                  <a href="javascript:void(0);"> 阅读更多 </a>
                </div>
              </div>
              <div class="blog-details fl">
                <div class="blog-img">
                  <a href="javascript:void(0);">
                    <img src="@/assets/img/school/4.jpg" alt="" />
                  </a>
                  <div class="blog-quick-view">
                    <a href="javascript:void(0);">
                      <i class="el-icon-paperclip"> </i>
                    </a>
                  </div>
                </div>
                <div class="blog-meta">
                  <h4>
                    <a href="javascript:void(0);"> Kid’s Fashion 2022 </a>
                  </h4>
                  <ul class="meta">
                    <li>
                      By
                      <a href="javascript:void(0);">admin</a>
                    </li>
                    <li>25 june 2022</li>
                  </ul>
                  <p>Lorem Ipsum is that it has a more-or-less normal of letters, as opposed to using 'Content here, distribution content here..</p>
                  <a href="javascript:void(0);"> 阅读更多 </a>
                </div>
              </div>
              <div class="blog-details fl">
                <div class="blog-img">
                  <a href="javascript:void(0);">
                    <img src="@/assets/img/school/5.jpg" alt="" />
                  </a>
                  <div class="blog-quick-view">
                    <a href="javascript:void(0);">
                      <i class="el-icon-paperclip"> </i>
                    </a>
                  </div>
                </div>
                <div class="blog-meta">
                  <h4>
                    <a href="javascript:void(0);"> Kid’s Fashion 2022 </a>
                  </h4>
                  <ul class="meta">
                    <li>
                      By
                      <a href="javascript:void(0);">admin</a>
                    </li>
                    <li>25 june 2022</li>
                  </ul>
                  <p>Lorem Ipsum is that it has a more-or-less normal of letters, as opposed to using 'Content here, distribution content here..</p>
                  <a href="javascript:void(0);"> 阅读更多 </a>
                </div>
              </div>
              <div class="blog-details fl">
                <div class="blog-img">
                  <a href="javascript:void(0);">
                    <img src="@/assets/img/school/6.jpg" alt="" />
                  </a>
                  <div class="blog-quick-view">
                    <a href="javascript:void(0);">
                      <i class="el-icon-paperclip"> </i>
                    </a>
                  </div>
                </div>
                <div class="blog-meta">
                  <h4>
                    <a href="javascript:void(0);"> Kid’s Fashion 2022 </a>
                  </h4>
                  <ul class="meta">
                    <li>
                      By
                      <a href="javascript:void(0);">admin</a>
                    </li>
                    <li>25 june 2022</li>
                  </ul>
                  <p>Lorem Ipsum is that it has a more-or-less normal of letters, as opposed to using 'Content here, distribution content here..</p>
                  <a href="javascript:void(0);"> 阅读更多 </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rotation from '@/components/Rotation/rotation.vue'
import ShopMall from '@/components/Shopping-Mall/single-shop.vue'
import golbal from '@/config/golbal.vue'

export default {
  data() {
    return {
      activeName: 'first',
      timer: '',
      transNum: 0,
      timertwo: '',
      transNubTwo: 0,
      shopList1: [],
      shopList2: [],
      shopList3: [],
      shopList4: []
    }
  },
  components: {
    Rotation,
    ShopMall
  },
  methods: {
    log1() {
      console.log(1)
    },
    clearr() {
      this.transNum += -292.5
      if (this.transNum < -1170) this.transNum = 0
      this.$refs.owl.style.transform = 'translateX(' + this.transNum + 'px)'
    },
    clearInt() {
      clearInterval(this.timer)
    },
    biginInt() {
      this.timer = setInterval(this.clearr, 3000)
    },
    changege() {
      this.transNubTwo += -397
      if (this.transNubTwo < -1191) this.transNubTwo = 0
      this.$refs.owltwo.style.transform = 'translateX(' + this.transNubTwo + 'px)'
    },
    clearIntTwo() {
      clearInterval(this.timertwo)
    },
    biginIntTwo() {
      this.timertwo = setInterval(this.changege, 2000)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.timer = setInterval(this.clearr, 3000)
      this.timertwo = setInterval(this.changege, 2000)
      this.shopList1 = golbal.shopList.filter(function (item, i) {
        return i < 8
      })
      this.shopList2 = golbal.shopList.filter(function (item, i) {
        return i > 2 && i < 11
      })
      this.shopList3 = golbal.shopList.filter(function (item, i) {
        return i > 3 && i < 12
      })
      this.shopList4 = golbal.shopList.filter(function (item, i) {
        return i > 5 && i < 14
      })
    })
  },
  beforeDestroy() {
    clearInterval(this.timer)
    clearInterval(this.timertwo)
  }
}
</script>

<style lang="less" scoped>
.owl-carousel {
  width: 1170px;
  // overflow: hidden;
  margin-left: 10px;
  .owl-stage {
    transition: all 0.4s ease 0s;
  }
}

.blog-meta {
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  border-color: navy #ddd #ddd;
  border-image: none;
  border-style: none solid solid;
  border-width: medium 1px 1px;
  padding: 30px 27px;
  .blog-meta .meta li::before {
    content: '|';
    position: absolute;
    right: 4px;
  }
  h4 {
    font-size: 22px;
    color: #333;
    margin-bottom: 10px;
    line-height: 1.1;
    a {
      display: block;
      font-size: 20px;
      margin-bottom: 10px;
      text-transform: capitalize;
      font-weight: 500;
    }
  }
}
.blog-area {
  overflow: hidden;
}
.blog-details {
  width: 393px;
  height: 470px;
  padding: 0 15px;
}
.blog-details:hover .blog-quick-view > a {
  opacity: 1;
  transform: translateX(-50%) translateY(-50%) scale(1);
}
.blog-img::after {
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
.blog-img {
  position: relative;
  a {
    outline: medium none;
    color: #686868;
    transition: all 0.3s ease-out 0s;
    img {
      width: 100%;
    }
  }
}
.blog-details:hover .blog-img::after {
  height: 100%;
  width: 100%;
}
.blog-quick-view > a {
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
  i {
    display: inline-block;
    font-family: 'Pe-icon-7-stroke';
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
  }
}
.meta > li {
  color: #666;
  display: inline-block;
  padding-right: 15px;
  position: relative;
  text-transform: capitalize;
}
.blog-meta .meta li::before {
  content: '|';
  position: absolute;
  right: 4px;
}
.blog-meta > a {
  color: #333;
  font-weight: 500;
  text-transform: capitalize;
  transition: all 0.3s ease-out 0s;
}
.blog-meta > a:hover {
  color: #666;
  padding-left: 5px;
}
.blog-meta > p {
  margin: 10px 0 15px;
}
.blog-quick-view {
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99;
}
.pth-80 {
  padding: 80px 0;
}
.service-area {
  overflow: hidden;
  padding-top: 100px;
  .container {
    overflow: hidden;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    .row {
      overflow: hidden;
      margin-left: -15px;
      margin-right: -15px;
      .single-service {
        width: 33.3333%;
        position: relative;
        min-height: 1px;
        padding-left: 15px;
        padding-right: 15px;
        display: block;
        overflow: hidden;
        float: left;
        .service-icon {
          display: block;
          float: left;
          a {
            outline: medium none;
            color: #686868;
            transition: all 0.3s ease-out 0s;
            i {
              background-color: transparent;
              border: 1px solid #333;
              color: #333;
              font-size: 34px;
              height: 80px;
              line-height: 80px;
              margin-right: 30px;
              position: relative;
              text-align: center;
              transition: all 0.3s linear 0s;
              width: 80px;
              display: block;
            }
          }
        }
        .service-text {
          display: block;
          margin-top: 14px;
          float: left;
          h3 {
            font-size: 18px;
            font-weight: 600;
            line-height: 22px;
            margin-bottom: 6px;
            transition: all 0.3s linear 0s;
            a {
              transition: all 0.3s ease-out 0s;
              outline: medium none;
              color: inherit;
            }
          }
          p {
            color: #333;
            font-size: 14px;
            font-weight: normal;
            line-height: 24px;
            margin: 0 0 10px;
            color: #686868 !important;
          }
        }
      }
    }
  }
}
.single-service:hover i {
  background-color: #333 !important;
  color: #fff !important;
}
.service-icon a:hover,
.service-text a:hover {
  color: #222;
  text-decoration: none;
  outline: 0;
}
.protfolio-area {
  overflow: hidden;
  padding: 100px 0;
}
.section-title {
  text-align: center;
  position: relative;
  overflow: hidden;
  margin-bottom: 50px;
  h2 {
    color: #333;
    display: inline-block;
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
    padding-bottom: 20px;
    position: relative;
  }
  i {
    background: #333 none repeat scroll 0 0;
    border: medium none;
    border-radius: 100%;
    color: #fff;
    font-size: 11px;
    height: 20px;
    left: 50%;
    line-height: 20px;
    margin-left: -10px;
    padding: 0;
    position: absolute;
    text-align: center;
    top: 63%;
    width: 20px;
  }
}
.section-title h2::before {
  background: #333 none repeat scroll 0 0;
  border-radius: 100%;
  bottom: -1px;
  content: '';
  height: 2px;
  left: 50%;
  margin-left: -35%;
  position: absolute;
  width: 70%;
}
.container {
  overflow: hidden;
  width: 1200px;
}

.grid {
  // overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .row {
    overflow: hidden;
    margin-bottom: 22px;
  }
}
.shop-menu {
  margin-bottom: 22px;
}
.alern {
  text-align: center;
}
.shutter-out {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  background-color: #333;
  color: #fff;
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 10px 20px;
  text-transform: capitalize;
}
.shop-text {
  background: url('../../assets/img/bg/11.jpg');
  background-attachment: fixed;
  background-clip: initial;
  background-color: rgba(0, 0, 0, 0);
  background-origin: initial;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 0;
}
.offer-text {
  text-align: center;
  h3 {
    color: #fff;
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 35px;
    text-transform: capitalize;
  }
  .hvr-shutter-out-horizontal {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    background-color: #333;
    color: #fff;
    display: inline-block;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    padding: 10px 20px;
    text-transform: capitalize;
  }
}
.special-offer {
  padding: 100px 0;
  .row {
    margin-left: -15px;
    margin-right: -15px;
  }
}
.owl-stage {
  transform: translateX(0px);
  transition: all 0.25s ease 0s;
  width: 3510px;
}
.owl-carousel .owl-stage-outer {
  position: relative;
  // overflow: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  width: 1170px;
}
.special-slider-active {
  margin-left: 45px;
}
.shutter-out:hover {
  color: white;
}
.shutter-out:hover:before {
  transform: scaleX(1); //缩放 0~1
}
.shutter-out:before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #555;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 50%;
  transform-origin: 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
</style>
