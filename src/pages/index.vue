<template>
  <div class="box" >
    <div class="wrapper" style="height:750px"></div>
    <div class="iphone" style="width: 525px;height: 743px;top:16px;">
        <van-search
    v-model="value"
    background="#e66465"
    shape="round"
    show-action
    maxlength=50
    Slots="right-icon"
    :clearable = false
    placeholder="剑来"
    @search="onSearch"
  ><template #action>
    <van-button @click="onSearch" type="info" size="small">搜索</van-button>
  </template>
  <template #right-icon>
    <van-icon name="close" @click="onClear"/>
  </template>
  </van-search>
        <van-swipe :autoplay="3000" style="width: 260px;
    height: 540px;
    position: absolute;
    left: 100px;
    top: 140px;">
        <van-swipe-item style="width:260px;height:540px;" v-for="(image, index) in images" :key="index">
            <img v-lazy="image" style="width:260px;height:540px;" />
        </van-swipe-item>
        </van-swipe>
    </div>
    <div
      class="qrcode"
      style="position: absolute; overflow: visible; top:16px; text-align: center; color: white; font-size: 15px; font-weight: bold;"
    >
      <div id="word" style="margin-top:20px;">海量热门小说,超快更新,全部免费！</div>
      <div style=" display: flex;justify-content: center;">
        <div style="margin-left: 30px;">
          <img
            src="../../static/image/programm.jpg"
            alt="休息天地小程序"
          />
          <p>小程序扫码搜索直接看</p>
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>
<script>
import {
  Button,
  NoticeBar,
  ContactCard,
  Swipe,
  SwipeItem,
  Divider,
  Search
} from 'vant';
import Vue from 'vue';
import { searchCgi } from '../assets/api'
import Foot from '../components/foot.vue'
Vue.use(Button)
  .use(NoticeBar)
  .use(ContactCard)
  .use(Swipe)
  .use(SwipeItem)
  .use(Divider)
  .use(Search)
export default {
  name: 'App',
  components: {
    Foot
  },
  data() {
    return {
      value: '',
      images: [
        '/static/image/wechat1.jpeg',
        '/static/image/wechat2.jpeg',
        '/static/image/wechat3.jpeg',
        '/static/image/wechat4.jpeg',
        '/static/image/wechat5.jpeg'
      ]
    };
  },
  methods: {
    onSearch() {
      searchCgi(this.value)
    },
    onClear() {
      console.log('this.value is:', this.value)
      this.value = ''
    }
  }
  // template: `<van-button>按钮</van-button>`
  // // template: `<button>按钮</button>`
};
// vant.Toast('提示');
</script>
<style scoped>
#app {

  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-image: linear-gradient(#e66465, #9198e5);
}
.wrapper {
  background-position: -105px 5px;
  background-image: url("../../static/image/girl.png");

  margin-right: auto;
  margin-left: auto;
  height: 750px;
  background-repeat: no-repeat;
}
.iphone {
        position: absolute;
    top: 16px;
    left: 500px;
  background-image: url("../../static/image/iphone.png");
  background-position-y: 30px;
  margin-right: auto;
  margin-left: auto;
  background-size: contain;
  width: 525px;
  height: 743px;
}
.van-search {
  width:450px;
}
.van-field__left-icon .van-icon, .van-field__right-icon .van-icon  {
  font-size: 20px;
}
.box {
  padding-bottom: 20px;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#e66465, #9198e5);
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