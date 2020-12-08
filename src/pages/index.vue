<template>
  <div class="box" id="pc-pages">
    <div class="wrapper" style="height:720px"></div>
    <div class="iphone" style="width: 525px; background-repeat: no-repeat;height: 704px;;top:16px;margin-left: -30px;">
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
    @focus="onFocus"
  ><template #action>
    <van-button @click="onSearch" type="info" size="small">搜索</van-button>
  </template>
  <template #right-icon>
    <van-icon name="close" @click="onClear"/>
  </template>
  </van-search>
        <van-swipe :autoplay="3000" style="width: 259px;
    height: 540px;
    position: absolute;
    left: 90px;
    top: 145px;">
        <van-swipe-item style="width:259px;height:540px;" v-for="(image, index) in images" :key="index">
            <img v-lazy="image" style="width:259px;height:500px;" />
        </van-swipe-item>
        </van-swipe>
    </div>
    <div
      class="qrcode"
      style="position: absolute; overflow: visible; text-align: center; color: white; font-size: 15px; font-weight: bold;"
    >
      <div id="word" style="margin-top:30px;">海量热门小说,超快更新,全部免费！</div>
      <div style=" display: flex;justify-content: center;">
        <div style="margin-left: 30px;">
          <img
            src="../../static/image/programm.jpg"
            alt="小雷看书小程序"
          />
          <p>小程序扫码搜索直接看</p>
        </div>
      </div>
      <!-- <div id="popup">asdasd</div> -->
    </div>

      <div id= "searchArea" v-show="show" style="height: auto;width: 300px;padding: 36px 8px 0;padding-top: 38px;
          left: 43%;
    top: 62px;
    position: absolute;
    z-index: 102;
    font-weight: bold;
    background:url(https://resource.mhxk.com/kanman_pc/static/images/comm/bg-cat-main.png) no-repeat top;no-repeat;
    background-size: 310px auto;">
            <div class="search-inner-main">
              <van-icon name="close" id="floatHide" size ="20" @click="show=false"/>
              <div class="search-hot">
                <div id="searchbanner" v-show="noData">
                  <p class="search-no-info acgn-hide acgn-tac" id="J_noHotSearch">没有搜索到结果</p>
                  <ul class="search-list" id="J_hotSearch">
                  </ul>
                </div>

                <div id="hotbanner" style="" v-show="!noData">
                  <p class="search-no-info acgn-hide acgn-tac">热门搜索</p>
                  <ul class="search-list">

                    <li @click="goTo(item.book_id)" class="js_hot_list search-item" v-for="(item, index) in bookArray" :key="index">
                      <div class="item-text">
                        <p class="name imp">{{index+1}}. {{item.book_name}}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    <Foot></Foot>
  </div>
</template>
<script>
import Vue from 'vue';
import {
  Button,
  NoticeBar,
  ContactCard,
  Swipe,
  SwipeItem,
  Divider,
  Search,
  Icon,
  Dialog
} from 'vant';
import router from '../router'
import { searchCgi, getRecordBook } from '../assets/api'
import Foot from '../components/foot.vue'
import '../../static/css/pc.css'
Vue.use(Button)
  .use(NoticeBar)
  .use(ContactCard)
  .use(Swipe)
  .use(SwipeItem)
  .use(Divider)
  .use(Search)
  .use(Icon)
  .use(Dialog)
export default {
  name: 'App',
  components: {
    Foot
  },
  data() {
    return {
      show: false,
      value: '',
      noData: false,
      bookArray: [],
      images: [
        '../../static/image/wechat1.jpeg',
        '../../static/image/wechat2.jpeg',
        '../../static/image/wechat3.jpeg',
        '../../static/image/wechat4.jpeg',
        '../../static/image/wechat5.jpeg'
      ]
    };
  },
  async mounted() {
    const { data } = await getRecordBook(this.value)
    this.bookArray = data.newBook.slice(0, 10);
  },
  methods: {
    async onSearch() {
      if (!this.value) {
        Dialog.alert({title: '温馨提示',
          message: '请输入您要查找的书名或者作者'})
        this.show = false
        return
      }
      const { data } = await searchCgi(this.value)
      if (data.categoryArray && data.categoryArray.length > 0) {
        this.show = true
        this.noData = false
        this.bookArray = data.categoryArray
      } else {
        this.noData = true
      }
      // router.push({ path: 'main', query: data.categoryArray })
    },
    goTo (bookId) {
      console.log('bookId is:', bookId)
      router.push({ path: '/main', query: {book_id: bookId} })
    },
    onFocus () {
      this.show = true
    },
    onClear() {
      this.value = ''
    }
  }
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
  width:400px;
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

#floatHide.van-icon.van-icon-close {
  padding:10px;
  float: right
}
.search-inner-main {
    padding: 8px 0;
    border: 1px solid #FFB5C3;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    background-color: #ffffff;
    -webkit-box-shadow: 0 1px 4px 0 #FFD1D8 inset;
    -moz-box-shadow: 0 1px 4px 0 #FFD1D8 inset;
    box-shadow: inset 0 1px 4px 0 #FFD1D8;
}

.search-inner-main {
    padding: 8px 0;
    border: 1px solid #FFB5C3;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    background-color: #ffffff;
    -webkit-box-shadow: 0 1px 4px 0 #FFD1D8 inset;
    -moz-box-shadow: 0 1px 4px 0 #FFD1D8 inset;
    box-shadow: inset 0 1px 4px 0 #FFD1D8;
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