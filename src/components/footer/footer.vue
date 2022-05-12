<template>
  <div class="footer_container">
    <div class="container">
      <div class="footer-top">
        <el-row type="flex" class="tbb">
          <el-col :span="8">
            <div class="widget-info">
              <p>
                <i class="el-icon-location-outline"></i>
                <span>数学与计算机</span><br />
                <span class="sclool">武夷学院</span>
              </p>
              <p>
                <i class="el-icon-message"></i>
                <span>1445759432@qq.com</span>
              </p>
              <p>
                <i class="el-icon-phone"></i>
                <span>+1000 8620 456</span>
              </p>
            </div>
            <div class="footer-social">
              <ul>
                <li>
                  <a href="#"><i class="ali-icon-facebook iconfont"></i></a>
                </li>
                <li>
                  <a href="#"><i class="ali-icon-twitter iconfont"></i></a>
                </li>
                <li>
                  <a href="#"><i class="ali-icon-googleplus iconfont"></i></a>
                </li>
                <li>
                  <a href="#"><i class="ali-icon-instagram iconfont"></i></a>
                </li>
                <li>
                  <a href="#"><i class="ali-icon-pinterest iconfont"></i></a>
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :span="4" class="footer-ul">
            <div class="footer-title">
              <h3>类别</h3>
            </div>
            <ul>
              <li><a href="javascript:void(0);">日常用品</a></li>
              <li><a href="javascript:void(0);">代步工具</a></li>
              <li><a href="javascript:void(0);">体育运动</a></li>
              <li><a href="javascript:void(0);">衣裤鞋帽</a></li>
              <li><a href="javascript:void(0);">书籍教材</a></li>
              <li><a href="javascript:void(0);">手工设计</a></li>
            </ul>
          </el-col>
          <el-col :span="4" class="footer-ul">
            <div class="footer-title">
              <h3>服务</h3>
            </div>
            <ul>
              <li><a href="javascript:void(0);">关于我们</a></li>
              <li><a href="javascript:void(0);">退货</a></li>
              <li><a href="javascript:void(0);">路线</a></li>
              <li><a href="javascript:void(0);">快递</a></li>
              <li><a href="javascript:void(0);">联系我们</a></li>
              <li><a href="javascript:void(0);">退货</a></li>
            </ul>
          </el-col>
          <el-col :span="4" class="footer-ul">
            <div class="footer-title">
              <h3>快递链接</h3>
            </div>
            <ul>
              <li><a href="javascript:void(0);">登录</a></li>
              <li><a href="javascript:void(0);">注册</a></li>
              <li><a href="javascript:void(0);">收藏</a></li>
              <li><a href="javascript:void(0);">我的购物车</a></li>
              <li><a href="javascript:void(0);">我的订单</a></li>
              <li><a href="javascript:void(0);">注册</a></li>
            </ul>
          </el-col>
          <el-col :span="4" class="footer-ul">
            <div class="footer-title">
              <h3>公司</h3>
            </div>
            <ul>
              <li><a href="javascript:void(0);">退货政策</a></li>
              <li><a href="javascript:void(0);">隐私政策</a></li>
              <li><a href="javascript:void(0);">产品担保</a></li>
              <li><a href="javascript:void(0);">论坛</a></li>
              <li><a href="javascript:void(0);">订单跟踪</a></li>
              <li><a href="javascript:void(0);">隐私政策</a></li>
            </ul>
          </el-col>
        </el-row>
      </div>
      <div class="footer-bottom">
        <div class="row">
          <div class="copyright">
            <p>版权 © 2022届吴星云。版权所有</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'footer_container'
}
</script>
<style lang="less" scoped>
.footer-bottom {
  padding: 20px 0;
  .row {
    margin-left: 15px;
    margin-right: 15px;
    .copyright {
      width: 50%;
    }
  }
}
.footer-top {
  border-bottom: 1px solid #ddd;
  padding-bottom: 30px;
}
.footer_container {
  margin-top: 40px;
  width: 100%;
}
.container {
  padding: 0 20px;
}
.widget-info {
  width: 100%;
  p {
    padding: 10px;
    i {
      font-size: 18px;
      margin: 5px;
    }
    .sclool {
      margin-left: 35px;
    }
    span {
      color: #666;
      font-size: 14px;
    }
  }
}
.footer-title h3 {
  color: #333;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 23px;
  width: 100%;
}
.footer-social {
  li {
    float: left;
    margin: 10px 0 0 15px;
    a {
      color: #888;
    }
  }
}
.footer-ul {
  ul {
    li {
      margin-bottom: 10px;
      a:hover {
        padding-left: 5px;
        transition: all 0.3s ease-out 0s;
      }
    }
  }
}
</style>
