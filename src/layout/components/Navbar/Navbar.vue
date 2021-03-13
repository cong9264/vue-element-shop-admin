<template>
  <div class="navbar">
    <h2 class="title">电商后台管理系统</h2>
    <div class="right-menu">
      <el-dropdown placement="bottom-start" trigger="click">
        <div class="avatar">
          <img class="user-avatar" src="@/assets/logo.png" alt="">
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <router-link to="/">首页</router-link>
          </el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">
            退出
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
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
.navbar {
  height: 50px;
  line-height: 50px;
  background-color: #008c8c;

  .title {
    float: left;
    margin: 0;
  }

  .right-menu {
    float: right;
    height: 100%;
  }

  .avatar {
    position: relative;
    margin-right: 30px;

    &:focus {
      border: none;
      outline: none;
    }

    .user-avatar {
      width: 40px;
      height: 40px;
      background-color: #fff;
      border-radius: 10px;
      margin-top: 5px;
      cursor: pointer;
    }

    .el-icon-caret-bottom {
      position: absolute;
      right: -20px;
      bottom: 20px;
      cursor: pointer;
    }
  }
}


</style>
