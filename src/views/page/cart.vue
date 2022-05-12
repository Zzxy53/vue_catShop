<template>
  <div class="cart-container">
    <breadcrumbs title="购物车" text="购物车"></breadcrumbs>
    <div class="container w mg-50">
      <div class="row mgt-50">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="图片" prop="id" align="center">
            <template slot-scope="scope">
              <el-avatar shape="square" :size="50" :src="require('@/assets/img/equal/' + scope.row.id + '.jpg')"></el-avatar>
            </template>
          </el-table-column>
          <el-table-column label="名称" prop="name" align="center"></el-table-column>
          <el-table-column label="单价" prop="new" align="center"> </el-table-column>
          <el-table-column label="数量" align="center">
            <template slot-scope="scope">
              <el-input-number v-model="scope.row.num" @change="hangchange(scope, scope.$index)" :min="1" :max="100"></el-input-number>
            </template>
          </el-table-column>
          <el-table-column label="总价" align="center">
            <template slot-scope="scope"> ￥<span v-text="scope.row.new * scope.row.num"></span> </template>
          </el-table-column>

          <el-table-column align="center">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="row mgt-50">
        <el-row :gutter="40">
          <el-col :span="14">
            <div class="card">
              <div class="rrrr">
                <el-tabs tab-position="left" style="height: 200px">
                  <el-tab-pane label="输入地址">
                    <div class="conrow">
                      <label style="font-size: 16px">省份：</label>
                      <el-select v-model="value" placeholder="请选择" size="medium">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                      </el-select>
                    </div>
                    <div class="conrow">
                      <label style="font-size: 16px">城市：</label>
                      <el-select v-model="value" placeholder="请选择" size="medium">
                        <el-option v-for="item in optionsss" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                      </el-select>
                    </div>
                    <div class="conrow">
                      <label style="font-size: 16px">省份：</label>
                      <el-input v-model="input" placeholder="邮政编码"></el-input>
                    </div>
                    <div class="conrow sssssss">
                      <button class="tton" type="info">确认</button>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="优惠券">
                    <div class="conrow">
                      <label style="font-size: 16px">优惠券：</label>
                      <el-input v-model="input" placeholder="优惠码"></el-input>
                    </div>
                    <div class="conrow sssssss">
                      <button class="tton" type="info">确认</button>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="card">
              <h2>共计</h2>
              <p>￥{{ mymymy }}.00</p>
            </div>
            <div class="bbtn">
              <router-link to="checkout">
                <button class="tton">确认订单</button>
              </router-link>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import bus from '@/components/eventBus.js'
import breadcrumbs from '@/components/assembly/breadcrumbs-area.vue'
import golbal from '@/config/golbal.vue'

export default {
  components: {
    breadcrumbs
  },
  name: 'cart-container',
  data() {
    return {
      user: this.$store.state.user,
      tableData: [],
      tableArr: this.$store.state.user.arrData,
      sunMoney: 12,
      multipleSelection: golbal.shopList,
      input: '',
      options: [
        {
          value: 1,
          label: '福建'
        },
        {
          value: 2,
          label: '浙江'
        },
        {
          value: 3,
          label: '湖南'
        },
        {
          value: 4,
          label: '北京'
        },
        {
          value: 5,
          label: '广东'
        }
      ],
      optionsss: [
        {
          value: 1,
          label: '福州'
        },
        {
          value: 2,
          label: '厦门'
        },
        {
          value: 3,
          label: '泉州'
        },
        {
          value: 4,
          label: '南平'
        },
        {
          value: 5,
          label: '宁德'
        }
      ],
      value: ''
    }
  },
  watch: {
    // multipleSelection: function () {
    //   let arr = this.multipleSelection
    //   this.mymymy = 0
    //   return this.mymymy
    // }
  },
  computed: {
    mymymy: function f() {
      if (this.$store.state.flag == 1) {
        let mymymy = 0
        for (let i = 0; i < this.tableData.length; i++) {
          mymymy += this.tableData[i].num * this.tableData[i].new
        }
        return mymymy
      }
      return 0
    }
    // tableData: function () {
    //   let that = this
    //   for (let i = 0; i < that.tableArr.length; i++) {
    //     return this.multipleSelection.filter(function (item) {
    //       return item.id == that.tableArr[i].id
    //     })
    //   }
    // }
  },
  mounted() {
    this.$nextTick(() => {
      this.netDem()
    })
  },

  methods: {
    //删除按钮
    handleDelete(index, row) {
      console.log(index, row)
      this.tableData.splice(index, 1)
      this.$store.commit('update', this.tableData)
    },
    //计数器
    hangchange(val, index) {
      this.$store.commit('update', this.tableData)
      console.log(val)
      // this.user.arr.push(value.row.id)
    },
    netDem() {
      let that = this
      if (this.$store.state.flag == 1) {
        for (let i = 0; i < that.tableArr.length; i++) {
          const elei = that.tableArr[i]
          for (let j = 0; j < that.multipleSelection.length; j++) {
            const elej = that.multipleSelection[j]
            if (elei.id == elej.id) {
              elej.num = elei.num
              that.tableData.push(elej)
            }
          }
        }
      }
    },
    synchro() {}
  }
}
</script>
<style lang="less" scoped>
.mg-50 {
  margin-bottom: 50px;
}
.bbtn {
  margin-top: 50px;
  float: right;
  width: 20%;
  height: 40px;
}
.tton {
  display: block;
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: #222;
  border: 0;
}
.tton:hover {
  background-color: #666;
  transition: all 0.3s ease-out 0s;
}
.sssssss {
  width: 100px;
  height: 50px;
  margin-left: 102px;
}
.el-input {
  width: 75% !important;
}
.conrow {
  padding: 0 10px 20px;
}
.container {
  padding: 40px 0;
}
.mgt-50 {
  margin-top: 50px;
}
.rrrr {
  padding: 40px 0;
}
.card {
  display: flex;
  // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  //
  //
  padding: 0 20px;
  border: 1px solid #ddd;
  justify-content: space-between;
  h2 {
    font-weight: 700;
    height: 60px;
    line-height: 60px;
  }
  p {
    // display: inline-block;
    line-height: 60px;
    font-size: 15px;
    color: #222;
    font-weight: 700;
  }
}
.el-tabs__active-bar {
  width: 0 !important;
  height: 0 !important;
}
</style>
