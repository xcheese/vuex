import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    money: 20000
  },
  mutations: {
    get_money(state, cash) {
      state.money = state.money - cash;
    }
  }
});
