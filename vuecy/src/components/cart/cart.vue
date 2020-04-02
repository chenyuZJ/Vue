<template>
  <div>
    <van-nav-bar title="购物车" />
    <van-notice-bar text="新品来袭,部分商品最低8折" left-icon="volume-o" />
    <img
      src="../../assets/timggg.jpg"
      alt
      v-show="lists.length == 0"
      @click="$router.push('/home')"
      class="imgscart"
    />
    <b v-show="lists.length == 0">点击小车去挑选吧</b>
    <div class="like" v-show="lists.length == 0">
      <p>猜你喜欢</p>
      <van-row>
        <van-col span="8" @click="$router.push('/xq')">
          <img src="../../assets/miao01.jpg" alt />
        </van-col>
        <van-col span="8" @click="$router.push('/xq')">
          <img src="../../assets/miao02.jpg" alt />
        </van-col>
        <van-col span="8" @click="$router.push('/xq')">
          <img src="../../assets/miao06.jpg" alt />
        </van-col>
      </van-row>
    </div>

    <div v-for="(item,index) in lists" :key="index" class="cartdiv">
      <van-card :price="item.price" desc="描述信息" :title="item.name" :thumb="item.imgs">
        <div slot="tags">
          <van-tag plain @click="item.num <=1?1:item.num--">-</van-tag>
          <input type="text" v-model="item.num" class="num" />
          <van-tag plain @click="item.num++">+</van-tag>
        </div>
        <div slot="footer">
          <input
            type="checkbox"
            class="checkboxbutton"
            :checked="item.isSelect"
            @click="inputselect(index)"
          />
          <van-button size="mini" class="delbutton" @click="del(index)">删除</van-button>
        </div>
      </van-card>
    </div>
    <van-submit-bar
      :price="totals * 100"
      button-text="提交订单"
      @submit="onsubmit"
      v-show="lists.length != 0"
    >
      <van-checkbox @click="checkAll" :value="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data: function() {
    return {
      lists: [],
      totals: 0, //总价格
      checked: true //默认全选
    };
  },
  methods: {
    onsubmit() {
      Toast("已提交");
      this.$router.push("/order");
    },
    del(index) {
      this.lists.splice(index, 1);
    },
    // 控制全选与反选
    checkAll() {
      this.lists.forEach(data => {
        data.isSelect = !this.checked;
      });
      this.checked = !this.checked;
    },
    checkboxclick() {
      this.checked = this.lists.every(item => {
        return item.isSelect;
      });
    },
    // 单击商品列表选项操作
    inputselect(index) {
      // 修改商品列表数据
      this.lists[index].isSelect = !this.lists[index].isSelect;
      this.checkboxclick();
    },
    // 总价格计算
    sum() {
      this.totals = this.lists.reduce((total, item) => {
        // 判断选项
        if (!item.isSelect) return total; //false不让计算总价格
        return total + parseInt(item.price) * parseInt(item.num); //总价格
      }, 0); //总价格默认参数值为0
    }
  },
  created() {
    this.lists = this.$store.state.cart.lists;
    this.sum(); //执行计算总价格
    this.checkboxclick();
  },
  beforeUpdate() {
    this.sum(); //执行计算总价格
  }
};
</script>

<style lang="scss" scoped>
b {
  position: absolute;
  font-size: 0.46875rem;
  top: 25%;
  transform: rotate(-50deg);
}
.like {
  width: 100%;
  position: absolute;
  top: 68%;
  p {
    // background-color: #ccc;
    text-align: center;
    font-size: 0.46875rem;
    margin: 0 10px;
  }
  .van-row {
    margin: 0 10px;
  }
  .van-col {
    height: 3.125rem;
    img {
      height: 100%;
      width: 100%;
    }
  }
}
.imgscart {
  position: fixed;
  height: 100%;
  width: 100%;
}
.cartdiv {
  margin: 10px 10px 0px 10px;
  .van-card {
    background-color: white;
    border-radius: 30px;
  }
}
h1 {
  background-color: #eeeeee;
  width: 100%;
  font-size: 0.375rem;
  button {
    color: #000;
    border-radius: 2px;
    font-size: 0.3125rem;
    min-width: 1.5625rem;
    border: 1px solid transparent;
    font-weight: bold;
    text-align: center;
    line-height: 1;
  }
}
.van-submit-bar {
  bottom: 1.171875rem;
}
.checkboxbutton {
  position: absolute;
  top: 50%;
  left: 0.078125rem;
  margin-top: -0.3125rem;
}
.delbutton {
  position: absolute;
  right: 0.3125rem;
  bottom: 0.078125rem;
}
.num {
  width: 0.46875rem;
  text-align: center;
  font-size: 0.25rem;
}
.checkboxselect {
  position: absolute;
  top: 50%;
  left: 5px;
  margin-top: -10px;
  width: 0.3125rem;
  height: 0.3125rem;
  border-radius: 50%;
  border: 1px solid #c8c9cc;
  i {
    display: block;
    width: 0.3125rem;
    height: 0.3125rem;
    background: #1989fa;
    border-radius: 50%;
    text-align: center;
    line-height: 0.34375rem;
    font-size: 0.25rem;
    color: #fff;
  }
}
</style>