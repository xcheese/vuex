import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    money: 100
  },
  mutations: {
    set_money(state, new_money) {
      state.money = new_money;
    }
  },
  actions: {
    set_money({ commit }, new_money) {
      commit("set_money", new_money);
    }
  }
});
