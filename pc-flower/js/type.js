(function(){
			
	
	//	导入
	$("#Top").load("top.html");	
	$("#Bottom").load("bottom.html");
	var tyN=0;
	$(".tyDAN").click(function(){
		$("#listMain>.list_Ul>li").remove();
		tyN=1;
		dddd()
		
	})
	$(".tyYONG").click(function(){
		$("#listMain>.list_Ul>li").remove();
		
		tyN=0;
		dddd()
	})
	$(".tyLI").click(function(){
		$("#listMain>.list_Ul>li").remove();
		
		tyN=2;
		dddd()
	})
	dddd()
	function dddd(){
		$.get("js/db.json",function(resout){
		var types=resout.type;
	 	var objs=resout.list;
	 	var l=objs.length;
	 	for(var i=0;i<l;i++){
	 		var obj=objs[i];
	 		if(obj.type==tyN){	
	 			$("#paixu>p>span").html(types[tyN]);
	 			var li=$("<li></li>")
				var img=$("<a href='xiangqing.html?id="+obj.id+"'><img src="+'img/'+obj.img+"></a>");
				var span1=$("<p>"+"¥"+obj.CNY+"</p>");
				span1.css("color","#ff6a00");
				var span2=$("<p>"+obj.content+"</p>");
				var span3=$("<p><input type='button' value='收藏'></input><input type='button' class='carBtn' value='添加到购物车'></input></p>");
				li.append(img,span1,span2,span3);
				$("#listMain>.list_Ul").append(li);

//				console.log(obj)

		
		 	}

		}
//	 		console.log($("#listMain>.list_Ul>li").obj)
	 	
						
//		$("#listMain>.list_Ul>li>p>.carBtn").click(function(){
//			var ob=$(this).parent().parent();
//			console.log(ob)
//					$(this).css("background","#ff6a00");
//
//					var cont=JSON.stringify(obj);
//
//					
//					setCookie("F"+obj.id,cont,10);
//		})
	
	})
	}
}());