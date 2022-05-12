<template>
  <div class="shop-page-consiter">
    <bread title="商城" text="商城"></bread>
    <div class="shop-page-area ptb-100 w">
      <div class="container">
        <div class="row">
          <el-row>
            <el-col :xs="0" :sm="4" :md="4" :lg="5" :xl="6">
              <div class="blof-sidebar">
                <div class="single-sidebar">
                  <h3 class="sidebar-title">选择价格</h3>
                  <div class="sidebar-filter">
                    <el-slider v-model="value" range :max="600" :marks="marks"> </el-slider>
                  </div>
                </div>
                <div class="single-sidebar">
                  <h3 class="sidebar-title">分类</h3>
                  <div class="sidebar-list">
                    <ul>
                      <li><input type="checkbox" /> <a href="shop-page.html">日常用品</a></li>
                      <li><input type="checkbox" /> <a href="shop-page.html">衣裤鞋帽</a></li>
                      <li><input type="checkbox" /> <a href="shop-page.html">书籍教材</a></li>
                      <li><input type="checkbox" /> <a href="shop-page.html">数码产品</a></li>
                      <li><input type="checkbox" /> <a href="shop-page.html">手工设计</a></li>
                      <li><input type="checkbox" /> <a href="shop-page.html">其他</a></li>
                    </ul>
                  </div>
                </div>
                <div class="single-sidebar" style="padding: 30px 14px">
                  <div class="sidebar-img-text">
                    <div class="sidebar-img">
                      <a href="javascript:void(0);">
                        <img src="@/assets/img/shop/2.jpg" alt="" />
                      </a>
                      <div class="sidebar-text">
                        <h3>限时</h3>
                        <h2>40% 折扣</h2>
                        <h3>帽子</h3>
                        <a href="javascript:void(0);">立即购买</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :xs="24" :sm="20" :md="20" :lg="19" :xl="18">
              <div class="blof-wrapper">
                <div class="tab-menu-product">
                  <div class="tab-menu-sort">
                    <div class="tab-menu">
                      <ul class="tablist">
                        <li ref="fli" @click="chengeF">
                          <router-link to="/shopPage">
                            <i class="el-icon-s-grid"></i>
                            网格
                          </router-link>
                        </li>
                        <li ref="sli" @click="chengeF">
                          <router-link to="/shopPage/pane2">
                            <i class="el-icon-s-unfold"></i>
                            列单
                          </router-link>
                        </li>
                      </ul>
                    </div>
                    <div class="tab-sort">
                      <label>顺序分类：</label>

                      <select class="com-opt">
                        <option value="volvo">位置</option>
                        <option value="saab">热度</option>
                        <option value="opel">价格</option>
                        <option value="audi">评分</option>
                      </select>
                    </div>
                  </div>
                  <div class="tab-product">
                    <router-view></router-view>
                    <div class="page-pagination">
                      <ul ref="uul">
                        <li v-for="item in liList" :key="item.id" :class="item.cls">
                          <a href="javascript:void(0);" @click="onShow(item.id)">{{ item.id }}</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i class="el-icon-d-arrow-right"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bread from '@/components/assembly/breadcrumbs-area.vue'

export default {
  components: {
    bread
  },
  name: 'shop-page-consiter',

  data() {
    return {
      value: [0, 200],
      liList: [
        { id: 1, cls: 'active' },
        { id: 2, cls: '' },
        { id: 3, cls: '' },
        { id: 4, cls: '' }
      ],
      marks: {
        0: { style: { color: '#222' }, label: '$0' },
        300: { style: { color: '#222' }, label: '$300' },
        600: { style: { color: '#222' }, label: '$600' }
      }
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.chengeF()
    })
  },

  methods: {
    onShow(e) {
      for (let i = 0; i < this.liList.length; i++) {
        if (e - 1 == i) {
          this.liList[i].cls = 'active'
        } else {
          this.liList[i].cls = ''
        }
      }
    },
    chengeF() {
      if (this.$route.path == '/shopPage') {
        this.$refs.fli.className = 'active'
        this.$refs.sli.className = ''
      } else {
        this.$refs.fli.className = ''
        this.$refs.sli.className = 'active'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.active {
  background-color: #333;
  a {
    color: #fff !important;
  }
}
.page-pagination {
  text-align: center;
  li {
    display: inline-block;
    margin: 0 5px;
    font-size: 14px;
    a {
      border: 1px solid #333;
      color: #333;
      display: inline-block;
      height: 30px;
      line-height: 27px;
      width: 30px;
      transition: all 0.3s ease-out 0s;
    }
  }
}
.tab-sort {
  display: inline-block;
  float: right;
}
.tab-sort label {
  color: #666;
  font-size: 14px;
  margin: 0 10px;
  display: inline-block;
}
.tab-menu-sort {
  border-bottom: 1px solid #ddd;
  display: block;
  margin-bottom: 50px;
  overflow: hidden;
  padding-bottom: 30px;
}
.tab-menu {
  display: inline-block;
  float: left;
  li {
    display: inline-block;
    margin-right: 5px;
  }
}
.tab-menu li.active a,
.tab-menu li a:hover {
  color: #fff;
  background-color: #333;
}
.tab-menu li a {
  border: 1px solid #666;
  color: #666;
  display: inline-block;
  padding: 5px 15px;
  text-transform: capitalize;
  transition: all 0.3s ease 0s;
  outline: medium none;
  i {
    padding-right: 5px;
    display: inline-block;
    font: normal normal normal 14px/1;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
  }
}
.com-opt {
  width: 70px;
  outline: none;
  border: 1px solid #ddd;
  color: #666;
  height: 33px;
  padding-left: 3px;
  padding-right: 10px;
  width: inherit;
}
.sele {
  cursor: pointer;
}
.sidebar-text > a {
  border: 1px solid #333;
  color: #333;
  display: inline-block;
  margin-top: 15px;
  padding: 5px 24px;
  text-transform: uppercase;
  outline: medium none;
  transition: all 0.3s ease-out 0s;
}
.sidebar-text > a:hover {
  color: #fff;
  background-color: #111;
}
.sidebar-text > h3 {
  font-size: 25px;
  margin-bottom: 5px;
  text-transform: uppercase;
  color: #333;
  margin-top: 0px;
  font-style: normal;
  font-weight: 400;
}
.sidebar-text > h2 {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 5px;
  text-transform: uppercase;
  margin-top: 0px;
  color: #333;
  font-family: 0px;
}
.sidebar-text {
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  top: 24px;
  width: 100%;
  z-index: 999;
}
.sidebar-img::after {
  background-color: rgba(255, 255, 255, 0.4);
  bottom: 0;
  content: '';
  height: 0;
  left: 0;
  margin: auto;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: all 0.6s ease-in 0s;
  width: 0;
  z-index: 1;
}
.sidebar-img-text:hover .sidebar-img::after {
  height: 100%;
  width: 100%;
}
.sidebar-img-text {
  position: relative;
  .sidebar-img {
    position: relative;
  }
}
.sidebar-img img {
  width: 100%;
}
.sidebar-list ul li a:hover {
  padding-left: 15px;
}
.sidebar-list ul li a {
  letter-spacing: 1px;
  padding-left: 10px;
  text-transform: capitalize;
  transition: all 0.3s ease-out 0s;
}
.sidebar-list ul li {
  padding-bottom: 10px;
  display: block;
  overflow: hidden;
}
h3.sidebar-title::before {
  background-color: #000;
  bottom: 7px;
  content: '';
  height: 1px;
  left: 0;
  position: absolute;
  width: 50px;
}
h3.sidebar-title {
  color: #333;
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
  padding-bottom: 15px;
  position: relative;
  text-transform: capitalize;
}
.blof-sidebar {
  width: 90%;
  margin-left: 15px;
}
.sidebar-filter {
  span {
    font-size: 14px;
  }
  .spanleft {
    margin-left: -14px;
  }
  .spanright {
    margin-right: -10px;
  }
}
.single-sidebar {
  background-color: #fff;
  border: 1px solid #f1f1f1;
  margin-bottom: 30px;
  padding: 30px 30px;
}
h3.sidebar-title {
  color: #333;
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
  padding-bottom: 15px;
  position: relative;
  text-transform: capitalize;
}
h3.sidebar-title::before {
  background-color: #000;
  bottom: 7px;
  content: '';
  height: 1px;
  left: 0;
  position: absolute;
  width: 50px;
}
</style>
