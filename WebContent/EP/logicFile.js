/**
 * 
 */

// var discount = [ .30, .33, .40, .38, 0 ];
var discount = [];
var bill = 0;
var billAlinta = 0;
var billOpg = 0;
var bill1Energy = 0;
var billBluenrg = 0;
var billDisc = 0;
var billAlintaDisc = 0;
var billOpgDisc = 0;
var bill1EnergyDisc = 0;
var billBluenrgDisc = 0;
var idsInput = [ "code", "peak1Usage", "peak1Rates", "peak2Usage",
		"peak2Rates", "peak3Usage", "peak3Rates", "shoulderUsage",
		"shoulderRates", "clUsage", "clRates", "offpeakUsage", "offpeakRates",
		"supplychargeUsage", "supplychargeRates", "solarUsage" ];
var idsLabel = [ "type", "distributor", "peak1Charges", "peak1Discount",
		"peak1ChargesAlinta", "peak1DiscountAlinta", "peak1ChargesOpg",
		"peak1DiscountOpg", "peak1Charges1energy", "peak1Discount1energy",
		"peak1ChargesBluenrg", "peak1DiscountBluenrg", "peak2Charges",
		"peak2Discount", "peak2ChargesAlinta", "peak2DiscountAlinta",
		"peak2ChargesOpg", "peak2DiscountOpg", "peak2Charges1energy",
		"peak2Discount1energy", "peak2ChargesBluenrg", "peak2DiscountBluenrg",
		"peak3Charges", "peak3Discount", "peak3ChargesAlinta",
		"peak3DiscountAlinta", "peak3ChargesOpg", "peak3DiscountOpg",
		"peak3Charges1energy", "peak3Discount1energy", "peak3ChargesBluenrg",
		"peak3DiscountBluenrg", "shoulderCharges", "shoulderDiscount",
		"shoulderChargesAlinta", "shoulderDiscountAlinta",
		"shoulderChargesOpg", "shoulderDiscountOpg", "shoulderCharges1energy",
		"shoulderDiscount1energy", "shoulderChargesBluenrg",
		"shoulderDiscountBluenrg", "clCharges", "clDiscount",
		"clChargesAlinta", "clDiscountAlinta", "clChargesOpg", "clDiscountOpg",
		"clCharges1energy", "clDiscount1energy", "clChargesBluenrg",
		"clDiscountBluenrg", "offpeakCharges", "offpeakDiscount",
		"offpeakChargesAlinta", "offpeakDiscountAlinta", "offpeakChargesOpg",
		"offpeakDiscountOpg", "offpeakCharges1energy",
		"offpeakDiscount1energy", "offpeakChargesBluenrg",
		"offpeakDiscountBluenrg", "supplychargeCharges",
		"supplychargeDiscount", "supplychargeChargesAlinta",
		"supplychargeDiscountAlinta", "supplychargeChargesOpg",
		"supplychargeDiscountOpg", "supplychargeCharges1energy",
		"supplychargeDiscount1energy", "supplychargeChargesBluenrg",
		"supplychargeDiscountBluenrg", "solarCharges", "solarDiscount",
		"solarChargesAlinta", "solarDiscountAlinta", "solarChargesOpg",
		"solarDiscountOpg", "solarCharges1energy", "solarDiscount1energy",
		"solarChargesBluenrg", "chargesBill", "disBill",
		"solarDiscountBluenrg", "chargesAlintaBill", "disAlintaBill",
		"chargesOpgBill", "disOpgBill", "charges1EnergyBill", "dis1EnergyBill",
		"chargesBluenrgBill", "disBluenrgBill", "chargesConc", "disConc",
		"chargesAlintaConc", "disAlintaConc", "chargesOpgConc", "disOpgConc",
		"charges1EnergyConc", "dis1EnergyConc", "chargesBluenrgConc",
		"disBluenrgConc", "chargesTot", "disTot", "chargesAlintaTot",
		"disAlintaTot", "chargesOpgTot", "disOpgTot", "charges1EnergyTot",
		"dis1EnergyTot", "chargesBluenrgTot", "disBluenrgTot", "chargesTotg",
		"disTotg", "chargesAlintaTotg", "disAlintaTotg", "chargesOpgTotg",
		"disOpgTotg", "charges1EnergyTotg", "dis1EnergyTotg",
		"chargesBluenrgTotg", "disBluenrgTotg", "peak1RateAlinta",
		"peak1DisRateAlinta", "peak1RateOpg", "peak1DistRateOpg",
		"peak1Rate1energy", "peak1DisRate1energy", "peak1RateBluenrg",
		"peak1DisRateBluenrg", "peak2RateAlinta", "peak2DisRateAlinta",
		"peak2RateOpg", "peak2DistRateOpg", "peak2Rate1energy",
		"peak2DisRate1energy", "peak2RateBluenrg", "peak2DisRateBluenrg",
		"peak3RateAlinta", "peak3DisRateAlinta", "peak3RateOpg",
		"peak3DistRateOpg", "peak3Rate1energy", "peak3DisRate1energy",
		"peak3RateBluenrg", "peak3DisRateBluenrg", "clRateAlinta",
		"clDisRateAlinta", "clRateOpg", "clDistRateOpg", "clRate1energy",
		"clDisRate1energy", "clRateBluenrg", "clDisRateBluenrg",
		"shoulderRateAlinta", "shoulderDisRateAlinta", "shoulderRateOpg",
		"shoulderDistRateOpg", "shoulderRate1energy", "shoulderDisRate1energy",
		"shoulderRateBluenrg", "shoulderDisRateBluenrg", "offpeakRateAlinta",
		"offpeakDisRateAlinta", "offpeakRateOpg", "offpeakDistRateOpg",
		"offpeakRate1energy", "offpeakDisRate1energy", "offpeakRateBluenrg",
		"offpeakDisRateBluenrg", "supplyRateAlinta", "supplyDisRateAlinta",
		"supplyRateOpg", "supplyDistRateOpg", "supplyRate1energy",
		"supplyDisRate1energy", "supplyRateBluenrg", "supplyDisRateBluenrg" ];

function methodName() {

	discount[0] = 1 * this.document.getElementById("dis1").value / 100;
	discount[1] = 1 * this.document.getElementById("dis2").value / 100;
	discount[2] = 1 * this.document.getElementById("dis3").value / 100;
	discount[3] = 1 * this.document.getElementById("dis4").value / 100;
	discount[4] = 1 * this.document.getElementById("dis5").value / 100;
	this.document.getElementById("dis2Rate").innerText = this.document
			.getElementById("dis2").value;
	this.document.getElementById("dis3Rate").innerText = this.document
			.getElementById("dis3").value;
	this.document.getElementById("dis4Rate").innerText = this.document
			.getElementById("dis4").value;
	this.document.getElementById("dis5Rate").innerText = this.document
			.getElementById("dis5").value;
	var data = dataCall();
	var code = this.document.getElementById("code").value;
	code = code.toUpperCase();
	for (var i = 0; i < Object.keys(data).length; i++) {
		if (data[i].TariffCode == code) {
			var distributor = data[i].NetworkName;
			var type = data[i].TariffType;
		}
	}
	if (type == undefined || distributor == undefined)
		alert("Invalid Code");
	this.document.getElementById("type").innerText = type;
	this.document.getElementById("distributor").innerText = distributor;
	methodNameAll();

}

function methodNameAll() {

	bill = 0;
	billAlinta = 0;
	billOpg = 0;
	bill1Energy = 0;
	billBluenrg = 0;
	billDisc = 0;
	billAlintaDisc = 0;
	billOpgDisc = 0;
	bill1EnergyDisc = 0;
	billBluenrgDisc = 0;
	peak1Calc();
	peak2Calc();
	peak3Calc();
	shoulderCalc();
	clCalc();
	offpeakCalc();
	supplyCalc();
	solarCalc();
	billCalc();
	checkHighLow();
	var value, valCheck;
	for (var i = 0; i < idsLabel.length; i++) {
		valCheck = this.document.getElementById(idsLabel[i]).innerText;
		value = 1 * this.document.getElementById(idsLabel[i]).innerText;
		if (value == 0 || valCheck == 'null' || valCheck == 'undefined'
				|| valCheck == 'NaN') {
			this.document.getElementById(idsLabel[i]).innerText = "";
		}
	}
}
function clearData() {

	for (var i = 0; i < idsLabel.length; i++) {

		this.document.getElementById(idsLabel[i]).innerText = "";

	}
	for (var i = 0; i < idsInput.length; i++) {

		this.document.getElementById(idsInput[i]).innerText = "";

	}

}
function peak1Calc() {
	var alintaRate = 0;
	var opgRate = 0;
	var energyRate = 0;
	var bluenrgRate = 0;
	var rates = ratesCall();
	if (this.document.getElementById("peak1Usage").value == '')
		this.document.getElementById("peak1Usage").value = 0;
	if (this.document.getElementById("peak1Rates") == '')
		this.document.getElementById("peak1Rates").value = 0;

	this.document.getElementById("peak1Charges").innerText = (this.document
			.getElementById("peak1Usage").value * this.document
			.getElementById("peak1Rates").value).toFixed(2);
	this.document.getElementById("peak1Discount").innerText = (this.document
			.getElementById("peak1Charges").innerText - (discount[0] * this.document
			.getElementById("peak1Charges").innerText)).toFixed(2);

	for (var i = 0; i < Object.keys(rates).length; i++) {
		if (rates[i].Type == this.document.getElementById("type").innerHTML
				&& rates[i].Usage == "Peak 1"
				&& rates[i].Distributor == this.document
						.getElementById("distributor").innerHTML) {

			if (rates[i].Company == "ALINTA")
				alintaRate = rates[i].Rate;
			else if (rates[i].Company == "Next Business Energy")
				opgRate = rates[i].Rate;
			else if (rates[i].Company == "Sumo ENERGY")
				energyRate = rates[i].Rate;
			else if (rates[i].Company == "BLUENRG")
				bluenrgRate = rates[i].Rate;
		}
	}
	this.document.getElementById("peak1ChargesAlinta").innerText = (alintaRate * this.document
			.getElementById("peak1Usage").value).toFixed(2);
	this.document.getElementById("peak1DiscountAlinta").innerText = (this.document
			.getElementById("peak1ChargesAlinta").innerText - (discount[1] * this.document
			.getElementById("peak1ChargesAlinta").innerText)).toFixed(2);

	this.document.getElementById("peak1ChargesOpg").innerText = (opgRate * this.document
			.getElementById("peak1Usage").value).toFixed(2);
	this.document.getElementById("peak1DiscountOpg").innerText = (this.document
			.getElementById("peak1ChargesOpg").innerText - (discount[2] * this.document
			.getElementById("peak1ChargesOpg").innerText)).toFixed(2);

	this.document.getElementById("peak1Charges1energy").innerText = (energyRate * this.document
			.getElementById("peak1Usage").value).toFixed(2);
	this.document.getElementById("peak1Discount1energy").innerText = (this.document
			.getElementById("peak1Charges1energy").innerText - (discount[3] * this.document
			.getElementById("peak1Charges1energy").innerText)).toFixed(2);

	this.document.getElementById("peak1ChargesBluenrg").innerText = (bluenrgRate * this.document
			.getElementById("peak1Usage").value).toFixed(2);
	this.document.getElementById("peak1DiscountBluenrg").innerText = (this.document
			.getElementById("peak1ChargesBluenrg").innerText - (discount[4] * this.document
			.getElementById("peak1ChargesBluenrg").innerText)).toFixed(2);

	bill += (1 * this.document.getElementById("peak1Charges").innerText);
	billAlinta += (1 * this.document.getElementById("peak1ChargesAlinta").innerText);
	billOpg += (1 * this.document.getElementById("peak1ChargesOpg").innerText);
	bill1Energy += (1 * this.document.getElementById("peak1Charges1energy").innerText);
	billBluenrg += (1 * this.document.getElementById("peak1ChargesBluenrg").innerText);

	billDisc += (1 * this.document.getElementById("peak1Discount").innerText);
	billAlintaDisc += (1 * this.document.getElementById("peak1DiscountAlinta").innerText);
	billOpgDisc += (1 * this.document.getElementById("peak1DiscountOpg").innerText);
	bill1EnergyDisc += (1 * this.document
			.getElementById("peak1Discount1energy").innerText);
	billBluenrgDisc += (1 * this.document
			.getElementById("peak1DiscountBluenrg").innerText);

	this.document.getElementById("peak1RateAlinta").innerText = alintaRate;
	this.document.getElementById("peak1DisRateAlinta").innerText = (alintaRate - (discount[1] * alintaRate))
			.toFixed(4);
	this.document.getElementById("peak1RateOpg").innerText = opgRate;
	this.document.getElementById("peak1DistRateOpg").innerText = (opgRate - (discount[2] * opgRate))
			.toFixed(4);
	this.document.getElementById("peak1Rate1energy").innerText = energyRate;
	this.document.getElementById("peak1DisRate1energy").innerText = (energyRate - (discount[3] * energyRate))
			.toFixed(4);
	this.document.getElementById("peak1RateBluenrg").innerText = bluenrgRate;
	this.document.getElementById("peak1DisRateBluenrg").innerText = (bluenrgRate - (discount[4] * bluenrgRate))
			.toFixed(4);
}

function peak2Calc() {
	var alintaRate = 0;
	var opgRate = 0;
	var energyRate = 0;
	var bluenrgRate = 0;
	````````````````
	if (this.document.getElementById("peak2Usage").value == '')
		this.document.getElementById("peak2Usage").value = 0;
	if (this.document.getElementById("peak2Rates") == '')
		this.document.getElementById("peak2Rates").value = 0;

	this.document.getElementById("peak2Charges").innerText = (this.document
			.getElementById("peak2Usage").value * this.document
			.getElementById("peak2Rates").value).toFixed(2);
	this.document.getElementById("peak2Discount").innerText = (this.document
			.getElementById("peak2Charges").innerText - (discount[0] * this.document
			.getElementById("peak2Charges").innerText)).toFixed(2);

	for (var i = 0; i < Object.keys(rates).length; i++) {
		if (rates[i].Type == this.document.getElementById("type").innerHTML
				&& rates[i].Usage == "Peak 2"
				&& rates[i].Distributor == this.document
						.getElementById("distributor").innerHTML) {

			if (rates[i].Company == "ALINTA")
				alintaRate = rates[i].Rate;
			else if (rates[i].Company == "Next Business Energy")
				opgRate = rates[i].Rate;
			else if (rates[i].Company == "Sumo ENERGY")
				energyRate = rates[i].Rate;
			else if (rates[i].Company == "BLUENRG")
				bluenrgRate = rates[i].Rate;
		}
	}
	this.document.getElementById("peak2ChargesAlinta").innerText = (alintaRate * this.document
			.getElementById("peak2Usage").value).toFixed(2);
	this.document.getElementById("peak2DiscountAlinta").innerText = (this.document
			.getElementById("peak2ChargesAlinta").innerText - (discount[1] * this.document
			.getElementById("peak2ChargesAlinta").innerText)).toFixed(2);

	this.document.getElementById("peak2ChargesOpg").innerText = (opgRate * this.document
			.getElementById("peak2Usage").value).toFixed(2);
	this.document.getElementById("peak2DiscountOpg").innerText = (this.document
			.getElementById("peak2ChargesOpg").innerText - (discount[2] * this.document
			.getElementById("peak2ChargesOpg").innerText)).toFixed(2);

	this.document.getElementById("peak2Charges1energy").innerText = (energyRate * this.document
			.getElementById("peak2Usage").value).toFixed(2);
	this.document.getElementById("peak2Discount1energy").innerText = (this.document
			.getElementById("peak2Charges1energy").innerText - (discount[3] * this.document
			.getElementById("peak2Charges1energy").innerText)).toFixed(2);

	this.document.getElementById("peak2ChargesBluenrg").innerText = (bluenrgRate * this.document
			.getElementById("peak2Usage").value).toFixed(2);
	this.document.getElementById("peak2DiscountBluenrg").innerText = (this.document
			.getElementById("peak2ChargesBluenrg").innerText - (discount[4] * this.document
			.getElementById("peak2ChargesBluenrg").innerText)).toFixed(2);
	bill += (1 * this.document.getElementById("peak2Charges").innerText);
	billAlinta += (1 * this.document.getElementById("peak2ChargesAlinta").innerText);
	billOpg += (1 * this.document.getElementById("peak2ChargesOpg").innerText);
	bill1Energy += (1 * this.document.getElementById("peak2Charges1energy").innerText);
	billBluenrg += (1 * this.document.getElementById("peak2ChargesBluenrg").innerText);

	billDisc += (1 * this.document.getElementById("peak2Discount").innerText);
	billAlintaDisc += (1 * this.document.getElementById("peak2DiscountAlinta").innerText);
	billOpgDisc += (1 * this.document.getElementById("peak2DiscountOpg").innerText);
	bill1EnergyDisc += (1 * this.document
			.getElementById("peak2Discount1energy").innerText);
	billBluenrgDisc += (1 * this.document
			.getElementById("peak2DiscountBluenrg").innerText);

	this.document.getElementById("peak2RateAlinta").innerText = alintaRate;
	this.document.getElementById("peak2DisRateAlinta").innerText = (alintaRate - (discount[1] * alintaRate))
			.toFixed(4);
	this.document.getElementById("peak2RateOpg").innerText = opgRate;
	this.document.getElementById("peak2DistRateOpg").innerText = (opgRate - (discount[2] * opgRate))
			.toFixed(4);
	this.document.getElementById("peak2Rate1energy").innerText = energyRate;
	this.document.getElementById("peak2DisRate1energy").innerText = (energyRate - (discount[3] * energyRate))
			.toFixed(4);
	this.document.getElementById("peak2RateBluenrg").innerText = bluenrgRate;
	this.document.getElementById("peak2DisRateBluenrg").innerText = (bluenrgRate - (discount[4] * bluenrgRate))
			.toFixed(4);

}

function peak3Calc() {
	var alintaRate = 0;
	var opgRate = 0;
	var energyRate = 0;
	var bluenrgRate = 0;
	var rates = ratesCall();
	if (this.document.getElementById("peak3Usage").value == '')
		this.document.getElementById("peak3Usage").value = 0;
	if (this.document.getElementById("peak3Rates") == '')
		this.document.getElementById("peak3Rates").value = 0;

	this.document.getElementById("peak3Charges").innerText = (this.document
			.getElementById("peak3Usage").value * this.document
			.getElementById("peak3Rates").value).toFixed(2);
	this.document.getElementById("peak3Discount").innerText = (this.document
			.getElementById("peak3Charges").innerText - (discount[0] * this.document
			.getElementById("peak3Charges").innerText)).toFixed(2);

	for (var i = 0; i < Object.keys(rates).length; i++) {
		if (rates[i].Type == this.document.getElementById("type").innerHTML
				&& rates[i].Usage == "Peak 3"
				&& rates[i].Distributor == this.document
						.getElementById("distributor").innerHTML) {

			if (rates[i].Company == "ALINTA")
				alintaRate = rates[i].Rate;
			else if (rates[i].Company == "Next Business Energy")
				opgRate = rates[i].Rate;
			else if (rates[i].Company == "Sumo ENERGY")
				energyRate = rates[i].Rate;
			else if (rates[i].Company == "BLUENRG")
				bluenrgRate = rates[i].Rate;
		}
	}
	this.document.getElementById("peak3ChargesAlinta").innerText = (alintaRate * this.document
			.getElementById("peak3Usage").value).toFixed(2);
	this.document.getElementById("peak3DiscountAlinta").innerText = (this.document
			.getElementById("peak3ChargesAlinta").innerText - (discount[1] * this.document
			.getElementById("peak3ChargesAlinta").innerText)).toFixed(2);

	this.document.getElementById("peak3ChargesOpg").innerText = (opgRate * this.document
			.getElementById("peak3Usage").value).toFixed(2);
	this.document.getElementById("peak3DiscountOpg").innerText = (this.document
			.getElementById("peak3ChargesOpg").innerText - (discount[2] * this.document
			.getElementById("peak3ChargesOpg").innerText)).toFixed(2);

	this.document.getElementById("peak3Charges1energy").innerText = (energyRate * this.document
			.getElementById("peak3Usage").value).toFixed(2);
	this.document.getElementById("peak3Discount1energy").innerText = (this.document
			.getElementById("peak3Charges1energy").innerText - (discount[3] * this.document
			.getElementById("peak3Charges1energy").innerText)).toFixed(2);

	this.document.getElementById("peak3ChargesBluenrg").innerText = (bluenrgRate * this.document
			.getElementById("peak3Usage").value).toFixed(2);
	this.document.getElementById("peak3DiscountBluenrg").innerText = (this.document
			.getElementById("peak3ChargesBluenrg").innerText - (discount[4] * this.document
			.getElementById("peak3ChargesBluenrg").innerText)).toFixed(2);
	bill += (1 * this.document.getElementById("peak3Charges").innerText);
	billAlinta += (1 * this.document.getElementById("peak3ChargesAlinta").innerText);
	billOpg += (1 * this.document.getElementById("peak3ChargesOpg").innerText);
	bill1Energy += (1 * this.document.getElementById("peak3Charges1energy").innerText);
	billBluenrg += (1 * this.document.getElementById("peak3ChargesBluenrg").innerText);

	billDisc += (1 * this.document.getElementById("peak3Discount").innerText);
	billAlintaDisc += (1 * this.document.getElementById("peak3DiscountAlinta").innerText);
	billOpgDisc += (1 * this.document.getElementById("peak3DiscountOpg").innerText);
	bill1EnergyDisc += (1 * this.document
			.getElementById("peak3Discount1energy").innerText);
	billBluenrgDisc += (1 * this.document
			.getElementById("peak3DiscountBluenrg").innerText);

	this.document.getElementById("peak3RateAlinta").innerText = alintaRate;
	this.document.getElementById("peak3DisRateAlinta").innerText = (alintaRate - (discount[1] * alintaRate))
			.toFixed(4);
	this.document.getElementById("peak3RateOpg").innerText = opgRate;
	this.document.getElementById("peak3DistRateOpg").innerText = (opgRate - (discount[2] * opgRate))
			.toFixed(4);
	this.document.getElementById("peak3Rate1energy").innerText = energyRate;
	this.document.getElementById("peak3DisRate1energy").innerText = (energyRate - (discount[3] * energyRate))
			.toFixed(4);
	this.document.getElementById("peak3RateBluenrg").innerText = bluenrgRate;
	this.document.getElementById("peak3DisRateBluenrg").innerText = (bluenrgRate - (discount[4] * bluenrgRate))
			.toFixed(4);

}

function shoulderCalc() {
	var alintaRate = 0;
	var opgRate = 0;
	var energyRate = 0;
	var bluenrgRate = 0;
	var rates = ratesCall();
	if (this.document.getElementById("shoulderUsage").value == '')
		this.document.getElementById("shoulderUsage").value = 0;
	if (this.document.getElementById("shoulderRates") == '')
		this.document.getElementById("shoulderRates").value = 0;

	this.document.getElementById("shoulderCharges").innerText = (this.document
			.getElementById("shoulderUsage").value * this.document
			.getElementById("shoulderRates").value).toFixed(2);
	this.document.getElementById("shoulderDiscount").innerText = (this.document
			.getElementById("shoulderCharges").innerText - (discount[0] * this.document
			.getElementById("shoulderCharges").innerText)).toFixed(2);

	for (var i = 0; i < Object.keys(rates).length; i++) {
		if (rates[i].Type == this.document.getElementById("type").innerHTML
				&& rates[i].Usage == "Shoulder"
				&& rates[i].Distributor == this.document
						.getElementById("distributor").innerHTML) {

			if (rates[i].Company == "ALINTA")
				alintaRate = rates[i].Rate;
			else if (rates[i].Company == "Next Business Energy")
				opgRate = rates[i].Rate;
			else if (rates[i].Company == "Sumo ENERGY")
				energyRate = rates[i].Rate;
			else if (rates[i].Company == "BLUENRG")
				bluenrgRate = rates[i].Rate;
		}
	}
	this.document.getElementById("shoulderChargesAlinta").innerText = (alintaRate * this.document
			.getElementById("shoulderUsage").value).toFixed(2);
	this.document.getElementById("shoulderDiscountAlinta").innerText = (this.document
			.getElementById("shoulderChargesAlinta").innerText - (discount[1] * this.document
			.getElementById("shoulderChargesAlinta").innerText)).toFixed(2);

	this.document.getElementById("shoulderChargesOpg").innerText = (opgRate * this.document
			.getElementById("shoulderUsage").value).toFixed(2);
	this.document.getElementById("shoulderDiscountOpg").innerText = (this.document
			.getElementById("shoulderChargesOpg").innerText - (discount[2] * this.document
			.getElementById("shoulderChargesOpg").innerText)).toFixed(2);

	this.document.getElementById("shoulderCharges1energy").innerText = (energyRate * this.document
			.getElementById("shoulderUsage").value).toFixed(2);
	this.document.getElementById("shoulderDiscount1energy").innerText = (this.document
			.getElementById("shoulderCharges1energy").innerText - (discount[3] * this.document
			.getElementById("shoulderCharges1energy").innerText)).toFixed(2);

	this.document.getElementById("shoulderChargesBluenrg").innerText = (bluenrgRate * this.document
			.getElementById("shoulderUsage").value).toFixed(2);
	this.document.getElementById("shoulderDiscountBluenrg").innerText = (this.document
			.getElementById("shoulderChargesBluenrg").innerText - (discount[4] * this.document
			.getElementById("shoulderChargesBluenrg").innerText)).toFixed(2);
	bill += (1 * this.document.getElementById("shoulderCharges").innerText);
	billAlinta += (1 * this.document.getElementById("shoulderChargesAlinta").innerText);
	billOpg += (1 * this.document.getElementById("shoulderChargesOpg").innerText);
	bill1Energy += (1 * this.document.getElementById("shoulderCharges1energy").innerText);
	billBluenrg += (1 * this.document.getElementById("shoulderChargesBluenrg").innerText);

	billDisc += (1 * this.document.getElementById("shoulderDiscount").innerText);
	billAlintaDisc += (1 * this.document
			.getElementById("shoulderDiscountAlinta").innerText);
	billOpgDisc += (1 * this.document.getElementById("shoulderDiscountOpg").innerText);
	bill1EnergyDisc += (1 * this.document
			.getElementById("shoulderDiscount1energy").innerText);
	billBluenrgDisc += (1 * this.document
			.getElementById("shoulderDiscountBluenrg").innerText);

	this.document.getElementById("shoulderRateAlinta").innerText = alintaRate;
	this.document.getElementById("shoulderDisRateAlinta").innerText = (alintaRate - (discount[1] * alintaRate))
			.toFixed(4);
	this.document.getElementById("shoulderRateOpg").innerText = opgRate;
	this.document.getElementById("shoulderDistRateOpg").innerText = (opgRate - (discount[2] * opgRate))
			.toFixed(4);
	this.document.getElementById("shoulderRate1energy").innerText = energyRate;
	this.document.getElementById("shoulderDisRate1energy").innerText = (energyRate - (discount[3] * energyRate))
			.toFixed(4);
	this.document.getElementById("shoulderRateBluenrg").innerText = bluenrgRate;
	this.document.getElementById("shoulderDisRateBluenrg").innerText = (bluenrgRate - (discount[4] * bluenrgRate))
			.toFixed(4);

}

function clCalc() {
	var alintaRate = 0;
	var opgRate = 0;
	var energyRate = 0;
	var bluenrgRate = 0;
	var rates = ratesCall();
	if (this.document.getElementById("clUsage").value == '')
		this.document.getElementById("clUsage").value = 0;
	if (this.document.getElementById("clRates") == '')
		this.document.getElementById("clRates").value = 0;
	var e = document.getElementById("cltype");
	var clType = e.options[e.selectedIndex].value;
	if (clType == "no") {

		this.document.getElementById("clCharges").innerText = 0;
		this.document.getElementById("clDiscount").innerText = 0;
		this.document.getElementById("clChargesAlinta").innerText = 0;
		this.document.getElementById("clDiscountAlinta").innerText = 0;
		this.document.getElementById("clChargesOpg").innerText = 0;
		this.document.getElementById("clDiscountOpg").innerText = 0;
		this.document.getElementById("clCharges1energy").innerText = 0;
		this.document.getElementById("clDiscount1energy").innerText = 0;
		this.document.getElementById("clChargesBluenrg").innerText = 0;
		this.document.getElementById("clDiscountBluenrg").innerText = 0;
	} else {
		this.document.getElementById("clCharges").innerText = (this.document
				.getElementById("clUsage").value * this.document
				.getElementById("clRates").value).toFixed(2);
		this.document.getElementById("clDiscount").innerText = (this.document
				.getElementById("clCharges").innerText - (discount[0] * this.document
				.getElementById("clCharges").innerText)).toFixed(2);
		var stringCheck, stringCheck1;
		for (var i = 0; i < Object.keys(rates).length; i++) {
			if (rates[i].Type == this.document.getElementById("type").innerHTML
					|| rates[i].Type == this.document.getElementById("type").innerHTML
							+ "Controlled Load1") {
				stringCheck = "Controlled Load" + rates[i].ResBus;
				stringCheck1 = this.document.getElementById("type").innerHTML
						+ "Controlled Load1";
			}
			if ((rates[i].Type == this.document.getElementById("type").innerHTML
					|| rates[i].Type.indexOf(stringCheck) >= 0 )
					&& rates[i].Usage == "CL"
					&& rates[i].Distributor == this.document
							.getElementById("distributor").innerHTML) {
				if (rates[i].Company == "ALINTA")
					alintaRate = rates[i].Rate;
				else if (rates[i].Company == "Next Business Energy")
					opgRate = rates[i].Rate;
				else if (rates[i].Company == "Sumo ENERGY")
					energyRate = rates[i].Rate;
				else if (rates[i].Company == "BLUENRG")
					bluenrgRate = rates[i].Rate;
			}
			else if ((rates[i].Type == this.document.getElementById("type").innerHTML
					+ "Controlled Load1" || rates[i].Type.indexOf(stringCheck1) >= 0)
			&& rates[i].Usage == "CL"
			&& rates[i].Distributor == this.document
					.getElementById("distributor").innerHTML) {
		if (rates[i].Company == "ALINTA")
			alintaRate = rates[i].Rate;
		else if (rates[i].Company == "OPG")
			opgRate = rates[i].Rate;
		else if (rates[i].Company == "Sumo ENERGY")
			energyRate = rates[i].Rate;
		else if (rates[i].Company == "BLUENRG")
			bluenrgRate = rates[i].Rate;
	}
		}
		this.document.getElementById("clChargesAlinta").innerText = (alintaRate * this.document
				.getElementById("clUsage").value).toFixed(2);
		this.document.getElementById("clDiscountAlinta").innerText = (this.document
				.getElementById("clChargesAlinta").innerText - (discount[1] * this.document
				.getElementById("clChargesAlinta").innerText)).toFixed(2);

		this.document.getElementById("clChargesOpg").innerText = (opgRate * this.document
				.getElementById("clUsage").value).toFixed(2);
		this.document.getElementById("clDiscountOpg").innerText = (this.document
				.getElementById("clChargesOpg").innerText - (discount[2] * this.document
				.getElementById("clChargesOpg").innerText)).toFixed(2);

		this.document.getElementById("clCharges1energy").innerText = (energyRate * this.document
				.getElementById("clUsage").value).toFixed(2);
		this.document.getElementById("clDiscount1energy").innerText = (this.document
				.getElementById("clCharges1energy").innerText - (discount[3] * this.document
				.getElementById("clCharges1energy").innerText)).toFixed(2);

		this.document.getElementById("clChargesBluenrg").innerText = (bluenrgRate * this.document
				.getElementById("clUsage").value).toFixed(2);
		this.document.getElementById("clDiscountBluenrg").innerText = (this.document
				.getElementById("clChargesBluenrg").innerText - (discount[4] * this.document
				.getElementById("clChargesBluenrg").innerText)).toFixed(2);
		bill += (1 * this.document.getElementById("clCharges").innerText);
		billAlinta += (1 * this.document.getElementById("clChargesAlinta").innerText);
		billOpg += (1 * this.document.getElementById("clChargesOpg").innerText);
		bill1Energy += (1 * this.document.getElementById("clCharges1energy").innerText);
		billBluenrg += (1 * this.document.getElementById("clChargesBluenrg").innerText);

		billDisc += (1 * this.document.getElementById("clDiscount").innerText);
		billAlintaDisc += (1 * this.document.getElementById("clDiscountAlinta").innerText);
		billOpgDisc += (1 * this.document.getElementById("clDiscountOpg").innerText);
		bill1EnergyDisc += (1 * this.document
				.getElementById("clDiscount1energy").innerText);
		billBluenrgDisc += (1 * this.document
				.getElementById("clDiscountBluenrg").innerText);
	}
	this.document.getElementById("clRateAlinta").innerText = alintaRate;
	this.document.getElementById("clDisRateAlinta").innerText = (alintaRate - (discount[1] * alintaRate))
			.toFixed(4);
	this.document.getElementById("clRateOpg").innerText = opgRate;
	this.document.getElementById("clDistRateOpg").innerText = (opgRate - (discount[2] * opgRate))
			.toFixed(4);
	this.document.getElementById("clRate1energy").innerText = energyRate;
	this.document.getElementById("clDisRate1energy").innerText = (energyRate - (discount[3] * energyRate))
			.toFixed(4);
	this.document.getElementById("clRateBluenrg").innerText = bluenrgRate;
	this.document.getElementById("clDisRateBluenrg").innerText = (bluenrgRate - (discount[4] * bluenrgRate))
			.toFixed(4);
}

function offpeakCalc() {
	var alintaRate = 0;
	var opgRate = 0;
	var energyRate = 0;
	var bluenrgRate = 0;
	var rates = ratesCall();
	if (this.document.getElementById("offpeakUsage").value == '')
		this.document.getElementById("offpeakUsage").value = 0;
	if (this.document.getElementById("offpeakRates") == '')
		this.document.getElementById("offpeakRates").value = 0;

	this.document.getElementById("offpeakCharges").innerText = (this.document
			.getElementById("offpeakUsage").value * this.document
			.getElementById("offpeakRates").value).toFixed(2);
	this.document.getElementById("offpeakDiscount").innerText = (this.document
			.getElementById("offpeakCharges").innerText - (discount[0] * this.document
			.getElementById("offpeakCharges").innerText)).toFixed(2);

	for (var i = 0; i < Object.keys(rates).length; i++) {
		if (rates[i].Type == this.document.getElementById("type").innerHTML
				&& rates[i].Usage == "Off Peak"
				&& rates[i].Distributor == this.document
						.getElementById("distributor").innerHTML) {

			if (rates[i].Company == "ALINTA")
				alintaRate = rates[i].Rate;
			else if (rates[i].Company == "Next Business Energy")
				opgRate = rates[i].Rate;
			else if (rates[i].Company == "Sumo ENERGY")
				energyRate = rates[i].Rate;
			else if (rates[i].Company == "BLUENRG")
				bluenrgRate = rates[i].Rate;
		}
	}
	this.document.getElementById("offpeakChargesAlinta").innerText = (alintaRate * this.document
			.getElementById("offpeakUsage").value).toFixed(2);
	this.document.getElementById("offpeakDiscountAlinta").innerText = (this.document
			.getElementById("offpeakChargesAlinta").innerText - (discount[1] * this.document
			.getElementById("offpeakChargesAlinta").innerText)).toFixed(2);

	this.document.getElementById("offpeakChargesOpg").innerText = (opgRate * this.document
			.getElementById("offpeakUsage").value).toFixed(2);
	this.document.getElementById("offpeakDiscountOpg").innerText = (this.document
			.getElementById("offpeakChargesOpg").innerText - (discount[2] * this.document
			.getElementById("offpeakChargesOpg").innerText)).toFixed(2);

	this.document.getElementById("offpeakCharges1energy").innerText = (energyRate * this.document
			.getElementById("offpeakUsage").value).toFixed(2);
	this.document.getElementById("offpeakDiscount1energy").innerText = (this.document
			.getElementById("offpeakCharges1energy").innerText - (discount[3] * this.document
			.getElementById("offpeakCharges1energy").innerText)).toFixed(2);

	this.document.getElementById("offpeakChargesBluenrg").innerText = (bluenrgRate * this.document
			.getElementById("offpeakUsage").value).toFixed(2);
	this.document.getElementById("offpeakDiscountBluenrg").innerText = (this.document
			.getElementById("offpeakChargesBluenrg").innerText - (discount[4] * this.document
			.getElementById("offpeakChargesBluenrg").innerText)).toFixed(2);
	bill += (1 * this.document.getElementById("offpeakCharges").innerText);
	billAlinta += (1 * this.document.getElementById("offpeakChargesAlinta").innerText);
	billOpg += (1 * this.document.getElementById("offpeakChargesOpg").innerText);
	bill1Energy += (1 * this.document.getElementById("offpeakCharges1energy").innerText);
	billBluenrg += (1 * this.document.getElementById("offpeakChargesBluenrg").innerText);

	billDisc += (1 * this.document.getElementById("offpeakDiscount").innerText);
	billAlintaDisc += (1 * this.document
			.getElementById("offpeakDiscountAlinta").innerText);
	billOpgDisc += (1 * this.document.getElementById("offpeakDiscountOpg").innerText);
	bill1EnergyDisc += (1 * this.document
			.getElementById("offpeakDiscount1energy").innerText);
	billBluenrgDisc += (1 * this.document
			.getElementById("offpeakDiscountBluenrg").innerText);

	this.document.getElementById("offpeakRateAlinta").innerText = alintaRate;
	this.document.getElementById("offpeakDisRateAlinta").innerText = (alintaRate - (discount[1] * alintaRate))
			.toFixed(4);
	this.document.getElementById("offpeakRateOpg").innerText = opgRate;
	this.document.getElementById("offpeakDistRateOpg").innerText = (opgRate - (discount[2] * opgRate))
			.toFixed(4);
	this.document.getElementById("offpeakRate1energy").innerText = energyRate;
	this.document.getElementById("offpeakDisRate1energy").innerText = (energyRate - (discount[3] * energyRate))
			.toFixed(4);
	this.document.getElementById("offpeakRateBluenrg").innerText = bluenrgRate;
	this.document.getElementById("offpeakDisRateBluenrg").innerText = (bluenrgRate - (discount[4] * bluenrgRate))
			.toFixed(4);
}

function supplyCalc() {
	var alintaRate = 0;
	var opgRate = 0;
	var energyRate = 0;
	var bluenrgRate = 0;
	var rates = ratesCall();

	var e = document.getElementById("opgtype");
	var opgType = e.options[e.selectedIndex].value;

	if (opgType == "no") {
	}

	if (this.document.getElementById("supplychargeUsage").value == '')
		this.document.getElementById("supplychargeUsage").value = 0;
	if (this.document.getElementById("supplychargeRates") == '')
		this.document.getElementById("supplychargeRates").value = 0;

	this.document.getElementById("supplychargeCharges").innerText = (this.document
			.getElementById("supplychargeUsage").value * this.document
			.getElementById("supplychargeRates").value).toFixed(2);
	this.document.getElementById("supplychargeDiscount").innerText = this.document
			.getElementById("supplychargeCharges").innerText;

	for (var i = 0; i < Object.keys(rates).length; i++) {
		if (rates[i].Type == this.document.getElementById("type").innerHTML
				&& rates[i].Usage == "Supply Charge"
				&& rates[i].Distributor == this.document
						.getElementById("distributor").innerHTML) {

			if (rates[i].Company == "ALINTA")
				alintaRate = rates[i].Rate;
			else if (rates[i].Company == "Next Business Energy")
				opgRate = rates[i].Rate;
			else if (rates[i].Company == "Sumo ENERGY")
				energyRate = rates[i].Rate;
			else if (rates[i].Company == "BLUENRG")
				bluenrgRate = rates[i].Rate;
		}
	}
	this.document.getElementById("supplychargeChargesAlinta").innerText = (alintaRate * this.document
			.getElementById("supplychargeUsage").value).toFixed(2);
	this.document.getElementById("supplychargeDiscountAlinta").innerText = this.document
			.getElementById("supplychargeChargesAlinta").innerText;

	this.document.getElementById("supplychargeChargesOpg").innerText = (opgRate * this.document
			.getElementById("supplychargeUsage").value).toFixed(2);
	if (opgType == "no")
		this.document.getElementById("supplychargeDiscountOpg").innerText = this.document
				.getElementById("supplychargeChargesOpg").innerText;
	else
		this.document.getElementById("supplychargeDiscountOpg").innerText = (this.document
				.getElementById("supplychargeChargesOpg").innerText - (discount[2] * this.document
				.getElementById("supplychargeChargesOpg").innerText))
				.toFixed(2);

	this.document.getElementById("supplychargeCharges1energy").innerText = (energyRate * this.document
			.getElementById("supplychargeUsage").value).toFixed(2);
	this.document.getElementById("supplychargeDiscount1energy").innerText = this.document
			.getElementById("supplychargeCharges1energy").innerText;

	this.document.getElementById("supplychargeChargesBluenrg").innerText = (bluenrgRate * this.document
			.getElementById("supplychargeUsage").value).toFixed(2);
	this.document.getElementById("supplychargeDiscountBluenrg").innerText = this.document
			.getElementById("supplychargeChargesBluenrg").innerText;
	bill += (1 * this.document.getElementById("supplychargeCharges").innerText);
	billAlinta += (1 * this.document
			.getElementById("supplychargeChargesAlinta").innerText);
	billOpg += (1 * this.document.getElementById("supplychargeChargesOpg").innerText);
	bill1Energy += (1 * this.document
			.getElementById("supplychargeCharges1energy").innerText);
	billBluenrg += (1 * this.document
			.getElementById("supplychargeChargesBluenrg").innerText);

	billDisc += (1 * this.document.getElementById("supplychargeDiscount").innerText);
	billAlintaDisc += (1 * this.document
			.getElementById("supplychargeDiscountAlinta").innerText);
	billOpgDisc += (1 * this.document.getElementById("supplychargeDiscountOpg").innerText);
	bill1EnergyDisc += (1 * this.document
			.getElementById("supplychargeDiscount1energy").innerText);
	billBluenrgDisc += (1 * this.document
			.getElementById("supplychargeDiscountBluenrg").innerText);

	this.document.getElementById("supplyRateAlinta").innerText = alintaRate;
	this.document.getElementById("supplyDisRateAlinta").innerText = alintaRate;
	this.document.getElementById("supplyRateOpg").innerText = opgRate;
	if (opgType == "no")
		this.document.getElementById("supplyDistRateOpg").innerText = opgRate;
	else
		this.document.getElementById("supplyDistRateOpg").innerText = (opgRate - (discount[2] * opgRate))
				.toFixed(4);
	this.document.getElementById("supplyRate1energy").innerText = energyRate;
	this.document.getElementById("supplyDisRate1energy").innerText = energyRate;
	this.document.getElementById("supplyRateBluenrg").innerText = bluenrgRate;
	this.document.getElementById("supplyDisRateBluenrg").innerText = bluenrgRate;

}

function solarCalc() {
	var alintaRate = 0;
	var opgRate = 0;
	var energyRate = 0;
	var bluenrgRate = 0;
	var rates = ratesCall();
	if (this.document.getElementById("solarUsage").value == '')
		this.document.getElementById("solarUsage").value = 0;

	this.document.getElementById("solarCharges").innerText = (this.document
			.getElementById("solarUsage").value * this.document
			.getElementById("solarRates").innerText).toFixed(2);
	this.document.getElementById("solarDiscount").innerText = (this.document
			.getElementById("solarCharges").innerText - (discount[0] * this.document
			.getElementById("solarCharges").innerText)).toFixed(2);

	alintaRate = opgRate = energyRate = bluenrgRate = -0.05;

	this.document.getElementById("solarChargesAlinta").innerText = (alintaRate * this.document
			.getElementById("solarUsage").value).toFixed(2);
	this.document.getElementById("solarDiscountAlinta").innerText = (this.document
			.getElementById("solarChargesAlinta").innerText - (discount[1] * this.document
			.getElementById("solarChargesAlinta").innerText)).toFixed(2);

	this.document.getElementById("solarChargesOpg").innerText = (opgRate * this.document
			.getElementById("solarUsage").value).toFixed(2);
	this.document.getElementById("solarDiscountOpg").innerText = (this.document
			.getElementById("solarChargesOpg").innerText - (discount[2] * this.document
			.getElementById("solarChargesOpg").innerText)).toFixed(2);

	this.document.getElementById("solarCharges1energy").innerText = (energyRate * this.document
			.getElementById("solarUsage").value).toFixed(2);
	this.document.getElementById("solarDiscount1energy").innerText = (this.document
			.getElementById("solarCharges1energy").innerText - (discount[3] * this.document
			.getElementById("solarCharges1energy").innerText)).toFixed(2);

	this.document.getElementById("solarChargesBluenrg").innerText = (bluenrgRate * this.document
			.getElementById("solarUsage").value).toFixed(2);
	this.document.getElementById("solarDiscountBluenrg").innerText = (this.document
			.getElementById("solarChargesBluenrg").innerText - (discount[4] * this.document
			.getElementById("solarChargesBluenrg").innerText)).toFixed(2);
	bill += (1 * this.document.getElementById("solarCharges").innerText);
	billAlinta += (1 * this.document.getElementById("solarChargesAlinta").innerText);
	billOpg += (1 * this.document.getElementById("solarChargesOpg").innerText);
	bill1Energy += (1 * this.document.getElementById("solarCharges1energy").innerText);
	billBluenrg += (1 * this.document.getElementById("solarChargesBluenrg").innerText);

	billDisc += (1 * this.document.getElementById("solarDiscount").innerText);
	billAlintaDisc += (1 * this.document.getElementById("solarDiscountAlinta").innerText);
	billOpgDisc += (1 * this.document.getElementById("solarDiscountOpg").innerText);
	bill1EnergyDisc += (1 * this.document
			.getElementById("solarDiscount1energy").innerText);
	billBluenrgDisc += (1 * this.document
			.getElementById("solarDiscountBluenrg").innerText);

}

function billCalc() {

	this.document.getElementById("chargesBill").innerHTML = bill.toFixed(2);
	this.document.getElementById("chargesAlintaBill").innerHTML = billAlinta
			.toFixed(2);
	this.document.getElementById("chargesOpgBill").innerHTML = billOpg
			.toFixed(2);
	this.document.getElementById("charges1EnergyBill").innerHTML = bill1Energy
			.toFixed(2);
	this.document.getElementById("chargesBluenrgBill").innerHTML = billBluenrg
			.toFixed(2);

	this.document.getElementById("disBill").innerHTML = billDisc.toFixed(2);
	this.document.getElementById("disAlintaBill").innerHTML = billAlintaDisc
			.toFixed(2);
	this.document.getElementById("disOpgBill").innerHTML = billOpgDisc
			.toFixed(2);
	this.document.getElementById("dis1EnergyBill").innerHTML = bill1EnergyDisc
			.toFixed(2);
	this.document.getElementById("disBluenrgBill").innerHTML = billBluenrgDisc
			.toFixed(2);

	var e = document.getElementById("conctype");
	var concType = e.options[e.selectedIndex].value;

	if (concType == "no") {
		this.document.getElementById("chargesConc").innerText = 0;
		this.document.getElementById("disConc").innerText = 0;
		this.document.getElementById("chargesAlintaConc").innerText = 0;
		this.document.getElementById("disAlintaConc").innerText = 0;
		this.document.getElementById("chargesOpgConc").innerText = 0;
		this.document.getElementById("disOpgConc").innerText = 0;
		this.document.getElementById("charges1EnergyConc").innerText = 0;
		this.document.getElementById("dis1EnergyConc").innerText = 0;
		this.document.getElementById("chargesBluenrgConc").innerText = 0;
		this.document.getElementById("disBluenrgConc").innerText = 0;
	} else {
		this.document.getElementById("chargesConc").innerText = (0.175 * this.document
				.getElementById("chargesBill").innerHTML).toFixed(2);
		this.document.getElementById("disConc").innerText = (0.175 * this.document
				.getElementById("disBill").innerHTML).toFixed(2);
		this.document.getElementById("chargesAlintaConc").innerText = (0.175 * this.document
				.getElementById("chargesAlintaBill").innerHTML).toFixed(2);
		this.document.getElementById("disAlintaConc").innerText = (0.175 * this.document
				.getElementById("disAlintaBill").innerHTML).toFixed(2);
		this.document.getElementById("chargesOpgConc").innerText = (0.175 * this.document
				.getElementById("chargesOpgBill").innerHTML).toFixed(2);
		this.document.getElementById("disOpgConc").innerText = (0.175 * this.document
				.getElementById("disOpgBill").innerHTML).toFixed(2);
		this.document.getElementById("charges1EnergyConc").innerText = (0.175 * this.document
				.getElementById("charges1EnergyBill").innerHTML).toFixed(2);
		this.document.getElementById("dis1EnergyConc").innerText = (0.175 * this.document
				.getElementById("dis1EnergyBill").innerHTML).toFixed(2);
		this.document.getElementById("chargesBluenrgConc").innerText = (0.175 * this.document
				.getElementById("chargesBluenrgBill").innerHTML).toFixed(2);
		this.document.getElementById("disBluenrgConc").innerText = (0.175 * this.document
				.getElementById("disBluenrgBill").innerHTML).toFixed(2);
	}

	this.document.getElementById("chargesTot").innerHTML = (bill - 1 * this.document
			.getElementById("chargesConc").innerText).toFixed(2);
	this.document.getElementById("chargesAlintaTot").innerHTML = (billAlinta - 1 * this.document
			.getElementById("chargesAlintaConc").innerText).toFixed(2);
	this.document.getElementById("chargesOpgTot").innerHTML = (billOpg - 1 * this.document
			.getElementById("chargesOpgConc").innerText).toFixed(2);
	this.document.getElementById("charges1EnergyTot").innerHTML = (bill1Energy - 1 * this.document
			.getElementById("charges1EnergyConc").innerText).toFixed(2);
	this.document.getElementById("chargesBluenrgTot").innerHTML = (billBluenrg - 1 * this.document
			.getElementById("chargesBluenrgConc").innerText).toFixed(2);

	this.document.getElementById("disTot").innerHTML = (billDisc - 1 * this.document
			.getElementById("disConc").innerText).toFixed(2);
	this.document.getElementById("disAlintaTot").innerHTML = (billAlintaDisc - 1 * this.document
			.getElementById("disAlintaConc").innerText).toFixed(2);
	this.document.getElementById("disOpgTot").innerHTML = (billOpgDisc - 1 * this.document
			.getElementById("disOpgConc").innerText).toFixed(2);
	this.document.getElementById("dis1EnergyTot").innerHTML = (bill1EnergyDisc - 1 * this.document
			.getElementById("dis1EnergyConc").innerText).toFixed(2);
	this.document.getElementById("disBluenrgTot").innerHTML = (billBluenrgDisc - 1 * this.document
			.getElementById("disBluenrgConc").innerText).toFixed(2);

	this.document.getElementById("chargesTotg").innerHTML = (1 * this.document
			.getElementById("chargesTot").innerHTML + (0.10 * this.document
			.getElementById("chargesTot").innerHTML)).toFixed(2);
	this.document.getElementById("chargesAlintaTotg").innerHTML = (1 * this.document
			.getElementById("chargesAlintaTot").innerHTML + (0.10 * this.document
			.getElementById("chargesAlintaTot").innerHTML)).toFixed(2);
	this.document.getElementById("chargesOpgTotg").innerHTML = (1 * this.document
			.getElementById("chargesOpgTot").innerHTML + (0.10 * this.document
			.getElementById("chargesOpgTot").innerHTML)).toFixed(2);
	this.document.getElementById("charges1EnergyTotg").innerHTML = (1 * this.document
			.getElementById("charges1EnergyTot").innerHTML + (0.10 * this.document
			.getElementById("charges1EnergyTot").innerHTML)).toFixed(2);
	this.document.getElementById("chargesBluenrgTotg").innerHTML = (1 * this.document
			.getElementById("chargesBluenrgTot").innerHTML + (0.10 * this.document
			.getElementById("chargesBluenrgTot").innerHTML)).toFixed(2);

	this.document.getElementById("disTotg").innerHTML = (1 * this.document
			.getElementById("disTot").innerHTML + (0.10 * this.document
			.getElementById("disTot").innerHTML)).toFixed(2);
	this.document.getElementById("disAlintaTotg").innerHTML = (1 * this.document
			.getElementById("disAlintaTot").innerHTML + (0.10 * this.document
			.getElementById("disAlintaTot").innerHTML)).toFixed(2);
	this.document.getElementById("disOpgTotg").innerHTML = (1 * this.document
			.getElementById("disOpgTot").innerHTML + (0.10 * this.document
			.getElementById("disOpgTot").innerHTML)).toFixed(2);
	this.document.getElementById("dis1EnergyTotg").innerHTML = (1 * this.document
			.getElementById("dis1EnergyTot").innerHTML + (0.10 * this.document
			.getElementById("dis1EnergyTot").innerHTML)).toFixed(2);
	this.document.getElementById("disBluenrgTotg").innerHTML = (1 * this.document
			.getElementById("disBluenrgTot").innerHTML + (0.10 * this.document
			.getElementById("disBluenrgTot").innerHTML)).toFixed(2);

}

function clCalconType() {
	var e = document.getElementById("cltype");
	var clType = e.options[e.selectedIndex].value;
	if (clType == "no") {

		this.document.getElementById("clCharges").innerText = 0;
		this.document.getElementById("clDiscount").innerText = 0;
		this.document.getElementById("clChargesAlinta").innerText = 0;
		this.document.getElementById("clDiscountAlinta").innerText = 0;
		this.document.getElementById("clChargesOpg").innerText = 0;
		this.document.getElementById("clDiscountOpg").innerText = 0;
		this.document.getElementById("clCharges1energy").innerText = 0;
		this.document.getElementById("clDiscount1energy").innerText = 0;
		this.document.getElementById("clChargesBluenrg").innerText = 0;
		this.document.getElementById("clDiscountBluenrg").innerText = 0;
	}
	methodNameAll();

}

function checkConc() {
	var e = document.getElementById("conctype");
	var concType = e.options[e.selectedIndex].value;

	if (concType == "no") {
		this.document.getElementById("chargesConc").innerText = 0;
		this.document.getElementById("disConc").innerText = 0;
		this.document.getElementById("chargesAlintaConc").innerText = 0;
		this.document.getElementById("disAlintaConc").innerText = 0;
		this.document.getElementById("chargesOpgConc").innerText = 0;
		this.document.getElementById("disOpgConc").innerText = 0;
		this.document.getElementById("charges1EnergyConc").innerText = 0;
		this.document.getElementById("dis1EnergyConc").innerText = 0;
		this.document.getElementById("chargesBluenrgConc").innerText = 0;
		this.document.getElementById("disBluenrgConc").innerText = 0;
	} else {
		this.document.getElementById("chargesConc").innerText = (0.175 * this.document
				.getElementById("chargesBill").innerHTML).toFixed(4);
		this.document.getElementById("disConc").innerText = (0.175 * this.document
				.getElementById("disBill").innerHTML).toFixed(4);
		this.document.getElementById("chargesAlintaConc").innerText = (0.175 * this.document
				.getElementById("chargesAlintaBill").innerHTML).toFixed(4);
		this.document.getElementById("disAlintaConc").innerText = (0.175 * this.document
				.getElementById("disAlintaBill").innerHTML).toFixed(4);
		this.document.getElementById("chargesOpgConc").innerText = (0.175 * this.document
				.getElementById("chargesOpgBill").innerHTML).toFixed(4);
		this.document.getElementById("disOpgConc").innerText = (0.175 * this.document
				.getElementById("disOpgBill").innerHTML).toFixed(4);
		this.document.getElementById("charges1EnergyConc").innerText = (0.175 * this.document
				.getElementById("charges1EnergyBill").innerHTML).toFixed(4);
		this.document.getElementById("dis1EnergyConc").innerText = (0.175 * this.document
				.getElementById("dis1EnergyBill").innerHTML).toFixed(4);
		this.document.getElementById("chargesBluenrgConc").innerText = (0.175 * this.document
				.getElementById("chargesBluenrgBill").innerHTML).toFixed(4);
		this.document.getElementById("disBluenrgConc").innerText = (0.175 * this.document
				.getElementById("disBluenrgBill").innerHTML).toFixed(4);

	}
	methodNameAll();

}

function checkHighLow() {

	var testA = [];
	var test = [];
	testA[0] = 1 * this.document.getElementById("disTotg").innerHTML;
	testA[1] = 1 * this.document.getElementById("disAlintaTotg").innerHTML;
	testA[2] = 1 * this.document.getElementById("disOpgTotg").innerHTML;
	testA[3] = 1 * this.document.getElementById("dis1EnergyTotg").innerHTML;
	testA[4] = 1 * this.document.getElementById("disBluenrgTotg").innerHTML;

	var k = 0;
	for (var l = 0; l < testA.length; l++) {
		if (testA[l] != 0) {
			test[k] = testA[l];
			k++;
		}
	}

	if (test.length > 0) {
		var maxValue = test[0];
		var minValue = test[0];
		for (var i = 0; i < test.length; i++) {
			if (test[i] > maxValue) {
				maxValue = test[i];
			}
		}
		for (var j = 0; j < 5; j++) {
			if (test[j] < minValue) {
				minValue = test[j];
			}
		}
		if ((1 * this.document.getElementById("disTotg").innerHTML) == maxValue)
			document.getElementById("disTotg").style.background = "red";
		else
			document.getElementById("disTotg").style.background = "none";
		if ((1 * this.document.getElementById("disAlintaTotg").innerHTML) == maxValue)
			document.getElementById("disAlintaTotg").style.background = "red";
		else
			document.getElementById("disAlintaTotg").style.background = "none";
		if ((1 * this.document.getElementById("disOpgTotg").innerHTML) == maxValue)
			document.getElementById("disOpgTotg").style.background = "red";
		else
			document.getElementById("disOpgTotg").style.background = "none";
		if ((1 * this.document.getElementById("dis1EnergyTotg").innerHTML) == maxValue)
			document.getElementById("dis1EnergyTotg").style.background = "red";
		else
			document.getElementById("dis1EnergyTotg").style.background = "none";
		if ((1 * this.document.getElementById("disBluenrgTotg").innerHTML) == maxValue)
			document.getElementById("disBluenrgTotg").style.background = "red";
		else
			document.getElementById("disBluenrgTotg").style.background = "none";

		if ((1 * this.document.getElementById("disTotg").innerHTML) == minValue)
			document.getElementById("disTotg").style.background = "#00FF00";
		else if (document.getElementById("disTotg").style.background != "red")
			document.getElementById("disTotg").style.background = "none";
		if ((1 * this.document.getElementById("disAlintaTotg").innerHTML) == minValue)
			document.getElementById("disAlintaTotg").style.background = "#00FF00";
		else if (document.getElementById("disAlintaTotg").style.background != "red")
			document.getElementById("disAlintaTotg").style.background = "none";
		if ((1 * this.document.getElementById("disOpgTotg").innerHTML) == minValue)
			document.getElementById("disOpgTotg").style.background = "#00FF00";
		else if (document.getElementById("disOpgTotg").style.background != "red")
			document.getElementById("disOpgTotg").style.background = "none";
		if ((1 * this.document.getElementById("dis1EnergyTotg").innerHTML) == minValue)
			document.getElementById("dis1EnergyTotg").style.background = "#00FF00";
		else if (document.getElementById("dis1EnergyTotg").style.background != "red")
			document.getElementById("dis1EnergyTotg").style.background = "none";
		if ((1 * this.document.getElementById("disBluenrgTotg").innerHTML) == minValue)
			document.getElementById("disBluenrgTotg").style.background = "#00FF00";
		else if (document.getElementById("disBluenrgTotg").style.background != "red")
			document.getElementById("disBluenrgTotg").style.background = "none";
	}

}
function prefill(months, usage) {
	this.document.getElementById("peak1Usage").innerText = usage;
	this.document.getElementById("peak1Rates").innerText = 0.3;
	this.document.getElementById("peak2Usage").innerText = usage;
	this.document.getElementById("peak2Rates").innerText = 0.3;
	// this.document.getElementById("peak3Usage").innerText = usage;
	// this.document.getElementById("peak3Rates").innerText = 0.3;
	// this.document.getElementById("shoulderUsage").innerText = usage;
	// this.document.getElementById("shoulderRates").innerText = 0.3;
	this.document.getElementById("clUsage").innerText = usage;
	this.document.getElementById("clRates").innerText = 0.3;
	// this.document.getElementById("offpeakUsage").innerText = usage;
	// this.document.getElementById("offpeakRates").innerText = 0.3;
	this.document.getElementById("supplychargeUsage").innerText = months;
	this.document.getElementById("supplychargeRates").innerText = 1.5;
	this.document.getElementById("solarUsage").innerText = 0;
	methodName();

}
