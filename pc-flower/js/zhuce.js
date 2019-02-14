(function(){
	
	//导入头部和尾部
		$("#Top").load("top.html");
		$("#Bottom").load("bottom.html");
	//注册
	
	
	/*
	 * 验证码
	 */
	(function(){
		var arr=["1","2","3","4","5","6","7","8","9","a","b","c","c","e","f","g","h","i","j","k","l","m","n"];
		var l=arr.length;
		$(".changeYanzhen").click(function(){
			$(".yanzhengMa").empty();
			change();
		})
		$(".yanzhengMa").click(function(){
			$(".yanzhengMa").empty();
			change();
		})
		function change(){
			for(var i=0;i<4;i++){
				var n1=parseInt(Math.random()*l);
				var b=$("<b>"+arr[n1]+"</b>");
				$(".yanzhengMa").append(b);
			
			}
		}
		change()
		
	
	}())
	

	var nu=$(".yanzhengMa b").length;
	//var e=$(".yanzhengMa b").eq(2).html()
	var str="";
	for(var i=0;i<nu;i++){
		var htm=$(".yanzhengMa b").eq(i).html();
		str+=htm;
		
	}
	

	
	$("#zhuceBtn").click(function(){
		var unVal=$("#phoneNum").val();
		var pwVal=$("#passWord").val();
		var pw2Val=$("#passWord2").val();
		var yanzhenVal=$("#yanzhengma").val();
		var yanzheng=str;
		$.get("login.php",{un:unVal,pw:pwVal,pw2:pw2Val,yz:yanzhenVal,yz2:yanzheng},function(str){
			alert(str)
		})
	})
	


}());