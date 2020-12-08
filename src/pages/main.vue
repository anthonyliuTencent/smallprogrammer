<template>
  <div class="center">
    <div class="Two-Left">
      <div class="T-L-One">
        <div class="T-L-O-Zuo">
          <div class="T-L-O-Z-Box1">
            <!-- <img class="vipimg" src="//s.faloo.com/novel2/Index/vip.png" /> -->
            <h1 id="novelName" class="fs23 colorHei">{{bookInfo.category}}：{{bookInfo.name}}</h1>
            <!-- <a
              href="//b.faloo.com/l/0/1.html?t=2&amp;k=%ba%a3%d4%f4%d5%bd%ba%e9%bb%c4"
              title="海贼战洪荒"
              target="_blank"
              class="fs14 colorQianHui"
              ><img
                class="rentouOne"
                src="//s.faloo.com/novel2/Index/rentou.png"
              />海贼战洪荒</a
            > -->
            <!-- <span class="fs14 colorQianHui"
              >更新时间：<span class="colorLv">2020-12-03 04:30</span></span
            > -->
          </div>
          <!-- <div class="T-L-O-Z-Box2 fs14">
            <span class="colorQianHui mgLeft20"
              >月阅读数：<span class="colorHei">110990</span></span
            ><span class="colorQianHui mgLeft20"
              >月鲜花数：<span class="colorHei">21444</span></span
            ><span class="colorQianHui mgLeft20"
              >总阅读数：<span class="colorHei">2650921</span></span
            ><span class="colorQianHui mgLeft20"
              >总鲜花数：<span class="colorHei">355885</span></span
            >
          </div> -->
        </div>
        <!-- <div class="T-L-O-You colorShihui">
          <img class="huoimg" src="//s.faloo.com/novel2/Index/huo.png" /><span
            class="fs35 fontoblique"
            >10</span
          ><span class="fs14">分</span><br />
          <a class="fs14 pointer" onclick="showDaShang(5)">我要评分</a>
        </div> -->
      </div>
      <div class="T-L-Two">
        <div class="T-L-T-Img">
          <a
            ><img
              class="imgcss"
              :src= "bookInfo.coverImg"
          /></a>
        </div>
        <div class="T-L-T-Content">
          <div class="T-L-T-C-Box1">
            <p>{{bookInfo.introduce}}
            </p>
          </div>
          <div class="T-L-T-C-Box2">
            <a @click="goTo(lastest.book_id, 0)"
              ><img
                src="//s.faloo.com/novel2/Index/yuedu.png"
                class="img1"
              />点击阅读</a
            >
            <a
              @click="showWx()"
              ><img
                src="//s.faloo.com/novel2/Index/shujia.png"
                class="img2"
              />加入书架</a>
            <!-- <a href="//b.faloo.com/Buy/827542.html" title="都市：我的小店通万界"
              ><img
                src="//s.faloo.com/novel2/Index/dingyue.png"
                class="img2"
              />我要订阅</a
            >
            <a
              href="//b.faloo.com/html/827/827542/"
              title="都市：我的小店通万界目录"
              ><img
                src="//s.faloo.com/novel2/Index/mulu.png"
                class="img2"
              />目录</a
            >
            <a href="//b.faloo.com/d/827542.html" title="都市：我的小店通万界"
              ><img src="//s.faloo.com/novel2/Index/xiazai.png" />下载</a
            > -->
            <van-button type="primary" size="small" round @click="goback">回首页</van-button>
          </div>
        </div>
      </div>
      <div class="T-L-Three">
        <div class="T-L-Th-Box1 mgLeft20">
          <img
            class="xinbiaoimg"
            src="//s.faloo.com/novel2/Index/xinbiao.png"
          /><span class="colorQianHui mgLeft15">最新章节&nbsp;|&nbsp;</span>
          <span
           @click="goTo(lastest.book_id, lastest.chapter.id)"
            class="colorHui"
            >《{{bookInfo.category}}：{{bookInfo.name}}》第{{bookInfo.total}}章：{{lastest.chapter_name}}
            </span>
        </div>
      </div>
    </div>
    <div class="Two-Center"></div>
    <div class="Two-Right">
      <div class="T-R-Top">
        <div class="T-R-T-Box1">
          <span>小说信息</span
          >
          <!-- <img class="A_QYimg" src="//s.faloo.com/novel2/Index/A_qy2.png" /> -->
        </div>
        <div class="T-R-T-Box2">
          <!-- <img class="FLSFimg" src="//s.faloo.com/novel2/Index/flsf.png" /> -->
          <div class="T-R-T-B2-Box1">
            <span class="colorQianHui"
              >小说分类：<span class="colorHui">
                <a
                  href="##nolink"
                  title="同人小说"
                  >{{bookInfo.category}}</a
                >
              </span></span
            >
          </div>
          <div class="T-R-T-B2-Box1">
            <span class="colorQianHui"
              >小说作者：
              <a
                href="##nolink"
                title="动漫同人"
                >{{bookInfo.book_author}}</a
              >
            </span>
          </div>
          <!-- <div class="T-R-T-B2-Box1">
            <span class="colorQianHui"
              >上传人：<span class="colorHui">
                <a
                  href="//u.faloo.com/b1c5d5c3p6_2bi_2fa9EUUvsKRKPvJg_3d_3d.html"
                  target="_blank"
                  title="15539.."
                  >15539..</a
                >
              </span></span
            >
          </div> -->
          <!-- <div class="T-R-T-B2-Box1">
            <span class="colorQianHui"
              >本书书号：<span class="colorHui">827542</span></span
            >
          </div> -->
          <div class="T-R-T-B2-Box1">
            <span class="colorQianHui"
              >入站时间：<span class="colorHui">2020-09-17</span></span
            >
          </div>
          <!-- <div class="T-R-T-B2-Box1">
            <span class="colorQianHui">标签：</span>
            <a
              class="LXbq"
              href="//b.faloo.com/tag/37396.html"
              title="洪荒"
              target="_blank"
              >洪荒</a
            >
            <a
              class="LXbq"
              href="//b.faloo.com/tag/37393.html"
              title="漫威"
              target="_blank"
              >漫威</a
            >
            <a
              class="LXbq"
              href="//b.faloo.com/tag/3070.html"
              title="火影"
              target="_blank"
              >火影</a
            >
          </div> -->
        </div>
      </div>
      <!-- <div class="T-R-Middle">
        <div class="T-R-Md-Bobx1">
          <span>已有</span><span class="SZspan">2</span
          ><span class="SZspan">6</span><span class="SZspan">5</span
          ><span class="SZspan">0</span><span class="SZspan">9</span
          ><span class="SZspan">2</span><span class="SZspan">1</span
          ><span class="colorChen">人</span><span>读</span><span>过</span>
        </div>
        <div class="T-R-Md-Bobx1">
          <span>已写</span><span class="SZspan">3</span
          ><span class="SZspan">9</span><span class="SZspan">5</span
          ><span class="SZspan">8</span><span class="SZspan">2</span
          ><span class="SZspan">3</span><span class="colorChen">个字</span>
        </div> -->
        <!-- <div class="T-R-Md-Bobx2">
          <img class="XZimg" src="//s.faloo.com/novel2/Index/xiezuobi.png" />
        </div>
        <div class="T-R-Md-Bobx1 txtCenter">
          <span class="fs17 colorLv fontweight">目前仍在拼命写作中...</span>
        </div>
      </div>
      -->
      <div class="T-R-Bottom">
        <div class="T-R-B-Box1">
          <img class="APPMa" src="../../static/image/programm.jpg">
        </div>
        <div class="T-R-B-Box2">
          <div class="T-R-B-Box3">
            <span class="fs17 colorHei">手机看小说</span>
          </div>
          <div class="T-R-B-Box4">
            <span class="fs14 colorHui">扫码添加微信小程序</span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="c_backgroud"
      style='background: url("http://img.faloo.com/Novel/166x235/0/556/000556911.jpg") 0% 0% / 100% 100% no-repeat;'
    ></div>
    <div class="c_content">
      <div class="c_con_titles"></div>
      <div class="c_con_top">
        <!-- <a
          href="//b.faloo.com/f/847528.html"
          title="开学一屋车钥匙详情"
          target="_blank"
          ><div class="backInfoBtn">本书详情</div></a
        > -->
        <h1 class="c_con_t_title">{{ bookInfo.book_name }}目录</h1>
        <div class="c_con_t_title1">
          <a
            class="url"
            title="开学一屋车钥匙小说的作者明夜光"
            >作者：{{ bookInfo.book_author }}</a
          ><span>|</span><span>更新时间：50分钟前</span><span>|</span>已写{{bookInfo.total}}章
        </div>
      </div>
      <div class="c_con_mainbody">
        <div class="c_con_title">{{bookInfo.name}}之正文</div>
        <div class="c_con_list">
          <div @click="goTo(item.book_id, item.chapter_id)" class="c_con_li_detail" v-for = "(item, index) in chapter" :key="index">
            <span class="width1">{{item.chapter_name}}</span>
            </div>
        </div>
      </div>
    </div>
    <van-popup v-model="show" :closeable = true round ><div style="font-size: 16px;
    text-align: center;overflow:hidden; min-height:315px;">
      <img
            src="../../static/image/programm.jpg"
            alt="小雷看书小程序"
          />
          <p>扫描小程序收藏</p>
      </div></van-popup>
    <div class="bottom" style="height:auto">
      <div class="bottomTop">
      <p>小雷看书网声明：</p>
      <p>为营造健康的网络环境，小雷看书坚决抵制淫秽色情，涉黑(暴力、血腥)等违反国家规定的小说在网站上传播，如发现违规作品，请向本站投诉。</p>
      </div>
      <!-- <div class="bottomBtom"></div> -->
    </div>
    <!-- <div class="c_remark">
      <p></p>
    </div> -->
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
  Icon,
  Popup
} from 'vant';
import Vue from 'vue';
import router from '../router';
import { getBookDetail } from '../assets/api';
Vue.use(Button)
  .use(NoticeBar)
  .use(ContactCard)
  .use(Swipe)
  .use(SwipeItem)
  .use(Divider)
  .use(Search)
  .use(Icon)
  .use(Popup);
export default {
  name: 'App',
  data() {
    return {
      show: false,
      bookInfo: {},
      lastest: {},
      chapter: [],
      lovebook: []
    };
  },
  async mounted() {
    const bookId = this.$route.query.book_id;
    const { data } = await getBookDetail(bookId);
    this.bookInfo = {
      category: data.book_category,
      name: data.book_name,
      book_author: data.book_author,
      coverImg: data.book_book_cover_img,
      introduce: data.book_introduce,
      total: data.chapter.length
    }
    this.lastest = data.chapter[data.chapter.length - 1]
    this.chapter = data.chapter.sort(function(a, b) {
      return a.chapter_id - b.chapter_id
    })
    this.lovebook = data.lovebook
  },
  methods: {
    goTo(bookId, chapterId) {
      console.log('bookId is:', bookId)
      router.push({ path: 'content', query: {book_id: bookId, chapter_id: chapterId, total: this.bookInfo.total} })
    },
    showWx() {
      this.show = true
    },
    goback() {
      router.push({ path: '/', query: {} })
    }
  }
};
// vant.Toast('提示');
</script>
<style scoped>

</style>
