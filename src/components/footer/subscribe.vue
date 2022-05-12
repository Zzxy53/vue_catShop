<template>
  <div class="subscribe-container">
    <div class="container">
      <div class="subscribe-bg ptb-80">
        <div class="row">
          <div class="subscribe-from text-center">
            <h3>订阅我们的宝贝</h3>
            <form class="fromm1">
              <input placeholder="输入您的电子邮箱地址" type="email" />
              <button type="submit">订阅</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.subscribe-container {
  background-color: #f7f7f7;
}
.fromm1 {
  width: 48%;
  position: relative;
  margin-left: 26%;
  input {
    background: #fff none repeat scroll 0 0;
    border: 1px solid #ddd;
    color: #333;
    font-size: 14px;
    height: 45px;
    padding: 1px 30px 1px 20px;
    outline: none;
  }
  button {
    background-color: #333;
    border: medium none;
    color: #fff;
    font-size: 14px;
    height: 45px;
    letter-spacing: 1px;
    padding: 0 20px;
    position: absolute;
    right: 0;
    text-transform: uppercase;
    transition: all 0.3s ease 0s;
  }
}
.fromm1 button:hover {
  background-color: #ddd;
  color: #333;
}
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 15px;
  padding-right: 15px;
}
.ptb-80 {
  padding: 80px 0;
}
.col-md-offset-3 {
  margin-left: 25%;
  width: 50%;
  float: left;
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
}
.text-center {
  text-align: center;
}
.subscribe-from.text-center > h3 {
  color: #333;
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 35px;
  text-transform: capitalize;
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
.subscribe-from form {
  display: grid;
}
</style>
