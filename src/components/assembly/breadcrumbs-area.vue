<template>
  <div class="breadcrumbs-container">
    <div class="container">
      <div class="breadcrumbs">
        <h2 class="breadcrumb-title">{{ title }}</h2>
        <div class="active">
          <div class="rro">
            <a href="javascript:void(0);"><router-link to="/">回到主页</router-link></a>
            <span class="pie"></span>
            <span class="lgi">{{ text }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>
<script>
export default {
  name: 'breadcrumbs-consition',
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>
<style scoped lang="less">
.active {
  padding-right: 10px;
  a {
    color: #fff;
    font-size: 16px;
    font-weight: 600;
  }
  .lgi {
    color: #fff;
    margin-left: 26px;
    font-size: 14px;
  }
}
.pie {
  width: 1.5px;
  height: 15px;
  transform: rotate(33deg);
  background-color: #fff;
  font-size: 8px;
  position: absolute;
  margin-left: 10px;
  margin-top: 4px;
}
.breadcrumbs-container {
  width: 100%;
  background: rgba(0, 0, 0, 0) repeat scroll center center / cover;
  position: relative;
  background-image: url('../../assets/img/bg/2.jpg');
  padding: 100px 0;
  .container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
}
.breadcrumbs {
  position: relative;
  z-index: 99;
  text-align: center;
  h2.breadcrumb-title {
    color: #fff;
    display: inline-block;
    font-size: 35px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
}
</style>
