define('js/component/asidePart.jsx', [], function(require, exports, module) {

  // 定义侧边导航栏
  "use strict";
  
  module.exports = React.createClass({
  	displayName: "exports",
  
  	// 渲染导航列表
  	createList: function createList() {
  		return this.props.data.map(function (obj, index) {
  			return React.createElement(
  				"li",
  				{ key: index },
  				React.createElement(
  					"a",
  					{ href: '#' + obj.id },
  					obj.title
  				)
  			);
  		});
  	},
  	render: function render() {
  
  		return React.createElement(
  			"div",
  			{ className: "main-aside" },
  			React.createElement(
  				"ul",
  				null,
  				this.createList()
  			)
  		);
  	}
  });

});