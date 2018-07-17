import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ishidden: false
  },
  actions: {
    changeHidden({commit},payload) {
      commit('changeh',payload)
    }
  },
  mutations: {
    changeh(state,payload){
      state.ishidden = payload
    }
  }
})