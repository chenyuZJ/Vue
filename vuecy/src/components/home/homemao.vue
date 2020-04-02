<template>
  <div>
    <img src="../../assets/mao_title.jpg" alt />
    <van-count-down :time="time">
      <template v-slot="timeData">
        <span class="item">{{ timeData.hours }}</span>时
        <span class="item">{{ timeData.minutes }}</span>分
        <span class="item">{{ timeData.seconds }}</span>秒
      </template>
    </van-count-down>

    <div class="miao" ref="wrapper">
    <ul>
        <li v-for="(item,index) in miaolists" :key="index" class="mao" @click="$router.push('/xq')">
            <img :src="item.imgs" alt="">
            <p>{{item.p}}</p>
            <span>{{item.span}}</span><br>
            <del>{{item.del}}</del>
        </li>
    </ul>
    </div>

    <div style="height:16px;"></div>
    <img src="../../assets/yasi.jpg" alt="">
    <div style="height:16px;"></div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  data() {
    return {
      time: new Date().getTime(),
      miaolists:[
          {imgs:require("../../assets/miao01.jpg"),p:"【限时秒杀包邮】哈佛家训全集",span:"￥1",del:"￥36"},
          {imgs:require("../../assets/miao02.jpg"),p:"【限时秒杀包邮】哈佛家训全集",span:"￥1",del:"￥36"},
          {imgs:require("../../assets/miao03.jpg"),p:"【限时秒杀包邮】哈佛家训全集",span:"￥1",del:"￥36"},
          {imgs:require("../../assets/miao04.jpg"),p:"【限时秒杀包邮】哈佛家训全集",span:"￥1",del:"￥36"},
          {imgs:require("../../assets/miao05.jpg"),p:"【限时秒杀包邮】哈佛家训全集",span:"￥1",del:"￥36"},
          {imgs:require("../../assets/miao02.jpg"),p:"【限时秒杀包邮】哈佛家训全集",span:"￥1",del:"￥36"},
          {imgs:require("../../assets/miao03.jpg"),p:"【限时秒杀包邮】哈佛家训全集",span:"￥1",del:"￥36"},
          {imgs:require("../../assets/miao03.jpg"),p:"【限时秒杀包邮】哈佛家训全集",span:"￥1",del:"￥36"},
          {imgs:require("../../assets/miao04.jpg"),p:"【限时秒杀包邮】哈佛家训全集",span:"￥1",del:"￥36"},
          {imgs:require("../../assets/miao05.jpg"),p:"【限时秒杀包邮】哈佛家训全集",span:"￥1",del:"￥36"},
          {imgs:require("../../assets/miao02.jpg"),p:"【限时秒杀包邮】哈佛家训全集",span:"￥1",del:"￥36"},
      ]
    };
  },
  mounted() {
      this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.wrapper, {
            startX:0,
            scrollX:true,
            click:true
        })
      })
    }
};
</script>

<style lang="scss" scope>
*{
    padding: 0;
    margin: 0;
}
.item {
  display: inline-block;
  width: .5rem;
  height: .65625rem;
  line-height: .65625rem;
  margin-right: .078125rem;
  color: #fff;
  font-size: .390625rem;
  text-align: center;
  background-color: #000;
  border-radius: .1875rem;
  &:last-child {
    background-color: #f3344a;
  }
}
.van-count-down {
  text-align: center;
}
.miao{
    width: 100%;
        overflow: hidden;
        margin-top: .5625rem;
}
ul{
    width: 500%;
}
.mao{
    height: 4.6875rem;
    width: 2.75rem;
    float: left;
    text-align: center;
    img{
        width: 2.5rem;
        height: 2.5rem;
    }
    span{
        color: red;
        font-size: .3125rem;
    }
    del{
        color: #ccc;
        font-size: .34375rem;
    }
    p{
      font-size: .28125rem;
    }
}
</style>