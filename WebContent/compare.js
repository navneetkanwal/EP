var url_safe_distributor;
var url_safe_tarifftype;
var url_safe_usage;
//var ratelist;

window.onload = function() {
	// createcomparison();
	
};


var app = angular.module('myApp', []);
app.controller('myCtrl',
		function($scope) {
	
	ratelist = rateListMethod();
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

