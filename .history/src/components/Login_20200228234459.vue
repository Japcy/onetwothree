<template>
  <div class="login">
    <div class="login-box">
      <div class="avatar">
        <img src="../assets/img/logo.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'login',
  data () {
    return {}
  },
  components: {},
  methods: {}
}
</script>

<style lang="less" scoped>
.login {
  background-color: #2b4b6b;
  height: 100%;
}
.login-box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar {
    width: 130px;
    height: 130px;
    border: 5px solid #eee;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
      border-radius: 50%;
    }
  }
}
</style>
