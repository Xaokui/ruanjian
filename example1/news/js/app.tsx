'use strict'
// 在ES6中我们为了使用某个对象中的方法以及属性方便我们可以解构对象
// 一般解构库中的属性方法，我们不要再修改他们，所以通常定义成常量更安全
const { Component } = React;
const { render } = ReactDOM;

// 定义工具方法
let Util = {
	/**
	 * 发送异步请求
	 * @url 	请求的地址
	 * @fn 		请求成功时候的回调函数
	 **/
	ajax(url, fn) {
		// 实例化xhr对象
		let xhr = new XMLHttpRequest();
		// 监听状态变化
		xhr.onreadystatechange = () => {
			// 监听数据请求完毕
			if (xhr.readyState === 4) {
				// 判断状态码
				if (xhr.status === 200) {
					// 将数据转化成json字符串
					fn && fn(JSON.parse(xhr.responseText))
				}
			}
		}
		// 打开请求
		xhr.open('GET', url, true);
		// 发送数据
		xhr.send(null)
	},
	/**
	 * 将对象转化成query的形式
	 * @obj 	转化的对象 {color:red, num:100}
	 * return 	?color=red&num=100
	 **/
	objToQuery(obj) {
		let result = '';
		// 遍历对象，转化成json
		for (var i in obj) {
			result += '&' + i + '=' + obj[i]
		}
		// 去除最后一个&
		return '?' + result.slice(1)
	}
}

// 定义头部组件
class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="arrow" onClick={this.props.changePage}><span></span><span className="blue"></span></div>
				<div className="login">登录</div>
				<h1>爱创课堂新闻平台</h1>
			</div>
		)
	}
}

// 首页
class Home extends Component {
	// 子组件中定义事件回调函数
	showDetail(id) {
		// 2 触发点击交互的时候，要获取这个元素对应的新闻的id
		// console.log(id)
		// 将id 传递给父组件
		this.props.parentShowDetail(id)
	}
	// 创建列表方法
	createList() {
		// 遍历属性数据，渲染列表
		// 1 在列表页组件中为每一个元素绑定事件
		return this.props.data.map((value, index) => (
			<li key={index} onClick={this.showDetail.bind(this, value.id)}>
				<img src={value.img} alt="" />
				<div className="intro">
					<h2>{value.title}</h2>
					<p>{value.content}<span className="comment-num">{'评论：' + value.comment}</span></p>
				</div>
			</li>
		))
	}
	render() {
		return (
			<section className="home" style={{display: this.props.show ? 'block' : 'none'}}>
				<ul>{this.createList()}</ul>
			</section>
		)
	}
}
// 详情页
// 1 为查看更多按钮绑定点击事件
// 2 在事件回调函数中获取新闻的id
// 3 将id传递给父组件
class Detail extends Component {
	// 事件回调函数
	showComment(id) {
		// console.log(id, this)
		// 执行父组件传递的方法
		this.props.parentShowComment(id)
	}
	render() {
		// console.log(this.props.data)
		// 缓存数据
		let data = this.props.data;
		// 定义content
		let content = {
			__html: data.content
		}
		return (
			<section className="detail" style={{display: this.props.show ? 'block' : 'none'}}>
				<h1>{data.title}</h1>
				<p><span>{data.time}</span><span className="comment-num">{'评论：' + data.comment}</span></p>
				<img src={data.img} alt="" />
				<p dangerouslySetInnerHTML={content}></p>
				<div className="btn" onClick={this.showComment.bind(this, data.id)}>查看更多评论</div>
			</section>
		)
	}
}
// 评论页
// 1 为提交按钮绑定事件
// 2 回调函数中判断文本框中内容是否合法
// 3 创建提交的数据
// 4 将数据发送给服务器端
// 5 将提交的评论显示在页面中
// 6 清空文本框，提示成功
class Comments extends Component {
	// 定义构造函数，将属性数据转化成状态数据
	constructor(props) {
		super(props)
		// 将属性数据转化成状态数据
		// 这里的赋值相当于创建期
		this.state = {
			list: props.data.list
		}
	}
	// 存在期不会执行构造函数了，所以我们要在存在期更新状态
	componentWillReceiveProps(props) {
		// console.log(props)
		this.setState({
			list: props.data.list
		})
	}
	// 渲染列表
	createList() {
		return this.state.list.map((value, index) => {
			return (
				<li key={index}>
					<h3>{value.user}</h3>
					<p>{value.content}</p>
					<span>{value.time}</span>
				</li>
			)
		})
	}
	// 提交按钮的点击事件的回调函数
	submitData() {
		// 访问多行文本框
		let value = this.refs.userInput.value
		// console.log(value)
		// 必须有内容
		if (/^\s*$/.test(value)) {
			// 不合法就返回，并提示用户
			alert('输入的内容不合法')
			return;
		}
		// 创建提交的数据
		let date = new Date();
		let data = {
			user: '雨夜清荷',
			content: value,
			// 日期
			time: '刚刚 ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
		}
		// 数据提交给服务器
		let url = 'data/addComment.json' + Util.objToQuery(data);
		Util.ajax(url, res => {
			// 如果返回成功
			if (res && res.errno === 0) {
				// 更新状态，显示在页面中
				// 获取原有状态
				let list = this.state.list;
				// 在原有的数据上追加数据
				list.push(data)
				// 更新状态
				this.setState({
					list: list
				})
				// 清空textarea
				this.refs.userInput.value = '';
				// 提示用户
				alert('恭喜您！提交成功！')
			}
		})
	}
	render() {
		// console.log(this.props)
		return (
			<section className="comments" style={{display: this.props.show ? 'block' : 'none'}}>
				<div className="container">
					<textarea ref="userInput" placeholder="文明上网，理性发言！"></textarea>
					<div className="submit"><span onClick={this.submitData.bind(this)}>发布</span></div>
					<ul>{this.createList()}</ul>
				</div>
			</section>
		)
	}
}

// 创建App组件,继承Component
class App extends Component {
	// 以后切换页面这些行为是在组件内部发生的，因此要将组件外部的属性数据转化成内部的状态数据
	// 设置默认状态必须构造函数中进行
	constructor(props) {
		// 在面向对象编程中要通过super继承属性
		super(props)
		// 我们要将属性转化成状态
		this.state = {
			page: props.page,
			// 定义首页数据默认值
			home: [],
			detail: {},
			comment: {
				// 默认没有返回数据的是，也可以在list的数组上调用map方法
				list: []
			}
		}
	}
	// 传递给子组件的方法
	showDetail(id) {
		// 4 在父组件方法中，根据id发送一个请求，请求该新闻的详细信息
		// console.log(this, 111, id)
		Util.ajax('data/detail.json?id=' + id, (res) => {
			//  更新父组件的状态，去更新传递给子组件的属性数据
			// console.log(this, res)
			if (res && res.errno === 0) {
				this.setState({
					detail: res.data,
					page: 'detail'
				})
			}
		})
	}
	// 显示评论页
	showComment(id) {
		// 4 根据id请求数据
		// 5 用返回的数据更新状态
		// 6 状态更新，去更新传递给评论页的属性数据
		// console.log('parent ', id)
		Util.ajax('data/comment.json?id=' + id, res => {
			// 更新状态
			if (res && res.errno === 0) {
				this.setState({
					// 更新comment，并且显示评论页
					comment: res.data,
					page: 'comments'
				})
			}
		})
	}
	// 切换页面
	changePage() {
		// console.log(this, this.state.page)
		// 切换页面就是更新page属性值
		let page = this.state.page;
		switch(page) {
			case 'comments':
				// 更新到detail
				this.setState({page: 'detail'})
				break;
			case 'detail':
				// 更新到list
				this.setState({page: 'home'})
				break;
			case 'home':
				break;
		}
	}
	render() {
		return (
			<div>
				<Header changePage={this.changePage.bind(this)}></Header>
				<Home show={this.state.page === 'home'} data={this.state.home} parentShowDetail={this.showDetail.bind(this)}></Home>
				<Detail show={this.state.page === 'detail'} data={this.state.detail} parentShowComment={this.showComment.bind(this)}></Detail>
				<Comments show={this.state.page === 'comments'} data={this.state.comment}></Comments>
			</div>
		)
	}
	componentDidMount() {
		Util.ajax('data/list.json', res => {
			// 此时作用域是组件实例化对象，参数是返回的数据，将数据存储在状态中
			if (res && res.errno === 0) {
				this.setState({
					home: res.data
				})
			}
		})
	}
}

// 渲染到页面中
render(<App page="home" />, document.getElementById('app'))