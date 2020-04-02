import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 公共样式
import "./assets/css/base.css";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';

// swiper插件
import "swiper/css/swiper.min.css";
import "animate.css";

Vue.use(Vant);
Vue.use(ElementUI);
import Flexible from "amfe-flexible";
Vue.use(Flexible);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
