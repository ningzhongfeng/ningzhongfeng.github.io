(function(){
	

$("#Top").load("top.html")
	$("#Bottom").load("bottom.html")
	var search=location.href;	// "1.html?id=1&type=2"
	var str = search.split("?");
	var st =decodeURIComponent(str[1]);
	$(".gjzSearch").html(st);
	$("#searchText").val(st);
	$.get("js/db.json",function(result){
		var objss=result.list;
		var l=objss.length;
		for(var i=0;i<l;i++){
			var ob=objss[i];
			var t=ob.title
			if(t.indexOf(st)>-1){
				var li=$("<li></li>")
				var img=$("<a href='xiangqing.html?id="+ob.id+"'><img src="+'img/'+ob.img+"></a>");
				var span1=$("<p>"+ob.title+"¥"+ob.CNY+"</p>");
				span1.css("color","#ff6a00");
				var span2=$("<p>"+ob.content+"</p>");
				var span3=$("<p><input type='button' value='收藏'></input><input type='button' class='carBtn' value='添加到购物车'></input></p>");
				li.append(img,span1,span2,span3)
				
				$("#listMain>.list_Ul").append(li);
				
			}
			
		}

		
	})

}());	