import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../pages/index.vue';
import mindex from '../pagesApp/index.vue';
import main from '../pages/main.vue'
import content from '../pages/content.vue'
import minmain from '../pagesApp/main.vue'
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: index,
        pc: index,
        m: mindex
      }
    },
    {
      path: '/main',
      components: {
        default: index,
        pc: main,
        m: minmain
      }
    },
    {
      path: '/content',
      components: {
        default: index,
        pc: content,
        m: minmain
      }
    }
  ]
});
