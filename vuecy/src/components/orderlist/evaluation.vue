<template>
  <div>
    <div class="eva">
      <div class="evatit">
        <van-nav-bar title="评价" />
      </div>
      <p>
        <van-icon name="records" />评价
      </p>
      <div class="evamain">
        <div class="zi">
          <van-field
            v-model="message"
            rows="2"
            autosize
            label="评价"
            type="textarea"
            maxlength="100"
            placeholder="请输入评价"
            show-word-limit
          />
        </div>
        <van-uploader v-model="fileList" multiple />
        <div class="star">
          <van-icon name="star-o" ref="star1" @click="star1" />
          <van-icon name="star-o" ref="star2" @click="star2" />
          <van-icon name="star-o" ref="star3" @click="star3" />
          <van-icon name="star-o" ref="star4" @click="star4" />
          <van-icon name="star-o" ref="star5" @click="star5" />
        </div>
        
      </div>
      <div class="btn">
        <van-button round type="info" @click="comment">评论</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
      message: "",
      goods: {
        id: 1,
        name: "你当像鸟飞往你的山",
        price: "25",
        num: 1,
        imgs: require("../../assets/lists01.jpg")
      },
      fileList: [
      ],
      obj:{}
    };
  },
  methods: {
    star1() {
      this.$refs.star1.className = "van-icon van-icon-star";
      this.$refs.star1.style.color = "#ff5000";
      this.num += 1;
    },
    star2() {
      this.$refs.star1.className = "van-icon van-icon-star";
      this.$refs.star2.className = "van-icon van-icon-star";
      this.$refs.star1.style.color = "#ff5000";
      this.$refs.star2.style.color = "#ff5000";
      this.num = 2;
    },
    star3() {
      this.$refs.star1.className = "van-icon van-icon-star";
      this.$refs.star2.className = "van-icon van-icon-star";
      this.$refs.star3.className = "van-icon van-icon-star";
      this.$refs.star1.style.color = "#ff5000";
      this.$refs.star2.style.color = "#ff5000";
      this.$refs.star3.style.color = "#ff5000";
      this.num = 3;
    },
    star4() {
      this.$refs.star1.className = "van-icon van-icon-star";
      this.$refs.star2.className = "van-icon van-icon-star";
      this.$refs.star3.className = "van-icon van-icon-star";
      this.$refs.star4.className = "van-icon van-icon-star";
      this.$refs.star1.style.color = "#ff5000";
      this.$refs.star2.style.color = "#ff5000";
      this.$refs.star3.style.color = "#ff5000";
      this.$refs.star4.style.color = "#ff5000";
      this.num = 4;
    },
    star5() {
      this.$refs.star1.className = "van-icon van-icon-star";
      this.$refs.star2.className = "van-icon van-icon-star";
      this.$refs.star3.className = "van-icon van-icon-star";
      this.$refs.star4.className = "van-icon van-icon-star";
      this.$refs.star5.className = "van-icon van-icon-star";
      this.$refs.star1.style.color = "#ff5000";
      this.$refs.star2.style.color = "#ff5000";
      this.$refs.star3.style.color = "#ff5000";
      this.$refs.star4.style.color = "#ff5000";
      this.$refs.star5.style.color = "#ff5000";
      this.num = 5;
    },
    comment() {
      this.obj.numm = this.num;
      this.obj.msg = this.message;
      this.$store.state.cart.num4 += 1;
      this.obj.fileList=this.fileList;
      this.$store.state.list.push(this.obj)
      this.$router.push("/myeva");
    }
  }
};
</script>

<style lang="scss" scoped>
.eva {
  p {
    font-size: 0.46875rem;
    height: 1.25rem;
    line-height: 1.25rem;
  }
  .evamain {
    text-align: center;
    background-color: white;
    margin: 10px 10px;
    .star {
      margin: 10px;
      .van-icon {
        margin: 0 5%;
        font-size: 0.625rem;
      }
    }
    .zi {
      margin: 20px 0;
      border: 1px solid #ccc;
    }
  }
  .btn {
    text-align: center;
    .van-button {
      width: 60%;
    }
  }
}
</style>