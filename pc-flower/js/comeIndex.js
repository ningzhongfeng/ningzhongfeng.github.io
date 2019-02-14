(function(){
	var daoTime=6;
	setInterval(function(){
		daoTime--;
		if(daoTime==0){
			window.location = "index.html";
		}
		$(".daoTime").html(daoTime);
		
		
	},1000)

}())

