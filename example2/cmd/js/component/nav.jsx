// 创建导航组件
module.exports = React.createClass({
	// 初始化状态
	getInitialState: function() {
		var cls = {};
		// 根据属性值来决定显示那个导航
		cls[this.props.type] = 'choose'
		return {
			cls: cls
		}
	},
	// 获取点击a标签data-id，并更改a标签的样式
	changeNav: function (e) {
		// 获取id
		var id = e.target.getAttribute('data-id')
		// 将其他的类删除，为该元素添加类
		var cls = {};
		cls[id] = 'choose';
		// 更新状态
		this.setState({
			cls: cls
		})
		// 这个消息要传递App父组件，让他去更新页面
		this.props.changeNavItem(id);
	},
	render: function () {
		// 缓存状态数据
		var cls = this.state.cls;
		return (
			<div className="header navbar navbar-static-top">
				<div className="container">
					<div className="navbar-header">
						<a data-id="def" onClick={this.changeNav} className="navbar-brand">Bootstrap</a>
					</div>
					<ul className="nav navbar-nav nav-pills pull-right">
						<li>
							<a href="">高新工作</a>
						</li>
						<li>
							<a href="">优站精选</a>
						</li>
						<li>
							<a href="">官方博客</a>
						</li>
					</ul>
					<ul className="nav navbar-nav nav-pills">
						<li className={cls.start}>
							<a data-id="start" onClick={this.changeNav}>起步</a>
						</li>
						<li className={cls.css}>
							<a data-id="css" onClick={this.changeNav}>全局CSS样式</a>
						</li>
						<li className={cls.component}>
							<a data-id="component" onClick={this.changeNav}>组件</a>
						</li>
						<li className={cls.javascript}>
							<a data-id="javascript" onClick={this.changeNav}>Javascript插件</a>
						</li>
						<li className={cls.maker}>
							<a data-id="maker" onClick={this.changeNav}>定制</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
})