function rateListMethod() {

var ratelist = {
	"Rates" : [
			{
				"Company" : "BLUENRG",
				"Distributor" : "Citipower",
				"TariffType" : "E",
				"Peak1" : 0.9113,
				"Peak2" : 0.1855,
				"Shoulder" : 0.1855,
				"OffPeak" : 0.186755,
				"CL" : 0,
				"Supply" : 0.1855,
				"busres" : "business",
				"discount" : 35,
				"Description" : "Blue NRG ",
				"Exitfee" :"no",
				"Bills" : "monthly"

			},
			
			{
				"Company" : "ALINTA",
				"Distributor" : "Citipower",
				"TariffType" : "E",
				"Peak1" : 0.4313,
				"Peak2" : 0.14355,
				"Shoulder" : 0,
				"OffPeak" : 0,
				"CL" : 0.185435,
				"Supply" : 0.143855,
				"busres" : "business",
				"discount" : 35,
				"Description" : "ALINTA DESCRIPTION ",
				"Exitfee" :"no"	,
				"Bills" : "quarterly"

			},
			
			{
				"Company" : "SUMO",
				"Distributor" : "Citipower",
				"TariffType" : "E",
				"Peak1" : 0.2313,
				"Peak2" : 0.14355,
				"Shoulder" : 0.183455,
				"OffPeak" : 0.184355,
				"CL" : 0.185435,
				"Supply" : 0.143855,
				"busres" : "business",
				"discount" : 0,
				"Description" : "ALINTA DESCRIPTION ",
				"Exitfee" :"yes"	,
				"Bills" : "monthly"

			},
			
			{
				"Company" : "SUMO",
				"Distributor" : "Citipower",
				"TariffType" : "D",
				"Peak1" : 0.2113,
				"Peak2" : 0.18455,
				"Shoulder" : 0.185545,
				"OffPeak" : 0.154855,
				"CL" : 0.145855,
				"Supply" : 0.145855,
				"busres" : "business",
				"discount" : 43,
				"Description" : "SUMO DESCRIPTION ",
				"Exitfee" :"yes"	,
				"Bills" : "monthly"

			},
	]
}
	return ratelist;
}