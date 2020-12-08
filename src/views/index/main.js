import FastClick from 'fastclick'
import App from './App'

Vue.config.devtools = true

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body)
  }, false)
}
var vue = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})