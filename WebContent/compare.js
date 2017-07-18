var url_safe_distributor;
var url_safe_tarifftype;
var url_safe_usage;

window.onload = function() {
	// createcomparison();

};

var app = angular.module('myApp', []);
app.controller('myCtrl',
		function($scope) {
			if (decodeURIComponent(window.location.search.substring(1)).split(
					"&").length > 1) {
				url_safe_distributor = decodeURIComponent(
						window.location.search.substring(1)).split("&")[0]
						.split("=")[1];
				url_safe_tarifftype = decodeURIComponent(
						window.location.search.substring(1)).split("&")[1]
						.split("=")[1];
				url_safe_usage = decodeURIComponent(
						window.location.search.substring(1)).split("&")[2]
						.split("=")[1];
			}
			var res = jQuery.grep(ratelist.Rates, function(v) {
				if (v.Distributor == url_safe_distributor && v.TariffType ==url_safe_tarifftype)
					return v;
			});
			res["Rates"] = res;
			$scope.jsonbody = res;

		});

var ratelist = {
	"Rates" : [
			{
				"Company" : "BLUENRG",
				"Distributor" : "Citipower",
				"TariffType" : "E",
				"Peak1" : 0.2113,
				"Peak2" : 0.1855,
				"Shoulder" : 0.1855,
				"OffPeak" : 0.186755,
				"CL" : 0.184555,
				"Supply" : 0.1855,
				"Description" : "Blue NRG "

			},
			
			{
				"Company" : "ALINTA",
				"Distributor" : "Citipower",
				"TariffType" : "E",
				"Peak1" : 0.2313,
				"Peak2" : 0.14355,
				"Shoulder" : 0.183455,
				"OffPeak" : 0.184355,
				"CL" : 0.185435,
				"Supply" : 0.143855,
				"Description" : "ALINTA DESCRIPTION "

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
				"Description" : "SUMO DESCRIPTION "

			},
	]
};
