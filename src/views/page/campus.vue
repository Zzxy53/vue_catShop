<template>
  <div class="Campus-contianer">
    <bread title="校园动态" text="校园动态"></bread>
    <div class="contianer w">
      <el-row :gutter="20">
        <el-col :span="18">
          <div class="rowleft">
            <div class="row">
              <div class="titto">
                <h4>编写新鲜事</h4>
                <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea1"> </el-input>
                <div class="baten">
                  <div>
                    <el-popover placement="bottom" width="400">
                      <el-button slot="reference" icon="el-icon-picture-outline-round" size="mini">表情</el-button>
                    </el-popover>
                    <el-button slot="reference" icon="el-icon-picture" size="mini">图片</el-button>
                  </div>
                  <div class="">
                    <el-button type="warning">发布</el-button>
                  </div>
                </div>
              </div>

              <div class="messge">
                <el-row :gutter="20">
                  <el-col :span="4" class="tas">
                    <el-avatar :size="90" :src="require('@/assets/img/campus/1.png')"></el-avatar>
                  </el-col>
                  <el-col :span="20">
                    <div class="miss">
                      <h4>Jack.C</h4>
                      <span>1分钟前</span>
                      <p>happy day!</p>
                      <img src="@/assets/img/campus/bg1.jpg" alt="" />
                    </div>
                  </el-col>
                </el-row>
              </div>
              <div class="messge">
                <el-row :gutter="20">
                  <el-col :span="4" class="tas">
                    <el-avatar :size="90" :src="require('@/assets/img/campus/2.png')"></el-avatar>
                  </el-col>
                  <el-col :span="20">
                    <div class="miss">
                      <h4>Jack.C</h4>
                      <span>1分钟前</span>
                      <p>happy day!</p>
                      <img src="@/assets/img/campus/bg2.jpg" alt="" />
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="rowright">
            <div class="single-sidebar">
              <h3>最近上架</h3>
              <div class="recent-all">
                <div class="recent-img-text mb-20">
                  <el-row :gutter="4">
                    <el-col :span="8">
                      <div class="recent-img">
                        <a href="javascript:void(0);">
                          <img src="@/assets/img/equal/15.jpg" alt="" />
                        </a>
                      </div>
                    </el-col>
                    <el-col :span="16">
                      <div class="recent-text">
                        <h4>
                          <a href="javascript:void(0);"> 香水 </a>
                        </h4>
                        <div class="post-info">
                          <div><i class="ali-icon-calendar iconfont"></i>4月26日</div>
                          <div class="year">2022年</div>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <div class="recent-img-text mb-20">
                  <el-row :gutter="4">
                    <el-col :span="8">
                      <div class="recent-img">
                        <a href="javascript:void(0);">
                          <img src="@/assets/img/equal/2.jpg" alt="" />
                        </a>
                      </div>
                    </el-col>
                    <el-col :span="16">
                      <div class="recent-text">
                        <h4>
                          <a href="javascript:void(0);"> 高跟鞋 </a>
                        </h4>
                        <div class="post-info">
                          <div><i class="ali-icon-calendar iconfont"></i>4月26日</div>
                          <div class="year">2022年</div>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <div class="recent-img-text">
                  <el-row :gutter="4">
                    <el-col :span="8">
                      <div class="recent-img">
                        <a href="javascript:void(0);">
                          <img src="@/assets/img/equal/9.jpg" alt="" />
                        </a>
                      </div>
                    </el-col>
                    <el-col :span="16">
                      <div class="recent-text">
                        <h4>
                          <a href="javascript:void(0);"> 长袖 </a>
                        </h4>
                        <div class="post-info">
                          <div><i class="ali-icon-calendar iconfont"></i>4月26日</div>
                          <div class="year">2022年</div>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
              <div class="single-sidebar" style="padding: 30px 14px">
                <div class="sidebar-img-text">
                  <div class="sidebar-img">
                    <a href="javascript:void(0);">
                      <img src="@/assets/img/shop/2.jpg" alt="" />
                    </a>
                    <div class="sidebar-text">
                      <h4>限时</h4>
                      <h2>40% 折扣</h2>
                      <h4>帽子</h4>
                      <a href="javascript:void(0);">立即购买</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import bread from '@/components/assembly/breadcrumbs-area.vue'

export default {
  name: 'campus',
  data() {
    return {
      textarea1: ''
    }
  },
  components: {
    bread
  }
}
</script>
<style lang="less" scoped>
.single-sidebar {
  background-color: #fff;
  border: 1px solid #f1f1f1;
  margin-bottom: 30px;
  padding: 30px 30px;
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
.sidebar-text > h4 {
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
.mb-20 {
  margin-bottom: 20px;
}
.recent-text {
  h4 {
    padding-bottom: 8px;
    a {
      font-size: 16px;
      color: #333;
    }
  }
  .post-info {
    font-size: 14px;
    i {
      margin-right: 5px;
    }
    .year {
      margin-top: 10px;
    }
  }
}
.single-sidebar {
  background-color: #fff;
  border: 1px solid #f1f1f1;
  padding: 30px 20px;
  h3 {
    font-size: 16px;
    color: #333;
    display: block;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 15px;
    font-weight: 500;
  }
}
.single-sidebar:last-child {
  margin-bottom: 0px;
}
.tas {
  text-align: center;
}
.miss {
  h4 {
    font-size: 20px;
  }
  span {
    color: #999;
  }
  p {
    padding: 5px 0;
  }
  img {
    width: 100%;
  }
}
.recent-img {
  width: 80px;
  height: 80px;
  img {
    width: 100%;
  }
}
.rowleft {
}
.baten {
  margin: 15px 0 5px;
  display: flex;
  justify-content: space-between;
}
.messge {
  padding: 10px 15px;
  background-color: #ffe4ca;
  margin-bottom: 5px;
}
.titto {
  // height: 140px;
  background-color: #ffe4ca;
  padding: 15px 12px 0;
  h4 {
    height: 35px;
    font-size: 14px;
  }
}
.contianer {
  margin-top: 80px;
  margin-bottom: 80px;
}
</style>
