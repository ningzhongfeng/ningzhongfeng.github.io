<?php
	header("Content-type: text/html; charset=utf-8");
		$user=isset($_GET["un"])?$_GET["un"]:"";
		$psw=isset($_GET["pw"])?$_GET["pw"]:"";
//		$psw_confirm=isset($_GET["pw2"])?$_GET["pw2"]:"";
//		if($user == "" || $psw == "" || $psw_confirm == "")
		if($user == "" || $psw == "")
		
		{
			echo "请输入用户名或密码！";
//			echo "<script>alert('请确认信息完整性！'); history.go(-1);</script>";
		}
		else
		{
//			if($psw == $psw_confirm)
//			{
				//链接数据库
				$servername = "localhost";
				$username = "root";
				$password = "123";
				$dbname = "nzf";
				$conn = new mysqli($servername, $username, $password, $dbname);
			//	设置连接字符集编码
				$sql="SET CHARACTER SET 'UTF8'";
				$conn->query($sql);
			//告诉服务器将来从这个客户端传来的信息采用字符集utf8
				$sql="SET NAMES 'UTF8'";

			//查询用户表是否存在该用户
			
				$sql = "select userName,passWord from login where userName = '".$user."' and passWord = '".$psw."'";
				$result=$conn->query($sql);//将执行结果集放在$result中
				$row = $result->fetch_assoc();//提取结结果集中一行没有结果返回null;
				if($row){
					echo "登录成功！";
				}else{
					echo "用户名或密码不正确！";
				}
			
			}
//else{
//				echo "密码不一致!";
//			};
//		};

?>