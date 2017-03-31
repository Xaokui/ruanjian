define('js/component/nav.jsx', [], function(require, exports, module) {

  // 创建导航组件
  'use strict';
  
  module.exports = React.createClass({
  	displayName: 'exports',
  
  	// 初始化状态
  	getInitialState: function getInitialState() {
  		var cls = {};
  		// 根据属性值来决定显示那个导航
  		cls[this.props.type] = 'choose';
  		return {
  			cls: cls
  		};
  	},
  	// 获取点击a标签data-id，并更改a标签的样式
  	changeNav: function changeNav(e) {
  		// 获取id
  		var id = e.target.getAttribute('data-id');
  		// 将其他的类删除，为该元素添加类
  		var cls = {};
  		cls[id] = 'choose';
  		// 更新状态
  		this.setState({
  			cls: cls
  		});
  		// 这个消息要传递App父组件，让他去更新页面
  		this.props.changeNavItem(id);
  	},
  	render: function render() {
  		// 缓存状态数据
  		var cls = this.state.cls;
  		return React.createElement(
  			'div',
  			{ className: 'header navbar navbar-static-top' },
  			React.createElement(
  				'div',
  				{ className: 'container' },
  				React.createElement(
  					'div',
  					{ className: 'navbar-header' },
  					React.createElement(
  						'a',
  						{ 'data-id': 'def', onClick: this.changeNav, className: 'navbar-brand' },
  						'Bootstrap'
  					)
  				),
  				React.createElement(
  					'ul',
  					{ className: 'nav navbar-nav nav-pills pull-right' },
  					React.createElement(
  						'li',
  						null,
  						React.createElement(
  							'a',
  							{ href: '' },
  							'高新工作'
  						)
  					),
  					React.createElement(
  						'li',
  						null,
  						React.createElement(
  							'a',
  							{ href: '' },
  							'优站精选'
  						)
  					),
  					React.createElement(
  						'li',
  						null,
  						React.createElement(
  							'a',
  							{ href: '' },
  							'官方博客'
  						)
  					)
  				),
  				React.createElement(
  					'ul',
  					{ className: 'nav navbar-nav nav-pills' },
  					React.createElement(
  						'li',
  						{ className: cls.start },
  						React.createElement(
  							'a',
  							{ 'data-id': 'start', onClick: this.changeNav },
  							'起步'
  						)
  					),
  					React.createElement(
  						'li',
  						{ className: cls.css },
  						React.createElement(
  							'a',
  							{ 'data-id': 'css', onClick: this.changeNav },
  							'全局CSS样式'
  						)
  					),
  					React.createElement(
  						'li',
  						{ className: cls.component },
  						React.createElement(
  							'a',
  							{ 'data-id': 'component', onClick: this.changeNav },
  							'组件'
  						)
  					),
  					React.createElement(
  						'li',
  						{ className: cls.javascript },
  						React.createElement(
  							'a',
  							{ 'data-id': 'javascript', onClick: this.changeNav },
  							'Javascript插件'
  						)
  					),
  					React.createElement(
  						'li',
  						{ className: cls.maker },
  						React.createElement(
  							'a',
  							{ 'data-id': 'maker', onClick: this.changeNav },
  							'定制'
  						)
  					)
  				)
  			)
  		);
  	}
  });

});