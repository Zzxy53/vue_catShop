<template>
  <div class="App">
    <div class="w" id="top">
      <Nav></Nav>
    </div>
    <div class="impotion">
      <router-view></router-view>
      <div class="clear"></div>
    </div>
    <div class="footer">
      <Subscribe></Subscribe>
      <div class="w">
        <Footer></Footer>
      </div>
    </div>
    <a ref="ttop" @click="returnTop" id="scrollUp" style="position: fixed; z-index: 9999999; display: none">
      <i class="el-icon-arrow-up"></i>
    </a>
  </div>
</template>

<script>
import Footer from '@/components/footer/footer.vue'
import SingleShop from '@/components/Shopping-Mall/single-shop.vue'
import Nav from '@/components/shopping_nav/shoppong_nav.vue'
import Subscribe from '@/components/footer/subscribe.vue'
import cart from '@/views/page/cart.vue'

export default {
  components: {
    Footer,
    SingleShop,
    Nav,
    Subscribe,
    cart
  },
  data() {
    return {
      scrollTop: 0
    }
  },
  methods: {
    backTop() {
      this.scrollTop = document.documentElement.scrollTop
      console.log(this.scrollTop)
      if (this.scrollTop > 300) {
        this.$refs.ttop.style.display = 'block'
      } else {
        this.$refs.ttop.style.display = 'none'
      }
    },
    returnTop() {
      var timer = setInterval(function () {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop
        let ispeed = Math.floor(-osTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
        this.isTop = true
        if (osTop === 0) {
          clearInterval(timer)
        }
      }, 30)
    },
    sendData() {
      console.log('使用了根组件的函数')
    },
    //滚动条防抖
    debounce(fn, delay) {
      let timer = false
      return function () {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(fn, delay)
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.debounce(this.backTop, 100))
  }
}
</script>
<style lang="less">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  font-family: 'Roboto', sans-serif !important;
}
.w {
  margin: 0 auto;
  width: 1200px;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
li {
  font-size: 14px;
  list-style: none;
  color: #686868;
}
a {
  color: #686868;
  text-decoration: none;
  cursor: pointer;
}
a:hover {
  outline: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Montserrat', sans-serif;
  font-weight: normal;
  color: #333;
  margin-top: 0px;
  font-style: normal;
  font-weight: 400;
}
.clear {
  clear: both;
}
.zhuc {
  margin: 100px auto;
  width: 560px;
  height: 460px;
  border: 1px solid pink;
}
.el-tabs__item {
  color: #222 !important;
}
// .el-tabs__active-bar {
//   background: black !important;
//   height: 4px !important;
//   width: 100px !important;
//   margin-left: 86px !important;
// }
img {
  vertical-align: middle;
}
p {
  font-size: 14px;
  font-weight: normal;
  line-height: 24px;
  color: #666666;
  margin-bottom: 15px;
}
.owl-carousel {
  display: none;
  width: 100%;
  z-index: 1;
  display: block;
}
.owl-carousel,
.owl-carousel .owl-item {
  -webkit-tap-highlight-color: transparent;
  position: relative;
}
.footer {
  overflow: hidden;
}
.no-js .owl-carousel,
.owl-carousel.owl-loaded {
  display: block;
}
.ptb-100 {
  padding: 100px 0;
}
a#scrollUp {
  background: #333 none repeat scroll 0 0;
  bottom: 54px;
  color: #fff;
  font-size: 23px;
  height: 40px;
  line-height: 34px;
  position: absolute;
  right: 32px;
  text-align: center;
  width: 40px;
}
.el-slider__bar {
  background-color: black !important;
}
.el-slider__button {
  border-color: black !important;
}
h3 {
  font-size: 28px;
}

.bounceInUp1 {
  animation: bounceInUp1 1000ms ease-in-out;
}
@keyframes bounceInUp1 {
  0%,
  60%,
  75%,
  90%,
  100% {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }
  30% {
    // opacity: 1;
  }
  60% {
    // opacity: 0;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
    // color: fuchsia;
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes imgout {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
}
@keyframes liguodu {
  100% {
    width: 40px;
  }
}
.liguodu {
  animation: liguodu 1s ease-in;
}

@keyframes imgin {
  0% {
    opacity: 0.6;
    // transform: rotate(360deg);
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}

.zizhuan {
  animation: zizhuan 5s infinite;
}
@keyframes zizhuan {
  0% {
    -webkit-transform: perspective(700px) translateZ(0) rotateY(0) scale(1);
    -ms-transform: perspective(700px) translateZ(0) rotateY(0) scale(1);
    transform: perspective(700px) translateZ(0) rotateY(0) scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  40% {
    -webkit-transform: perspective(700px) translateZ(150px) rotateY(170deg) scale(1);
    -ms-transform: perspective(700px) translateZ(150px) rotateY(170deg) scale(1);
    transform: perspective(700px) translateZ(150px) rotateY(170deg) scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  50% {
    -webkit-transform: perspective(700px) translateZ(150px) rotateY(190deg) scale(1);
    -ms-transform: perspective(700px) translateZ(150px) rotateY(190deg) scale(1);
    transform: perspective(700px) translateZ(150px) rotateY(190deg) scale(1);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  80% {
    -webkit-transform: perspective(700px) translateZ(0) rotateY(360deg) scale(0.95);
    -ms-transform: perspective(700px) translateZ(0) rotateY(360deg) scale(0.95);
    transform: perspective(700px) translateZ(0) rotateY(360deg) scale(0.95);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: perspective(700px) translateZ(0) rotateY(360deg) scale(1);
    -ms-transform: perspective(700px) translateZ(0) rotateY(360deg) scale(1);
    transform: perspective(700px) translateZ(0) rotateY(360deg) scale(1);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}
</style>
