<template>
  <div class="about">
    <div>我银行里有￥{{money}}</div>
    <div>我钱包里有￥{{wallet}}</div>
    <input type="text" v-model="v">
    <button @click="get">取钱</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // money: this.$store.state.money,
      wallet: 0,
      v:0,
    };
  },
  computed:{
    money(){
      return this.$store.state.money
    }
  },
  methods:{
    get(){
      this.wallet = this.wallet * 1 + this.v * 1
      this.$store.dispatch('set_money',this.money - this.v)
    }
  }
};
</script>
<style lang="scss" scoped>
input {
  border: 1px solid;
}
</style>
