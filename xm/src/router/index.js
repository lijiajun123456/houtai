import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'

function fun(url) {
  return store.state.user.menus_url.some(i => i == url)
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: () => import('../pages/login/login')
    },
    {
      path: '/',
      component: () => import('../pages/index/index'),
      children: [
        {
          path: 'menu',
          name: '菜单',
          component: () => import('../pages/menu/menu.vue'),
          beforeEnter(to, from, next) {
            fun('menu') ? next() : next('/')
          }
        },
        {
          path: 'home',
          name: '首页',
          component: () => import('../pages/home/home.vue'),

        },
        {
          path: 'role',
          name: '角色',
          component: () => import('../pages/role/role'),
          beforeEnter(to, from, next) {
            fun('role') ? next() : next('/')
          }
        },
        {
          path: 'manager',
          name: '管理员',
          component: () => import('../pages/manager/manager'),
          beforeEnter(to, from, next) {
            fun('manager') ? next() : next('/')
          }
        },
        {
          path: 'category',
          name: '商品分类',
          component: () => import('../pages/category/category'),

        },
        {
          path: '',
          redirect: 'home'
        }

      ]
    },
    {
      path: '*',
      redirect: '/login'
    }

  ]
})
