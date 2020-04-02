<template>
  <div>
    <van-nav-bar title="我的评价" left-text="返回" left-arrow @click-left="$router.push('/mydd')"></van-nav-bar>
    <div class="mediv" v-for="(con,index) in list" :key="index">
      <h5>{{username}}</h5>
      <div class="myicon">
        <van-icon name="star" color="#ff5000" v-for="(value,indexx) in con.numm" :key="indexx" />
      </div>
      <p>{{con.msg}}</p>
      <div>
        <img :src="item.content" alt="" v-for="(item,index) in con.fileList" :key="index">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists3: [],
      fileList:"",
      username:"",
      list:[]
    };
  },
  created() {
    this.list=this.$store.state.list;
    this.username=this.$store.state.username;
    this.$store.state.show = false;
  },
  destroyed() {
    this.$store.state.show = true;
  }
};
</script>

<style lang="scss" scoped>
.mediv {
  height: 3.125rem;
  padding: 0px 20px;
  border-radius: 15px;
  .myicon {
    font-size: .4375rem;
    .van-icon{
      margin: 0 1% 0 0;
    }
  }
  div {
    background-color: white;
  }
  background-color: white;
  margin: 10px 10px;
  p {
    font-size: .375rem;
    margin-bottom: .15625rem;
  }
  img{
    width: 1.09375rem;
    height: 1.09375rem;
    float: left;
  }
  h5{
    font-size: .375rem;
    color: #ccc;
  }
}
</style>