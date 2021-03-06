// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import '@/assets/css/common.less'
import Common from '@/assets/js/common'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(Common); //引用自定义公共common.js

Vue.config.productionTip = false;

//路由拦截
router.beforeEach((to,form,next)=>{
	console.log(to)
	console.log(form)
	next();
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
