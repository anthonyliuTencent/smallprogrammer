<template>
<div>
  <van-notice-bar
  text="热烈祝贺anthonyliu的小程序开通。。。。。请大家以后多多光照！"
  left-icon="volume-o"
/>
  <van-swipe :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" style="width: 320px;"/>
  </van-swipe-item>
  </van-swipe>
  <van-divider />
  <div>广告位急招租！</div>
  <van-contact-card type="edit" name="程莹" tel="18819322452" :editable="false"/>
</div>
</template>
<script>
import { Button, NoticeBar, ContactCard, Swipe, SwipeItem, Divider } from 'vant';
import Vue from 'vue'
Vue.use(Button).use(NoticeBar).use(ContactCard).use(Swipe).use(SwipeItem).use(Divider);
export default {
  name: 'App',
  data() {
    return {
      images: [
        '/static/image/banner.jpg'
      ]
    }
  }
  // template: `<van-button>按钮</van-button>`
  // // template: `<button>按钮</button>`
}
// vant.Toast('提示');
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
