import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../pages/index.vue';
import Main from '../pages/main.vue'
import Content from '../pages/content.vue'
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/pc/main',
      components: Main
    },
    {
      path: '/pc/content',
      components: Content
    }, {
      path: '/pc',
      components: Index
    }
  ]
});
