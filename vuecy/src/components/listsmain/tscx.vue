<template>
  <div>
    <div class="listss-main">
      <van-card
        v-for="(item,index) in lists"
        :key="index"
        num="1"
        :price="item.price"
        :desc="item.desc"
        :title="item.title"
        :thumb="item.imgs"
        @click="jemp"
      ></van-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          id: 1,
          imgs: require("../../assets/lists04.jpg"),
          title: "描述的内容",
          desc: "描述的内容",
          price: "55"
        },
        {
          id: 2,
          imgs: require("../../assets/lists02.jpg"),
          title: "描述的内容",
          desc: "描述的内容",
          price: "55"
        },
        {
          id: 3,
          imgs: require("../../assets/lists03.jpg"),
          title: "描述的内容",
          desc: "描述的内容",
          price: "55"
        },
        {
          id: 4,
          imgs: require("../../assets/lists04.jpg"),
          title: "描述的内容",
          desc: "描述的内容",
          price: "55"
        },
        {
          id: 5,
          imgs: require("../../assets/lists05.jpg"),
          title: "描述的内容",
          desc: "描述的内容",
          price: "55"
        },
        {
          id: 6,
          imgs: require("../../assets/lists01.jpg"),
          title: "描述的内容",
          desc: "描述的内容",
          price: "55"
        },
        {
          id: 7,
          imgs: require("../../assets/lists02.jpg"),
          title: "描述的内容",
          desc: "描述的内容",
          price: "55"
        },
        {
          id: 8,
          imgs: require("../../assets/lists03.jpg"),
          title: "描述的内容",
          desc: "描述的内容",
          price: "55"
        },
        {
          id: 9,
          imgs: require("../../assets/lists04.jpg"),
          title: "描述的内容",
          desc: "描述的内容",
          price: "55"
        },
        {
          id: 10,
          imgs: require("../../assets/lists05.jpg"),
          title: "描述的内容",
          desc: "描述的内容",
          price: "55"
        }
      ]
    };
  },
  methods: {
      jemp() {
      this.$router.push("/xq");
    }
  },
};
</script>

<style lang="scss" scoped>
</style>