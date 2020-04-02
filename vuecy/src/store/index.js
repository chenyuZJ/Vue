import Vue from 'vue'
import Vuex from 'vuex'
import cart from "./cart";
import address from "./address";
import orderlist from "./orderlist";
import coupon from "./coupon";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    show:"true",
    // show2:"true"
    // numm:0,
    // msg:"",
    username:"",
    // fileList:[],
    list:[]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    address,
    orderlist,
    coupon
  }
})
