<template>
  <div v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item)">
      <router-link :to="item.path" style="display:block; background-color: #304156; height: 56px; padding-left: 20px; line-height: 56px; color: #ccc">
        <span>
            {{childData.meta.title}}
        </span>
      </router-link>
    </template>
    <el-submenu v-else>
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
    hasOneShowingChild ({ children = [], parent }) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          this.childData = item;
          return true;
        }
      })
      if (showingChildren.length === 1) {
        return true
      }
      if (showingChildren.length === 0) {
        this.childData = { ...parent, path: '', noShowingChildren: true }
        return true
      }
      return false
    }
  }
}
</script>

<style lang="less" scoped>

</style>
