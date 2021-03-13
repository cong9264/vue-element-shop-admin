<template>
  <div class="layout">
    <navbar></navbar>
    <div class="main">
      <sidebar></sidebar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  components: {
    navbar: require('./components/Navbar/Navbar.vue').default,
    sidebar: require('./components/Sidebar/Sidebar.vue').default,
    appMain: require('./components/AppMain/AppMain.vue').default,
  }
}
</script>

<style lang='less' scoped>
.layout {
  height: 100%;
}
</style>