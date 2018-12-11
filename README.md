# vue-swiper-view

>使用vue模块切换的swiper<br>
>本组件是使用同事开发的react-swipe-view转到vue的组件,因为项目需要所以自己做了转换<br>
>具体地址是:https://github.com/legeneek/react-swipe-view<br>
>欢迎给他个start-.-!

## install
```
npm i vue-swiper-view
import vueSwiperView from 'vue-swiper-view'
Vue.use(vueSwiperView)
or
npm i vue-swiper-view
import vueSwiperView from 'vue-swiper-view'
```
## use
```
<vue-swiper-view
      :cur="0"
      :num="3"
      :tabWidth="375"
      @onSwipe="onSwipe"
      @tabChange="tabChange"
    >
    <div>1<div>
    <div>2<div>
    <div>3<div>
    </vue-swiper-view>
```
### Prop Types
| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| num | Number | ✓ | total number of tab view |
| tabWidth | Number | ✓ | width of each tab view(px). this is the width of tab container, you need to set the width of view yourself |
| cur | Number |   | current tab index start from 0, default 0 |
| fastSwipeTime | Number |  | swipe time less then `fastSwipeTime`(default 300ms) will cause tab view change |
| tabChange | Function |  | callback invoked when tab view changed by user's gesture `(index: Number): void` |
| onSwipe | Function |  | callback invoked when user is sliding `(isSwipe: Boolean):void`, if user is sliding horizontally `isSwipe` is true else false |
| containerStyle | Object |  | this component use `display: flex` to layout inner tab views, set `containerStyle` to change it |
| animation | Object |  | define the animation props for tab transition. eg:`{duration: 0.3, timing: 'ease', delay: 0}`
| disableTouch | Array |  | an array of `dom selectors`, indicate the dom not trigger touch effect. eg: `['.disabled', '.no-touch']`.

