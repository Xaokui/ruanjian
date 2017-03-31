define('js/page/page.jsx', ['js/component/bannerPart.jsx', 'js/component/contentPart.jsx'], function(require, exports, module) {

  // 引入组件
  'use strict';
  
  var BannerPart = require('js/component/bannerPart.jsx');
  var ContentPart = require('js/component/contentPart.jsx');
  
  // 抽象page组件
  module.exports = React.createClass({
  	displayName: 'exports',
  
  	mixins: [Util],
  	// 初始化状态
  	getInitialState: function getInitialState() {
  		return {
  			data: []
  		};
  	},
  	// 渲染输出虚拟DOM
  	render: function render() {
  		return React.createElement(
  			'section',
  			{ className: 'section', style: { display: this.props.show } },
  			React.createElement(BannerPart, { title: this.props.title, intro: this.props.intro }),
  			React.createElement(ContentPart, { data: this.state.data })
  		);
  	},
  	// 组件构建完成请求数据
  	componentDidMount: function componentDidMount() {
  		var me = this;
  		// 请求数据, url抽象出来，在创建组件时候提供
  		this.getData(this.props.url, function (res) {
  			// 将数据存储在状态中
  			me.setState({
  				data: res
  			});
  		});
  	}
  });

});