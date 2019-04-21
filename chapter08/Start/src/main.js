import Vue from 'vue'
import App from './App.vue'

// 最简单的总线
// export const eventBus = new Vue();

// 可以将通用的代码都放在这个对象中，避免重复代码 
export const eventBus = new Vue({
  data: {

  },
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdit', age)
    }
  }
})


new Vue({
  el: '#app',
  render: h => h(App)
})
