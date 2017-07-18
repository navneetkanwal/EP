<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" import="com.RunClass"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link rel="stylesheet" href="stylesheet.css" type="text/css">
<script type="text/javascript">

var url_safe_username = decodeURIComponent(window.location.search.substring(1)).split("=");

if(url_safe_username[1]=="" || url_safe_username[1]==undefined)
	{
	alert("Please Login!!");
	window.open("http://localhost:8080/EthicalProspecting/Login.jsp","_self");
	}
function openPage() {
	window.open("http://localhost:8080/EthicalProspecting/?username="+url_safe_username[1],"_blank");
}
function logout() {
	window.open("http://localhost:8080/EthicalProspecting/Login.jsp","_self");
}
</script>

<title>Comparison Calculator</title>
</head>
<body class="pageClass" bgcolor="white">

<div align="right">
	<a href="javascript:logout()"  target="_blank">logout</a> 
</div>
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
				<b id="myCalcText">Welcome Page</b>
			</p>
		</center>
		<div align="center">
			<p >
				<a href="javascript:openPage()"  target="_blank">Comparison Calculator</a> 
			</p>
			<p>
				<a href="https://quote.bluenrg.com.au/rpc/common/auth/HttpToHttps.rpc" target="_blank">Quotation Details</a> 
			</p>	
			<p>	
				<a href="http://www.abr.business.gov.au/" target="_blank">ABR Details</a> 
		    </p>
			
		</div>
	</form>
</body>
</html>