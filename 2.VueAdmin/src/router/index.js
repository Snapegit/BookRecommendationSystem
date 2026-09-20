	import {
		createRouter,
		createWebHashHistory
	} from 'vue-router'
	import address from '@/views/address/list'
	import yonghu from '@/views/yonghu/list'
	import tushuleixing from '@/views/tushuleixing/list'
	import tushujieyue from '@/views/tushujieyue/list'
	import orders from '@/views/orders/list'
	import storeup from '@/views/storeup/list'
	import config from '@/views/config/list'
	import users from '@/views/users/list'
	import discusstushuxinxi from '@/views/discusstushuxinxi/list'
	import tushuxinxi from '@/views/tushuxinxi/list'

export const routes = [{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},{
		path: '/',
		name: '首页',
		component: () => import('../views/index'),
		children: [{
			path: '/',
			name: '首页Home',
			component: () => import('../views/HomeView.vue'),
			meta: {
				affix: true
			}
		}, {
			path: '/updatepassword',
			name: '修改密码',
			component: () => import('../views/updatepassword.vue')
		}
		
		,{
			path: '/address',
			name: '地址',
			component: address
		}
		,{
			path: '/yonghu',
			name: '用户',
			component: yonghu
		}
		,{
			path: '/tushuleixing',
			name: '图书类型',
			component: tushuleixing
		}
		,{
			path: '/tushujieyue',
			name: '图书借阅',
			component: tushujieyue
		}
		,{
			path: '/orders',
			name: '订单管理',
			component: orders
		}
		,{
			path: '/storeup',
			name: '我的收藏',
			component: storeup
		}
		,{
			path: '/config',
			name: '轮播图',
			component: config
		}
		,{
			path: '/users',
			name: '管理员',
			component: users
		}
		,{
			path: '/discusstushuxinxi',
			name: '图书信息评论',
			component: discusstushuxinxi
		}
		,{
			path: '/tushuxinxi',
			name: '图书信息',
			component: tushuxinxi
		}
		]
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router
