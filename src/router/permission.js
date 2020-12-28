import router from './router'
import NProgress from 'nprogress'
import getToken from '../utils/cookies'

router.beforeEach(async(to, from, next) => {
    NProgress.start() // 打开加载进度条

    // 获取token
    const Token = getToken()

    if (Token) {  // 当token存在，continue
        if (to.path === '/login') {
            next( { path: '/' } )
        } else {
            next()
        }
    } else {  // 当token不存在，跳转到登录页面
        next('/login')
    }
    NProgress.done() // 关闭加载进度条
})