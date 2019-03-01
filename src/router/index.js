import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import home from '@/components/home'
import sys from '@/components/sys'

Vue.use(Router)

export default new Router({
	mode:'history',
	routes: [
		{
		  path: '/',
		  name: 'index',
		  component: index,
		  children:[
			  {
				path: '/home',
				name: 'home',
				component: home
			  },
			  {
				path: '/sys',
				name: 'sys',
				component: sys
			  }
		  ]
		}
	]
});