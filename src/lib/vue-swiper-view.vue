<template>
  <div
    style="width:100%;overflowX:hidden"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <div ref="containView" :style="styleObject">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-swiper-view',
  props: {
    num: {
      // tab个数
      type: Number,
      required: true
    },
    tabWidth: {
      // tab宽度px值
      type: Number,
      required: true
    },
    cur: {
      // 当前默认选中cur
      type: Number,
      default: 0
    },
    animation: {
      type: Object,
      default: function() {
        return {
          duration: 0.3,
          timing: 'linear',
          delay: 0
        }
      }
    },
    fastSwipeTime: {
      type: Number,
      default: 300
    },
    disableTouch: {
      type: Array,
      default: function() {
        return []
      }
    },
    containerStyle: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      isSwipe: 0,
      startX: 0,
      startY: 0,
      moveDelta: 0,
      moveStartT: 0,
      disableNodeList: null,
      styleObject: Object.assign(
        {
          width: `${this.num * this.tabWidth}px`,
          display: 'flex'
        },
        this.containerStyle
      )
    }
  },
  mounted() {
    this.$refs.containView.style.transform = `translate3d(${-1 * this.cur * this.tabWidth}px, 0, 0)`
  },
  updated() {
    this.animateView(this.cur)
  },
  methods: {
    animateView(cur) {
      this.$refs.containView.style.transition = `all ${this.animation.duration || 0.3}s ${this.animation.timing ||
        'linear'} ${this.animation.delay || 0}s`
      this.$refs.containView.style.transform = `translate3d(${-1 * cur * this.tabWidth}px, 0, 0)`
    },
    handleTouchStart(e) {
      if (this.disableTouch.length) {
        this.disableNodeList = this.$refs.containView.querySelectorAll(this.disableTouch.join(','))
      }
      if (this.isDisableTouch(e.target)) return
      this.$refs.containView.style.transition = ''
      if (e.touches.length === 1) {
        const touch = e.touches[0]
        this.moveStartT = Date.now()
        this.startX = touch.pageX
        this.startY = touch.pageY
        this.moveDelta = 0
      }
    },
    handleTouchMove(e) {
      if (this.isDisableTouch(e.target)) return
      const touch = e.touches[0]
      const deltaX = touch.pageX - this.startX
      const deltaY = touch.pageY - this.startY
      this.moveDelta = deltaX
      this.$refs.containView.style.transition = ''
      if (this.isSwipe === 0) {
        this.isSwipe = Math.abs(deltaX) > Math.abs(deltaY) ? 1 : -1
        this.$emit('onSwipe', this.isSwipe === 1)
      }
      if (this.isSwipe === 1) {
        if ((deltaX > 0 && this.cur === 0) || (deltaX < 0 && this.cur === this.num - 1)) {
          return
        }
        this.$refs.containView.style.transform = `translate3d(${-1 * this.cur * this.tabWidth + deltaX}px, 0, 0)`
      }
    },
    handleTouchEnd(e) {
      if (this.isDisableTouch(e.target)) return
      const gapT = Date.now() - this.moveStartT
      let cur = this.cur
      if (this.isSwipe === 1) {
        if (gapT < this.fastSwipeTime || Math.abs(this.moveDelta) >= this.tabWidth / 2) {
          cur = this.moveDelta > 0 ? Math.max(this.cur - 1, 0) : Math.min(this.cur + 1, this.num - 1)
          this.$emit('tabChange', cur)
        }
        this.animateView(cur)
      }
      this.isSwipe = 0
      this.$emit('onSwipe', false)
    },
    isDisableTouch(target) {
      if (!this.disableNodeList) {
        return false
      }
      return Array.prototype.indexOf.call(this.disableNodeList, target) !== -1
    }
  }
}
</script>
