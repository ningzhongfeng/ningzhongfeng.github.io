/*
 * 侧边栏位置
 

	*/

	

	$(function(){
		hei();
	})
	$(window).resize(function(){
		hei();
	})
	function hei(){
		var height=($(window).height()-$(".asideDl").height())/2;
		$(".asideDl").css("top",height);
	}
	
	$(".asideCart").mouseover(function(){
		$(".asideCart_Div>li").remove();
		$(".asideCart_Div").stop().animate({
		 	"left":"-180px"
		})
		
		var n=0;//表示有几件商品
		var allMoney = 0;//表示总价格
		function AllMoney(){
			var str = document.cookie;
			var arr = str.split("; ");
			var l = arr.length;
			for( var i=0; i<l; i++ ){
				var col = arr[i].split("=");
		//		col[0]表示每条cookie的名N1,N2...
		//		col[1]表示每条cookie的值
				if( /^F\d+$/.test(col[0]) ){
					n++;
	//				console.log(decodeURIComponent(col[1]))
					/**/var obj = JSON.parse(decodeURIComponent(col[1]));
					allMoney += obj.num * obj.CNY;
	//				allMoney*=6.8;//转换成美元
	//				allMoney=allMoney.toFixed(2);
					var li=$("<li></li>");
	
					var img=$("<a href='cart.html'><img src='img/"+obj.img+"'></a>")
	
					var span1=$("<span class='num'>名称："+obj.title+"<br/>"+"单价："+obj.CNY+"</span>")
	
					li.append(img,span1)
					$(".asideCart_Div").append(li)
					
				}
			}
			
			$(".asideCart_Div>p").html("总价：¥"+allMoney+"&nbsp;&nbsp;&nbsp;&nbsp;"+"数量："+n);
			
		};
		AllMoney();
		
	
		
	})

	 $(".asideCart_Div").mouseleave(function(){
	 	$(this).stop().animate({
	 		"left":"0px"
	 		
	 		
	 	})
	 })
	 
	
	$(".asideDl>li").has(".xiaoSpan").mouseenter(function(){
		$(this).children("span").css("display","block").stop().animate({
			"left":"-120px"
			
			
		})
		
	}).mouseleave(function(){
		$(this).children("span").css("display","none").stop().animate({
	
			
			"left":"-150px"
			
			
		})
		
	})
