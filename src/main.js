// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  //  loading: require('img/loading.png'),//加载中图片，一定要有，不然会一直重复加载占位图
  //  error: require('img/error.png')  //加载失败图片
});
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
