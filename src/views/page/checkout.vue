<template>
  <div class="checkout-container">
    <breadcrumbs title="订单" text="订单"></breadcrumbs>
    <div class="container w">
      <el-row :gutter="20">
        <el-col :span="14">
          <div class="bgh">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item>
                <h1>详细地址</h1>
              </el-form-item>
              <div class="bant">
                <el-form-item label="收货人*">
                  <el-input v-model="form.name" placeholder="昵称"></el-input>
                </el-form-item>
              </div>
              <el-form-item label="国家*">
                <el-select v-model="value" placeholder="请选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="省份">
                <el-input v-model="form.province" placeholder="省份"></el-input>
              </el-form-item>
              <el-form-item label="城市*">
                <el-input v-model="form.city" placeholder="城市"></el-input>
              </el-form-item>
              <el-form-item label="详细地址*">
                <el-input v-model="form.detailed" placeholder="请填写详细地址"></el-input>
              </el-form-item>
              <div class="fx">
                <div class="banttt">
                  <el-form-item label="联系方式*">
                    <el-input v-model="form.phone" placeholder="联系方式"></el-input>
                  </el-form-item>
                </div>
                <div class="banttt">
                  <el-form-item label="邮政编码*">
                    <el-input v-model="form.ems" placeholder="邮政编码"></el-input>
                  </el-form-item>
                </div>
              </div>
              <el-form-item>
                <el-checkbox label="创建地址" name="type"></el-checkbox>
              </el-form-item>
              <el-form-item label="订单备注">
                <el-input type="textarea" v-model="form.desc" :autosize="{ minRows: 11, maxRows: 20 }"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="container-right bgh">
            <h1 class="dingdan">您的订单</h1>
            <div class="row mb-20">
              <div class="ulli" v-for="item in userList" :key="item.id">
                <div class="fx jues">
                  <span
                    >{{ item.name }} <i class="smo">X{{ item.num }}</i></span
                  >
                  <span>￥{{ item.new * item.num }}</span>
                </div>
              </div>
              <div class="fx jues">
                <strong class="zxc">总计</strong>
                <span class="zxc">￥{{ this.number }}</span>
              </div>
            </div>
            <h1 class="dingdan">支付方式</h1>
            <div>
              <el-collapse v-model="activeName" accordion>
                <!-- <div class="pd20"> -->
                <el-collapse-item title="银行转账" name="1">
                  <div class="pd">将您的款项直接存入我们的银行帐户。请使用您的订单ID作为付款参考。你的订单要到我们帐户结清后才能发运。.</div>
                </el-collapse-item>
                <el-collapse-item title="微信支付" name="2">
                  <div class="pd">使用微信支付</div>
                </el-collapse-item>
                <el-collapse-item title="支付宝" name="3">
                  <div class="pd">支付宝支付</div>
                </el-collapse-item>
                <!-- </div> -->
              </el-collapse>
            </div>
            <el-button class="downdan">下单</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import breadcrumbs from '@/components/assembly/breadcrumbs-area.vue'

export default {
  components: {
    breadcrumbs
  },
  data() {
    return {
      form: {
        name: '',
        city: '',
        province: '',
        detailed: '',
        delivery: false,
        phone: '',
        ems: '',
        desc: ''
      },
      options: [
        {
          value: '选项1',
          label: '中国'
        },
        {
          value: '选项2',
          label: '俄罗斯'
        },
        {
          value: '选项3',
          label: '英国'
        },
        {
          value: '选项4',
          label: '阿富汗'
        },
        {
          value: '选项5',
          label: '伊拉克'
        }
      ],
      value: '',
      // userList: [],
      userList: this.$store.state.user.arrData == undefined ? [] : this.$store.state.user.arrData,
      number: 0,
      activeName: '1'
    }
  },
  created() {
    // this.$nextTick(() => {
    function f(params) {}
    // })
  },
  mounted() {
    let a = 0
    for (let i = 0; i < this.userList.length; i++) {
      a += this.userList[i].new * this.userList[i].num
    }
    this.number = a
    console.log(this.number)
  }
}
</script>

<style lang="less" scoped>
/deep/.el-collapse-item__header {
  padding: 0 20px;
}
/deep/.downdan {
  width: 100%;
  margin-top: 20px;
  background-color: #222;
  color: #fff;
  border-radius: 5px;
}
.pd {
  padding: 0 20px;
}
.mb-20 {
  margin-bottom: 20px;
}
.smo {
  font-size: 12px;
}
.jues {
  height: 40px;
  border-bottom: 1px solid #d2d2d2;
  line-height: 40px;
  .zxc {
    font-size: 18px;
  }
  span {
    font-size: 16px;
  }
}
.fx {
  display: flex;
  justify-content: space-between;
}
.bant {
  width: 44%;
}
.container {
  margin: 100px auto;
}
.bgh {
  padding: 30px 30px;
  background-color: #f6f6f6;
}
.row {
  background-color: #fff;
  border: 1px solid #d2d2d2;
  padding: 30px;
}
</style>
