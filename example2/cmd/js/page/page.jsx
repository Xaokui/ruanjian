// 引入组件
var BannerPart = require('../component/bannerPart');
var ContentPart = require('../component/contentPart');
var Util = require('../mixins/util')

// 抽象page组件
module.exports = React.createClass({
	mixins: [Util],
	// 初始化状态
	getInitialState: function() {
		return {
			data: []
		}
	},
	// 渲染输出虚拟DOM
	render: function () {
		return (
			<section className="section" style={{display: this.props.show}}>
				<BannerPart title={this.props.title} intro={this.props.intro}></BannerPart>
				<ContentPart data={this.state.data}></ContentPart>
			</section>
		)
	},
	// 组件构建完成请求数据
	componentDidMount: function() {
		var me = this;
		// 请求数据, url抽象出来，在创建组件时候提供
		this.getData(this.props.url, function (res) {
			// 将数据存储在状态中
			me.setState({
				data: res
			})
		})
	}
})