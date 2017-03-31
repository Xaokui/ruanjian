// 定义产品组件
define(["tools/util"], function (Util) {
	// 定义组件类
	var ProductComponent = Vue.extend({
		template:Util.tpl("tpl_product"),
		data:function(){
			return {
				data:{}
			}
		},
		created:function(){
			var me=this;
			var query=me.$parent.query;
			var str="";
			if(query[0]){
				str="?id"+query[0]
			}
			Util.ajax("data/product.json"+str,function(res){
				if(res&&res.errno===0){
					me.data=res.data;
				}
			})
		}
	})

	// 暴漏接口
	return ProductComponent;
})