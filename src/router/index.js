import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import demo from '@/page/demo/demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: index
    },
    {
      path: '/demo',
      name: '演示',
      component: demo
    }
  ]
})
