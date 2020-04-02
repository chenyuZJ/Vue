<template>
  <div>
    <van-tabbar v-model="active" id="bom" v-show="$store.state.show" :route="routerboo">
      <van-tabbar-item to="/home" class="el-icon-s-home">首页</van-tabbar-item>
      <van-tabbar-item to="/classify/tushu" class="el-icon-s-unfold">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" class="el-icon-shopping-cart-2">购物车</van-tabbar-item>
      <van-tabbar-item to="/mydd" class="el-icon-s-custom">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      routerboo:true
    };
  }
};
</script>

<style lang="scss" scoped>
#bom {
  height: 1.1875rem;
}
#bom .van-tabbar-item {
  font-size: .3125rem;
}
</style>