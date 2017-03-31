// 定义vue实例化对象模块
define(['modules/home/home', 'modules/list/list', 'modules/product/product','tools/util','modules/login/login','modules/resgit/resgit'], function (HomeComponent, ListComponent, ProductComponent,Util,LoginComponent,ResgitComponent) {
	// 我们要引入这些组件类，并将这些组件注册到页面中
	// 注册这些组件
	Vue.component('home', HomeComponent);
	Vue.component('list', ListComponent);
	Vue.component('product', ProductComponent);
	Vue.component('login',LoginComponent);
	Vue.component('resgit',ResgitComponent);
	// 实例化vue对象
	var app = new Vue({
		el: '#app',
		data: {
			view: 'product',
			query:[],
			seachKey:"",
			mykey:''
		},
		methods:{
			goSearch:function(){
				this.mykey=this.seachKey;
			},
			goBack:function(){
				history.go(-1);
			}
		}
	})
	return app;
})