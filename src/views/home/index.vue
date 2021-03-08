<template>
  <div class="home">
    首页
    <el-button @click="logout" type="info">退出</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    logout () {
      sessionStorage.removeItem('token');
      this.$router.replace('/login');
      this.$message({ message: '退出登录', type: 'info' });
    }
  }
}
</script>

<style lang="less" scoped>

</style>
