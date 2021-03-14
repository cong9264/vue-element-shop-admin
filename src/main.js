import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css/normalize.css'
import '@/assets/style/index.css'
// import ElementUI from 'element-ui'
import '@/element/index.js'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token');
  return config;
});
axios.interceptors.response.use(config => {
  const { data } = config;
  if (data.meta.status !== 200) {
    // this.$message({ message: data.meta.msg, type: 'error' });
    alert(data.meta.msg)
  }
  return config;
})

// Vue.use(ElementUI)
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
