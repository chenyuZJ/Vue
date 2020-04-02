<template>
  <div>
    <div class="block">
      <el-carousel trigger="click" height="180px">
        <el-carousel-item v-for="(item,index) in lists" :key="index">
          <img :src="item.imgs" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            lists:[
                {imgs:require("../../assets/lunbo01.jpg")},
                {imgs:require("../../assets/lunbo02.jpg")},
                {imgs:require("../../assets/lunbo03.jpg")},
                {imgs:require("../../assets/lunbo04.jpg")},
                {imgs:require("../../assets/lunbo05.jpg")},
            ]
        }
    },
};
</script>

<style lang="scss">
.block{
  margin: 10px 10px;
  .el-carousel{
    border-radius: 10%;
  }
}
img{
    width: 100%;
    height: inherit;
  }
</style>