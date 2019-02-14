<?php
	header("Content-type: text/html; charset=utf-8");
		$user=isset($_GET["un"])?$_GET["un"]:"";
		$psw=isset($_GET["pw"])?$_GET["pw"]:"";
		$yz=isset($_GET["yz"])?$_GET["yz"]:"";
		$yz2=isset($_GET["yz2"])?$_GET["yz2"]:"";
		$psw_confirm=isset($_GET["pw2"])?$_GET["pw2"]:"";
		if($user == "" || $psw == "" || $psw_confirm == "" || $yz== "")
		{
			echo "请确认信息完整性！";
//			echo "<script>alert('请确认信息完整性！'); history.go(-1);</script>";
		}
		else
		{
			if($psw == $psw_confirm && $yz == $yz2)
			{
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
				$conn->query($sql);
			//查询用户表是否存在该用户
				$sql = "select userName from login where userName = '".$user."'";	//SQL语句
				$result=$conn->query($sql);//将执行结果集放在$result中
				$row = $result->fetch_assoc();//提取结结果集中的第一条

				if($row)	//如果已经存在该用户
				{
					echo "用户名已存在";
				}
				else	//不存在当前注册用户名称
				{
					$sql = "insert into login (userName,passWord) values('$user','$psw')";
					$panDuan=$conn->query($sql);
					if($panDuan===true)
					{
						echo "注册成功！";
					}
					else
					{
						echo "系统繁忙，请稍候！";
					}
				}
				
			}
			else
			{
				echo "密码或验证码不一致";
//				echo "<script>alert('密码不一致！');</script>";
			}
		}

?>