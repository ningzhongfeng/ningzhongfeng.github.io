(function(){
	
	//引入top和bottom
	$("#Top").load("top.html");
	$("#Bottom").load("bottom.html");
	//登录
	$("#dengluBtn").click(function(){
		var unVal=$("#phoneNum").val();
		var pwVal=$("#passWord").val();
		$.get("login2.php",{un:unVal,pw:pwVal},function(str){
			
			alert(str)
			
		})
	})
}())