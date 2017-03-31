define('js/component/bannerPart.jsx', [], function(require, exports, module) {

  // 定义banner组件
  "use strict";
  
  module.exports = React.createClass({
  	displayName: "exports",
  
  	render: function render() {
  		return React.createElement(
  			"div",
  			{ className: "banner" },
  			React.createElement(
  				"div",
  				{ className: "container" },
  				React.createElement(
  					"h1",
  					null,
  					this.props.title
  				),
  				React.createElement(
  					"p",
  					null,
  					this.props.intro
  				)
  			)
  		);
  	}
  });

});