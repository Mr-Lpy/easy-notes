/**
 * Created by lpy on 2017/5/22.
 */
import Vue from 'vue';
import Router from 'vue-router';

import Login from '../components/Login/Login.vue';
import Main from '../components/Main/Main.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/Login',
            component: Login
        },
        {
            path: '/Main',
            component: Main
        },
        {
            path: '*',
            redirect: '/Login'
        }
    ]
});
