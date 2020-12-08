import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../pages/index.vue';
import main from '../pages/main.vue'
import content from '../pages/content.vue'
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/pc',
      components: {
        default: index,
        pc: index
      }
    },
    {
      path: '/pc/main',
      components: {
        default: index,
        pc: main
      }
    },
    {
      path: '/pc/content',
      components: {
        default: index,
        pc: content
      }
    }
  ]
});
