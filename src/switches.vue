<template>
  <ul class="switches" id="switches">
    <li
      class="switch-item"
      v-for="(item,index) in switches"
      :key="index"
      @click="switchItem(index)"
    >
      <span class="switch-item-text" :class="{'active':currentIndex === index}">{{item.name}}</span>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'switches',
  props: {
    switches: {
      type: Array,
      default: []
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    switchItem(index) {
      console.log(index)
      this.$emit('changeTab', index)
    }
  }
}
</script>

<style>
.switches {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 80px;
  background: #ffffff;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e7e7e7;
}

.switch-item {
  box-sizing: border-box;
  margin: 0 auto;
  flex: 1;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.switch-item-text {
  display: inline-block;
  height: 74px;
  line-height: 74px;
  text-align: center;
  font-family: HYQiHei-EZS;
  font-size: 26px;
  color: #757575;
  border-bottom: 4px solid #ffffff;
}
.active {
  color: #fb7299;
  border-color: #fb7299;
}
</style>
