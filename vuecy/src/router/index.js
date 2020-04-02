import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
import home from "./home.js";
import classify from "./classify.js";
import listss from "./listss.js";
import mydd from "./mydd.js";
import xq from "./xq.js";
import cart from "./cart.js";
import publics from "./public.js";
import orderlist from "./orderlist.js";
import search from "./search.js";
const routes = [
  {
    path:'/',
    redirect:"/advertpage"
  },
  home,//主页
  classify,//分类页
  listss,//列表页
  ...mydd,//个人中心
  xq,//详情页
  ...cart,//购物车
  ...publics,//广告页
  ...orderlist,//订单页
  search//搜索
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
