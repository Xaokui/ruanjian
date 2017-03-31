// 定义列表页组件
define(["tools/util"], function (Util) {
	// 定义列表组件
	var LoginComponent = Vue.extend({
		template:Util.tpl("tpl_login")
		});
	// 将组件作为接口暴漏
	return LoginComponent;
})