<template>
  <div>
    <div class="swiper-container containerguidepage">
      <div class="swiper-wrapper">
        <div class="swiper-slide one">
          <img src="../../assets/logo.png" alt />
          <h3>世纪书店</h3>
          <h3>Century Bookstore</h3>
        </div>
        <div class="swiper-slide two">
          <img src="../../assets/fd.jpg" alt />
        </div>
        <div class="swiper-slide three">
          <img src="../../assets/kaixue.jpg" alt />
          <van-button plain hairline type="primary" size="small" to="/home">点击体验</van-button>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination paginationguidepage"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  created() {
    this.$store.state.show = false;
  },
  mounted() {
    new Swiper(".containerguidepage", {
      pagination: {
        el: ".paginationguidepage"
      }
    });
  },
  // 生命周期钩子，最后销毁函数
  destroyed() {
    // 当组件被销毁时候，修改导航数据
    this.$store.state.show = true;
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  .van-button{
    z-index: 300;
    width: 3.125rem;
    position: absolute;
    left: 50%;
    margin-left: -1.5625rem;
    top: 70%;
  }
}
.one {
  text-align: center;
  img {
    margin-left: auto;
    margin-right: auto;
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 50%;
    margin-top: 3.125rem;
  }
  h3 {
    color: #808080;
  }
}
.three{
  img{
    height: 100%;
  }
}
</style>