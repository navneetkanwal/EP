function questions() {

	if (document.getElementById("billyes").checked) {

		document.getElementById("nmi").style.display = 'block';
		document.getElementById("postcode").style.display = 'none';
		document.getElementById("suburb").style.display = 'none';
		document.getElementById("propertyType").style.display = 'block';
		document.getElementById("meterType").style.display = 'block';
		document.getElementById("usageActual").style.display = 'block';
		document.getElementById("usageDays").style.display = 'block';

	} else if (document.getElementById("billno").checked) {
		document.getElementById("nmi").style.display = 'none';
		document.getElementById("postcode").style.display = 'block';

	}

}

function compare(element) {

	var data = dataMethod();
	if (document.getElementById("businessid").checked) {
		var busresvalue = "Business";

	} else if (document.getElementById("residentid").checked) {
		var busresvalue = "Residential";

	}
	if (document.getElementById("billyes").checked) {
		bynmiLookup();
	} else
		bypostcodeLookup();
	for (var i = 0; i < Object.keys(data).length; i++) {
		if (data[i].state == document.getElementById("state").innerHTML
				&& data[i].metertype == document
						.getElementById("meterTypeList").value
				&& data[i].busres == busresvalue) {
			document.getElementById("tarifftype").innerHTML = data[i].tarifftype;
		}
	}
	var usage;
	if (document.getElementById("billyes").checked) {
		usage = document.getElementById("actualusage").value;
	} else {

		if (document.getElementById("oneusage").checked) {
			usage = 100;
		}
		else if (document.getElementById("twousage").checked) {
			usage = 200;
		}
		else if (document.getElementById("threeusage").checked) {
			usage = 300;
		}
	}

	var link = "compare.html?distributor="
			+ document.getElementById("distributor").innerHTML + "&tarifftype="
			+ document.getElementById("tarifftype").innerHTML + "&usage="
			+ usage + "&days="
			+ document.getElementById("daysusage").value;
	document.getElementById("comparlink").setAttribute('href', link);

}

function bynmiLookup() {

	var nmis = nmiCall();
	for (var i = 0; i < Object.keys(nmis).length; i++) {
		if (nmis[i].nmiprefix == document.getElementById("nmiinput").value.substring(0,2)) {
			document.getElementById("distributor").innerHTML = nmis[i].distributor;
			document.getElementById("state").innerHTML = nmis[i].state;
		}
	}
}

function bypostcodeLookup() {

	var postcodes = postcodeCallCall();
	for (var i = 0; i < Object.keys(postcodes).length; i++) {
		if (postcodes[i].postcode == document.getElementById("postcodeValue").value
				&& postcodes[i].suburb == document.getElementById("suburbList").value) {
			document.getElementById("state").innerHTML = postcodes[i].state;
			document.getElementById("distributor").innerHTML = postcodes[i].distributor;
		}
	}
}
function suburbChoice(value) {

	var postcodes = postcodeCallCall();
	document.getElementById("suburb").style.display = 'none';
	document.getElementById("propertyType").style.display = 'none';
	document.getElementById("meterType").style.display = 'none';

	var suburb = document.getElementById("suburbList");
	var metertype = document.getElementById("meterTypeList");

	for (var i = 0; i < Object.keys(postcodes).length; i++) {
		if (postcodes[i].postcode == document.getElementById("postcodeValue").value) {

			document.getElementById("propertyType").style.display = 'block';
			document.getElementById("meterType").style.display = 'block';
			document.getElementById("usageLevel").style.display = 'block';
			document.getElementById("usageDays").style.display = 'block';

			var option = document.createElement("option");
			option.value = postcodes[i].suburb;
			option.text = postcodes[i].suburb;
			suburb.appendChild(option);
			document.getElementById("suburb").style.display = 'block';

		} else {
			suburb.options[i] = null;

		}
	}
}
