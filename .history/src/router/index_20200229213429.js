import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫，接受三个参数：to将要访问的路径，from从哪个路径跳转而来的，next放行后要执行的函数
router.beforeEach((to, from, next) => {
  // 如果要跳转到登录页，直接放行
  if (to.path === '/login') return next()
  // 如果访问其他需要登录权限的页面，验证token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
})

export default router
