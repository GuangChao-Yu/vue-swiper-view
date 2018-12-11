<template>
  <div id="app">
    <switches :switches="switches" :currentIndex="currentIndex" @changeTab="changeTab"></switches>
    <vue-swiper-view
      :cur="currentIndex"
      :num="3"
      :tabWidth="tabwidth"
      @onSwipe="onSwipe"
      @tabChange="tabChange"
    >
      <div class="demo1 demo11">1</div>
      <div class="demo1 demo22">2</div>
      <div class="demo1 demo33">3</div>
    </vue-swiper-view>
  </div>
</template>

<script>
import Switches from './switches'
export default {
  name: 'app',
  data() {
    return {
      switches: [{ name: 'test1' }, { name: 'test2' }, { name: 'test3' }],
      currentIndex: 0,
      tabwidth: document.getElementsByTagName('body')[0].clientWidth
    }
  },
  mounted() {
    const arr = document.getElementsByClassName('demo1')
    for (let i = 0; i < arr.length; i++) {
      arr[i].style.height =
        document.documentElement.clientHeight - document.getElementById('switches').offsetHeight + 'px'
    }
  },
  methods: {
    onSwipe(data) {
      // console.log(data)
    },
    tabChange(data) {
      this.currentIndex = data
    },
    changeTab(data) {
      this.currentIndex = data
    }
  },
  components: {
    [Switches.name]: Switches
  }
}
</script>

<style>
.demo1 {
  width: 1000%;
  height: 1000px;
  text-align: center;
  font-size: 50px;
}
.demo11 {
  background: #fff;
}
.demo22 {
  background: #fb7299;
  color: #fff;
}
.demo33 {
  background: #f90;
}
</style>
