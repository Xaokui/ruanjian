// 定义核心内容组件
module.exports = React.createClass({
	// 渲染视图
	createList: function () {
		return this.props.data.map(function (obj, index) {
			return (
				<li key={index} id={obj.id}>
					<h2>{obj.title}</h2>
					<p>{obj.content}</p>
				</li>
			)
		})
	},
	render: function () {
		// 传递进来了data属性数据
		// console.log(this.props.data)
		return (
			<div className="main-content">
				<ul>{this.createList()}</ul>
			</div>
		)
	}
})