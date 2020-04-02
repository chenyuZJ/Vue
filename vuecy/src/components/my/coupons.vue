<template>
  <div class="coupons">
    <van-nav-bar
      title="优惠券"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <van-coupon-cell :coupons="this.$store.state.coupon.coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
    <!-- 优惠券列表 -->
    <van-popup v-model="showList" round position="bottom" style="height: 90%; padding-top: 4px;">
      <van-coupon-list
        :coupons="this.$store.state.coupon.coupons"
        :chosen-coupon="chosenCoupon"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showList: null,
      chosenCoupon: -1,
    };
  },
  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange() {
      this.$store.state.coupon.coupons.push(this.$store.state.coupon.coupon);
    }
  }
};
</script>

<style lang="scss" scoped>
.coupons{
    .van-nav-bar{
        margin-bottom: 10px;
    }
}
</style>