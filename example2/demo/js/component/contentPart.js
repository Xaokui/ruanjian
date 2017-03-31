define('js/component/contentPart.jsx', ['js/component/articlePart.jsx', 'js/component/asidePart.jsx'], function(require, exports, module) {

  // 引入组件
  'use strict';
  
  var ArticlePart = require('js/component/articlePart.jsx');
  var AsidePart = require('js/component/asidePart.jsx');
  
  // 定义ContentPart组件
  module.exports = React.createClass({
  	displayName: 'exports',
  
  	// 设置默认属性数据
  	getDefaultProps: function getDefaultProps() {
  		return {
  			data: []
  		};
  	},
  	render: function render() {
  		return React.createElement(
  			'div',
  			{ className: 'main' },
  			React.createElement(
  				'div',
  				{ className: 'container clearfix' },
  				React.createElement(ArticlePart, { data: this.props.data }),
  				React.createElement(AsidePart, { data: this.props.data })
  			)
  		);
  	}
  });

});