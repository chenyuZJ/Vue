<template>
  <div>
    <div class="gongg">
      <van-grid :border="false" :column-num="5">
        <van-grid-item v-for="(item,index) in gglists" :key="index">
          <van-image :src="item.imgs" />
          <a href="JavaScript:;" @click="jemp"></a>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gglists: [
        { imgs: require("../../assets/gg01.png") },
        { imgs: require("../../assets/gg02.png") },
        { imgs: require("../../assets/gg03.png") },
        { imgs: require("../../assets/gg04.png") },
        { imgs: require("../../assets/gg05.png") },
        { imgs: require("../../assets/gg06.png") },
        { imgs: require("../../assets/gg07.png") },
        { imgs: require("../../assets/gg08.png") },
        { imgs: require("../../assets/gg09.png") },
        { imgs: require("../../assets/gg10.png") }
      ]
    };
  },
  methods: {
    jemp() {
      this.$router.push("/listss/remai");
    }
  }
};
</script>

<style lang="scss">
.gongg {
  margin: 10px 10px;
  .van-grid-item__content {
    padding: 0;
    position: relative;
    a {
      display: block;
      height: 100%;
      width: 2.140625rem;
      position: absolute;
    }
  }
}
</style>