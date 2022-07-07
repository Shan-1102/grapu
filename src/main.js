import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router/router';
Vue.use(ElementUI);

Vue.config.productionTip=false
new Vue({
  el: '#app',
  router, //挂载到vue身上
  render: h => h(App)
});
