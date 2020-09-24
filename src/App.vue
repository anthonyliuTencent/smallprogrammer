<template>
  <div class="box">
    <router-view v-if="showPage == 1" name="m"></router-view>
    <router-view v-else name="pc"></router-view>
    <Foot></Foot>
  </div>
</template>

<script>
import Foot from './components/foot.vue'
export default {
  components: {
    Foot
  },
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    }
  },

  created() {
    if (this._isMobile()) {
      this.showPage = 1;
    } else {
      this.showPage = 2;
    }
  }
};
</script>

<style scoped>
.box {
  padding-bottom: 20px;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#e66465, #9198e5);
}
</style>
