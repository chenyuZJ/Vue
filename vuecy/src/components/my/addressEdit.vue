<template>
  <div>
    <van-nav-bar title="修改地址" left-text="返回" left-arrow @click-left="$router.go(-1)" />

    <van-address-edit
      :area-list="areaList"
      :address-info="addressInfo"
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
    />
  </div>
</template>

<script>
import areaList from "./erea.js";
export default {
  data() {
    return {
      areaList,
      searchResult: [],
      addressInfo: {}
    };
  },
  methods: {
    onSave({ name, tel, province, city, county, addressDetail, areaCode }) {
      let id = this.$route.query.index; //修改id；
      console.log(name);
      console.log(id);
      this.$store.commit("address/edit", {
        id: id,
        name,
        tel,
        province,
        city,
        county,
        addressDetail,
        address: province + city + county + addressDetail,
        areaCode
      });
      this.$router.go(-1); //回到上一级列表页
    }
  },
  created() {
    // 获取修改id值
    let id = this.$route.query.index;
    this.addressInfo = this.$store.state.address.lists[id];
    this.$store.state.vanTabbar = false;
  },
  // 生命周期钩子，最后销毁函数
  destroyed() {
    // 当组件被销毁时候，修改导航数据
    this.$store.state.vanTabbar = true;
  }
};
</script>

<style lang="scss" scoped>
</style>