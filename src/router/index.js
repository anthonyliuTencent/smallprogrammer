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
      path: '/main',
      name: 'main',
      component: Main
      // components: {
      //   Main
      // }
    },
    {
      path: '/content',
      name: 'content',
      component: Content
    }, {
      path: '/',
      name: 'pc',
      component: Index
      // components: {Index}
    }
  ]
});
