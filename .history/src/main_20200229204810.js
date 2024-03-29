import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
// 导入axios，配置根路径
import axios from 'axios'
Vue.prototype.$http = axios
axios.defaults.baseURL = ''

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
