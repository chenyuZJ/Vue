<template>
  <div>
    <van-nav-bar
        title="我的收藏"
        left-text="返回"
        left-arrow
        @click-left="$router.go(-1)"
      >
    </van-nav-bar>
    <div v-for="(item,index) in lists2" :key="index">
      <van-card
        :price="item.price"
        desc="描述信息"
        :title="item.name"
        :thumb="item.imgs"
      ></van-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists2: []
    };
  },
  created() {
    this.lists2 = this.$store.state.cart.lists2;
  }
};
</script>

<style lang="scss" scoped>
</style>