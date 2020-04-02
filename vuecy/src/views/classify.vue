<template>
  <div class="bb">
    <div class="box" ref="wrapper">
      <ul id="fenli">
        <router-link to="/classify/tushu" tag="li">图书</router-link>
        <router-link to="/classify/tongshu" tag="li">童书</router-link>
        <router-link to="/classify/jiushu" tag="li">旧书/拍卖</router-link>
        <router-link to="/classify/dianzishu" tag="li">电子书</router-link>
        <router-link to="/classify/shouji" tag="li">手机数码</router-link>
        <router-link to="/classify/nv" tag="li">女装</router-link>
        <router-link to="/classify/wenju" tag="li">创意文具</router-link>
        <router-link to="/classify/banggong" tag="li">电脑办公</router-link>
        <router-link to="/classify/shiping" tag="li">食品生鲜</router-link>
        <router-link to="/classify/muying" tag="li">母婴玩具</router-link>
        <router-link to="/classify/tongxie" tag="li">童装童鞋</router-link>
        <router-link to="/classify/yundong" tag="li">运动户外</router-link>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        startY: 0,
        scrollY: true,
        click: true
      });
    });
  }
};
</script>

<style lang="scss" scope>
.clear::after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.bb {
  background-color: #e8ecf0;
}
.box {
  height: 100%;
  background-color: #fff;
  overflow: hidden;
  position: fixed;
}
#fenli {
  z-index: 500;
}
#fenli li {
  width: 2.578125rem;
  height: 1.328125rem;
  text-align: center;
  line-height: 1.328125rem;
  background-color: white;
  font-size: .40625rem;
}
.router-link-active {
  background-color: #eff4fa !important;
}
</style>