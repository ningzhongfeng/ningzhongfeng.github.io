(function(){
	
	//winxinER
	$("#top0>p>a:eq(1)").mouseenter(function(){
		$(".weixinER").show();
		$(this).css({"background-color":"#fff","border":"1px solid #e6e6e6","border-bottom":"none"})
	}).mouseleave(function(){
		$(this).css({"background":"","border":""})
		$(".weixinER").hide();
		
	})
	//hualiER
	$("#top0>p>a:eq(2)").mouseenter(function(){
		$(".hualiER").show();
		$(this).css({"background-color":"#fff","border":"1px solid #e6e6e6","border-bottom":"none"})
	}).mouseleave(function(){
		$(this).css({"background":"","border":""})
		$(".hualiER").hide();
		
	})
	//kehuUL
	$("#top0>ul>li:has(ul)").mouseenter(function(){
		$(".kehuUl").show();
		$(this).css({"background-color":"#fff","border-bottom":"none"})
	}).mouseleave(function(){
		$(this).css({"background":"","border":""})
		$(".kehuUl").hide();
		
	})
	//购物车ul
	$("#top0>ul>li:has(div)").mouseover(function(){
		$(this).children("div").show()
		$(this).css({"background-color":"#fff","border":"1px solid #e6e6e6","border-bottom":"none"})
	}).mouseout(function(){
		$(this).css({"background":"","border":""})
		$(this).children("div").hide()
	})
	/*
	 * 搜索
	 */
	
	
	$("#searchBtn").click(function(){
		search();
	})
	$("#searchText").keydown(function(event){
		if(event.keyCode==13){
		search();
			
		}
	
	})
	function search(){
		
		var v=$("#searchText").val();
		if(v!=false){	
			$.get("search.html",function(){
				window.location = "search.html?"+v;
				
			});
	
		}
		
		
	}
	
	
	/*
	 * top购物车内容
	 */
	(function(){
	$(".shopCart").mouseenter(function(){
		$(".gouwucheDiv>li").remove();
	
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
					var obj = JSON.parse(decodeURIComponent(col[1]));
					allMoney += obj.num * obj.CNY;
	//				allMoney*=6.8;//转换成美元
	//				allMoney=allMoney.toFixed(2);
					var li=$("<li></li>");
					li.css("height","60px");
					var img=$("<img src='img/"+obj.img+"'>")
					img.css({"height":"100%","float":"left"});
					var span1=$("<span class='num'>名称："+obj.title+"  单价："+obj.CNY+"</span>")
					span1.css({"color":"darkorange","float":"right","margin-right":"10px"})
					li.append(img,span1)
					$(".gouwucheDiv").append(li)
					
				}
			}
			
			$(".allMN").html("当前总价：¥"+allMoney);
			
		};
		AllMoney();
		
	
		
	})
		
	}());
}());

//搜索

