import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routers.js' // 定义路由

Vue.use(VueRouter);   // 使用插件

const router = new VueRouter({   // 注册路由
  routes,
  mode: 'history'                   //去掉URL中的#   默认是hash模式
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});

