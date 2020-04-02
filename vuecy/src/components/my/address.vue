<template>
  <div>
    <van-nav-bar title="我的地址" />

    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenAddressId: null,
      lists: []
    };
  },
  methods: {
    onAdd() {
      this.$router.push("/addressAdd");
    },
    onEdit(item) {
      this.$router.push({
        path: "addressEdit",
        query: { index:item.id }
      });
    },
    onSelect(item) {
      this.$store.state.address.defaultId = item.id;
      this.$router.go(-1);
    }
  },
  created() {
    this.list = this.$store.state.address.lists;
    this.chosenAddressId = this.$store.state.address.defaultId;
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