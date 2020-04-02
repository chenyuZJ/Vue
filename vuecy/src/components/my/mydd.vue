<template>
  <div class="mydd">
    <div class="myddtit">
      <van-nav-bar title="个人中心" />
    </div>
    <div class="mm">
      <div class="bg">
        <van-button round type="info" to="/login" v-show="show2">登录/注册</van-button>
        <div v-show="!show2">
          <van-image round width="2.34375rem" height="2.34375rem" :src="imgs" />
          <p>{{name}}</p>
        </div>
      </div>

      <div class="hezi">
        <van-row>
          <van-col span="12" @click="$router.push('/favorite')">
            <p>{{$store.state.cart.num2}}</p>
            <p>收藏的商品</p>
          </van-col>
          <van-col span="12" @click="$router.push('/myeva')">
            <p>{{$store.state.cart.num4}}</p>
            <p>我的评价</p>
          </van-col>
        </van-row>
      </div>

      <div class="dingdan" @click="$router.push('/orderlist/orderAll')">
        <van-cell icon="balance-list" title="我的订单" is-link value="查看全部购买商品" />
      </div>

      <div class="hezi2 clear">
        <van-row class="clear">
          <van-col span="8" @click="$router.push('/orderlist/orderPay')">
            <b class="el-icon-bank-card"></b>
            <p>待付款</p>
          </van-col>
          <van-col span="8" @click="$router.push('/orderlist/orderGoods')">
            <b class="el-icon-truck"></b>
            <p>待收货</p>
          </van-col>
          <van-col span="8" @click="$router.push('/orderlist/orderEnd')">
            <b class="el-icon-stopwatch"></b>
            <p>待评价</p>
          </van-col>
        </van-row>
      </div>

      <div class="huiyuan2">
        <van-cell icon="fire" title="我的优惠券" is-link @click="$router.push('/coupons')" />
        <van-cell icon="fire" title="我的地址" is-link @click="$router.push('/address')" />
      </div>
    </div>
    <div class="cancellation" v-show="ishow">
      <van-button round type="info" color="#ee0a24" @click="btn" to="/home">注销登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show2: "",
      imgs: require("../../assets/logo.png"),
      name:"",
      ishow:localStorage.aa
    };
  },
  methods: {
    btn(){
      localStorage.clear();
      localStorage.advertpage = true;
    }
  },
  created() {
    this.name=this.$store.state.username
    if (localStorage.aa) {
      this.show2 = false;
    } else {
      this.show2 = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.clear::after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.mydd {
  .cancellation {
    text-align: center;
    .van-button {
      width: 50%;
    }
  }
  background-color: #eeeeee;
  .myddtit {
    width: 100%;
  }
  .mm {
    margin: 10px 10px;
  }
}
.bg {
  // height: 1.796875rem;
  height: 4.2rem;
  background: url("../../assets/user-bg.jpg") no-repeat center center;
  background-size: 100% 100%;
  .van-button {
    width: 2.34375rem;
    margin: 15% 40%;
    background-color: transparent;
    font-size: 0.21875rem;
    overflow: hidden;
  }
  .van-image {
    margin: 18px 0 0 39%;
  }
  p {
    color: #fff;
    text-align: center;
    font-size: 0.625rem;
  }
}
.hezi {
  background-color: white;
  .van-row {
    border-bottom: 1px solid #ccc;
    height: 1.5625rem;
  }
  .van-col {
    height: 1.03125rem;
    text-align: center;
    padding: 10px 0;
    p {
      margin: 0;
      font-size: 0.3125rem;
    }
  }
}
.hezi2 {
  background-color: white;
  .van-col {
    // height: 1.03125rem;
    text-align: center;
    // padding: .15625rem 0;
    p {
      margin: 0;
      font-size: 0.28125rem;
    }
  }
}
.dingdan {
  .van-cell {
    padding: 0.171875rem 0.46875rem 0.171875rem 0.171875rem;
    font-size: 0.21875rem;
  }
  .van-icon {
    color: #fb8f63;
    font-size: 0.34375rem;
  }
}
.huiyuan {
  margin: 0.15625rem 0;
  .van-cell {
    padding: 0.171875rem 0.46875rem 0.171875rem 0.171875rem;
    font-size: 14px;
  }
  .van-icon {
    color: yellow;
    font-size: 0.34375rem;
  }
}
.huiyuan2 {
  margin: 0.15625rem 0;
  .van-cell {
    padding: 0.171875rem 0.46875rem 0.171875rem 0.171875rem;
    font-size: 0.21875rem;
  }
  .van-icon {
    color: pink;
    font-size: 0.34375rem;
  }
}
.huiyuan3 {
  margin: 0.15625rem 0;
  .van-cell {
    padding: 0.171875rem 0.46875rem 0.171875rem 0.171875rem;
    font-size: 0.21875rem;
  }
  .van-icon {
    color: #d71508;
    font-size: 0.34375rem;
  }
}
.huiyuan4 {
  margin: 0.15625rem 0;
  .van-cell {
    padding: 0.171875rem 0.46875rem 0.171875rem 0.171875rem;
    font-size: 0.21875rem;
  }
  .van-icon {
    color: yellowgreen;
    font-size: 0.34375rem;
  }
}
</style>