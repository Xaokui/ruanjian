define('js/mixins/util.jsx', [], function(require, exports, module) {

  // 定义公用方法
  'use strict';
  
  module.exports = {
  	/**
    * 请求异步数据的方法
    * @url 	请求地址
    * @fn 		请求的回调函数
    ***/
  	getData: function getData(url, fn) {
  		// 创建xhr对象
  		var xhr = new XMLHttpRequest();
  		// 监听状态改变
  		xhr.onreadystatechange = function () {
  			// 监听状态，如果是4表示数据全部请求回来了
  			if (xhr.readyState === 4) {
  				// 请求的状态吗
  				if (xhr.status === 200) {
  					// 执行回调函数
  					fn && fn(JSON.parse(xhr.responseText));
  				}
  			}
  		};
  		// 打开链接
  		xhr.open('GET', url, true);
  		// 发送数据
  		xhr.send(null);
  	}
  };

});