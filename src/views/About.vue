<template>
  <div class="about">
    <div>月薪税前￥{{money}}</div>
    <div style="color:#999">个税￥{{income_tax}}</div>
    <div style="color:#999">五险一金￥{{tax51}}</div>
    <div>月薪税后￥{{pay}}</div>
    <div class="alipay-box">
      <div>
        <img src="https://img.alicdn.com/tps/TB17ghmIFXXXXXAXFXXXXXXXXXX.png" alt="">
        <span>余额宝:￥{{alipay_money}}</span>
      </div>
      <div>
        <input type="text" v-model="v">
        <button @click="get_money">余额宝充值</button>
      </div>
    </div>
    
    <!-- <div>
      <input type="text" v-model="v">
      <button @click="get">升值加薪</button>
    </div> -->
    <!-- <div>我钱包里有￥{{cash}}</div> -->
    
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      cash: 0,
      v: 0
    };
  },
  computed: {
    ...mapState(["money", "alipay_money"]),
    ...mapGetters(["income_tax", "tax51", "pay"])
    // money() {
    //   return this.$store.state.money;
    // },
    // income_tax() {
    //   return this.$store.getters.income_tax;
    // },
    // tax51() {
    //   return this.$store.getters.tax51;
    // },
    // pay() {
    //   return this.$store.getters.pay;
    // }
  },
  methods: {
    get_money() {
      this.$store.dispatch("set_alipay_money", this.v);
    }
  }
};
</script>
<style lang="scss" scoped>
input {
  border: 1px solid;
}
.alipay-box {
  border: 1px solid rgb(55, 160, 233);
}
</style>
