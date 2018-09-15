import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    money: 20000,
    alipay_money: 0
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
      state.money = state.money * 1 - new_money * 1;
    },
    set_alipay_money(state, new_money) {
      state.alipay_money = state.alipay_money * 1 + new_money * 1;
    }
  },
  actions: {
    // set_alipay_money(context) {
    //   context.commit("set_alipay_money");
    // },
    set_alipay_money({ commit }, new_money) {
      alert("假装提交请求，等待一秒，用于支付宝跟银行交涉，扣款");
      setTimeout(() => {
        commit("set_money", new_money);
        commit("set_alipay_money", new_money);
      }, 1000);
    }
  }
});
