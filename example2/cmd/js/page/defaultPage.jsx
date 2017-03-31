// 定义默认页面组件
module.exports = React.createClass({
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