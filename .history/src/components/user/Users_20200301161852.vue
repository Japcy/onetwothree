<template>
  <div class="user">
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区 -->
    <el-card>123</el-card>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'user',
  data () {
    return {}
  },
  components: {},
  methods: {}
}
</script>

<style scoped>
</style>
