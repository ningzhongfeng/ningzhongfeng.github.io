
	(function(){
		//	引入
		$("#Top").load("top.html")
		$("#Bottom").load("bottom.html")
		$("#asideShop").load("asideDl.html")
		//	分页
		$.get("js/db.json",function(result){
			var index=0;
			$(".yema>p>span").click(function(){
				$("#listMain>.list_Ul").html("");
				$(".yema>p>span").css("background","")
				index=$(this).index();
				jiazai();
			})
			$(".yema>.up").click(function(){
				$("#listMain>.list_Ul").html("");
				$(".yema>p>span").css("background","")
				index-=1;
				jiazai();
			})
			$(".yema>.down").click(function(){
				$("#listMain>.list_Ul").html("");
				$(".yema>p>span").css("background","")
				index+=1;
				jiazai();
			})
			function jiazai(){
				var obj=$(result.list)
				var l=obj.length;
				var tmp1 = $(document.createDocumentFragment());
				if(index==5){
					index=0;
				};
				if(index==-1){
					index=4
				}
				$(".yema>p>span").eq(index).css("background","#ff6a00");
				
				var buchang1=index*16;
				var buchang2=index*16+16;
				for(var i=buchang1;i<buchang2;i++){
					if(buchang2>=l){
						buchang2=l
					}
					var n=$("#listMain>.list_Ul>li").length;
					if(n==0){
						$(".yema>.num").html("本页暂无商品"+"/共"+l+"件商品");
					}else{
						$(".yema>.num").html(buchang1+1+"-"+buchang2+"/共"+l+"件商品");
					};
					if(i<l){
						var li=$("<li></li>")
						var img=$("<a href='xiangqing.html?id="+obj[i].id+"'><img src="+'img/'+obj[i].img+"></a>");
						var span1=$("<p>"+"¥"+obj[i].CNY+"</p>");
						span1.css("color","#ff6a00");
						var span2=$("<p>"+obj[i].content+"</p>");
						var span3=$("<p><input type='button' value='收藏'></input><input type='button' class='carBtn' value='添加到购物车'></input></p>");
						li.append(img,span1,span2,span3)
						tmp1.append(li)
						$("#listMain>.list_Ul").append(tmp1);
					}
				}
				$("#listMain>.list_Ul>li>p>.carBtn").click(function(){
					$(this).css("background","#ff6a00")
	//				利用a的href分隔成数组,用链接中的id作为每个li的id号
					var href=$(this).parent("p").parent("li").children("a")[0].href;
					var arr=href.split("?");
					var add=arr[1].split("=");
					var inde=add[1];
	//				找到id
					var id=inde;
					var cont=JSON.stringify(obj[inde-1]);
	//				设置cookie
					setCookie("F"+id,cont,100);
				})
			}
			jiazai();
		})
	}());
	
