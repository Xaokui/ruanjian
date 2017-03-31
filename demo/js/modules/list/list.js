// 定义列表页组件
define(["tools/util"], function (Util) {
	// 定义列表组件
	var ListComponent = Vue.extend({
		props:["key"],
		template:Util.tpl("tpl_list"),
		data:function(){
			return {
				type:[
					{value: '价格排序', key: 'price'},
					{value: '销量排序', key: 'sales'},
					{value: '好评排序', key: 'evaluate'},
					{value: '优惠排序', key: 'discount'}
				],
				list:[],
				other:[]
			}
		},
		created:function(){
			var me=this;
			var query=me.$parent.query;
			var str='';
			// console.log(query[0]);
			if(query[0]&&query[1]){
				str+='?'+query[0]+'='+query[1];
			}
			Util.ajax("data/list.json"+str,function(res){
				if(res&&res.errno===0){
					me.list=res.data.slice(0,3);
					me.other=res.data.slice(3);
				}
			})
		},
		methods:{
			loadMore:function(){
				this.list=[].concat(this.list,this.other);
				this.other=[];
			},
			changeType:function(key){
				if(key==="discount"){
					this.list=this.list.sort(function(a,b){
						var aDiscount=a.orignPrice-a.price;
						var bDiscount=b.orignPrice-b.price;
						return aDiscount-bDiscount;
					})
				}else{
					this.list=this.list.sort(function(a,b){
						return a[key]-b[key];
					})
				}
			}
		}
	})

	// 将组件作为接口暴漏
	return ListComponent;
})