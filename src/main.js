import Vue from 'vue'
import App from './App.vue'
import "@/assets/css/font/iconfont.css";
import "@/assets/css/reset.css";
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import router from './router'
import store from './store'
import '@/assets/js/rem.js'
import '@/assets/js/isPhone.js'
Vue.use(iView); 
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
