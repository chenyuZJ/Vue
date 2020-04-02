<template>
  <div class="coupons">
    <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
    <!-- 优惠券列表 -->
    <van-popup v-model="showList" round position="bottom" style="height: 90%; padding-top: 4px;">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
  </div>
</template>

<script>
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元"
};
const coupon2 = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 100,
  name: "优惠券名称",
  startAt: 1489104001,
  endAt: 1514592001,
  valueDesc: "1",
  unitDesc: "元"
};
export default {
  data() {
    return {
      con: "",
      showList: null,
      chosenCoupon: -1,
      coupons: [coupon, coupon2],
      disabledCoupons: [coupon, coupon2]
    };
  },
  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
      this.con = this.coupons[index].value;
      console.log(this.con);
      this.$emit("fangfa",this.con)
    },
    onExchange() {
      this.coupons.push(coupon);
    }
  }
};
</script>

<style lang="scss" scoped>
.coupons {
  .van-nav-bar {
    margin-bottom: 10px;
  }
}
</style>