<template>
  <div class="sidebar">
    <el-scrollbar>
      <el-menu>
        <side-item 
          v-for="route in routes" 
          :key="route.path"
          :item="route"
        >
        </side-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  components: {
    sideItem: require('./SideItem').default
  },
  computed: {
    routes () {
      return this.$router.options.routes
    } 
  }
}
</script>

<style lang="less" scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 50px;
  bottom: 0;
  width: 200px;
  background-color: #304156;
}
</style>
