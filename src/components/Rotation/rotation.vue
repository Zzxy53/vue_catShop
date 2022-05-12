<template>
  <div class="rotation_container">
    <div class="block">
      <!-- <el-carousel :height="imgheight" class="rota_see" :autoplay="false">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <div class="tit-container">
            <h1>{{ item.title }}</h1>
            <h3>{{ item.text }}</h3>
          </div>
          <img ref="imgh" @load="pps" :src="item.imgURL" alt="" />
        </el-carousel-item>
      </el-carousel> -->
      <div class="rotati">
        <img :class="imgout" :src="this.imgList[this.num].imgURL" alt="" />
        <div class="btnleft" @click="leftIn"><i class="el-icon-arrow-left"></i></div>
        <div class="btnright" @click="rightIn">
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <!-- <div class="lunboli">
        <ul @mousemove="clearset" @mouseleave="beginset">
          <li v-for="(item, index) in imgList" :key="index" :class="{ lianimoclass: index == num }" @click="lunboli(index)"></li>
        </ul>
      </div> -->
      <div class="tit-container">
        <h1 :class="isactive">{{ this.imgList[this.num].title }}</h1>
        <p :class="isP">
          {{ this.imgList[this.num].text }}
        </p>
      </div>
      <div class="superA">
        <router-link to="shopPage">
          <a href="#">立即购物</a>
        </router-link>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>
<script>
export default {
  //width:100%
  name: 'rotation_container',

  data() {
    return {
      imgList: [
        {
          id: 1,
          imgURL: require('@/assets/slider/1.jpg'),
          title: '时尚爆款推荐',
          text: '2022年最新款'
        },
        { id: 2, imgURL: require('@/assets/slider/2.jpg'), title: '惊艳的藏品', text: '最高享受40%折扣' },
        { id: 3, imgURL: require('@/assets/slider/4.png'), title: '最受欢迎的时尚藏品', text: '2022年最新款' }
      ],
      imgout: '',
      settime: null,
      isactive: 'bounceInUp1',
      isP: 'animated bounceInLeft',
      num: 0,
      hhh: 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.settime = setInterval(() => {
        this.rightIn()
      }, 5000)
    })
  },
  methods: {
    pps() {},
    leftIn() {
      setTimeout(() => {
        this.isactive = 'animated bounceOutUp'
        this.isP = 'animated bounceOutRight'
      }, 0)
      setTimeout(() => {
        if (this.num == 0) {
          this.num = this.imgList.length - 1
        } else this.num--
        this.isactive = ''
        this.isactive = 'bounceInUp1'
        this.isP = ''
        this.isP = 'animated bounceInLeft'
      }, 1000)
    },
    rightIn() {
      this.clearset(this.settime)
      setTimeout(() => {
        this.isactive = 'animated bounceOutUp'
        this.isP = 'animated bounceOutRight'
        this.imgout = 'imgout'
        // this.lianimoclass = 'lianimoclass'
      }, 0)
      setTimeout(() => {
        if (this.num == this.imgList.length - 1) {
          this.num = 0
        } else this.num++
        this.imgout = 'imgin'
        this.isactive = ''
        this.isactive = 'bounceInUp1'
        this.isP = ''
        this.isP = 'animated bounceInLeft'
      }, 1000)
      this.beginset()
    },
    lunboli(index) {
      setTimeout(() => {
        this.isactive = 'animated bounceOutUp'
        this.isP = 'animated bounceOutRight'
        this.imgout = 'imgout'
      }, 0)
      setTimeout(() => {
        this.num = index
        this.imgout = 'imgin'
        this.isactive = ''
        this.isactive = 'bounceInUp1'
        this.isP = ''
        this.isP = 'animated bounceInLeft'
      }, 1000)
    },
    clearset() {
      console.log('鼠标移入')
      clearInterval(this.settime)
    },
    beginset() {
      console.log('鼠标移出')
      this.settime = setInterval(() => {
        this.rightIn()
      }, 5000)
    }
  }
}
</script>
<style lang="less" scoped>
.block {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .rotati {
    width: 100%;
    // height: 748px;
    // height: 100vh;
    position: relative;
    .btnleft,
    .btnright {
      display: none;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .btnright {
      right: 20px;
    }
    .btnleft {
      left: 20px;
    }
    i {
      color: #c7c8ca;
      font-size: 40px;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .imgout {
      animation: imgout 2000ms ease-in-out;
    }
    .imgin {
      animation: imgin 2000ms ease-in-out;
    }
  }
  .lunboli {
    display: none;
    position: absolute;
    z-index: 99;
    left: 50%;
    bottom: 7%;
    transform: translateX(-50%);
    ul {
      text-align: center;
      align-items: center;

      li {
        float: left;
        width: 15px;
        height: 10px;
        border-radius: 20px;
        background-color: #c7c8ca;
        margin: 0 20px;
        cursor: pointer;
      }
      /deep/.liclass {
        background-color: hotpink !important;
      }
      @keyframes lianimoclass {
        100% {
          width: 40px;
        }
      }
      .lianimoclass {
        width: 30px;
        transition: all 0.4s;
        // animation: lianimoclass 0.5s;
      }
    }
  }
}
.block:hover {
  .btnleft,
  .btnright,
  .lunboli {
    display: block;
  }
}
.rota_see {
  padding: 10px;
  width: 100%;
  img {
    width: 100%;
  }
}
.tit-container {
  position: absolute;
  left: 15%;
  top: 33%;
  h1,
  h3 {
    margin: 10px 0;
    font-size: 63px;
    color: #222;
  }
  p {
    font-size: 35px;
    letter-spacing: 4px;
    font-weight: normal;
  }
}
.superA {
  position: absolute;
  z-index: 999;
  width: 96px;
  height: 40px;
  background-color: #222;
  top: 60%;
  left: 20%;
  a {
    font-size: 14px;
    display: block;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
  }
}
</style>
