<template>
  <div class="main" style="padding:50px;">
    <h1>网站地图：(2020-10-10 04:32:58)</h1>
    <h2>网站导航</h2>
    <div class="item">
      <a
        href="http://www.onhit.cn/sanpk/mh-comicindex?comic=mh1234--13306"
        class="lk"
        target="_blank"
        title="夜半诡谈"
        ><span class="k">1</span>夜半诡谈</a
      >
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
  Divider,
  Search,
  Icon
} from 'vant';
import Vue from 'vue';
import axios from 'axios';
Vue.use(Button)
  .use(NoticeBar)
  .use(ContactCard)
  .use(Swipe)
  .use(SwipeItem)
  .use(Divider)
  .use(Search)
  .use(Icon);
export default {
  name: 'App',
  data() {
    return {};
  },
  mounted() {
    axios
      .get('https://mydear.site/handler/book/getallbook')
      .then(res => {
        console.log('数据是:', res);
      })
      .catch(e => {
        console.log('获取数据失败');
      });
    // axios.get()
    // template: `<van-button>按钮</van-button>`
    // // template: `<button>按钮</button>`
  }
};
// vant.Toast('提示');
</script>
<style scoped>
.box {
  background-image: "#ffffff";
}
h1 {
  text-align: center;
}
h2 {
  border-left: 2px solid #eee;
}
.lk {
  font-size: 13px;
  border: 1px solid #e4e4e4;
  width: 150px !important;
  height: 30px;
  line-height: 30px;
  float: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 10px;
}
a:link {
  color: #000;
}
.k {
  font-size: 10px;
  width: 40px;
  background-color: #e4e4e469;
  margin-bottom: 3px;
  text-align: center;
  float: left;
  color: #000;
  margin-right: 10px;
}
.item {
  overflow: hidden;
}
</style>
