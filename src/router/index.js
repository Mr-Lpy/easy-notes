/**
 * Created by lpy on 2017/5/22.
 */
import Vue from 'vue';
import Router from 'vue-router';
import App from '../App';

Vue.use(Router);

export default new Router ({
  routes: [
    {
      path: '/index',
      component: App
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
});
