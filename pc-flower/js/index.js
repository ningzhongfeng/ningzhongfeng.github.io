(function(){
	
	/*
	 * 导入top，bottom
	 */
	$("#Top").load("top.html");
	$("#Bottom").load("bottom.html");
	$("#asideShop").load("asideDl.html");
	/*
	 * 获取数据
	 */
	(function(){
		$.get("js/db.json",function(result){
		var obj=$(result.list)
		var l=obj.length;
		var tmp1 = $(document.createDocumentFragment());
		var w=$(".listDiv").length;
		for(var z=0;z<w;z++){
			var ch1=z*8;
			var ch2=z*8+8;
			for(var i=ch1;i<ch2;i++){
				var li=$("<li></li>")
				var img=$("<a href='xiangqing.html?id="+obj[i].id+"'><img src="+'img/'+obj[i].img+"></a>");
				var span1=$("<p>"+obj[i].title+"</p>");
				var span2=$("<p>"+"¥"+obj[i].CNY+"</p>");
				li.append(img,span1,span2)
				tmp1.append(li);
			}
				$(".listDiv").eq(z).children("ul").append(tmp1);
		}
		
	/*
		for(var i=0;i<8;i++){
			var li=$("<li></li>")
			var img=$("<a href='xiangqing.html?id="+obj[i].id+"'><img src="+'img/'+obj[i].img+"></a>");
			var span1=$("<p>"+obj[i].title+"</p>");
			var span2=$("<p>"+"¥"+obj[i].CNY+"</p>");
			li.append(img,span1,span2)
			tmp1.append(li)
			$("#listDiv1>.ul1").append(tmp1);
		}
		for(var i=8;i<16;i++){
			var li=$("<li></li>")
			var img=$("<a href='xiangqing.html?id="+obj[i].id+"'><img src="+'img/'+obj[i].img+"></a>");
			var span1=$("<p>"+obj[i].title+"</p>");
			var span2=$("<p>"+"¥"+obj[i].CNY+"</p>");
			li.append(img,span1,span2)
			tmp2.append(li)
			$("#listDiv2>.ul1").append(tmp2);
		}
		for(var i=16;i<24;i++){
			var li=$("<li></li>")
			var img=$("<a href='xiangqing.html?id="+obj[i].id+"'><img src="+'img/'+obj[i].img+"></a>");
			var span1=$("<p>"+obj[i].title+"</p>");
			var span2=$("<p>"+"¥"+obj[i].CNY+"</p>");
			li.append(img,span1,span2)
			tmp3.append(li)
			$("#listDiv3>.ul1").append(tmp3);
		}	
		for(var i=24;i<32;i++){
			var li=$("<li></li>")
			var img=$("<a href='xiangqing.html?id="+obj[i].id+"'><img src="+'img/'+obj[i].img+"></a>");
			var span1=$("<p>"+obj[i].title+"</p>");
			var span2=$("<p>"+"¥"+obj[i].CNY+"</p>");
			li.append(img,span1,span2)
			tmp4.append(li)
			$("#listDiv4>.ul1").append(tmp4);
		}	
		for(var i=32;i<40;i++){
			var li=$("<li></li>")
			var img=$("<a href='xiangqing.html?id="+obj[i].id+"'><img src="+'img/'+obj[i].img+"></a>");
			var span1=$("<p>"+obj[i].title+"</p>");
			var span2=$("<p>"+"¥"+obj[i].CNY+"</p>");
			li.append(img,span1,span2)
			tmp5.append(li)
			$("#listDiv5>.ul1").append(tmp5);
		}	*/
		})
	}());
	
	/*
	 * 轮播图
	 */
	(function(){
		function Lunbotu(box,ollis){
			this.ollis=ollis;
			this.box=box;
			this.index=null;
			this.time=null;
			this.flag=true;
			this.moveLi();
			this.timer();
			this.moveBox();
			this.dianji();
			
		}
		Lunbotu.prototype.moveLi=function(){
			var that=this;
			this.ollis.mouseover(function(){
				that.index=$(this).index();
				that.next();
			})
		}
		Lunbotu.prototype.next=function(){
			$("#bannerdiv0>ol>li").removeClass("select");
			$("#bannerdiv0>.div1>img").eq(this.index).stop().fadeIn(700).siblings().stop().fadeOut(700);
			$("#bannerdiv0>ol>li").eq(this.index).addClass("select");
		}
		Lunbotu.prototype.timer=function(){
			var that=this;
			function tab(){
				if(that.flag==true){
					that.index++;
				}else{
					that.index--;
				};
				if(that.index==4){
					that.index=0;
				}
				if(that.index==-1){
					that.index=3;	
				}
				that.next();
			}
			that.tab=tab;
			var tim=setInterval(tab,3000);
			that.time=tim;
		}
		Lunbotu.prototype.moveBox=function(){
			var that=this;
			this.box.mouseover(function(){
				clearInterval(that.time);
				$("#bannerdiv0>span").stop().fadeIn();
			})
			this.box.mouseout(function(){
				that.time=setInterval(that.tab,3000);
				$("#bannerdiv0>span").stop().fadeOut();
			})
		}
		Lunbotu.prototype.dianji=function(){
			var that=this;
			$("#bannerdiv0>.left").click(function(){
				that.flag=false;
				that.tab()
			})
			$("#bannerdiv0>.right").click(function(){
				that.flag=true;
				that.tab()
			})
		}
		new Lunbotu($("#bannerdiv0"),$("#bannerdiv0>ol>li"));
	}());	
	/*
	 * 导航
	 */
	//alert($("#nav>ul>li:has(div)").length)
	$("#nav>ul>li:has(div)").mouseover(function(){
		$(this).css({"box-shadow":"2px -2px 2px #ccc"})
		$(this).children("div").show();
	}).mouseout(function(){
		$(this).children("div").hide();
		$(this).css({"box-shadow":""})
		
	})
	/*
	 * 导航侧边栏
	*/
	if($("#nav>.asideImg>img")){
		$("#nav>.asideImg>img").mouseover(function(){
			$(this).stop().animate({
				"left":"-10"
			})
		}).mouseout(function(){
			$(this).stop().animate({
				"left":"0"
			})
		}) 
	}

	/*
	 * 图片放大
	 */
	if($("#tuijian .div5")){
		$("#tuijian .div5").mouseover(function(){
			$(this).children("img").stop().animate({
				"height":"120%",
				"width":"120%",
				"left":"-10%",
				"top":"-10%"
			})
		
		}).mouseout(function(){
			$(this).children("img").stop().animate({
				"height":"100%",
				"width":"100%",
				"left":"0",
				"top":"0"
			})
		})
	}
	
		
	
	
	
	/*
	 * 楼梯
	 */
	
	(function(){
	
		function Floor(elemFloors, elemTips){
			this.elemFloors = elemFloors;	// 楼层
			this.len = elemFloors.length;	// 楼层数量
			this.elemTips = elemTips;		// 右下角提示
			this.TipsUlli = elemTips.find("ul>li");
			this.TipsOlli = elemTips.find("ol>li");
			this.ch = $(window).height()/2;
			//this.init();
			//this.li_click();
			//this.window_scroll();
		}
		// 当滚动条发生变化时，Tips中的li的背景需要改变
		Floor.prototype.window_scroll = function(){
			var that = this;
			var len = this.len;
			var arr = this.arr;
			var li = this.TipsOlli;	// 层
			var ch = this.ch;	// 可视区的高度的一半
			$(window).resize(function(){
				ch = that.ch = $(window).height()/2;
			});
			$(window).scroll(function(){
				li.css({"background":"","color":""});	// 将所有的li的背景去掉	
				var t = $(this).scrollTop();	// 滚动条隐藏区域的高度
				// 没有显示第一层时，楼层提示也不显示
				if(t<arr[0]-ch){
					that.elemTips.fadeOut();
		//			that.elemTips.animate({"left":"10px"});	
				}else{
					that.elemTips.fadeIn();
		//			that.elemTips.animate({"left":"30px"});
				}
				
				// 循环，判断当前属于第几层
				for(var i=0; i<len; i++){
					var min = arr[i];	// 这一层的顶边
					var max = arr[i+1];	// 这一层的底边
					if( min-ch<t && t<max-ch ){
						li.eq(i).css({"background":"#ff6a00","color":"#fff"}); // 设置当前li的背景
					}
				}
			})
		}
		
		Floor.prototype.init = function(){
			// 求每一个div的top值
			var arr = this.elemFloors.map(function(index, elem){
				return $(elem).offset().top;
			});
			// 求最后一层的底边
			var last = this.elemFloors.eq(this.len-1);
			var lastTop = arr[this.len-1];//最后一个元素的top
			var lastHeight = last.height();//最后一个元素的高度
			arr.push(lastTop+lastHeight);
			this.arr = arr;
		}
		// 当点击Tips中的li时，滚动条需要定位
		Floor.prototype.li_click = function(){
			var that = this;	// this指向实例 （Floor的实例）
			var body = $("html,body");
			// 对top按钮绑定点击事件，改变滚动条
			this.TipsUlli.click(function(){
				//$(window).scrollTop(0);
				body.animate({"scrollTop":0})
			});
			// 对楼层按钮绑定事件
			this.TipsOlli.click(function(){
				var ind = $(this).index();	// 求li的下标
				var top = that.arr[ind];	// 根据下标找top值
				body.animate({"scrollTop":top});	// 设置滚动条
			});
		};
		
		var lt=$("#loveFlower,#listDiv1,#szbFlower,#listDiv2,#ysFlower,#listDiv3,#dgFlower,#listDiv4,#lpFlower,#listDiv5");
		var f = new Floor($(lt), $("#tab"));
		f.init();
		f.li_click();
		f.window_scroll();
		
		
	}());
}());





