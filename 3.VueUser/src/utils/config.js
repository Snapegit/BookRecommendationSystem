const config = {
    get() {
        return {
            url : process.env.VUE_APP_BASE_API_URL + process.env.VUE_APP_BASE_API + '/',
            name: process.env.VUE_APP_BASE_API,
			menuList:[
				{
					name: '图书信息管理',
					icon: '${frontMenu.fontClass}',
					child:[
						{
							name:'图书信息',
							url:'/index/tushuxinxiList'
						},
					]
				},
				{
					name: '购物车管理',
					icon: '${frontMenu.fontClass}',
					child:[
						{
							name:'购物车',
							url:'/index/cartList'
						},
					]
				},
			]
        }
    },
    getProjectName(){
        return {
            projectName: "图书推荐系统的设计与实现"
        } 
    }
}
export default config
