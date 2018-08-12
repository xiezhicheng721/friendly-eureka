//页面逻辑执行
$(function(){
	Sowing_Map();
	Tips();
	Skip();
});

//一、轮播图
function Sowing_Map(){
	$(window).on('resize',function(){
	     var clientW = $(window).width();                       //获取窗口宽度
	     var showBigImage = clientW >=800;                     //设置临界值
	     var $allItems = $('#carousel-example-generic .item'); //获取item
	     $allItems.each(function(index,item){               //遍历所有item
	     	     //获取图片路径   当窗口宽度 showBigImage》=800 大图片 否则小图片
	     	var src = showBigImage ? $(item).data('lg-img') : $(item).data('sm-img');
	     	var imgUrl = 'url("'+src+'")';
	     	  //设置背景图片
	     	$(item).css({
	     		backgroundImage:imgUrl
	     	});
	     	if (!showBigImage) {
	     		var $img = "<img src='"+src+"'>";
	     		$(item).empty().append($img);//empty()用于清除item元素内容，使添加图片时不循环添加
	     	} else{
	     		$(item).empty();
	     	}
	     });
	});
	$(window).trigger('resize'); //trigger() 方法触发被选元素的指定事件类型。
}

//二、页尾提示工具初始化
function Tips(){
	$('[data-toggle="tooltip"]').tooltip();
}

//三、页头导航跳转
function Skip(){
	//1、获取li
	var $lis = $('#bs-example-navbar-collapse-1 li');
	//2.点击事件 ，动画执行滚动到对应区域的偏移位置
	$($lis[2]).on('click',function(){	
		$('html,body').animate({scrollTop: $('#lk_hot').offset().top},1000);
	});
	$($lis[5]).on('click',function(){	
		$('html,body').animate({scrollTop: $('#lk_footer').offset().top},1000);
	});
	
}


