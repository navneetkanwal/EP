<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" import="com.RunClass"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link rel="stylesheet" href="stylesheet.css" type="text/css">
<script type="text/javascript">
	function myLogic() {
	
		var usernameArray = ["tarun","ethical1","ethical2","ethical3","ep"];
		var passwordArray = ["123","123","123","123","123"];
		var check = 0;
		var username = this.document.getElementById("username").value;
		var password = this.document.getElementById("password").value;
		for(var i=0;i<usernameArray.length;i++)
			{
			 if(usernameArray[i]==username && passwordArray[i]==password)
			 	{
					alert("Login success");
					window.open("http://localhost:8080/EthicalProspecting/FirstPage.jsp?username="+username,"_self");
					check++;
				}
			}
		if(check==0)
			alert("Login failed! Wrong Username & Password");
		}
	
</script>

<title>Comparison Calculator</title>
</head>
<body class="pageClass" bgcolor="white">
	<form class="topMarginClass">
		<div>
			<img src="EthicalP.jpg" alt="calculator Image"
				style="width: 100px; height: 60px; margin-top: 10px">
			<div class="topLogo" align="right">
				<p id="myLogo">ETHICAL PROSPECTING</p>
			</div>
		</div>
		<center>
			<p id="myCalc">
				<b id="myCalcText">LOGIN</b>
			</p>
		</center>
		<div >
			<p align = "center">
				<i>Enter Username:</i>
				<input id="username" class="codeClass" type="text">
			</p>
				<p align = "center">
				<i>Enter Password:</i>
				<input id="password" type ="password" class="codeClass" type="text">
			</p>
			
			<p align = "center">	
			<button id="buttonId" type="button" onClick="myLogic()">Submit</button>
			</p>
		</div>
	</form>
</body>
</html>