function displayDays()
{
	if(document.getElementById("meterType").style.display == 'block')
	{
		var selection = document.getElementById("meterTypeList").value;
		if(selection == "peak" && document.getElementById("peakusage").value != '')
		{
			document.getElementById("usageDays").style.display = 'block';
		}
		else if(selection == "peakOff" && document.getElementById("peakusage").value != '' && document.getElementById("offpeakusage").value != '')
		{
			document.getElementById("usageDays").style.display = 'block';
		}
		else if(selection == "peakOffShoulder" && document.getElementById("peakusage").value != '' && document.getElementById("offpeakusage").value != ''
			 && document.getElementById("shoulderusage").value != '')
		{
			document.getElementById("usageDays").style.display = 'block';
		}
		else if(selection == "peakControl" && document.getElementById("peakusage").value != '' && document.getElementById("controlledLoadusage").value != '')
		{
			document.getElementById("usageDays").style.display = 'block';
		}
		else
		{
			document.getElementById("usageDays").style.display = 'none';
		}
	}
	else
	{
		document.getElementById("usageDays").style.display = 'block';
	}
}

$(function() {
$('#meterTypeList').on('change',function(){
  var selection = $(this).val();
  $('input[data-valueref~="hide"]').hide();
  $('input[data-valueref~="' + selection + '"]').show();
  resetElectricityFields(selection);
  displayDays();
});
});

function resetElectricityFields(selection)
{
	if(selection == "peak")
	 {
		  document.getElementById("offpeakusage").value = '';
		  document.getElementById("shoulderusage").value = '';
		  document.getElementById("controlledLoadusage").value = '';
	 }
	  else if(selection == "peakOff")
	 {
		  document.getElementById("offpeakusage").value = '';
		  document.getElementById("shoulderusage").value = '';
		  document.getElementById("controlledLoadusage").value = '';
	 }else if(selection == "peakOffShoulder")
	 {
		 document.getElementById("shoulderusage").value = ''; 
		 document.getElementById("controlledLoadusage").value = '';
	}
	 else
	{
		 document.getElementById("offpeakusage").value = '';
		 document.getElementById("shoulderusage").value = '';
	}
	document.getElementById("usageDays").style.display = 'none';
}

function resetFields()
{
	document.getElementById("meterTypeList").value = 'peak';
	document.getElementById("meterType").style.display = 'none';
	document.getElementById("peakusage").style.display = 'none';
	document.getElementById("businessid").checked = false;
	document.getElementById("residentid").checked = false;
	document.getElementById("offpeakusage").style.display = 'none';
	document.getElementById("shoulderusage").style.display = 'none';
	document.getElementById("controlledLoadusage").style.display = 'none';
	document.getElementById("usageLevel").style.display = 'none';
	document.getElementById("oneusage").checked = false;
	document.getElementById("twousage").checked = false;
	document.getElementById("threeusage").checked = false;
	document.getElementById("usageDays").style.display = 'none';
	document.getElementById("offpeakusage").value = '';
    document.getElementById("shoulderusage").value = '';
    document.getElementById("controlledLoadusage").value = '';
    document.getElementById("peakusage").value = '';
    document.getElementById("daysusage").value = '';
}

function toggleQuestions()
{
	resetFields();
	document.getElementById("postcode").style.display = 'none';
	document.getElementById("suburb").style.display = 'none';
	document.getElementById("propertyType").style.display = 'none';
	document.getElementById("postcodeValue").value = '';
	if (document.getElementById("billyes").checked) {

		document.getElementById("nmi").style.display = 'block';
		document.getElementById("nmiinput").value = '';
		
	} else if (document.getElementById("billno").checked) {
		document.getElementById("nmi").style.display = 'none';
		document.getElementById("postcode").style.display = 'block';
		
	}

}

function displayPropertyType()
{
	resetFields();
	if(document.getElementById("nmiinput").value.length == 11)
	{
		
		document.getElementById("propertyType").style.display = 'block';		
	}
	else
	{
		document.getElementById("propertyType").style.display = 'none';
	}
}

function displayUsage()
{
	if (document.getElementById("billyes").checked) {

		document.getElementById("meterType").style.display = 'block';
		document.getElementById("peakusage").style.display = 'block';
		
	} else if (document.getElementById("billno").checked) {
		document.getElementById("usageLevel").style.display = 'block';
		
	}
	
}

function displayCompareBtn()
{
	if(document.getElementById("daysusage").value != '')
	{
		
		document.getElementById("compareBtn").style.display = 'block';		
	}
	else
	{
		document.getElementById("compareBtn").style.display = 'none';
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

	/*var link = "compare.html?distributor="
			+ document.getElementById("distributor").innerHTML + "&tarifftype="
			+ document.getElementById("tarifftype").innerHTML + "&usage="
			+ "" +usage + "&days="
			+ document.getElementById("daysusage").value;
	document.getElementById("comparlink").setAttribute('href', link);*/
	return "compare.html?distributor="
			+ document.getElementById("distributor").innerHTML + "&tarifftype="
			+ document.getElementById("tarifftype").innerHTML + "&usage="
			+ "" +usage + "&days="
			+ document.getElementById("daysusage").value;

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
	
	resetFields();
	var postcodes = postcodeCallCall();
	document.getElementById("suburb").style.display = 'none';
	document.getElementById("propertyType").style.display = 'none';
	document.getElementById("meterType").style.display = 'none';

	var suburb = document.getElementById("suburbList");
	var metertype = document.getElementById("meterTypeList");

	for (var i = 0; i < Object.keys(postcodes).length; i++) {
		if (postcodes[i].postcode == document.getElementById("postcodeValue").value) {

			document.getElementById("propertyType").style.display = 'block';
			
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
