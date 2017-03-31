// 引入组件
var ArticlePart = require('articlePart');
var AsidePart = require('asidePart')

// 定义ContentPart组件
module.exports = React.createClass({
	// 设置默认属性数据
	getDefaultProps: function() {
		return {
			data: []
		}
	},
	render: function () {
		return (
			<div className="main">
				<div className="container clearfix">
					<ArticlePart data={this.props.data}></ArticlePart>
					<AsidePart data={this.props.data}></AsidePart>
				</div>
			</div>
		)
	}
})