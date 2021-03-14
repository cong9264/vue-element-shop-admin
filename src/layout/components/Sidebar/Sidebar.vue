<template>
  <div class="sidebar">
    <el-scrollbar>
      <el-menu>
        <side-item 
          v-for="route in menuList.data" 
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
  data () {
    return {
      menuList: []
    };
  },
  created () {
    this.getMenuList();
  },
  computed: {
    routes () {
      return this.$router.options.routes;
    } 
  },
  methods: {
    getMenuList () {
      this.$http.get('menus')
        .then(res => {
          this.menuList = res.data;
        })
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
