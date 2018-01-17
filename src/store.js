import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state={
    noLoged:false,
    massages:14
};
const mutations={
  closeNoLogged(state){
    this.state.noLoged=!this.state.noLoged
  }
};
const actions={
  closeNoLogged({commit}){
    commit("closeNoLogged")
  }
};
const getters={


};
export default  new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})



