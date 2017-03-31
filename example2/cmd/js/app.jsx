var Nav = require('component/nav')
var DefaultPage = require('page/defaultPage')
var Page = require('page/page')

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