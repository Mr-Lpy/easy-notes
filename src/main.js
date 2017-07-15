// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import VueResource from 'vue-resource';
import './assets/css/styles.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

Vue.use(ElementUI);
Vue.use(VueResource);
Vue.use(Buefy);
Vue.config.productionTip = false;

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
