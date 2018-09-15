<template>
  <div class="about">
    <div>我银行里有￥{{money}}</div>
    <div>
      取款机：
      <input type="text" v-model="v">
      <button @click="get">取钱</button>
    </div>

    <div>我钱包里有￥{{cash}}</div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      // money: this.$store.state.money,
      cash: 0,
      v: 0
    };
  },
  computed: {
    money() {
      return this.$store.state.money;
    }
  },
  methods: {
    get() {
      this.cash += this.v * 1;
      this.$store.commit("get_money", this.v);
    }
  }
};
</script>
<style lang="scss" scoped>
input {
  border: 1px solid;
}
</style>
