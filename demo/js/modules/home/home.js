// 创建home组件
define(["tools/util","filter/filter"], function (Util) {
	// 定义组件
	var HomeComponent = Vue.extend({
		// template: '<h1>home</h1>'
		template:Util.tpl("tpl_home"),
		data:function(){
			return {
				type:[
					{id: 1, title: '美食', url: '01.png'},
					{id: 2, title: '电影', url: '02.png'},
					{id: 3, title: '酒店', url: '03.png'},
					{id: 4, title: '休闲娱乐', url: '04.png'},
					{id: 5, title: '外卖', url: '05.png'},
					{id: 6, title: 'KTV', url: '06.png'},
					{id: 7, title: '周边游', url: '07.png'},
					{id: 8, title: '丽人', url: '08.png'},
					{id: 9, title: '小吃快餐', url: '09.png'},
					{id: 10, title: '火车票', url: '10.png'}
				],
				ad:[],
				list:[]
			}	
		},
		created:function(){
			var me=this;
			Util.ajax("data/home.json",function(res){
				if(res&&res.errno===0){
					// console.log(res);
					me.ad=res.data.ad;
					me.$set('list',res.data.list);
				}
			})
		}
	})

	// 将组件作为接口暴漏
	return HomeComponent;
})