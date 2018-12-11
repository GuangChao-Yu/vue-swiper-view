import vueSwiperView from './vue-swiper-view.vue'

const swiperView = {
  install(Vue, options) {
    Vue.component(vueSwiperView.name, vueSwiperView)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(swiperView)
}
export default swiperView
export { swiperView }
