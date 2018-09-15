import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    money: 20000
  },
  getters: {
    income_tax: state => {
      return state.money * 0.1;
    },
    tax51: state => {
      return state.money * 0.2;
    },
    pay: (state, getters) => {
      return state.money - getters.tax51 - getters.income_tax;
    }
  },
  mutations: {
    set_money(state, new_money) {
      state.money = state.money * 1 + new_money * 1;
    }
  }
});
