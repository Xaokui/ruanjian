// 引入cmd规范
fis.hook('cmd')

// 编译jsx语法
fis.match('**.jsx', {
	parser: 'babel2',
	isMod: true,
	rExt: '.js'
})
// 编译less文件
fis.match('**.less', {
	parser: 'less',
	rExt: '.css'
})
// 压缩
fis.match('**.{js,jsx}', {
	optimizer: 'uglify-js'
})
fis.match('**.{css,less}', {
	optimizer: 'clean-css'
})