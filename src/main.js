import Vue from 'vue'
import App from './App.vue'
import vueSwiperView from './lib/index'

Vue.use(vueSwiperView)

new Vue({
  el: '#app',
  render: h => h(App)
})
