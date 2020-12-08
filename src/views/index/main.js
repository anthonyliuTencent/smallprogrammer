import FastClick from 'fastclick'
import Vue from 'vue';
import App from './App'
console.log('App is:', App)
Vue.config.devtools = true

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body)
  }, false)
}
// eslint-disable-next-line no-unused-vars
var vue = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})