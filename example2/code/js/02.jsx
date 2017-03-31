// 子组件输入表单，兄弟组件显示
// 创建子组件
var Child = React.createClass({
	render: function () {
		return (
			<div>
				<input type="text" onChange={this.props.changeMsg} />
			</div>
		)
	}
})
// 兄弟组件
var Brother = React.createClass({
	render: function () {
		return (
			<div>
				<h1>{this.props.msg}</h1>
			</div>
		)
	}
})

// 父组件
var Parent = React.createClass({
	// 初始化状态
	getInitialState: function() {
		return {
			childMsg: ''
		}
	},
	// 定义更新msg的方法
	updateMsg: function (e) {
		// 作用域是父组件，因此直接更细状态
		this.setState({
			childMsg: e.target.value
		})
	},
	render: function () {
		return (
			<div>
				{/*实现通信，一个传递方法，一个传递数据*/}
				<Child changeMsg={this.updateMsg}></Child>
				<Brother msg={this.state.childMsg}></Brother>
			</div>
		)
	}
})

// 渲染父组件
ReactDOM.render(<Parent></Parent>, app)
