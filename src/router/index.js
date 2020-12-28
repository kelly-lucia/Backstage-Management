import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import layout from '../layout'


export const constantRoutes = [
    {
        path: '/',
        component: () => import('@/views/login/index'),
        name: 'login',
        meta: { title: '登录' }
    },
    {
        path: '/home',
        component: layout,
        redirect: '/home',
        children: [
            {
            path: 'home',
            component: () => import('@/views/home/index'),
            name: 'home',
            meta: { title: '首页' }
            }
        ]
    },
    {
        path: '/404',
        component: () => import('@/views/error-page/index'),
        name: '404',
        meta: { title: '404' }
    }
]

export const asyncRoutes = [
    {
        path: '/echart',
        component: layout,
        redirect: '/echart',
        children: [
            {
            path: 'echart',
            component: () => import('@/views/echart/index'),
            name: 'echart',
            meta: { title: '图表' }
            }
        ]
    },
    {
        path: '/table',
        component: layout,
        redirect: '/table',
        children: [
            {
            path: 'table',
            component: () => import('@/views/table/index'),
            name: 'table',
            meta: { title: '表格' }
            }
        ]
    },
    {
        path: '/special-css',
        component: layout,
        redirect: '/special-css',
        children: [
            {
            path: 'special-css',
            component: () => import('@/views/special-css/index'),
            name: 'special-css',
            meta: { title: '表格' }
            }
        ]
    },
]

const createRouter = () => new Router({
    // scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })
  
  const router = createRouter()

  export default router