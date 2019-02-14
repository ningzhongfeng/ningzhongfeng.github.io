(function(){
	


	$("#Top").load("top.html");
	$("#Bottom").load("bottom.html");
	/*
	 *获取购物车和浏览记录
	 */
	(function(){
		
	
	var str=document.cookie;
	var arr = str.split("; ");
	var l = arr.length;
	var flag1=false;
	var flag2=false;
	var allMoney=0;
	var dd=-1;
	for( var i=0; i<l; i++ ){//循环
		var col = arr[i].split("=");//拆成数组
		if( /^F\d+$/.test(col[0]) ){//该cookie为购物车商品cookie
			dd++;
			var obj = JSON.parse(decodeURIComponent(col[1]));//转为对象
			
	//		创建li显示购物车内容
			var li=$("<li></li>");	
			var img=$("<img src='img/"+obj.img+"'>");
			var p1=$("<p>"+obj.content+"</p>");
			var p2=$("<p><span>¥"+eval(obj.CNY+100)+"</span><span>"+obj.CNY+"</span><span><input type='button' value='-' class='aee'></input><input type='text' value='"+obj.num+"'></input><input type='button' value='+' class='add'></input></span><span class='delate'>删除&nbsp;&nbsp;</span><span>移到我的收藏</span></p>");	
			li.append(img,p1,p2);
			$("#cart").append(li);
	//		计算总价格
	
	
			allMoney += obj.num * obj.CNY;
			$(".sumMony").html(allMoney);
			
			
	//		给每个add按钮分别添加自定义属性分别为商品的id号1,2,3;
			$(".add").eq(dd).attr("id",obj.id);
	//		给每个add+添加点击事件
			
			$(".add").eq(dd).click(function(){
	//			alert()
	//			将text的value值加1
				var num=Number($(this).siblings("input").eq(1).val());
				num+=1;
				$(this).siblings("input").eq(1).val(num);
	//			根据每个add按钮的自定义属性的id号找到cookie中的相应记录;
				var id=this.id;
				var ob=JSON.parse(getCookie("F"+id));
				var su=ob.num*ob.CNY;
//				alert(su)
	//			设置记录中的num并在cookie中更新该记录
				ob.num=num;
	//			点击加号更新价格//			点击加号更新价格
				allMoney-=su;
				var newsum=num*ob.CNY;
				allMoney += newsum;
				$(".sumMony").html(allMoney);
				setCookie("F"+id,JSON.stringify(ob),3);	
			})
			
			
			$(".delate").eq(dd).attr("id",obj.id);
			$(".delate").eq(dd).click(function(){
				var id=this.id;
				setCookie("F"+id,"",-1);
				$(this).parent().parent().remove(); 
				
				
			})
			$(".aee").eq(dd).attr("id",obj.id);
			
			
	
			$(".aee").eq(dd).click(function(){
	//			$("#cart").removeChild("li");
				var num=Number($(this).next("input").val());
				num-=1;
				$(this).next("input").val(num)
				var id=this.id;
				var ob=JSON.parse(getCookie("F"+id));
				if(num<1){
					var su=ob.num*ob.CNY;
					allMoney-=su;

					$(this).parent().parent().parent().remove(); 
					setCookie("F"+id,"",-1);
					$(".sumMony").html(allMoney);
				}else{
					var su=ob.num*ob.CNY;
					allMoney-=su;
					var newsum=num*ob.CNY;
					allMoney += newsum;
					
					ob.num=num;

					
					$(this).next("input").val(num);
					setCookie("F"+id,JSON.stringify(ob),3);
	//				点击减号更新价格
					$(".sumMony").html(allMoney);
				}
	
			})
			flag1=true;
		}
	//	浏览记录
		if(/^k\d+$/.test(col[0]) ){ 
	//		console.log(decodeURIComponent(col[1]))
			var obj = JSON.parse(decodeURIComponent(col[1]));//转为对象
			var li=$("<li></li>");	
			var img=$("<a href='xiangqing.html?id="+obj.id+"'><img src='img/"+obj.img+"'></a>");
			var p1=$("<p>"+obj.content+"</p>");
			li.append(img,p1);
			$("#liulan").append(li);
			flag2=true;
		}
	}
	if(flag1==false){
		$("#cart").html("购物车暂时无内容！");
	}
	if(flag2==false){
		$("#liulan").html("暂无浏览记录！");
	}
	
	}());
	
	
	
	
	var wi=($(window).width()-300)/2;
	//alert($("#suanZhang_Div").width())
	$("#suanZhang_Div").css({
		"left":wi+"px",
		"top":"200px"
	})
	$(".suanZhang").click(function(){
		$("#zz").css("display","block");
		$("#suanZhang_Div").fadeIn().animate({
			"top":"240px"
		})
		
	})
	
	
	$("#dengluBtn").click(function(){
		var unVal=$("#phoneNum").val();
		var pwVal=$("#passWord").val();
		$.get("login2.php",{un:unVal,pw:pwVal},function(str){
			alert(str)
			
			if(str=="登录成功！"){
				$("#suanZhang_Div").fadeOut().animate({
					"top":"200px"
				});
				$("#zz").css("display","none");
				window.location="comeIndex.html";
			
			}
			
		})
	})
}());