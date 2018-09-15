import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    money: 20000,
    pay: 0,
    alipay_money: 0
  },
  getters: {
    income_tax: state => {
      return state.money * 0.1;
    },
    tax51: state => {
      return state.money * 0.2;
    }
  },
  mutations: {
    set_money(state, new_money) {
      state.money -= new_money * 1;
    },
    set_pay(state, new_money) {
      console.log(123);
      state.pay += new_money * 1;
    },
    set_alipay_money(state, new_money) {
      state.alipay_money += new_money * 1;
    }
  },
  actions: {
    set_pay(context, new_money) {
      console.log(context);
      // commit("set_pay", new_money);
      // commit("set_money", new_money);
    },
    set_alipay_money({ commit }, new_money) {
      alert("假装提交请求，等待一秒，用于支付宝跟银行交涉，扣款");
      setTimeout(() => {
        commit("set_money", new_money);
        commit("set_alipay_money", new_money);
      }, 1000);
    }
  }
});
