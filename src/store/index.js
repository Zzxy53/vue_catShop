import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    flag: 0

    // mymymy: 0
  },
  mutations: {
    updateuser(state, arg) {
      state.user = arg
      state.flag = 1
      window.localStorage.setItem(JSON.stringify(state.user.name), JSON.stringify(state.user))
      // console.log(state.flag)
    },
    update(state, arg) {
      console.log(1)
      state.user.arrData = arg
      window.localStorage.setItem(JSON.stringify(state.user.name), JSON.stringify(state.user))
    }
  },
  getters: {
    cartNumber: state => {
      console.log()
      if (state.user.arrData == undefined) {
        return 0
      }
      // console.log(state.user.arrData)
      return state.user.arrData.length
    },
    moneyNumber: state => {
      console.log()
      if (state.user.arrData == undefined) {
        return 0
      }
      // console.log(state.user.arrData)
      let n = 0
      for (let i = 0; i < state.user.arrData.length; i++) {
        n += state.user.arrData[i].new * state.user.arrData[i].num
      }
      return n
    }
  },
  actions: {},
  modules: {}
})
