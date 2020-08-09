import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入重置样式
import './assets/style/public.css'

// 引入vant
import Vant from 'vant'
// // 引入vant的样式
import 'vant/lib/index.css'
// 引入封装的请求
import ajax from './ajax/aixos'
Vue.config.productionTip = false
// 原型下绑定请求方法
Vue.ajax = Vue.prototype.$ajax = ajax
Vue.use(Vant)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
