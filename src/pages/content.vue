<template>
  <div class="nr_center clearfix" id="center">
    <div class="c_left">
      <div class="c_l_title">
        <h1>{{info.name}} {{info.chapter_name}}</h1>
      </div>
      <!-- <div class="c_l_info">
        <span class="c_l_i_item"
          ><img
            class="c_l_i_i_vipImg"
            src="//s.faloo.com/novel2/novelRead/vip.png"
          />
          <a
            href="//b.faloo.com/f/847528.html"
            title="开学一屋车钥匙"
            id="novelName"
            target="_blank"
            >开学一屋车钥匙</a
          > </span
        ><span class="c_l_i_item"
          ><img
            class="c_l_i_i_rentou"
            src="//s.faloo.com/novel2/Index/rentou.png"
          />
          <a
            href="//b.faloo.com/l/0/1.html?t=2&amp;k=%c3%f7%d2%b9%b9%e2"
            title="明夜光"
            target="_blank"
            >明夜光</a
          > </span
        ><span class="c_l_i_item"
          ><img
            class="c_l_i_i_rentou"
            src="//s.faloo.com/novel2/novelRead/class.png"
          />
          <a href="//b.faloo.com/m/4/index.html" title="都市" target="_blank"
            >都市<span class="c_l_i_hide">言情</span></a
          >
          |
          <a href="//b.faloo.com/l/4/14/1.html" title="都市" target="_blank"
            >都市<span class="c_l_i_hide">生活</span></a
          > </span
        ><span class="c_l_i_item">更新时间：2020-11-12 20:04</span>
        <div class="c_l_i_button btn_waterfall waterfallOff">瀑布阅读</div>
        <div class="waterfall_xuanfu btn_waterfall waterfallOff">瀑布</div>
        <div class="nt_btnFold" onclick="btnFoldClick(this)"></div>
      </div> -->
      <div class="c_l_infoLine"></div>
      <div class="line_gaizi"></div>

      <div class="noveContent readline" v-html="content">     <!--
<p>
<b><font color=red>双十一看书天天乐，充100赠500VIP点券！</font>
<a href='http://pay.faloo.com/' style='color:red;text-decoration:underline' target=_blank>立即抢充</a></b>(活动时间：11月11日到11月13日)
</p>
-->
      </div>
      <div class="tips">
        <h2>
          小雷看书网 https://mydear.site.com
          欢迎广大书友光临阅读，最新、最快、最火的连载作品尽在小雷看书网！
        </h2>
      </div>

      <div class="c_btns">
        <div class="c_b_box">
        </div>
        <div id="pageHtml" class="c_btns2">
          <div>
            <span
              id="pre_page"
              @click="goTo(-1)"
              ><img src="//s.faloo.com/novel2/novelRead/page1.png" />上一章
              </span>
          </div>
          <div>
            <span
              @click="goTo(0)"
              ><img src="//s.faloo.com/novel2/novelRead/mulu.png" />目录</span>
          </div>
          <div>
            <span
              id="next_page"
              @click="goTo(1)"
              >下一章 <img src="//s.faloo.com/novel2/novelRead/page2.png"
            /></span>
            <input type="hidden" id="nextNodeId" value="64" />
          </div>
        </div>
      </div>
      <div class="c_tAndL clearfix" style="    width: 100%;">
        <div class="c_tl_module clearfix">
          <div class="c_tl_m_title moduleTitle">
            <div class="lvdian"></div>
            <h3>文宣推荐</h3>
            <!-- <a
              class="c_t_btnall"
              href="//b.faloo.com/y/0/0/0/0/8/2/1.html"
              title="全部文宣推荐"
              target="_blank"
              >全部</a
            > -->
          </div>
          <ul class="c_tl_moduleList c_tl_tuiJian clearfix">
            <li v-for="(item, index) in goodBook" :key="index" @click="goInto(item.book_id)">
              <div class="c_tl_m_novelImg">
                <span><img
                    :src="item.book_cover_img"
                /></span>
              </div>
              <div class="c_tl_m_info">
                <div class="c_tl_m_i_name">
                  <!-- <i class="c_tl_m_i_n_numcheng">1</i> -->
                  <span>{{item.book_name}}</span>
                </div>
                <div class="c_tl_m_i_dashang">月鲜花：12{{index}}</div>
              </div>
            </li>
          </ul>
        </div>
      <!--
        <div class="c_tl_module clearfix">
          <div class="c_tl_m_title moduleTitle">
            <div class="lvdian"></div>
            <h3>读者还喜欢</h3>
             <a
              class="c_t_btnall"
              href="//b.faloo.com/look/1/847528/1.html"
              title="开学一屋车钥匙全部读者还喜欢"
              target="_blank"
              >全部</a
            >
          </div>
          <ul class="c_tl_moduleList c_tl_tuiJian clearfix" v-for="(item, index) in newBook" :key="index">
            <li>
              <div class="c_tl_m_novelImg">
                <a
                  href="//b.faloo.com/f/846537.html"
                  title="moba：世界第一酒驾选手"
                  target="_blank"
                  ><img
                    :src="item.book_cover_img"
                /></a>
              </div>
              <div class="c_tl_m_info">
                <div class="c_tl_m_i_name">
                  <i class="c_tl_m_i_n_numcheng">1</i>
                  <a
                    href="//b.faloo.com/f/846537.html"
                    title="moba：世界第一酒驾选手"
                    target="_blank"
                    >{{item.book_name}}</a
                  >
                </div>
                <div class="c_tl_m_i_dashang">
                  <img src="//s.faloo.com/novel2/Index/rentou.png" />
                  <a
                    href="//b.faloo.com/l/0/1.html?t=2&amp;k=%d2%d4%d0%e3%c1%fa"
                    title="以秀龙"
                    target="_blank"
                    >以秀龙</a
                  >
                </div>
              </div>
            </li>
          </ul>
        </div> -->
      </div>
    </div>
    <van-popup v-model="show" :closeable = true round @close="resetCount"><div style="font-size: 16px;
    text-align: center;overflow:hidden; min-height:315px;">
      <img
            src="../../static/image/programm.jpg"
            alt="小雷看书小程序"
          />
          <p>小程序免费阅读</p>
      </div></van-popup>
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
  Dialog,
  Popup
} from 'vant';
import router from '../router';
import { getChapterContent, getRecordBook } from '../assets/api'
import Foot from '../components/foot.vue';
Vue.use(Button)
  .use(NoticeBar)
  .use(ContactCard)
  .use(Swipe)
  .use(SwipeItem)
  .use(Divider)
  .use(Search)
  .use(Dialog)
  .use(Popup);
export default {
  name: 'content',
  components: {
    Foot
  },
  data() {
    return {
      show: false,
      info: {},
      content: '',
      goodBook: [],
      newBook: []
    };
  },
  async mounted() {
    const body = this.$route.query
    this.info = body
    const { data } = await getRecordBook()
    this.goodBook = data.goodbook.slice(0, 4)
    this.newBook = data.newBook.slice(0, 5)
    if (!this.judgeCount()) {
      this.getData()
    }
  },
  methods: {
    judgeCount() {
      let count = window.sessionStorage.getItem('COUNT') || 0
      console.log('count=', count)
      count = parseInt(count) + 1;
      window.sessionStorage.setItem('COUNT', count);
      if (count >= 8) {
        this.show = true
        return true
      }
      return false
    },
    async getData() {
      let body = this.info
      const { data } = await getChapterContent(body.book_id, body.chapter_id)
      this.content = data.content.replace(/\s+(.*?)\s+/g, function($1, $2) {
        return '<p style=" margin-top: 10px;">' + $2 + '</p>'
      })
      this.info = {
        ...this.info,
        name: data.book_name,
        chapter_name: data.chapter_name
      }
    },
    goTo(flag) {
      let info = this.info
      if (flag < 0) {
        if (!this.judgeCount()) {
          if (info.chapter_id === 0) {
            Dialog.alert({title: '温馨提示',
              message: '已经是第一章了'})
          } else {
            this.info = {
              ...this.info,
              book_id: info.book_id,
              chapter_id: info.chapter_id - 1
            }
            this.getData()
            document.documentElement.scrollTop = 0
          }
        }
      } else if (flag === 0) {
        router.push({ path: 'main', query: {book_id: info.book_id} })
      } else {
        if (!this.judgeCount()) {
          if (info.chapter_id === info.total - 1) {
            Dialog.alert({title: '温馨提示',
              message: '已经是最后一章了'})
          } else {
            this.info = {
              ...this.info,
              book_id: info.book_id,
              chapter_id: info.chapter_id + 1
            }
            this.getData()
            document.documentElement.scrollTop = 0
          }
        }
      }
    },
    resetCount() {
      window.sessionStorage.setItem('COUNT', 0);
    },
    goInto(bookId) {
      router.push({ path: 'main', query: {book_id: bookId} })
    }
  }
};
// vant.Toast('提示');
</script>
<style scoped>

</style>
