

// 定义一个函数调用三个参数分别代表地址，成功和失败后的处理,超时时间
function ajax(url, success, error,timeout) {     
	//1.定义一个空变量
	var xhr;
	var time;
	//2.做兼容
	if (window.XMLHttpRequest)
   {
    xhr=new XMLHttpRequest();
   }else{
    xhr=new ActiveXObject("Microsoft.XMLHTTP");
   }   
	//3.输入网址 open方式可以指定发送方式和发送数据的地址以及是否异同步
	// true 表示用异步的方式发送请求
	xhr.open('get',url+'?t='+(new Date().getTime()),true)
	//4.送数据
	xhr.send();
	//5.监听数据， 监听的是xhr.readyState状态
	xhr.onreadystatechange = function(ev) {
		if(xhr.readyState === 4) {
			clearInterval(time) //为谨慎，当请求完成时设置关闭定时器
			//  4表示内容解析完成,可以使用数据
			if(xhr.state >= 200 && xhr.state < 300 || xhr.state === 304) {
				//  state 表示状态码200-300之间正常 304也表示正常
				success(xhr)
			} else {
				 error(xhr)
			}
		}
	}
	//超时处理   timeout为外部自定时间
	if(timeout){
		time = setInterval(function(){
			xhr.abort()                     //.abort()方法将终止该请求
			clearInterval(time)             //关闭定时器
		},timeout);
	}
}