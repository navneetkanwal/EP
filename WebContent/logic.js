var postcodes = [ {
	"postcode" : 3040,
	"suburb" : "clayton",
	"state" : "vic",
	"distributor" : "Citipower"
}, {
	"postcode" : 3020,
	"suburb" : "caulfield",
	"state" : "vic",
	"distributor" : "Powercor"
}, {
	"postcode" : 3020,
	"suburb" : "caulfield1",
	"state" : "vic",
	"distributor" : "United"
} ];

var nmis = [ {
	"nmiprefix" : 60,
	"state" : "vic",
	"distributor" : "Citipower"
}, {
	"nmiprefix" : 61,
	"state" : "vic",
	"distributor" : "Powercor"
}, {
	"nmiprefix" : 62,
	"state" : "vic",
	"distributor" : "United"
} ];

var data = [ {
	"state" : "vic",
	"busres" : "Business",
	"metertype" : "Peak only",
	"tarifftype" : "E"
}, {
	"state" : "vic",
	"busres" : "Residential",
	"metertype" : "Peak only",
	"tarifftype" : "D"
}, {
	"state" : "nsw",
	"busres" : "Business",
	"metertype" : "Peak only",
	"tarifftype" : "GEN"
} ];

function addTab(that) {
	$(that).attr('id');
	$(that).attr('name');
}

function questions() {
	// var postcodes = dataCall();
	// var raczxtes = ratesCall();

	if (document.getElementById("billyes").checked) {

		document.getElementById("nmi").style.display = 'block';
		document.getElementById("postcode").style.display = 'none';
		document.getElementById("suburb").style.display = 'none';
		document.getElementById("propertyType").style.display = 'block';
		document.getElementById("meterType").style.display = 'block';
		document.getElementById("usageActual").style.display = 'block';

	} else if (document.getElementById("billno").checked) {
		document.getElementById("nmi").style.display = 'none';
		document.getElementById("postcode").style.display = 'block';

	}

}

function compare(element) {

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

	var link = "compare.html?distributor="
			+ document.getElementById("distributor").innerHTML + "&tarifftype="
			+ document.getElementById("tarifftype").innerHTML + "&usage="
			+ document.getElementById("actualusage").value;
	document.getElementById("comparlink").setAttribute('href', link);

}

function bynmiLookup() {

	for (var i = 0; i < Object.keys(nmis).length; i++) {
		if (nmis[i].nmiprefix == document.getElementById("nmiinput").value) {
			document.getElementById("distributor").innerHTML = nmis[i].distributor;
			document.getElementById("state").innerHTML = nmis[i].state;
		}
	}
}

function bypostcodeLookup() {

	for (var i = 0; i < Object.keys(postcodes).length; i++) {
		if (postcodes[i].postcode == document.getElementById("postcodeValue").value
				&& postcodes[i].suburb == document.getElementById("suburbList").value) {
			document.getElementById("state").innerHTML = postcodes[i].state;
			document.getElementById("distributor").innerHTML = postcodes[i].distributor;
		}
	}
}
function suburbChoice(value) {

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
