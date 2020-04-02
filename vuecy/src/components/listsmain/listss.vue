<template>
  <div>
    <van-sticky>
      <div class="tushude">
        <van-nav-bar title="图书畅销榜" left-text="返回" left-arrow @click-left="$router.push('/home')">
          <van-icon name="search" slot="right" />
        </van-nav-bar>
      </div>
    </van-sticky>
    <div class="listss-bang">
      <ul class="clear">
        <router-link tag="li" to="/listss/remai">新书热卖榜</router-link>
        <router-link tag="li" to="/listss/cx">图书畅销榜</router-link>
        <router-link tag="li" to="/listss/tsxs">童书新书榜</router-link>
        <router-link tag="li" to="/listss/tscx">童书畅销版</router-link>
        <router-link tag="li" to="/listss/ss">热搜榜</router-link>
      </ul>
      <ol class="clear">
        <li v-for="(item,index) in ll2" :key="index">{{item}}</li>
      </ol>
    </div>
    <!-- 内容 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ll: ["新书热卖榜", "图书畅销榜", "童书新书榜", "童书畅销版", "热搜榜"],
      ll2: ["总榜", "童书", "小说", "励志", "文学", "管理"]
    };
  },
  methods: {
    jemp() {
      this.$router.push("/xq");
    }
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
.router-link-active{
  background-color: white;
}
.tushude {
  width: 100%;
  .van-icon {
    line-height: 0 !important;
  }
}
.clear::after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.van-nav-bar {
  border-bottom: 1px solid #ccc;
}
.listss-bang {
  ul {
    width: 100%;
    li {
      width: 20%;
      height: .9375rem;
      float: left;
      text-align: center;
      line-height: .9375rem;
      border-bottom: 1px solid #ccc;
      font-size: .3125rem;
    }
  }
  ol {
    width: 100%;
    height: 1rem;
    border-bottom: 1px solid #ccc;
    li {
      width: 12%;
      height: .625rem;
      border: 1px solid #000;
      border-radius: 0.46875rem;
      margin-left: 2%;
      margin-top: 0.1875rem;
      float: left;
      text-align: center;
      line-height: .625rem;
      font-size: 0.21875rem;
      color: #969696;
    }
  }
}
.listss-main {
  margin: 10px 10px;
  .van-card {
    background-color: white;
    border-radius: 5%;
    border-bottom: 1px solid #eeeeee;
  }
}
</style>