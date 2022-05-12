<template>
  <div class="pane-container">
    <div class="tab-pane">
      <div class="row">
        <div class="shop-item fl" v-for="item in shopList" :key="item.id">
          <ShopMall :titles="item.title" :moneys="item.new" :ShopTitles="item.name" :imgNubs="item.id"></ShopMall>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ShopMall from '@/components/Shopping-Mall/single-shop.vue'
import golbal from '@/config/golbal.vue'

export default {
  components: {
    ShopMall
  },
  name: 'pane-container',

  data() {
    return {
      shopList: golbal.shopList.filter(function (item, i) {
        return i < 12
      })
    }
  },

  mounted() {},

  methods: {}
}
</script>
<style lang="less" scoped>
.pane-container {
  width: 100%;
   .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}

.shop-item {
  margin-bottom: 20px;
}
// .shop-item:nth-child(3n) {
//   margin-right: 0;
// }
</style>
