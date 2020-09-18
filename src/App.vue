<template>
  <div class="wrapper">
    <div
      class="qrcode"
      style="position: absolute; top:0; text-align: center; color: white; font-size: 15px; font-weight: bold;"
    >
      <div id="word">海量热门小说,超快更新,全部免费！</div>
      <div style=" display: flex;justify-content: center;">
        <div style="margin-left: 30px;">
          <img
            src="../static/image/programm.jpg"
            alt="休息天地小程序"
          />
          <p style="color:#000000">小程序扫码搜索直接看</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  Button,
  NoticeBar,
  ContactCard,
  Swipe,
  SwipeItem,
  Divider
} from 'vant';
import Vue from 'vue';
Vue.use(Button)
  .use(NoticeBar)
  .use(ContactCard)
  .use(Swipe)
  .use(SwipeItem)
  .use(Divider);
export default {
  name: 'App',
  data() {
    return {
      images: ['/static/image/banner.jpg']
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
  margin-top: 60px;
}
.wrapper {
  background-image: url("../static/image/cover.jpeg");
  background-color: #000000;
  margin-right: auto;
  margin-left: auto;
}
</style>
