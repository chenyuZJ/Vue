<template>
  <div>
    <div class="bg">
      <p>LOGIN</p>
      <div class="login">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">提交</van-button>
          </div>
        </van-form>
      </div>
      <div class="register">
        <van-button round type="info" @click="$router.push('/register')">免费注册</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      localStorage.aa=123;
      this.$router.push("/mydd");
      this.$store.state.username=this.username;
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
.bg {
  position: fixed;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(#3079bd, #e6e6e6);
  p {
    position: absolute;
    width: 100%;
    text-align: center;
    font-weight: bold;
    color: #fff;
    top: 10%;
  }
  .login {
    margin: 50% 8% 0 8%;
    background-color: white;
    height: 230px;
    padding-top: 50px;
    border-radius: 10px;
    .van-form {
      margin: 5%;
      .van-field {
        border: 1px solid #ccc;
        border-radius: 10px;
        margin-bottom: 20px;
      }
    }
  }
  .register{
    text-align: center;
    margin-top: 15%;
    .van-button{
      background-color: transparent;
      color: #1989fa;
      width: 60%;
    }
  }
}
</style>