<template>
  <div>
    <router-view :name="path"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: ''
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
      this.path = 'm';
    } else {
      this.path = 'pc'
    }
  }
};
</script>

<style scoped>
</style>
