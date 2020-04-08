import Vue from 'vue'
import Router from 'vue-router'
import SplashPage from './views/SplashPage'
import SearchPage from "@/views/SearchPage";
import LoginPage from "@/views/LoginPage";
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
            path: '/searchPage',
            name: 'SearchPage',
            component: SearchPage
        },
        {
            path: '/loginPage',
            name: 'LoginPage',
            component: LoginPage
        },
    ]
})
