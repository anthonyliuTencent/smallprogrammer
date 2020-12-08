<template>
  <div id="bgvid1" >
    <div class="wrapper" style="height:  90vh;"></div>
    <!-- <div style=" position: absolute;
    top: 12px;
  background-image: url('../../static/image/iphone.png');
  margin-right: auto;
  margin-left: auto;
  background-size: contain;
  width: 15.75rem;height: 22.245rem;">
    <van-swipe :autoplay="3000" style="width: 7.75rem;
    height: 17.245rem;
    position: absolute;
    left: 2.9rem;
    top: 2.8rem;">
        <van-swipe-item style="width: 7.75rem;height: 17.245rem" v-for="(image, index) in images" :key="index">
            <img v-lazy="image" style="width: 7.75rem;height: 16.245rem" />
        </van-swipe-item>
        </van-swipe>
    </div> -->
    <div
      class="qrcode"
      style="position: absolute; overflow: visible; text-align: center; color: white; font-size: 15px; font-weight: bold;"
    >
      <div id="word" style="font-size: 20px;">海量热门小说,超快更新,全部免费！</div>
      <div style=" display: flex;justify-content: center;">
        <div>
          <img style="width: 150px;height: 150px;"
            src="../../static/image/programm.jpg"
            alt="小雷看书小程序"
          />
          <p style="font-size: 17px;">小程序扫码搜索直接看</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  Button,
  Swipe,
  SwipeItem,
  Divider
} from 'vant';
import Vue from 'vue';
Vue.use(Button)

  .use(Swipe)
  .use(SwipeItem)
  .use(Divider);
export default {
  name: 'App',
  data() {
    return {
      images: [
        '/static/image/wechat1.jpeg',
        '/static/image/wechat2.jpeg',
        '/static/image/wechat3.jpeg',
        '/static/image/wechat4.jpeg',
        '/static/image/wechat5.jpeg'
      ]
    };
  }
  // template: `<van-button>按钮</van-button>`
  // // template: `<button>按钮</button>`
};
// vant.Toast('提示');
</script>
<style>
#app {

  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60rem;
  background-image: linear-gradient(#e66465, #9198e5);
}
.wrapper {
  background-position: -10rem 0rem;
  background-image: url("../../static/image/girl.png");

  margin-right: auto;
  margin-left: auto;
  background-repeat: no-repeat;
}
.iphone {

}
/* #bgvid1{
        width:100%;
        position: fixed; right: 0; bottom: 0;
        min-width: 100%; min-height: 100%;
        height: auto;
        z-index: -100;
        background-size: cover;
    } */
</style>