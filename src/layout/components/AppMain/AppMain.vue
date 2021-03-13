<template>
  <div class="app-main">
    <router-view :key="key"></router-view>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key () {
      return this.$route.path
    }
  }
}
</script>

<style lang='less' scoped>
.app-main {
  height: calc(100vh - 50px);
  margin-left: 200px;
}
</style>
