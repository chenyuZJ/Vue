<template>
  <div class="search">
    <van-cell-group>
      <van-field
        v-model="value"
        left-icon="arrow-left"
        right-icon="search"
        placeholder="搜索商品"
        @click-left-icon="$router.go(-1)"
      />
    </van-cell-group>
    <p>热门搜索</p>
    <img src="../../assets/jiushu.jpg" alt />
    <div class="tit">
      <van-row gutter="20">
        <van-col span="6">小说</van-col>
        <van-col span="6">文学</van-col>
        <van-col span="6">旧书</van-col>
        <van-col span="6">鲁迅</van-col>
        <van-col span="6">李清照</van-col>
      </van-row>
    </div>
    <div class="like">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>

<style lang="scss" scoped>
p {
  height: 0.9375rem;
  line-height: 0.9375rem;
  font-size: 0.46875rem;
  text-indent: 35px;
  background-color: white;
}
.tit {
  .van-row {
    text-align: center;
    font-size: 0.46875rem;
    margin: 10px 10px;
    .van-col {
      margin: 10px;
      &:nth-child(odd) {
        background-color: yellowgreen;
      }
      &:nth-child(even) {
        background-color: pink;
      }
    }
  }
}

.like {
  width: 100%;
  position: absolute;
  top: 52%;
  .van-row {
    margin: 0 10px;
  }
  .van-col {
    height: 3.125rem;
    margin-bottom: 5%;
    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>