
	
//(function(){
	/*
	 * 导入
	 */
		$("#Top").load("top.html");
		$("#asideShop").load("asideDl.html");
	/*
	 *导航ul 
	 */
		$("#nav>h3").mouseenter(function(){
			$(this).next("ul").css("display","block");
		}).mouseleave(function(){
			$(this).next("ul").css("display","none");
			
		})
		
	/*
	 * 获取url中的id
	 */
	function query(_name){
		var str = location.href;	// "1.html?id=1&type=2"
		var arr = str.split("?");	// 将字符串拆成数组	["1.html", "id=1&type=2"]
		if( arr.length > 1 ){	// 在 url 中含有问号
			// arr[1]  == "id=1&type=2"
			var col = arr[1].split("&");	// ["id=1", "type=2"]
			var l = col.length;
			for( var i=0; i<l; i++ ){
				// col[0] == "id=1"
				var c = col[i].split("=");	// ["id", "1"]
				if( c[0] == _name ){	// 根据参数获取url中对应的数据
					return c[1];
				}
			}
			return "";
		}else{
			return "";
		}
	}
	var id = query("id");
	/*
	 * 根据url中的id找到json中的该条数据将其显示在当前页面中
	 */
	$.get("js/db.json",function(str){
		var obj=$(str.list);
		var l=obj.length;
		var goods = null;
		for( var i=0; i<l; i++ ){
			var o = obj[i];	// 商品对象
			if( o.id == id ){
				goods = o;
				var cont=JSON.stringify(goods);
	//			设置cookie作为浏览记录
				setCookie("k"+id,cont,10);
				$(".fastBuy").click(function(){
					setCookie("F"+id,cont,10);
	//				location href(cart.html);
					window.location.href = 'cart.html';
				})
				break;
			}
		}
	
		$("#xqMain>.xqleft_Div>.bigImg").html("<img src='img/"+goods.img+"'>");
	//	topDiv数据
		var divTop=$("<div></div>");
		var h3=$("<h3>"+goods.title+"</h3>");
		var p1=$("<p>类别：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+goods.content+"</p>");
		var p2=$("<p>花语：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不凋谢的鲜花，寓意：情感美丽永恒。</p>");
		var p3=$("<p>包装：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;精美花瓶,礼品纸盒外包装,附送精美留言贺卡。</p>");
		var p4=$("<p>附送：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;免费送精美贺卡，代打印您的祝福。(下单时填了留言才赠送)</p>");
		var p5=$("<p>配送：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;全国 （本商品通过快递公司或邮政EMS寄送，全国可达，包邮）</p>");
		var p6=$("<p>花礼价：¥"+goods.CNY+"</span></p>");
		divTop.append(h3,p1,p2,p3,p4,p5,p6);
		$("#xqMain>.xqright_Div>.toop").append(divTop);
	//	mainDiv——right数据
		var divRight=$("<div></div>");
		divRight.addClass("xxtop")
		var img1=$("<img src='img/"+goods.bigimg[0]+"'>");
		img1.addClass("one")
		var img2=$("<img src='img/"+goods.bigimg[1]+"'>");
		var img3=$("<img src='img/"+goods.bigimg[2]+"'>");
		var img4=$("<img src='img/"+goods.bigimg[3]+"'>");
		var img5=$("<img src='img/"+goods.bigimg[4]+"'>");
		divRight.append(img1,img2,img3,img4,img5);
		$("#xqCenter>.xq_right>.xxpj").before(divRight);
	//img小图
		var li1=$("<li><img src='img/"+goods.minimg[0]+"'></li>");
		var li2=$("<li><img src='img/"+goods.minimg[1]+"'></li>");
		var li3=$("<li><img src='img/"+goods.minimg[2]+"'></li>");
		var li4=$("<li><img src='img/"+goods.minimg[3]+"'></li>");
		$("#xqMain>.xqleft_Div>ul").append(li1,li2,li3,li4);
		$("#xqMain>.xqleft_Div>ul>li").mouseover(function(){
			$("#xqMain>.xqleft_Div>.bigImg>img")[0].src=$(this).children("img")[0].src;
		})	
	})
	/*
	 * 浏览记录
	 */
(function(){
	var str=document.cookie;
	var arr = str.split("; ");
	var l = arr.length;	
	for( var i=0; i<l; i++ ){
		var col = arr[i].split("=");
		if( /^k\d+$/.test(col[0]) ){
		var obj = JSON.parse(decodeURIComponent(col[1]));	
		var li=$("<li></li>");	
		var img=$("<a href='xiangqing.html?id="+obj.id+"'><img src='img/"+obj.img+"'></a>");
		var p1=$("<p>"+obj.title+"</p>");
		var p2=$("<p>"+obj.content+"</p>");
		var p3=$("<p><span>价格："+obj.CNY+"</span><span>添加到购物车</span><span>移到我的收藏</span></p>");	
		li.append(img,p1,p2,p3);
		$("#xqCenter > .xq_left").append(li);	
		}
	}
}());
