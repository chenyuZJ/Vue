<template>
  <div class="xq">
    <div class="tushude">
      <van-nav-bar
        title="商品"
        left-text="返回"
        left-arrow
        @click-left="$router.go(-1)"
        @click-right="rightt"
      >
        <van-icon name="friends-o" slot="right" size="20" />
      </van-nav-bar>
    </div>

    <div class="llbb">
      <el-carousel trigger="click" height="7.8125rem">
        <el-carousel-item v-for="(item,index) in lists" :key="index">
          <img :src="item.imgs" alt />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="jianjie">
      <van-tag type="danger">世纪自营</van-tag>
      <span>你当像鸟飞往你的山</span>
      <h3>你当像鸟飞往你的山（比尔·盖茨年度特别推荐，登顶《纽约时报》畅销榜80 周！多一个人读到这个真实故事，就多一个人勇敢做自己！）</h3>
      <h4>17岁前从未上过学的女孩，如何成为剑桥大学博士？我们要背叛多少曾经，才能找到真正的自我！《纽约时报》 等数十家媒体一致公推“年度图书”，作者获选《时代周刊》年度影响力人物！这本书比你听说的还要好！</h4>
    </div>

    <div class="jiage">
      <span>
        <i>￥</i>25
      </span>
      <br />
      <del>￥100</del>
    </div>
    <div class="xuanze xuanze2">
      <van-cell title="图文详情" is-link arrow-direction="down" />
    </div>

    <div class="xqpic">
      <img src="../../assets/xqpic.jpg" alt />
    </div>

    <div class="foot">
      <van-goods-action>
        <!-- <van-goods-action-icon icon="chat-o" text="客服" /> -->
        <van-goods-action-icon icon="cart-o" text="购物车" :info="num" @click="cart" />
        <van-goods-action-icon
          icon="star"
          text="收藏"
          color="#ff5000"
          ref="star2"
          @click="star(goods)"
        />
        <van-goods-action-button type="warning" text="加入购物车" @click="add(goods)" />
        <van-goods-action-button type="danger" text="立即购买" @click="buy" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import { Notify } from 'vant';
const { mapState, mapMutations } = createNamespacedHelpers("cart");

export default {
  data() {
    return {
      lists: [
        { imgs: require("../../assets/xq01.jpg") },
        { imgs: require("../../assets/xq02.jpg") },
        { imgs: require("../../assets/xq03.jpg") },
        { imgs: require("../../assets/xq04.jpg") }
      ],
      goods: {
        id: 1,
        name: "你当像鸟飞往你的山",
        price: "25",
        num: 1,
        imgs: require("../../assets/lists01.jpg")
      }
    };
  },
  computed: {
    ...mapState({
      num: state => state.num
    })
  },
  methods: {
    cart() {
      this.$router.push("./cart");
    },
    buy() {
      if (!localStorage.aa) {
        Notify("请登录");
      } else {
        this.$store.commit("cart/buy", this.goods);
        this.$router.push("./order");
      }
    },
    rightt() {
      if (localStorage.aa) {
        this.$router.push("/mydd");
      } else {
        this.$router.push("/login");
      }
    },
    ...mapMutations(["add", "star"])
  },
  created() {
    this.$store.state.show = false;
  },
  destroyed() {
    this.$store.state.show = true;
  }
};
</script>

<style lang="scss" scoped>
.xuanze2 {
  .van-cell {
    font-size: 0.25rem;
  }
}
.xq {
  background-color: #eeeeee;
}
.tushude {
  background-color: white;
  width: 100%;
  .van-icon {
    line-height: 0 !important;
  }
}
.llbb {
  height: 7.8125rem;
  background-color: white;
  .el-carousel,
  .el-carousel__container {
    height: 7.8125rem;
  }
  img {
    width: 100%;
    height: 7.8125rem;
  }
}
.jianjie {
  margin: 10px 0px;
  background-color: white;
  padding: 0 0.234375rem;
  span {
    font-size: 0.34375rem;
    font-weight: bold;
  }
  h3 {
    font-weight: normal;
    margin: 0.15625rem 0;
    text-indent: 0.46875rem;
    font-size: 0.375rem;
  }
  h4 {
    font-weight: normal;
    margin: 0;
    text-indent: 0.46875rem;
    color: #ccc;
    font-size: 0.34375rem;
  }
}
.jiage {
  background-color: white;
  padding: 0 0.234375rem;
  margin-top: 0.15625rem;
  font-size: 0.3125rem;
  span {
    color: red;
    i {
      font-size: 0.25rem;
    }
  }
  del {
    color: #ccc;
  }
}
.xuanze {
  margin: 0px 10px;
  background-color: white;
  margin-top: 0.15625rem;
  border-bottom: 1px solid #ccc;
  img {
    width: 0.78125rem;
    height: 0.78125rem;
  }
  .van-row {
    margin-top: 0.15625rem;
    p {
      font-size: 0.375rem;
      margin: 0.15625rem 0 0 0;
    }
    span {
      font-size: 0.3125rem;
      color: red;
    }
  }
  .van-cell {
    border-bottom: 1px solid #ccc;
  }
}
</style>