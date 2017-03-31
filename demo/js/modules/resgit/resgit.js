// 定义列表页组件
define(["tools/util"], function (Util) {
	// 定义列表组件
	var ResgitComponent = Vue.extend({
		template:Util.tpl("tpl_resgit")

		});
	// 将组件作为接口暴漏
	return ResgitComponent;
})