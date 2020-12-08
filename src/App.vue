<template>
  <div>
    <div> hello world! </div>
    <router-view :name="pc"></router-view>
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
  },

  created() {
  }
};
</script>

<style scoped>
</style>
