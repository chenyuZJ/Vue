<template>
  <div>
    <van-nav-bar :title="$route.name" left-text="返回" left-arrow @click-left="orderpay" />
    <!-- 地址 -->
    <van-contact-card type="edit" :name="name" :tel="tel" @click="add" />

    <!-- 商品列表 -->
    <div v-for="(item,index) in lists" :key="index">
      <van-card
        :num="item.num"
        :price="item.price"
        desc="描述信息"
        :title="item.name"
        :thumb="item.imgs"
      />
    </div>
    <div class="coupons">
      <van-coupon-cell :coupons="$store.state.coupon.coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
      <!-- 优惠券列表 -->
      <van-popup v-model="showList" round position="bottom" style="height: 90%; padding-top: 4px;">
        <van-coupon-list
          :coupons="$store.state.coupon.coupons"
          :chosen-coupon="chosenCoupon"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
    </div>
    <!-- 提交订单 -->
    <van-submit-bar :price="sum*100" button-text="支付" @submit="onsubmit" />
  </div>
</template>

<script>

import { Notify } from "vant";
import { Toast } from "vant";
export default {
  data: function() {
    return {
      con: 0,
      showList: null,
      chosenCoupon: -1,
      // disabledCoupons: [coupon, coupon2],
      name: "",
      tel: "",
      totals: 0
    };
  },
  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
      this.con = this.$store.state.coupon.coupons[index].valueDesc;
      // console.log(this.chosenCoupon);
    },
    onExchange() {
      this.$store.state.coupon.coupons.push(this.$store.state.coupon.coupon);
    },
    add() {
      this.$router.push("/address");
    },
    onsubmit() {
      Toast("已支付");
      let order = {
        orderId: new Date().getTime(),
        address: this.address,
        goodsList: this.lists,
        type: 2,
        con: this.con
      };
      this.$store.commit("orderlist/add", order);
      this.$store.state.cart.lists = [];
      this.$store.state.cart.num = 0;
      this.$store.state.coupon.coupons.splice(this.chosenCoupon,1)
      this.$router.push("/orderlist/orderAll");
    },
    orderpay() {
      Notify("处理订单未支付");
      let order = {
        orderId: new Date().getTime(),
        address: this.address,
        goodsList: this.lists,
        type: 1,
        con: this.con
      };
      this.$store.commit("orderlist/add", order);
      this.$store.state.cart.lists = [];
      this.$store.state.cart.num = 0;
      this.$router.go("-1");
    }
  },
  computed: {
    // 总价格计算
    sum() {
      // 总价格计算
      // reduce()返回计算总价格
      // total 总价格累加
      // item 数据中对象
      return this.lists.reduce((total, item) => {
        // 判断选项
        let conn = this.con;
        if (!item.isSelect) return total; //false不让计算总价格
        return (
          total + parseInt(item.price) * parseInt(item.num) - parseInt(conn)
        ); //总价格
      }, 0); //总价格默认参数值为0
    }
  },
  created() {
    // 默认获取地址信息
    let defaultId = this.$store.state.address.defaultId;
    let data = this.$store.state.address.lists;
    this.address = data.find(item => item.id == defaultId); //默认id匹配数组中id值
    this.name = this.address.name;
    this.tel = this.address.tel;
    this.lists = this.$store.state.cart.lists;
    this.$store.state.vanTabbar = false;
  },
  // 生命周期钩子，最后销毁函数
  destroyed() {
    // 当组件被销毁时候，修改导航数据
    this.$store.state.vanTabbar = true;
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