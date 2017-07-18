<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" import="com.RunClass"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link rel="stylesheet" href="stylesheet.css" type="text/css">
<script language="JavaScript" type="text/javascript" src="logicFile.js"></script>
<script language="JavaScript" type="text/javascript" src="data.js"></script>
<script language="JavaScript" type="text/javascript" src="rates.js"></script>
<script type="text/javascript">

var url_safe_username = decodeURIComponent(window.location.search.substring(1)).split("=");

if(url_safe_username[1]=="" || url_safe_username[1]==undefined)
	{
	alert("Please Login!!");
	window.open("http://localhost:8080/EthicalProspecting/Login.jsp","_self");
	}
	function runScript(e) {
		if (e.keyCode == 13) {
			methodName();
			return false;
		}
	}
	function runScriptAll(e) {
		if (e.keyCode == 13) {
			methodName();
			return false;
		}
	}
	function logout() {
		window.open("http://localhost:8080/EthicalProspecting/Login.jsp","_self");
	}
</script>

<title>Comparison Calculator</title>
</head>
<body class="pageClass" bgcolor="white">
<div  align="right">

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
				<b id="myCalcText">Comparison Calculator</b>
			</p>
		</center>
		<div>
			<p>
				<i>Enter Tariff Code</i>
			</p>
			<input id="code" class="codeClass" type="text"
				onkeypress="return runScript(event)">
			<button id="buttonId" type="button" onClick="methodName()">Submit</button>
			<label class="myclass">Controlled Load</label> <select id="cltype"
				onchange="clCalconType()">
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select> <label class="myclass">Concession</label> <select id="conctype"
				onchange="checkConc()">
				<option value="no">No</option>
				<option value="yes">Yes</option>
			</select>
		</div>

		<p></p>
		<div>
			<label>Type : </label> <b><label id="type"></label></b>
		</div>
		<div>
			<p></p>
			<label>Distributor : </label> <b><label id="distributor"></label></b>

		</div>
		<div>
			<button id="fillDataId" type="button" onClick="prefill(30,200)"
				class="fillDataClass">Prefill Data 1 Month</button>
			<button id="fillDataId1" type="button" onClick="prefill(90,500)"
				class="fillDataClass">Prefill Data 3 Months</button>
			<button id="clearId" type="button" onClick="clearData()"
				class="fillDataClass">Clear Data</button>
			<label class="myclassN">NBE Supply Charge Discount</label> <select
				id="opgtype" onchange="methodName()">
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</div>
		<p></p>

		<table class="firstTable" width="100%">
			<tr>
				<th>
					<!--  -->
				</th>
				<th colspan="4" scope="colgroup"><center>Customer</center></th>
				<th colspan="2" scope="colgroup"><center>ALINTA</center></th>
				<th colspan="2" scope="colgroup"><center>Next Business Energy</center></th>
				<th colspan="2" scope="colgroup"><center>Sumo ENERGY</center></th>
				<th colspan="2" scope="colgroup"><center>BLUENRG</center></th>
			</tr>
			<tr>
				<th width="11%">Tariff Type</th>
				<th>Usage</th>
				<th>Rates</th>
				<th width="8%">Charges</th>
				<th>Discount <input id="dis1" value="30" class="inputClassDis"
					onkeypress="return runScriptAll(event)">%
				</th>
				<th width="8%">Charges</th>
				<th>Discount <input id="dis2" value="33" class="inputClassDis"
					onkeypress="return runScriptAll(event)">%
				</th>
				<th width="8%">Charges</th>
				<th>Discount <input id="dis3" value="28" class="inputClassDis"
					onkeypress="return runScriptAll(event)">%
				</th>
				<th width="8%">Charges</th>
				<th>Discount <input id="dis4" value="37" class="inputClassDis"
					onkeypress="return runScriptAll(event)">%
				</th>
				<th width="8%">Charges</th>
				<th>Discount <input id="dis5" value="0" class="inputClassDis"
					onkeypress="return runScriptAll(event)">%
				</th>
			</tr>
			<tr>
				<td><b>Peak 1</b> (KWH)</td>
				<td><input id="peak1Usage" type="text" class="inputClass"
					onkeypress="return runScriptAll(event)"></td>
				<td><input id="peak1Rates" type="text" class="inputClass"
					onkeypress="return runScriptAll(event)"></td>
				<td><label id="peak1Charges"></label></td>
				<td><label id="peak1Discount"></label></td>
				<td><label id="peak1ChargesAlinta"></label></td>
				<td><label id="peak1DiscountAlinta"></label></td>
				<td><label id="peak1ChargesOpg"></label></td>
				<td><label id="peak1DiscountOpg"></label></td>
				<td><label id="peak1Charges1energy"></label></td>
				<td><label id="peak1Discount1energy"></label></td>
				<td><label id="peak1ChargesBluenrg"></label></td>
				<td><label id="peak1DiscountBluenrg"></label></td>
			</tr>
			<tr>
				<td><b>Peak 2</b> (KWH)</td>
				<td><input id="peak2Usage" type="text" class="inputClass"
					onkeypress="return runScriptAll(event)"></td>
				<td><input id="peak2Rates" type="text" class="inputClass"
					onkeypress="return runScriptAll(event)"></td>
				<td><label id="peak2Charges"></label></td>
				<td><label id="peak2Discount"></label></td>
				<td><label id="peak2ChargesAlinta"></label></td>
				<td><label id="peak2DiscountAlinta"></label></td>
				<td><label id="peak2ChargesOpg"></label></td>
				<td><label id="peak2DiscountOpg"></label></td>
				<td><label id="peak2Charges1energy"></label></td>
				<td><label id="peak2Discount1energy"></label></td>
				<td><label id="peak2ChargesBluenrg"></label></td>
				<td><label id="peak2DiscountBluenrg"></label></td>
			</tr>
			<tr>
				<td><b>Peak 3</b> (KWH)</td>
				<td><input id="peak3Usage" type="text" class="inputClass"
					onkeypress="return runScriptAll(event)"></td>
				<td><input id="peak3Rates" type="text" class="inputClass"
					onkeypress="return runScriptAll(event)"></td>
				<td><label id="peak3Charges"></label></td>
				<td><label id="peak3Discount"></label></td>
				<td><label id="peak3ChargesAlinta"></label></td>
				<td><label id="peak3DiscountAlinta"></label></td>
				<td><label id="peak3ChargesOpg"></label></td>
				<td><label id="peak3DiscountOpg"></label></td>
				<td><label id="peak3Charges1energy"></label></td>
				<td><label id="peak3Discount1energy"></label></td>
				<td><label id="peak3ChargesBluenrg"></label></td>
				<td><label id="peak3DiscountBluenrg"></label></td>
			</tr>
			<tr>
				<td><b>Shoulder</b> (KWH)</td>
				<td><input id="shoulderUsage" type="text" class="inputClass"
					onkeypress="return runScriptAll(event)"></td>
				<td><input id="shoulderRates" type="text" class="inputClass"
					onkeypress="return runScriptAll(event)"></td>
				<td><label id="shoulderCharges"></label></td>
				<td><label id="shoulderDiscount"></label></td>
				<td><label id="shoulderChargesAlinta"></label></td>
				<td><label id="shoulderDiscountAlinta"></label></td>
				<td><label id="shoulderChargesOpg"></label></td>
				<td><label id="shoulderDiscountOpg"></label></td>
				<td><label id="shoulderCharges1energy"></label></td>
				<td><label id="shoulderDiscount1energy"></label></td>
				<td><label id="shoulderChargesBluenrg"></label></td>
				<td><label id="shoulderDiscountBluenrg"></label></td>
			</tr>
			<tr>
				<td><b>CL</b> (KWH)</td>
				<td><input id="clUsage" type="text" class="inputClass"
					onkeypress="return runScriptAll(event)"></td>
				<td><input id="clRates" type="text" class="inputClass"
					onkeypress="return runScriptAll(event)"></td>
				<td><label id="clCharges"></label></td>
				<td><label id="clDiscount"></label></td>
				<td><label id="clChargesAlinta"></label></td>
				<td><label id="clDiscountAlinta"></label></td>
				<td><label id="clChargesOpg"></label></td>
				<td><label id="clDiscountOpg"></label></td>
				<td><label id="clCharges1energy"></label></td>
				<td><label id="clDiscount1energy"></label></td>
				<td><label id="clChargesBluenrg"></label></td>
				<td><label id="clDiscountBluenrg"></label></td>
			</tr>
			<tr>
				<td><b>Off Peak</b> (KWH)</td>
				<td><input id="offpeakUsage" type="text" class="inputClass"
					onkeypress="return runScriptAll(event)"></td>
				<td><input id="offpeakRates" type="text" class="inputClass"
					onkeypress="return runScriptAll(event)"></td>
				<td><label id="offpeakCharges"></label></td>
				<td><label id="offpeakDiscount"></label></td>
				<td><label id="offpeakChargesAlinta"></label></td>
				<td><label id="offpeakDiscountAlinta"></label></td>
				<td><label id="offpeakChargesOpg"></label></td>
				<td><label id="offpeakDiscountOpg"></label></td>
				<td><label id="offpeakCharges1energy"></label></td>
				<td><label id="offpeakDiscount1energy"></label></td>
				<td><label id="offpeakChargesBluenrg"></label></td>
				<td><label id="offpeakDiscountBluenrg"></label></td>
			</tr>
			<tr>
				<td class="columShort"><b>Supply Charge</b> (Days)</td>
				<td><input id="supplychargeUsage" type="text"
					class="inputClass" onkeypress="return runScriptAll(event)"></td>
				<td><input id="supplychargeRates" type="text"
					class="inputClass" onkeypress="return runScriptAll(event)"></td>
				<td><label id="supplychargeCharges"></label></td>
				<td><label id="supplychargeDiscount"></label></td>
				<td><label id="supplychargeChargesAlinta"></label></td>
				<td><label id="supplychargeDiscountAlinta"></label></td>
				<td><label id="supplychargeChargesOpg"></label></td>
				<td><label id="supplychargeDiscountOpg"></label></td>
				<td><label id="supplychargeCharges1energy"></label></td>
				<td><label id="supplychargeDiscount1energy"></label></td>
				<td><label id="supplychargeChargesBluenrg"></label></td>
				<td><label id="supplychargeDiscountBluenrg"></label></td>
			</tr>
			<tr>
				<td><b>Solar</b></td>
				<td><input id="solarUsage" type="text" class="inputClass"
					onkeypress="return runScriptAll(event)"></td>
				<td><input id="solarRates" style="font-size: small;" value="-0.05" class="inputClass"></input></td>
				<td><label id="solarCharges"></label></td>
				<td><label id="solarDiscount"></label></td>
				<td><label id="solarChargesAlinta"></label></td>
				<td><label id="solarDiscountAlinta"></label></td>
				<td><label id="solarChargesOpg"></label></td>
				<td><label id="solarDiscountOpg"></label></td>
				<td><label id="solarCharges1energy"></label></td>
				<td><label id="solarDiscount1energy"></label></td>
				<td><label id="solarChargesBluenrg"></label></td>
				<td><label id="solarDiscountBluenrg"></label></td>
			</tr>

			<tr>
			</tr>
			<tr>
			</tr>
			<tr>
				<td><b>Bill Amount</b></td>
				<td></td>
				<td></td>
				<td><label id="chargesBill"></label></td>
				<td><label id="disBill"></label></td>
				<td><label id="chargesAlintaBill"></label></td>
				<td><label id="disAlintaBill"></label></td>
				<td><label id="chargesOpgBill"></label></td>
				<td><label id="disOpgBill"></label></td>
				<td><label id="charges1EnergyBill"></label></td>
				<td><label id="dis1EnergyBill"></label></td>
				<td><label id="chargesBluenrgBill"></label></td>
				<td><label id="disBluenrgBill"></label></td>
			</tr>
			<tr>
				<td class="columShort"><b>Concession (17.5%)</b></td>
				<td></td>
				<td></td>
				<td><label id="chargesConc"></label></td>
				<td><label id="disConc"></label></td>
				<td><label id="chargesAlintaConc"></label></td>
				<td><label id="disAlintaConc"></label></td>
				<td><label id="chargesOpgConc"></label></td>
				<td><label id="disOpgConc"></label></td>
				<td><label id="charges1EnergyConc"></label></td>
				<td><label id="dis1EnergyConc"></label></td>
				<td><label id="chargesBluenrgConc"></label></td>
				<td><label id="disBluenrgConc"></label></td>
			</tr>
			<tr>
				<td><b>Total</b></td>
				<td></td>
				<td></td>
				<td><label id="chargesTot"></label></td>
				<td><label id="disTot"></label></td>
				<td><label id="chargesAlintaTot"></label></td>
				<td><label id="disAlintaTot"></label></td>
				<td><label id="chargesOpgTot"></label></td>
				<td><label id="disOpgTot"></label></td>
				<td><label id="charges1EnergyTot"></label></td>
				<td><label id="dis1EnergyTot"></label></td>
				<td><label id="chargesBluenrgTot"></label></td>
				<td><label id="disBluenrgTot"></label></td>
			</tr>
			<tr>
				<td><b>Total Incl. GST</b></td>
				<td></td>
				<td></td>
				<td><label id="chargesTotg"></label></td>
				<td><label id="disTotg"></label></td>
				<td><label id="chargesAlintaTotg"></label></td>
				<td><label id="disAlintaTotg"></label></td>
				<td><label id="chargesOpgTotg"></label></td>
				<td><label id="disOpgTotg"></label></td>
				<td><label id="charges1EnergyTotg"></label></td>
				<td><label id="dis1EnergyTotg"></label></td>
				<td><label id="chargesBluenrgTotg"></label></td>
				<td><label id="disBluenrgTotg"></label></td>
			</tr>
		</table>
		<p>
		<p>
		<p>
		<div>
			<table class="secondTable" style="width: 30%; margin-top: 50px">

				<tr>
					<th>Distributor</th>
					<th>Type</th>
					<th>Contract</th>
					<th>Exit Fee</th>
				</tr>
				<tr>
					<td>ALINTA</td>
					<td>Residential</td>
					<td>1 Year</td>
					<td>No Exit Fee</td>
				</tr>
				<tr>
					<td>ALINTA</td>
					<td>Business</td>
					<td>2 Year</td>
					<td>No Exit Fee</td>
				</tr>
				<tr>
					<td>NBE</td>
					<td>Residential</td>
					<td>2 Year</td>
					<td>$</td>
				</tr>
				<tr>
					<td>NBE</td>
					<td>Business</td>
					<td>2 Year</td>
					<td>$</td>
				</tr>
				<tr>
					<td>Sumo ENERGY</td>
					<td>Residential</td>
					<td></td>
					<td>$</td>
				</tr>
				<tr>
					<td>Sumo ENERGY</td>
					<td>Business</td>
					<td></td>
					<td>$</td>
				</tr>
				<tr>
					<td>BLUENRG</td>
					<td>Residential</td>
					<td>3 Year</td>
					<td>$</td>
				</tr>
				<tr>
					<td>BLUENRG</td>
					<td>Business</td>
					<td>3 Year</td>
					<td>$</td>
				</tr>
			</table>

			<table class="thirdTable" width="70%"
				style="background-color: none; width: 65%; margin-left: 30px; margin-top: 50px">
				<tr>
					<th colspan="1"></th>
					<th colspan="8" scope="colgroup"><center>RATE BOARD</center></th>
				</tr>
				<tr>
					<th colspan="1"></th>
					<th colspan="2" scope="colgroup"><center>ALINTA</center></th>
					<th colspan="2" scope="colgroup"><center>Next Business Energy</center></th>
					<th colspan="2" scope="colgroup"><center>Sumo ENERGY</center></th>
					<th colspan="2" scope="colgroup"><center>BLUENRG</center></th>
				</tr>
				<tr>
					<th rowspan="1" width="5%"></th>
					<th width="11%">Rate</th>
					<th>Discount Rate<label id="dis2Rate">33</label>%
					</th>
					<th width="11%">Rate</th>
					<th>Discount Rate<label id="dis3Rate">28</label>%
					</th>
					<th width="11%">Rate</th>
					<th>Discount Rate<label id="dis4Rate">37</label>%
					</th>
					<th width="11%">Rate</th>
					<th>Discount Rate<label id="dis5Rate">0</label>%
					</th>
				</tr>
				<tr>
					<td>Peak 1</td>
					<td><label class="dollarClass">$</label><label
						id="peak1RateAlinta"></label></td>
					<td><label class="dollarClass">$</label><label
						id="peak1DisRateAlinta"></label></td>
					<td><label class="dollarClass">$</label><label
						id="peak1RateOpg"></label></td>
					<td><label class="dollarClass">$</label><label
						id="peak1DistRateOpg"></label></td>
					<td><label class="dollarClass">$</label><label
						id="peak1Rate1energy"></label></td>
					<td><label class="dollarClass">$</label><label
						id="peak1DisRate1energy"></label></td>
					<td><label class="dollarClass">$</label><label
						id="peak1RateBluenrg"></label></td>
					<td><label class="dollarClass">$</label><label
						id="peak1DisRateBluenrg"></label></td>
				</tr>
				<tr>
					<td>Peak 2</td>
					<td><label class="dollarClass">$</label><label
						id="peak2RateAlinta"></label></td>
					<td><label class="dollarClass">$</label><label
						id="peak2DisRateAlinta"></label></td>
					<td><label class="dollarClass">$</label><label
						id="peak2RateOpg"></label></td>
					<td><label class="dollarClass">$</label><label
						id="peak2DistRateOpg"></label></td>
					<td><label class="dollarClass">$</label><label
						id="peak2Rate1energy"></label></td>
					<td><label class="dollarClass">$</label><label
						id="peak2DisRate1energy"></label></td>
					<td><label class="dollarClass">$</label><label
						id="peak2RateBluenrg"></label></td>
					<td><label class="dollarClass">$</label><label
						id="peak2DisRateBluenrg"></label></td>
				</tr>
				<tr>
					<td>Peak 3</td>
					<td><label class="dollarClass">$</label><label
						id="peak3RateAlinta"></label></td>
					<td><label class="dollarClass">$</label><label
						id="peak3DisRateAlinta"></label></td>
					<td><label class="dollarClass">$</label><label
						id="peak3RateOpg"></label></td>
					<td><label class="dollarClass">$</label><label
						id="peak3DistRateOpg"></label></td>
					<td><label class="dollarClass">$</label><label
						id="peak3Rate1energy"></label></td>
					<td><label class="dollarClass">$</label><label
						id="peak3DisRate1energy"></label></td>
					<td><label class="dollarClass">$</label><label
						id="peak3RateBluenrg"></label></td>
					<td><label class="dollarClass">$</label><label
						id="peak3DisRateBluenrg"></label></td>
				</tr>
				<tr>
					<td>CL</td>
					<td><label class="dollarClass">$</label><label
						id="clRateAlinta"></label></td>
					<td><label class="dollarClass">$</label><label
						id="clDisRateAlinta"></label></td>
					<td><label class="dollarClass">$</label><label id="clRateOpg"></label></td>
					<td><label class="dollarClass">$</label><label
						id="clDistRateOpg"></label></td>
					<td><label class="dollarClass">$</label><label
						id="clRate1energy"></label></td>
					<td><label class="dollarClass">$</label><label
						id="clDisRate1energy"></label></td>
					<td><label class="dollarClass">$</label><label
						id="clRateBluenrg"></label></td>
					<td><label class="dollarClass">$</label><label
						id="clDisRateBluenrg"></label></td>
				</tr>
				<tr>
					<td>Shoulder</td>
					<td><label class="dollarClass">$</label><label
						id="shoulderRateAlinta"></label></td>
					<td><label class="dollarClass">$</label><label
						id="shoulderDisRateAlinta"></label></td>
					<td><label class="dollarClass">$</label><label
						id="shoulderRateOpg"></label></td>
					<td><label class="dollarClass">$</label><label
						id="shoulderDistRateOpg"></label></td>
					<td><label class="dollarClass">$</label><label
						id="shoulderRate1energy"></label></td>
					<td><label class="dollarClass">$</label><label
						id="shoulderDisRate1energy"></label></td>
					<td><label class="dollarClass">$</label><label
						id="shoulderRateBluenrg"></label></td>
					<td><label class="dollarClass">$</label><label
						id="shoulderDisRateBluenrg"></label></td>
				</tr>
				<tr>
					<td>Off Peak</td>
					<td><label class="dollarClass">$</label><label
						id="offpeakRateAlinta"></label></td>
					<td><label class="dollarClass">$</label><label
						id="offpeakDisRateAlinta"></label></td>
					<td><label class="dollarClass">$</label><label
						id="offpeakRateOpg"></label></td>
					<td><label class="dollarClass">$</label><label
						id="offpeakDistRateOpg"></label></td>
					<td><label class="dollarClass">$</label><label
						id="offpeakRate1energy"></label></td>
					<td><label class="dollarClass">$</label><label
						id="offpeakDisRate1energy"></label></td>
					<td><label class="dollarClass">$</label><label
						id="offpeakRateBluenrg"></label></td>
					<td><label class="dollarClass">$</label><label
						id="offpeakDisRateBluenrg"></label></td>
				<tr>
					<td class="columShort">Supply Charge</td>
					<td><label class="dollarClass">$</label><label
						id="supplyRateAlinta"></label></td>
					<td><label class="dollarClass">$</label><label
						id="supplyDisRateAlinta"></label></td>
					<td><label class="dollarClass">$</label><label
						id="supplyRateOpg"></label></td>
					<td><label class="dollarClass">$</label><label
						id="supplyDistRateOpg"></label></td>
					<td><label class="dollarClass">$</label><label
						id="supplyRate1energy"></label></td>
					<td><label class="dollarClass">$</label><label
						id="supplyDisRate1energy"></label></td>
					<td><label class="dollarClass">$</label><label
						id="supplyRateBluenrg"></label></td>
					<td><label class="dollarClass">$</label><label
						id="supplyDisRateBluenrg"></label></td>
				</tr>
			</table>
		</div>
	</form>
</body>
</html>