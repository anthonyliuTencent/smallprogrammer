import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../pages/index.vue';
import mindex from '../pagesApp/index.vue';
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
    }
  ]
});
