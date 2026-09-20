import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views'
import home from '../views/pages/home.vue'
import login from '../views/pages/login.vue'
import yonghuList from '@/views/pages/yonghu/list'
import yonghuDetail from '@/views/pages/yonghu/formModel'
import yonghuAdd from '@/views/pages/yonghu/formAdd'
import yonghuRegister from '@/views/pages/yonghu/register'
import yonghuCenter from '@/views/pages/yonghu/center'
import tushuleixingList from '@/views/pages/tushuleixing/list'
import tushuleixingDetail from '@/views/pages/tushuleixing/formModel'
import tushuleixingAdd from '@/views/pages/tushuleixing/formAdd'
import tushuxinxiList from '@/views/pages/tushuxinxi/list'
import tushuxinxiDetail from '@/views/pages/tushuxinxi/formModel'
import tushuxinxiAdd from '@/views/pages/tushuxinxi/formAdd'
import storeupList from '@/views/pages/storeup/list'
import addressList from '@/views/pages/shop_address/list'
import cartList from '@/views/pages/shop_order/cart'
import tushujieyueList from '@/views/pages/tushujieyue/list'
import tushujieyueDetail from '@/views/pages/tushujieyue/formModel'
import tushujieyueAdd from '@/views/pages/tushujieyue/formAdd'
import order_confirm from '@/views/pages/shop_order/confirm'
import ordersList from '@/views/pages/shop_order/list'

const routes = [{
		path: '/',
		redirect: '/index/home'
	},
	{
		path: '/index',
		component: index,
		children: [{
			path: 'home',
			component: home
		}
		, {
			path: 'yonghuList',
			component: yonghuList
		}, {
			path: 'yonghuDetail',
			component: yonghuDetail
		}, {
			path: 'yonghuAdd',
			component: yonghuAdd
		}
		, {
			path: 'yonghuCenter',
			component: yonghuCenter
		}
		, {
			path: 'tushuleixingList',
			component: tushuleixingList
		}, {
			path: 'tushuleixingDetail',
			component: tushuleixingDetail
		}, {
			path: 'tushuleixingAdd',
			component: tushuleixingAdd
		}
		, {
			path: 'tushuxinxiList',
			component: tushuxinxiList
		}, {
			path: 'tushuxinxiDetail',
			component: tushuxinxiDetail
		}, {
			path: 'tushuxinxiAdd',
			component: tushuxinxiAdd
		}
		, {
			path: 'storeupList',
			component: storeupList
		}
		, {
			path: 'addressList',
			component: addressList
		}
		, {
			path: 'cartList',
			component: cartList
		}
		, {
			path: 'tushujieyueList',
			component: tushujieyueList
		}, {
			path: 'tushujieyueDetail',
			component: tushujieyueDetail
		}, {
			path: 'tushujieyueAdd',
			component: tushujieyueAdd
		}
		, {
			path: 'order_confirm',
			component: order_confirm
		}
		, {
			path: 'ordersList',
			component: ordersList
		}
		]
	},
	{
		path: '/login',
		component: login
	}
	,{
		path: '/yonghuRegister',
		component: yonghuRegister
	}
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
