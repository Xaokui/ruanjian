define('js/component/articlePart.jsx', [], function(require, exports, module) {

  // 定义核心内容组件
  "use strict";
  
  module.exports = React.createClass({
  	displayName: "exports",
  
  	// 渲染视图
  	createList: function createList() {
  		return this.props.data.map(function (obj, index) {
  			return React.createElement(
  				"li",
  				{ key: index, id: obj.id },
  				React.createElement(
  					"h2",
  					null,
  					obj.title
  				),
  				React.createElement(
  					"p",
  					null,
  					obj.content
  				)
  			);
  		});
  	},
  	render: function render() {
  		// 传递进来了data属性数据
  		// console.log(this.props.data)
  		return React.createElement(
  			"div",
  			{ className: "main-content" },
  			React.createElement(
  				"ul",
  				null,
  				this.createList()
  			)
  		);
  	}
  });

});