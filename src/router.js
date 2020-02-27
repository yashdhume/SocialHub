import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import RouterTemp from "@/views/RouterTemp";
Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/routerTemp',
            name: 'RouterTemp',
            component: RouterTemp
        },
    ]
})
