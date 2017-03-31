// 在子组件的input中输入数据，在父组件中显示结果
var Child = React.createClass({
	// 输入input时触发的事件
	changeInput: function (e) {
		// console.log(e.target.value)
		// 子作用域
		console.log(this)
		// 执行父组件中的方法
		this.props.sendMsgToParent(e.target.value)
	},
	render: function() {
		return (
			<div>
				{/*<input type="text" onChange={this.changeInput}/>*/}
				<input type="text" onChange={this.props.sendMsgToParent}/>
			</div>
		)
	}
})
// 父组件
var Parent = React.createClass({
	// 初始化状态
	getInitialState: function() {
		return {
			msg: ''
		}
	},
	// 获取子组件中数据
	getChildMsg: function (msg) {
		// 如果传递的方法直接赋值给子组件的回调函数，此时子组件的回调函数就是父组件了,此时msg是一个事件对象
		msg = msg.target.value
		console.log('parent ', msg)
		console.log(this)
		// 在父组件中更新状态
		this.setState({
			msg: msg
		})
	},
	render: function () {
		return (
			<div>
				{/*引入子组件*/}
				<Child sendMsgToParent={this.getChildMsg}></Child>
				<h1>{this.state.msg}</h1>
			</div>
		)
	}
})

// 渲染父组件
ReactDOM.render(<Parent></Parent>, app)