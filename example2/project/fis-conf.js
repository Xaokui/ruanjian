// 编译jsx语法
fis.match('**.jsx', {
	parser: 'babel2',
	rExt: '.js'
})
// 编译less文件
fis.match('**.less', {
	parser: 'less',
	rExt: '.css'
})