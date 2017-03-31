// 创建导航组件
var Nav = React.createClass({
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

// 定义默认页面组件
var DefaultPage = React.createClass({
	// 定义默认状态
	getInitialState: function () {
		return {
			firstList: [
				{
					img: 'img/sass-less.png',
					h3: '预处理脚本',
					p: '虽然可以直接使用 Bootstrap 提供的 CSS 样式表，不要忘记 Bootstrap 的源码是基于最流行的 CSS 预处理脚本 - <a href="">Less</a> 和 <a href="">Sass</a> 开发的。你可以采用预编译的 CSS 文件快速开发，也可以从源码定制自己需要的样式。'
				},
				{
					img: 'img/devices.png',
					h3: '一个框架、多种设备',
					p: '你的网站和应用能在 Bootstrap 的帮助下通过同一份代码快速、有效适配手机、平板、PC 设备，这一切都是 CSS 媒体查询（Media Query）的功劳。'
				},
				{
					img: 'img/components.png',
					h3: '特性齐全',
					p: 'Bootstrap 提供了全面、美观的文档。你能在这里找到关于 HTML 元素、HTML 和 CSS 组件、jQuery 插件方面的所有详细文档。'
				}
			],
			secondList: [
				{
					img: 'img/01.jpg'
				},
				{
					img: 'img/02.jpg'
				},
				{
					img: 'img/03.jpg'
				}
			]
		}
	},
	// 渲染列表
	createList: function (data) {
		return data.map(function (obj, index) {
			// 如果obj有p属性，我们渲染第一个列表，否则渲染第二个列表
			if (obj.p) {
				// p元素内容中出现了标签
				var content = {
					__html: obj.p
				}
				return (
					<li key={index}>
						<img src={obj.img} alt=""/>
						<h3>{obj.h3}</h3>
						<p dangerouslySetInnerHTML={content}></p>
					</li>
				)
			} else {
				return (
					<li key={index}>
						<img src={obj.img} alt=""/>
					</li>
				)
			}
		});
	},
	render: function() {
		// console.log(this)
		// 我们想将属性中的数据渲染到虚拟DOM上
		// <section style={this.props.style} className="default-page">
		return (
			<section style={{display: this.props.show}} className="default-page">
				<div className="banner">
					<div className="btn-b-logo">B</div>
					<h1>Bootstrap 是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目。</h1>
					<span className="btn btn-lg">下载Bootstrap</span>
					<p>当前版本： v3.3.0 | 文档更新于：2014-10-31</p>
				</div>
				<div className="first-list">
					<div className="container">
						<h1>为所有开发者、所有应用场景而设计</h1>
						<p className="title-description">Bootstrap 让前端开发更快速、简单。所有开发者都能快速上手、所有设备都可以适配、所有项目都适用。</p>
						<div className="small-line"></div>
						{/*列表1和列表2都用同一方法，所以我们要传递参数来渲染不同的数据*/}
						<ul className="clearfix">{this.createList(this.state.firstList)}</ul>
						<div className="small-line"></div>
						<p className="btn-description">Bootstrap 是完全开源的。它的代码托管、开发、维护都依赖 GitHub 平台。</p>
						<span className="btn btn-lg">查看GitHub项目首页</span>
					</div>
				</div>
				<div className="second-list">
					<div className="container">
						<h1>基于 Bootstrap 构建的网站</h1>
						<p className="title-description">全球数以百万计的网站都是基于 Bootstrap 构建的。你可以先参观一下我们提供的<a href="">实例精选</a>或者看一看我们粉丝的网站吧。</p>
						<div className="small-line"></div>
						<ul className="clearfix">{this.createList(this.state.secondList)}</ul>
						<div className="small-line"></div>
						<p className="btn-description">我们在“优站精选”里展示了许多精美的 Bootstrap 网站。</p>
						<span className="btn btn-lg">逛一逛“优站精选”</span>
					</div>
				</div>
			</section>
		)
	}
})
// 定义banner组件
var BannerPart = React.createClass({
	render: function () {
		return (
			<div className="banner">
				<div className="container">
					<h1>{this.props.title}</h1>
					<p>{this.props.intro}</p>
				</div>
			</div>
		)
	}
})

// 定义ContentPart组件
var ContentPart = React.createClass({
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

// 定义核心内容组件
var ArticlePart = React.createClass({
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
// 定义侧边导航栏
var AsidePart = React.createClass({
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

// 定义公用方法
var Util = {
	/**
	 * 请求异步数据的方法
	 * @url 	请求地址
	 * @fn 		请求的回调函数
	 ***/ 
	getData: function (url, fn) {
		// 创建xhr对象
		var xhr = new XMLHttpRequest();
		// 监听状态改变
		xhr.onreadystatechange = function () {
			// 监听状态，如果是4表示数据全部请求回来了
			if (xhr.readyState === 4) {
				// 请求的状态吗
				if (xhr.status === 200) {
					// 执行回调函数
					fn && fn(JSON.parse(xhr.responseText))
				}
			}
		}
		// 打开链接
		xhr.open('GET', url, true);
		// 发送数据
		xhr.send(null);
	}
}

// 定义起步的页的组件 
// var StartPage = React.createClass({
// 	// 通过混合可以实现对对象的继承
// 	mixins: [Util],
// 	// 初始化状态数据
// 	getInitialState: function() {
// 		return {
// 			data: []
// 		}
// 	},
// 	render: function () {
// 		return (
// 			<section className="section" style={{display: this.props.show}}>
// 				<BannerPart title="起步" intro="简要介绍 Bootstrap，以及如何下载、使用，还有基本模版和案例，等等。"></BannerPart>
// 				<ContentPart data={this.state.data}></ContentPart>
// 			</section>
// 		)
// 	},
// 	// 组件构建完成发送异步请求
// 	componentDidMount: function() {
// 		// 缓存this
// 		var me = this;
// 		this.getData('data/start.json', function (res) {
// 			// 保存在状态中
// 			me.setState({
// 				data: res
// 			})
// 		})
// 	}
// })
// 后面几个页面跟start很像，因此我们只需要将一些不同点抽象出来，这个组件就可以复用，banner的标题，banner介绍，以及请求的数据（提供一个不同的请求地址）
// 抽象page组件
var Page = React.createClass({
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
// <div className="content">
// 	<ArticlePart></ArticlePart>
// 	<AsidePart></AsidePart>
// </div>
// var CssPage = React.createClass({
// 	render: function () {
// 		return (
// 			<section>
// 				<BanerPart></BanerPart>
// 			</section>
// 		)
// 	}
// })


// 定义app组件
var App = React.createClass({
	// 定义哪些属性是必填的
	propTypes: {
		// 我们还可以限制他的类型,这样保证组件的使用时候的安全型
		showPage: React.PropTypes.string.isRequired
	},
	getInitialState: function() {
		// 默认页面都是隐藏的
		var page = {
			def: 'none',
			start: 'none',
			css: 'none',
			component: 'none',
			javascript: 'none',
			maker: 'none'
		}
		// 根据属性值来切换状态
		page[this.props.showPage] = 'block'
		return {
			page: page
		}
	},
	// 切换页面
	changePage: function (msg) {
		// 根据传递的消息决定显示哪个页面
		// console.log(msg, 111)
		var page = this.state.page;
		// 所有属性变成none
		for (var i in page) {
			page[i] = 'none'
		}
		// 显示msg页面
		page[msg] = 'block';
		// 更改状态
		this.setState({
			page: page
		})
	},
	render: function () {
		var page = this.state.page
		// 找到page中的值是block属性
		var nav = '';
		for (var i in page) {
			if (page[i] === 'block') {
				nav = i;
				break;
			}
		}
		return (
			<div>
				<Nav type={nav} changeNavItem={this.changePage}></Nav>
				{/*<DefaultPage style={{display: page.def}}></DefaultPage>*/}
				<DefaultPage show={page.def}></DefaultPage>
				<Page show={page.start} title="起步" intro="简要介绍 Bootstrap，以及如何下载、使用，还有基本模版和案例，等等。" url="data/start.json"></Page>
				<Page show={page.css} title="全局 CSS 样式" intro="设置全局 CSS 样式；基本的 HTML 元素均可以通过 class 设置样式并得到增强效果；还有先进的栅格系统。" url="data/css.json"></Page>
				<Page show={page.component} title="组件" intro="无数可复用的组件，包括字体图标、下拉菜单、导航、警告框、弹出框等更多功能。" url="data/component.json"></Page>
				<Page show={page.javascript} title="JavaScript 插件" intro="jQuery 插件为 Bootstrap 的组件赋予了“生命”。可以简单地一次性引入所有插件，或者逐个引入到你的页面中。" url="data/js.json"></Page>
				<Page show={page.maker} title="定制并下载 Bootstrap" intro="通过自定义 Bootstrap 组件、Less 变量和 jQuery 插件，定制一份属于你自己的 Bootstrap 版本吧。" url="data/download.json"></Page>
			</div>
		)
	}
})

// 渲染到页面中
ReactDOM.render(<App showPage='start'></App>, document.getElementById('app'))