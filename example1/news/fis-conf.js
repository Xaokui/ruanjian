// 编译tsx
fis.match('**.tsx', {
	// 引入插件
	parser: 'typescript',
	// 将文件拓展名改成js
	rExt: '.js'
})
// 编译less
fis.match("**.less", {
	parser: 'less',
	rExt: '.css'
})