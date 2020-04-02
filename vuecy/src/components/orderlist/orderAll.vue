<template>
  <div>
    <!-- 订单遍历 -->
    <div v-for="(item,index) in lists" :key="index" class="orderdiv">
      <van-panel :title="'订单：'+item.orderId" :status="typeList[item.type]">
        <!-- 商品遍历 -->
        <div v-for="(value,key) in item.goodsList" :key="key">
          <van-card
            :num="value.num"
            :price="value.price-item.con"
            desc="描述信息"
            :title="value.name"
            :thumb="value.imgs"
          />
        </div>
        <!-- 待支付 -->
        <div v-if="item.type == 1" slot="footer" class="van-panel-footer">
          <van-button size="small" type="danger">删除订单</van-button>
          <van-button size="small" type="primary" @click="onPay(item.orderId)">支付订单</van-button>
        </div>
        <!-- 待收货 -->
        <div v-else-if="item.type == 2" slot="footer" class="van-panel-footer">
          <van-button size="small">退款申请</van-button>
          <van-button size="small" @click="onGoods(item.orderId)">已收货</van-button>
        </div>
        <!-- 评价商品 -->
        <div v-else-if="item.type == 3" slot="footer" class="van-panel-footer">
          <van-button size="small" @click="eva(item.orderId)">商品评价</van-button>
        </div>
        <div v-else-if="item.type == 4" slot="footer" class="van-panel-footer">
          <van-button size="small">已评价</van-button>
        </div>
      </van-panel>
    </div>
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="block" />
      </div>
    </van-overlay>
  </div>
</template>


<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      lists: [],
      typeList: [],
      show:false
    };
  },
  methods: {
    onPay(orderId) {
      let index = this.lists.findIndex(item => item.orderId == orderId);
      this.lists[index].type = 2;
    },
    onGoods(orderId) {
      Toast('收货成功');
      let index = this.lists.findIndex(item => item.orderId == orderId);
      this.lists[index].type = 3;
    },
    eva(orderId){
      let index = this.lists.findIndex(item => item.orderId == orderId);
      this.lists[index].type = 4;
      this.$router.push('/evaluation')
    }
  },
  created() {
    this.lists = this.$store.state.orderlist.lists;
    this.typeList = this.$store.state.orderlist.typeList;
  },
  beforeDestroy() {
    if (this.lists.length) {
      this.$store.commit("orderlist/edit", this.lists);
    }
  }
};
</script>

<style lang="scss" scoped>
.orderdiv {
  margin: 10px 10px;
  .van-card {
    background-color: white;
  }
}
.van-panel-footer {
  text-align: right;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>