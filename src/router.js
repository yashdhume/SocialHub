import Vue from 'vue'
import Router from 'vue-router'
import SplashPage from './views/SplashPage'
import RouterTemp from "@/views/RouterTemp";
Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'SplashPage',
            component: SplashPage
        },
        {
            path: '/routerTemp',
            name: 'RouterTemp',
            component: RouterTemp
        },
    ]
})
