$(function(){
	$(window).on('resize',function(){
		//1、获取ul
		var $ul = $('#lk_prodeuct .nav');
		//2、获取ul下所要设置的li  其中 “更多” 这项是收缩隐藏的不需要设置所以获取其他li
		var $lis = $('[role="presentation"]',$ul);//后面放入$ul表示前面参数在$ul里面 
		//3、遍历li的宽度
		var totalW = 0;  //li总宽度 
		$lis.each(function(index,item){
			//JQ参数运用需要用$()包装下
			totalW += $(item).width(); //所有li相加
		});
		//4、获取父元素的宽度
		var parentW = $ul.parent().width(); //parent() 获得当前匹配元素集合中每个元素的父元素
		//5.设置宽度,当li的总宽度大于父元素时，设置宽度，否则删除设置
		if (totalW > parentW) {
			$ul.css({
				width: totalW + "px"
			})
		} else{
			$ul.removeAttr("style");   //删除元素
		}
	});
});