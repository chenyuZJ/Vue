<template>
  <div class="advertpage">
    <img src="../../assets/s11.jpg" alt />
    <p>
      <span>广告还剩{{num}}秒</span>&nbsp;
      <b @click="home">跳过</b>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 5
    };
  },
  methods: {
    home() {
      this.$router.push("/home");
    }
  },
  created() {
    this.cleardata = setInterval(() => {
      if (this.num == 0) {
        this.$router.push("/home");
      } else {
        this.num -= 1;
      }
    }, 1000);
    this.$store.state.show = false;
  },
  destroyed() {
    this.$store.state.show = true;
  },
  beforeDestroy() {
    clearInterval(this.cleardata);
  }
};
</script>

<style lang="scss" scoped>
.advertpage {
  position: fixed;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
  p {
    position: absolute;
    right: 10px;
    top: 20px;
    color: #fff;
    font-size: 0.28125rem;
    b {
      border-bottom: 1px solid #fff;
    }
  }
}
</style>