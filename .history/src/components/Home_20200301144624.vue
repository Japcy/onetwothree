<template>
  <div class="home">
    <el-container class="home-container">
      <!-- 头部区域 -->
      <el-header>
        <div>
          <img src="../assets/img/favicon.png" alt />
          <span>XX后台管理系统</span>
        </div>
        <el-button type="info" @click="logout">退出</el-button>
      </el-header>
      <!-- 主体内容区 -->
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="200px">
          <div class="toggle" @click="toggleCollapse">|||</div>
          <!-- 侧边栏菜单 -->
          <el-menu :collapse="toggleCollapse" background-color="#333744" text-color="#fff" active-text-color="#409eff" unique-opened>
            <!-- 一级菜单 -->
            <el-submenu :index="item.id + ''" v-for="item in menulist" :key="item.id">
              <!-- 一级菜单模板区域 -->
              <template slot="title">
                <i class="icon" :class="iconObj[item.id]"></i>
                <span>{{item.authName}}</span>
              </template>
              <!-- 二级菜单 -->
              <el-menu-item index="sunItem.id + ''" v-for="sunItem in item.children" :key="sunItem.id">
                <template slot="title">
                  <i class="icon el-icon-menu"></i>
                  <span>{{sunItem.authName}}</span>
                </template>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 右侧内容主题 -->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'home',
  data () {
    return {
      // 菜单数据
      menulist: [],
      iconObj: {
        125: 'el-icon-s-custom',
        103: 'el-icon-warning',
        101: 'el-icon-s-goods',
        102: 'el-icon-s-order',
        145: 'el-icon-s-data'
      }
    }
  },
  created () {
    this.getMenuList()
  },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    // 获取菜单列表
    async getMenuList () {
      const { data: res } = await this.$http.get('menus')
      console.log(res)
      if (res.meta.status !== 200) return this.$message.error(res.meta.rsg)
      this.menulist = res.data
    },
    // 左侧菜单展开与折叠
    toggleCollapse () {

    }
  }
}
</script>

<style lang='less' scoped>
.home {
  height: 100%;
}

.home-container {
  height: 100%;
}

.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}

.el-aside {
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}

.el-main {
  background-color: #eaedf1;
}

.icon {
  margin-right: 10px;
}

.toggle {
background-color: #4a5064;
font-size: 10px;
line-height: 24px;
color: #fff;
text-align: center;
letter-spacing: 0.4em;
cursor: pointer;

}
</style>
