import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
  loadingState:false,
};

export default new Vuex.Store({
  state,
  mutations: {
    //加载中动画
    UPDATE_LOADINGSTATE (state,bool) {
      state.loadingState = bool;
    }
  }
})
