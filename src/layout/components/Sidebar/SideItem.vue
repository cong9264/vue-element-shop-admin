<template>
  <div>
    <template v-if="hasOneShowingChild(item)">
      <router-link :to="item.path">
        <span>
            {{childData.authName}}
        </span>
      </router-link>
    </template>
    <el-submenu v-else :index='item.path'>
      <template slot="title">
        <span
          v-if="item.authName"
        >
          {{ item.authName }}
        </span>
      </template>
      <side-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
      >
      </side-item>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'SideItem',
  props: {
    item: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      childData: null
    }
  },
  methods: {
    hasOneShowingChild (item) {
      if (item.children.length) {
        return false;
      } else {
        this.childData = item;
        return true;
      }
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .el-submenu__title {
  display: block;
  height: 56px;
  line-height: 56px;
  font-size: 14px;
  color: #ccc;
  background-color: #304156;
  &:hover {
    background-color: #263445;
  }
}

/deep/ .el-menu {
  background-color: #1f2d3d;
  display:block;
  padding-left: 20px; 
  line-height: 56px;
  font-size: 14px;
  color: #ccc;
  a:hover {
    transition: background-color .3s;
    background-color: #001528;
  }
}
</style>
