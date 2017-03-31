// 定义侧边导航栏
module.exports = React.createClass({
	// 渲染导航列表
	createList: function() {
		return this.props.data.map(function (obj, index) {
			return (
				<li key={index}>
					<a href={'#' + obj.id}>{obj.title}</a>
				</li>
			)
		})
	},
	render: function () {

		return (
			<div className="main-aside">
				<ul>{this.createList()}</ul>
			</div>
		)
	}
})