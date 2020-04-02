<template>
  <div class="ddddd">
    <van-sticky>
      <van-row class="topSearchNav">
        <van-col span="3">
          <img src="../../assets/logo.png" alt />
        </van-col>
        <van-col span="18">
          <van-search placeholder="搜索商品名称" @focus="$router.push('/search')" />
        </van-col>
        <van-col span="3" class="icon">
          <van-icon name="user-o" @click="$router.push('/mydd')"/>
        </van-col>
      </van-row>
    </van-sticky>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input2: ""
    };
  },
  methods: {
    classify2() {
      this.$router.push("/classify/tushu");
    }
  }
};
</script>

<style lang="scss" scope>
.ddddd {
  .topSearchNav {
    background-color: #fff;
    height: 0.9375rem;
    .van-col {
      height: 0.9375rem;
      .van-search {
        height: 0.9375rem;
        padding: 0;
      }
      .van-icon {
        text-align: center;
        display: block;
        font-size: 0.5625rem;
      }
    }
    .icon {
      .van-icon {
        line-height: 0.9375rem;
      }
    }
  }
}
</style>