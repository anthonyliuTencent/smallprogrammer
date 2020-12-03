<template>
  <div>
    <router-view v-if="showPage == 1" name="m"></router-view>
    <router-view v-else :name="path"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: 'pc'
    }
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
      this.path = 'pc'
      console.log('this:', this.$router.currentRoute)
      this.showPage = 2;
    }
  }
};
</script>

<style scoped>
</style>
