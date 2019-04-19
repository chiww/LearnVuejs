import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

// 注册全局组件
Vue.component('app-servers', Home)


new Vue({
  el: '#app',
  render: h => h(App)
})
