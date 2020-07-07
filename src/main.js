import Vue from 'vue'
import App from './App.vue'
import "@/assets/css/font/iconfont.css";
import "@/assets/css/reset.css";
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import router from './router'
import store from './store'
Vue.use(iView); 
Vue.config.productionTip = false
let arr = [1, 2, 3];
var o = {};
arr.forEach(element => {
  if (element === 2) { 
    console.log('element', element);
    return 
  }
  o[element] = element
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
