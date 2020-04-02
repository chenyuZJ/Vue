<template>
  <div>
    <div v-for="(item,index) in lists" :key="index" class="enddiv">
      <van-panel :title="'订单：'+item.orderId" :status="typeList[item.type]">
        <div v-for="(value,key) in item.goodsList" :key="key">
          <van-card
            :num="value.num"
            :price="value.price-item.con"
            desc="描述信息"
            :title="value.name"
            :thumb="value.imgs"
          />
        </div>
        <div slot="footer" class="van-panel-footer">
          <van-button size="small" @click="ee(item.orderId)">商品评价</van-button>
        </div>
      </van-panel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [],
      typeList: []
    };
  },
  methods: {
    ee(orderId) {
      let index = this.lists.findIndex(item => item.orderId == orderId);
      this.lists[index].type = 4;
      this.$router.push("/evaluation");
    }
  },
  created() {
    this.typeList = this.$store.state.orderlist.typeList;
    let dataList = this.$store.state.orderlist.lists;
    this.lists = dataList.filter(item => item.type == 3);
  },

  beforeDestroy() {
    if (this.lists.length) {
      this.$store.commit("orderlist/editId", this.lists);
    }
  }
};
</script>

<style lang="scss" scoped>
.van-panel-footer {
  text-align: right;
}
.enddiv {
  margin: 10px 10px;
}
</style>