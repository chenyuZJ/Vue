<template>
  <div>
    <div class="shucheng">
      <img src="../../assets/tslc-bt.jpg" alt />
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            当当书城
            <i class="el-icon-caret-right"></i>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            电子书
            <i class="el-icon-caret-right"></i>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            网络文学
            <i class="el-icon-caret-right"></i>
          </div>
        </el-col>
      </el-row>

      <img src="../../assets/1242x332-1583305602.jpg" alt />

      <van-grid :border="false" :column-num="3">
        <van-grid-item v-for="(item,index) in cclists" :key="index" class="aaa" @click="$router.push('/xq')">
          <b>{{item.b}}</b>
          <p>{{item.p}}</p>
          <van-image :src="item.imgs" class="imgg" />
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cclists: [
        {
          imgs: require("../../assets/cc01.png"),
          b: "文艺小情节",
          p: "书中小情怀"
        },
        {
          imgs: require("../../assets/cc02.png"),
          b: "文艺小情节",
          p: "书中小情怀"
        },
        {
          imgs: require("../../assets/cc03.png"),
          b: "文艺小情节",
          p: "书中小情怀"
        },
        {
          imgs: require("../../assets/cc04.png"),
          b: "文艺小情节",
          p: "书中小情怀"
        },
        {
          imgs: require("../../assets/cc05.png"),
          b: "文艺小情节",
          p: "书中小情怀"
        },
        {
          imgs: require("../../assets/cc06.png"),
          b: "文艺小情节",
          p: "书中小情怀"
        },
        {
          imgs: require("../../assets/cc07.png"),
          b: "文艺小情节",
          p: "书中小情怀"
        },
        {
          imgs: require("../../assets/cc08.png"),
          b: "文艺小情节",
          p: "书中小情怀"
        },
        {
          imgs: require("../../assets/cc09.png"),
          b: "文艺小情节",
          p: "书中小情怀"
        }
      ]
    };
  }
};
</script>

<style scoped>
.shucheng{
  margin: 10px 10px;
}
.el-row {
  margin-bottom: 0.3125rem;
  text-align: center;
}
.el-col {
  font-size: 0.1875rem;
  border-radius: 0.0625rem;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 0.0625rem;
  min-height: 0.375rem;
}
.aaa {
  height: 4.0625rem;
}
.imgg {
  width: 2.59375rem;
  height: 2.59375rem;
  margin: 0 auto;
}
.aaa b {
  font-size: 0.28125rem;
}
.aaa p {
  font-size: 0.25rem;
  color: red;
}
</style>