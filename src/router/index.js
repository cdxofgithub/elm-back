import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/pages/login')), 'login')
const manage = r => require.ensure([], () => r(require('@/pages/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/pages/home')), 'home');
const addShop = r => require.ensure([], () => r(require('@/pages/addShop')), 'addShop');

export default new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/manage',
      component: manage,
      children: [
        {
          path: '',
          component: home,
          meat: []
        },
        {
          path: '/addShop',
          component: addShop,
          meta: ['添加数据', '添加商铺']
        }
      ]
    }
  ]
})
