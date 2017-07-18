function ratesCall() {
	var rates = [
			{
				"Company" : "BLUENRG",
				"Type" : "Controlled LoadR",
				"Distributor" : "Citipower",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.1855,
				"Flag" : "BLUENRGControlled LoadRCitipowerCL",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GD",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.2305,
				"Flag" : "BLUENRGGDCitipowerPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GD",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.2305,
				"Flag" : "BLUENRGGDCitipowerPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GD",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.2,
				"Flag" : "BLUENRGGDCitipowerSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GD",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Peak 3",
				"Rate" : 0,
				"Flag" : "BLUENRGGDCitipowerPeak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GHGL",
				"Distributor" : "Citipower",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.279,
				"Flag" : "BLUENRGGHGLCitipowerPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GHGL",
				"Distributor" : "Citipower",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1565,
				"Flag" : "BLUENRGGHGLCitipowerOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GHGL",
				"Distributor" : "Citipower",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.2,
				"Flag" : "BLUENRGGHGLCitipowerSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "Controlled LoadR",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.162,
				"Flag" : "BLUENRGControlled LoadRJemena (AGL North)CL",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GD",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.252,
				"Flag" : "BLUENRGGDJemena (AGL North)Peak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GD",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.252,
				"Flag" : "BLUENRGGDJemena (AGL North)Peak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GD",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.2,
				"Flag" : "BLUENRGGDJemena (AGL North)Supply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GD",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Peak 3",
				"Rate" : 0,
				"Flag" : "BLUENRGGDJemena (AGL North)Peak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GHGL",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.29,
				"Flag" : "BLUENRGGHGLJemena (AGL North)Peak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GHGL",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.185,
				"Flag" : "BLUENRGGHGLJemena (AGL North)Off Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GHGL",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.25,
				"Flag" : "BLUENRGGHGLJemena (AGL North)Supply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "Controlled LoadR",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.169,
				"Flag" : "BLUENRGControlled LoadRJemena (United Energy)CL",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GD",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.238,
				"Flag" : "BLUENRGGDJemena (United Energy)Peak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GD",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.238,
				"Flag" : "BLUENRGGDJemena (United Energy)Peak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GD",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.1,
				"Flag" : "BLUENRGGDJemena (United Energy)Supply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GD",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Peak 3",
				"Rate" : 0,
				"Flag" : "BLUENRGGDJemena (United Energy)Peak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GHGL",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.269,
				"Flag" : "BLUENRGGHGLJemena (United Energy)Peak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GHGL",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.173,
				"Flag" : "BLUENRGGHGLJemena (United Energy)Off Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GHGL",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.3,
				"Flag" : "BLUENRGGHGLJemena (United Energy)Supply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "Controlled LoadR",
				"Distributor" : "Powercor",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.155,
				"Flag" : "BLUENRGControlled LoadRPowercorCL",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GD",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.2435,
				"Flag" : "BLUENRGGDPowercorPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GD",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.2435,
				"Flag" : "BLUENRGGDPowercorPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GD",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.25,
				"Flag" : "BLUENRGGDPowercorSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GD",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Peak 3",
				"Rate" : 0,
				"Flag" : "BLUENRGGDPowercorPeak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GHGL",
				"Distributor" : "Powercor",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.2935,
				"Flag" : "BLUENRGGHGLPowercorPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GHGL",
				"Distributor" : "Powercor",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1675,
				"Flag" : "BLUENRGGHGLPowercorOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GHGL",
				"Distributor" : "Powercor",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.25,
				"Flag" : "BLUENRGGHGLPowercorSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "Controlled LoadR",
				"Distributor" : "SPAusnet",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.165,
				"Flag" : "BLUENRGControlled LoadRSPAusnetCL",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GD",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.263,
				"Flag" : "BLUENRGGDSPAusnetPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GD",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.282,
				"Flag" : "BLUENRGGDSPAusnetPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GD",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.35,
				"Flag" : "BLUENRGGDSPAusnetSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GD",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Peak 3",
				"Rate" : 0,
				"Flag" : "BLUENRGGDSPAusnetPeak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GHGL",
				"Distributor" : "SPAusnet",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.329,
				"Flag" : "BLUENRGGHGLSPAusnetPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GHGL",
				"Distributor" : "SPAusnet",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1965,
				"Flag" : "BLUENRGGHGLSPAusnetOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GHGL",
				"Distributor" : "SPAusnet",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.3,
				"Flag" : "BLUENRGGHGLSPAusnetSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "Controlled LoadB",
				"Distributor" : "Citipower",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.1687,
				"Flag" : "BLUENRGControlled LoadBCitipowerCL",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "D",
				"Distributor" : "Citipower",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.288,
				"Flag" : "BLUENRGDCitipowerPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "D",
				"Distributor" : "Citipower",
				"Meter" : "Two Rate",
				"Usage" : "Peak 2",
				"Rate" : 0.288,
				"Flag" : "BLUENRGDCitipowerPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "D",
				"Distributor" : "Citipower",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1892,
				"Flag" : "BLUENRGDCitipowerOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "D",
				"Distributor" : "Citipower",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.4,
				"Flag" : "BLUENRGDCitipowerSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.2485,
				"Flag" : "BLUENRGECitipowerPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.2485,
				"Flag" : "BLUENRGECitipowerPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.4,
				"Flag" : "BLUENRGECitipowerSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E1",
				"Distributor" : "Citipower",
				"Meter" : "Three Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.2915,
				"Flag" : "BLUENRGE1CitipowerPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E1",
				"Distributor" : "Citipower",
				"Meter" : "Three Rate",
				"Usage" : "Peak 2",
				"Rate" : 0.2915,
				"Flag" : "BLUENRGE1CitipowerPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E1",
				"Distributor" : "Citipower",
				"Meter" : "Three Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1835,
				"Flag" : "BLUENRGE1CitipowerOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E1",
				"Distributor" : "Citipower",
				"Meter" : "Three Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.4,
				"Flag" : "BLUENRGE1CitipowerSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "Controlled LoadB",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.127,
				"Flag" : "BLUENRGControlled LoadBJemena (AGL North)CL",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "D",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.359,
				"Flag" : "BLUENRGDJemena (AGL North)Peak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "D",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Two Rate",
				"Usage" : "Peak 2",
				"Rate" : 0.359,
				"Flag" : "BLUENRGDJemena (AGL North)Peak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "D",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1695,
				"Flag" : "BLUENRGDJemena (AGL North)Off Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "D",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.55,
				"Flag" : "BLUENRGDJemena (AGL North)Supply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.286,
				"Flag" : "BLUENRGEJemena (AGL North)Peak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.286,
				"Flag" : "BLUENRGEJemena (AGL North)Peak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.4,
				"Flag" : "BLUENRGEJemena (AGL North)Supply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E1",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Three Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.338,
				"Flag" : "BLUENRGE1Jemena (AGL North)Peak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E1",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Three Rate",
				"Usage" : "Peak 2",
				"Rate" : 0.338,
				"Flag" : "BLUENRGE1Jemena (AGL North)Peak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E1",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Three Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1985,
				"Flag" : "BLUENRGE1Jemena (AGL North)Off Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E1",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Three Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.6,
				"Flag" : "BLUENRGE1Jemena (AGL North)Supply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "Controlled LoadB",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.173,
				"Flag" : "BLUENRGControlled LoadBJemena (United Energy)CL",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "D",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.2915,
				"Flag" : "BLUENRGDJemena (United Energy)Peak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "D",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Two Rate",
				"Usage" : "Peak 2",
				"Rate" : 0.2915,
				"Flag" : "BLUENRGDJemena (United Energy)Peak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "D",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.192,
				"Flag" : "BLUENRGDJemena (United Energy)Off Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "D",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.45,
				"Flag" : "BLUENRGDJemena (United Energy)Supply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.255,
				"Flag" : "BLUENRGEJemena (United Energy)Peak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.255,
				"Flag" : "BLUENRGEJemena (United Energy)Peak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.3,
				"Flag" : "BLUENRGEJemena (United Energy)Supply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E1",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Three Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.2985,
				"Flag" : "BLUENRGE1Jemena (United Energy)Peak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E1",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Three Rate",
				"Usage" : "Peak 2",
				"Rate" : 0.2985,
				"Flag" : "BLUENRGE1Jemena (United Energy)Peak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E1",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Three Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.177,
				"Flag" : "BLUENRGE1Jemena (United Energy)Off Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E1",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Three Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.55,
				"Flag" : "BLUENRGE1Jemena (United Energy)Supply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "Controlled LoadB",
				"Distributor" : "Powercor",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.172,
				"Flag" : "BLUENRGControlled LoadBPowercorCL",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "D",
				"Distributor" : "Powercor",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.3155,
				"Flag" : "BLUENRGDPowercorPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "D",
				"Distributor" : "Powercor",
				"Meter" : "Two Rate",
				"Usage" : "Peak 2",
				"Rate" : 0.3155,
				"Flag" : "BLUENRGDPowercorPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "D",
				"Distributor" : "Powercor",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.172,
				"Flag" : "BLUENRGDPowercorOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "D",
				"Distributor" : "Powercor",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.47,
				"Flag" : "BLUENRGDPowercorSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.2585,
				"Flag" : "BLUENRGEPowercorPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.2585,
				"Flag" : "BLUENRGEPowercorPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.45,
				"Flag" : "BLUENRGEPowercorSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E1",
				"Distributor" : "Powercor",
				"Meter" : "Three Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.312,
				"Flag" : "BLUENRGE1PowercorPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E1",
				"Distributor" : "Powercor",
				"Meter" : "Three Rate",
				"Usage" : "Peak 2",
				"Rate" : 0.312,
				"Flag" : "BLUENRGE1PowercorPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E1",
				"Distributor" : "Powercor",
				"Meter" : "Three Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1785,
				"Flag" : "BLUENRGE1PowercorOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E1",
				"Distributor" : "Powercor",
				"Meter" : "Three Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.45,
				"Flag" : "BLUENRGE1PowercorSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "Controlled LoadB",
				"Distributor" : "SPAusnet",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.193,
				"Flag" : "BLUENRGControlled LoadBSPAusnetCL",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "D",
				"Distributor" : "SPAusnet",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.408,
				"Flag" : "BLUENRGDSPAusnetPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "D",
				"Distributor" : "SPAusnet",
				"Meter" : "Two Rate",
				"Usage" : "Peak 2",
				"Rate" : 0.408,
				"Flag" : "BLUENRGDSPAusnetPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "D",
				"Distributor" : "SPAusnet",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.227,
				"Flag" : "BLUENRGDSPAusnetOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "D",
				"Distributor" : "SPAusnet",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.6,
				"Flag" : "BLUENRGDSPAusnetSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.3015,
				"Flag" : "BLUENRGESPAusnetPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.3489,
				"Flag" : "BLUENRGESPAusnetPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.4,
				"Flag" : "BLUENRGESPAusnetSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E1",
				"Distributor" : "SPAusnet",
				"Meter" : "Three Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.398,
				"Flag" : "BLUENRGE1SPAusnetPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E1",
				"Distributor" : "SPAusnet",
				"Meter" : "Three Rate",
				"Usage" : "Peak 2",
				"Rate" : 0.398,
				"Flag" : "BLUENRGE1SPAusnetPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E1",
				"Distributor" : "SPAusnet",
				"Meter" : "Three Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.2255,
				"Flag" : "BLUENRGE1SPAusnetOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "E1",
				"Distributor" : "SPAusnet",
				"Meter" : "Three Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.95,
				"Flag" : "BLUENRGE1SPAusnetSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "Controlled LoadR",
				"Distributor" : "Citipower",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.1691,
				"Flag" : "OPGControlled LoadRCitipowerCL",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GD",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.2561,
				"Flag" : "OPGGDCitipowerPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GD",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.2845,
				"Flag" : "OPGGDCitipowerPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GD",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.34,
				"Flag" : "OPGGDCitipowerSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GD",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Peak 3",
				"Rate" : 0,
				"Flag" : "OPGGDCitipowerPeak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GHGL",
				"Distributor" : "Citipower",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.3639,
				"Flag" : "OPGGHGLCitipowerPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GHGL",
				"Distributor" : "Citipower",
				"Meter" : "Two Rate",
				"Usage" : "Peak 2",
				"Rate" : 0.4043,
				"Flag" : "OPGGHGLCitipowerPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GHGL",
				"Distributor" : "Citipower",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1922,
				"Flag" : "OPGGHGLCitipowerOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GHGL",
				"Distributor" : "Citipower",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.34,
				"Flag" : "OPGGHGLCitipowerSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "Controlled LoadR",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.2132,
				"Flag" : "OPGControlled LoadRJemena (AGL North)CL",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GD",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.3062,
				"Flag" : "OPGGDJemena (AGL North)Peak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GD",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.3402,
				"Flag" : "OPGGDJemena (AGL North)Peak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GD",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.65,
				"Flag" : "OPGGDJemena (AGL North)Supply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GD",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Peak 3",
				"Rate" : 0,
				"Flag" : "OPGGDJemena (AGL North)Peak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GHGL",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.4168,
				"Flag" : "OPGGHGLJemena (AGL North)Peak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GHGL",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Two Rate",
				"Usage" : "Peak 2",
				"Rate" : 0.4631,
				"Flag" : "OPGGHGLJemena (AGL North)Peak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GHGL",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.2132,
				"Flag" : "OPGGHGLJemena (AGL North)Off Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GHGL",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.65,
				"Flag" : "OPGGHGLJemena (AGL North)Supply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "Controlled LoadR",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.1764,
				"Flag" : "OPGControlled LoadRJemena (United Energy)CL",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GD",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.2902,
				"Flag" : "OPGGDJemena (United Energy)Peak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GD",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.3224,
				"Flag" : "OPGGDJemena (United Energy)Peak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GD",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.19,
				"Flag" : "OPGGDJemena (United Energy)Supply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GD",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Peak 3",
				"Rate" : 0,
				"Flag" : "OPGGDJemena (United Energy)Peak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GHGL",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.395,
				"Flag" : "OPGGHGLJemena (United Energy)Peak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GHGL",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Two Rate",
				"Usage" : "Peak 2",
				"Rate" : 0.4389,
				"Flag" : "OPGGHGLJemena (United Energy)Peak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GHGL",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1838,
				"Flag" : "OPGGHGLJemena (United Energy)Off Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GHGL",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.19,
				"Flag" : "OPGGHGLJemena (United Energy)Supply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "Controlled LoadR",
				"Distributor" : "Powercor",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.1943,
				"Flag" : "OPGControlled LoadRPowercorCL",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GD",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.3194,
				"Flag" : "OPGGDPowercorPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GD",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.3549,
				"Flag" : "OPGGDPowercorPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GD",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.48,
				"Flag" : "OPGGDPowercorSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GD",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Peak 3",
				"Rate" : 0,
				"Flag" : "OPGGDPowercorPeak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GHGL",
				"Distributor" : "Powercor",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.4045,
				"Flag" : "OPGGHGLPowercorPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GHGL",
				"Distributor" : "Powercor",
				"Meter" : "Two Rate",
				"Usage" : "Peak 2",
				"Rate" : 0.4494,
				"Flag" : "OPGGHGLPowercorPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GHGL",
				"Distributor" : "Powercor",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1943,
				"Flag" : "OPGGHGLPowercorOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GHGL",
				"Distributor" : "Powercor",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.48,
				"Flag" : "OPGGHGLPowercorSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "Controlled LoadR",
				"Distributor" : "SPAusnet",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.2226,
				"Flag" : "OPGControlled LoadRSPAusnetCL",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GD",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.3469,
				"Flag" : "OPGGDSPAusnetPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GD",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.3854,
				"Flag" : "OPGGDSPAusnetPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GD",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.73,
				"Flag" : "OPGGDSPAusnetSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GD",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Peak 3",
				"Rate" : 0,
				"Flag" : "OPGGDSPAusnetPeak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GHGL",
				"Distributor" : "SPAusnet",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.4168,
				"Flag" : "OPGGHGLSPAusnetPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GHGL",
				"Distributor" : "SPAusnet",
				"Meter" : "Two Rate",
				"Usage" : "Peak 2",
				"Rate" : 0.4631,
				"Flag" : "OPGGHGLSPAusnetPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GHGL",
				"Distributor" : "SPAusnet",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.2541,
				"Flag" : "OPGGHGLSPAusnetOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "GHGL",
				"Distributor" : "SPAusnet",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.73,
				"Flag" : "OPGGHGLSPAusnetSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "OPG",
				"Type" : "Controlled LoadB",
				"Distributor" : "Citipower",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.1869,
				"Flag" : "OPGControlled LoadBCitipowerCL",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "D",
				"Distributor" : "Citipower",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.328,
				"Flag" : "OPGDCitipowerPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "D",
				"Distributor" : "Citipower",
				"Meter" : "Two Rate",
				"Usage" : "Peak 2",
				"Rate" : 0.3644,
				"Flag" : "OPGDCitipowerPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "D",
				"Distributor" : "Citipower",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1869,
				"Flag" : "OPGDCitipowerOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "D",
				"Distributor" : "Citipower",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.82,
				"Flag" : "OPGDCitipowerSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.2967,
				"Flag" : "OPGECitipowerPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.3297,
				"Flag" : "OPGECitipowerPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.82,
				"Flag" : "OPGECitipowerSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E1",
				"Distributor" : "Citipower",
				"Meter" : "Three Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.2967,
				"Flag" : "OPGE1CitipowerPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E1",
				"Distributor" : "Citipower",
				"Meter" : "Three Rate",
				"Usage" : "Peak 2",
				"Rate" : 0.3297,
				"Flag" : "OPGE1CitipowerPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E1",
				"Distributor" : "Citipower",
				"Meter" : "Three Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1869,
				"Flag" : "OPGE1CitipowerOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E1",
				"Distributor" : "Citipower",
				"Meter" : "Three Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.82,
				"Flag" : "OPGE1CitipowerSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "Controlled LoadB",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.2069,
				"Flag" : "OPGControlled LoadBJemena (AGL North)CL",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "D",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.3459,
				"Flag" : "OPGDJemena (AGL North)Peak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "D",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Two Rate",
				"Usage" : "Peak 2",
				"Rate" : 0.3843,
				"Flag" : "OPGDJemena (AGL North)Peak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "D",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.2069,
				"Flag" : "OPGDJemena (AGL North)Off Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "D",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 2.25,
				"Flag" : "OPGDJemena (AGL North)Supply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.327,
				"Flag" : "OPGEJemena (AGL North)Peak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.3633,
				"Flag" : "OPGEJemena (AGL North)Peak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 2.08,
				"Flag" : "OPGEJemena (AGL North)Supply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E1",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Three Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.3232,
				"Flag" : "OPGE1Jemena (AGL North)Peak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E1",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Three Rate",
				"Usage" : "Peak 2",
				"Rate" : 0.3591,
				"Flag" : "OPGE1Jemena (AGL North)Peak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E1",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Three Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1911,
				"Flag" : "OPGE1Jemena (AGL North)Off Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E1",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Three Rate",
				"Usage" : "Supply Charge",
				"Rate" : 2.27,
				"Flag" : "OPGE1Jemena (AGL North)Supply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "Controlled LoadB",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.1838,
				"Flag" : "OPGControlled LoadBJemena (United Energy)CL",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "D",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.327,
				"Flag" : "OPGDJemena (United Energy)Peak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "D",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Two Rate",
				"Usage" : "Peak 2",
				"Rate" : 0.3633,
				"Flag" : "OPGDJemena (United Energy)Peak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "D",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1838,
				"Flag" : "OPGDJemena (United Energy)Off Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "D",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.58,
				"Flag" : "OPGDJemena (United Energy)Supply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.3034,
				"Flag" : "OPGEJemena (United Energy)Peak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.3371,
				"Flag" : "OPGEJemena (United Energy)Peak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.53,
				"Flag" : "OPGEJemena (United Energy)Supply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E1",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Three Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.3506,
				"Flag" : "OPGE1Jemena (United Energy)Peak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E1",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Three Rate",
				"Usage" : "Peak 2",
				"Rate" : 0.3896,
				"Flag" : "OPGE1Jemena (United Energy)Peak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E1",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Three Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1838,
				"Flag" : "OPGE1Jemena (United Energy)Off Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E1",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Three Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.63,
				"Flag" : "OPGE1Jemena (United Energy)Supply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "Controlled LoadB",
				"Distributor" : "Powercor",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.1943,
				"Flag" : "OPGControlled LoadBPowercorCL",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "D",
				"Distributor" : "Powercor",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.3166,
				"Flag" : "OPGDPowercorPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "D",
				"Distributor" : "Powercor",
				"Meter" : "Two Rate",
				"Usage" : "Peak 2",
				"Rate" : 0.3518,
				"Flag" : "OPGDPowercorPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "D",
				"Distributor" : "Powercor",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1943,
				"Flag" : "OPGDPowercorOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "D",
				"Distributor" : "Powercor",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.64,
				"Flag" : "OPGDPowercorSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.3374,
				"Flag" : "OPGEPowercorPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.3749,
				"Flag" : "OPGEPowercorPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.64,
				"Flag" : "OPGEPowercorSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E1",
				"Distributor" : "Powercor",
				"Meter" : "Three Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.3072,
				"Flag" : "OPGE1PowercorPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E1",
				"Distributor" : "Powercor",
				"Meter" : "Three Rate",
				"Usage" : "Peak 2",
				"Rate" : 0.3413,
				"Flag" : "OPGE1PowercorPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E1",
				"Distributor" : "Powercor",
				"Meter" : "Three Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1943,
				"Flag" : "OPGE1PowercorOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E1",
				"Distributor" : "Powercor",
				"Meter" : "Three Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.64,
				"Flag" : "OPGE1PowercorSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "Controlled LoadB",
				"Distributor" : "SPAusnet",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.2195,
				"Flag" : "OPGControlled LoadBSPAusnetCL",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "D",
				"Distributor" : "SPAusnet",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.3969,
				"Flag" : "OPGDSPAusnetPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "D",
				"Distributor" : "SPAusnet",
				"Meter" : "Two Rate",
				"Usage" : "Peak 2",
				"Rate" : 0.441,
				"Flag" : "OPGDSPAusnetPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "D",
				"Distributor" : "SPAusnet",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.2216,
				"Flag" : "OPGDSPAusnetOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "D",
				"Distributor" : "SPAusnet",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.99,
				"Flag" : "OPGDSPAusnetSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.4073,
				"Flag" : "OPGESPAusnetPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.4526,
				"Flag" : "OPGESPAusnetPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.83,
				"Flag" : "OPGESPAusnetSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E1",
				"Distributor" : "SPAusnet",
				"Meter" : "Three Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.2845,
				"Flag" : "OPGE1SPAusnetPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E1",
				"Distributor" : "SPAusnet",
				"Meter" : "Three Rate",
				"Usage" : "Peak 2",
				"Rate" : 0.3161,
				"Flag" : "OPGE1SPAusnetPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E1",
				"Distributor" : "SPAusnet",
				"Meter" : "Three Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.2237,
				"Flag" : "OPGE1SPAusnetOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "OPG",
				"Type" : "E1",
				"Distributor" : "SPAusnet",
				"Meter" : "Three Rate",
				"Usage" : "Supply Charge",
				"Rate" : 2.36,
				"Flag" : "OPGE1SPAusnetSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050",
				"Usage" : "Peak 1",
				"Rate" : 0.254,
				"Flag" : "BLUENRGGENEnergy AustraliaPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050",
				"Usage" : "Peak 2",
				"Rate" : 0.2537,
				"Flag" : "BLUENRGGENEnergy AustraliaPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "BLUENRGGENEnergy AustraliaOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050",
				"Usage" : "CL",
				"Rate" : 0,
				"Flag" : "BLUENRGGENEnergy AustraliaCL",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "BLUENRGGENEnergy AustraliaControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "BLUENRGGENEnergy AustraliaShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050",
				"Usage" : "Supply Charge",
				"Rate" : 1.7,
				"Flag" : "BLUENRGGENEnergy AustraliaSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "BLUENRGGENEnergy AustraliaSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "BLUENRGGENEnergy AustraliaSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA030",
				"Usage" : "Peak 1",
				"Rate" : 0.254,
				"Flag" : "BLUENRGGENControlled Load1Energy AustraliaPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA030",
				"Usage" : "Peak 2",
				"Rate" : 0.2537,
				"Flag" : "BLUENRGGENControlled Load1Energy AustraliaPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA030",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load1Energy AustraliaOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA030",
				"Usage" : "CL",
				"Rate" : 0.0937,
				"Flag" : "BLUENRGGENControlled Load1Energy AustraliaCL",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA030",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load1Energy AustraliaControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA030",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load1Energy AustraliaShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA030",
				"Usage" : "Supply Charge",
				"Rate" : 1.7,
				"Flag" : "BLUENRGGENControlled Load1Energy AustraliaSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA030",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load1Energy AustraliaSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA030",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load1Energy AustraliaSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA040",
				"Usage" : "Peak 1",
				"Rate" : 0.254,
				"Flag" : "BLUENRGGENControlled Load2Energy AustraliaPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA040",
				"Usage" : "Peak 2",
				"Rate" : 0.2537,
				"Flag" : "BLUENRGGENControlled Load2Energy AustraliaPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA040",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load2Energy AustraliaOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA040",
				"Usage" : "CL",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load2Energy AustraliaCL",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA040",
				"Usage" : "Controlled Load 2",
				"Rate" : 0.1285,
				"Flag" : "BLUENRGGENControlled Load2Energy AustraliaControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA040",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load2Energy AustraliaShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA040",
				"Usage" : "Supply Charge",
				"Rate" : 1.7,
				"Flag" : "BLUENRGGENControlled Load2Energy AustraliaSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA040",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load2Energy AustraliaSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA040",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load2Energy AustraliaSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA225",
				"Usage" : "Peak 1",
				"Rate" : 0.4512,
				"Flag" : "BLUENRGPower Smart TOUEnergy AustraliaPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA225",
				"Usage" : "Peak 2",
				"Rate" : 0,
				"Flag" : "BLUENRGPower Smart TOUEnergy AustraliaPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA225",
				"Usage" : "Off Peak",
				"Rate" : 0.1095,
				"Flag" : "BLUENRGPower Smart TOUEnergy AustraliaOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA225",
				"Usage" : "CL",
				"Rate" : 0,
				"Flag" : "BLUENRGPower Smart TOUEnergy AustraliaCL",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "Controlled LoadB",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "BLUENRGControlled LoadBEnergy AustraliaControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : 0.2212,
				"Flag" : "BLUENRGPower Smart TOUEnergy AustraliaShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.76,
				"Flag" : "BLUENRGPower Smart TOUEnergy AustraliaSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "BLUENRGPower Smart TOUEnergy AustraliaSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "BLUENRGPower Smart TOUEnergy AustraliaSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0,
				"Flag" : "BLUENRGLoad Smart TOUEnergy AustraliaPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : 0,
				"Flag" : "BLUENRGLoad Smart TOUEnergy AustraliaPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "BLUENRGLoad Smart TOUEnergy AustraliaOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "Controlled LoadB",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0,
				"Flag" : "BLUENRGControlled LoadBEnergy AustraliaCL",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "BLUENRGLoad Smart TOUEnergy AustraliaControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "BLUENRGLoad Smart TOUEnergy AustraliaShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 0,
				"Flag" : "BLUENRGLoad Smart TOUEnergy AustraliaSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "BLUENRGLoad Smart TOUEnergy AustraliaSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "BLUENRGLoad Smart TOUEnergy AustraliaSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "N90",
				"Usage" : "Peak 1",
				"Rate" : 0.257,
				"Flag" : "BLUENRGGENIntegralPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "N90",
				"Usage" : "Peak 2",
				"Rate" : 0.2675,
				"Flag" : "BLUENRGGENIntegralPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "N90",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "BLUENRGGENIntegralOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "N90",
				"Usage" : "Controlled Load 1",
				"Rate" : 0,
				"Flag" : "BLUENRGGENIntegralControlled Load 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "N90",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "BLUENRGGENIntegralControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "N90",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "BLUENRGGENIntegralShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "N90",
				"Usage" : "Supply Charge",
				"Rate" : 1.05,
				"Flag" : "BLUENRGGENIntegralSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "N90",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "BLUENRGGENIntegralSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "N90",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "BLUENRGGENIntegralSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N90N50",
				"Usage" : "Peak 1",
				"Rate" : 0.2705,
				"Flag" : "BLUENRGGENControlled Load1IntegralPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N90N50",
				"Usage" : "Peak 2",
				"Rate" : 0.277,
				"Flag" : "BLUENRGGENControlled Load1IntegralPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N90N50",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load1IntegralOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N90N50",
				"Usage" : "CL",
				"Rate" : 0.1505,
				"Flag" : "BLUENRGGENControlled Load1IntegralCL",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N90N50",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load1IntegralControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N90N50",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load1IntegralShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N90N50",
				"Usage" : "Supply Charge",
				"Rate" : 1.1,
				"Flag" : "BLUENRGGENControlled Load1IntegralSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N90N50",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load1IntegralSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N90N50",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load1IntegralSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N90N54",
				"Usage" : "Peak 1",
				"Rate" : 0.2695,
				"Flag" : "BLUENRGGENControlled Load2IntegralPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N90N54",
				"Usage" : "Peak 2",
				"Rate" : 0.2755,
				"Flag" : "BLUENRGGENControlled Load2IntegralPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N90N54",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load2IntegralOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N90N54",
				"Usage" : "CL",
				"Rate" : 0.1525,
				"Flag" : "BLUENRGGENControlled Load2IntegralCL",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N90N54",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load2IntegralControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N90N54",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load2IntegralShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N90N54",
				"Usage" : "Supply Charge",
				"Rate" : 1.15,
				"Flag" : "BLUENRGGENControlled Load2IntegralSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N90N54",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load2IntegralSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N90N54",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load2IntegralSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "General Supply TOU",
				"Distributor" : "Integral",
				"Meter" : "N84",
				"Usage" : "Peak 1",
				"Rate" : 0.3275,
				"Flag" : "BLUENRGGeneral Supply TOUIntegralPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "General Supply TOU",
				"Distributor" : "Integral",
				"Meter" : "N84",
				"Usage" : "Peak 2",
				"Rate" : 0,
				"Flag" : "BLUENRGGeneral Supply TOUIntegralPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "General Supply TOU",
				"Distributor" : "Integral",
				"Meter" : "N84",
				"Usage" : "Off Peak",
				"Rate" : 0.173,
				"Flag" : "BLUENRGGeneral Supply TOUIntegralOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "General Supply TOU",
				"Distributor" : "Integral",
				"Meter" : "N84",
				"Usage" : "CL",
				"Rate" : 0,
				"Flag" : "BLUENRGGeneral Supply TOUIntegralCL",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "General Supply TOU",
				"Distributor" : "Integral",
				"Meter" : "N84",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "BLUENRGGeneral Supply TOUIntegralControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "General Supply TOU",
				"Distributor" : "Integral",
				"Meter" : "N84",
				"Usage" : "Shoulder",
				"Rate" : 0.276,
				"Flag" : "BLUENRGGeneral Supply TOUIntegralShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "General Supply TOU",
				"Distributor" : "Integral",
				"Meter" : "N84",
				"Usage" : "Supply Charge",
				"Rate" : 1.1,
				"Flag" : "BLUENRGGeneral Supply TOUIntegralSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "General Supply TOU",
				"Distributor" : "Integral",
				"Meter" : "N84",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "BLUENRGGeneral Supply TOUIntegralSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "General Supply TOU",
				"Distributor" : "Integral",
				"Meter" : "N84",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "BLUENRGGeneral Supply TOUIntegralSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AU",
				"Usage" : "Peak 1",
				"Rate" : 0.288,
				"Flag" : "BLUENRGGENCountry EnergyPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AU",
				"Usage" : "Peak 2",
				"Rate" : 0.288,
				"Flag" : "BLUENRGGENCountry EnergyPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AU",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "BLUENRGGENCountry EnergyOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AU",
				"Usage" : "Controlled Load 1",
				"Rate" : 0,
				"Flag" : "BLUENRGGENCountry EnergyControlled Load 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AU",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "BLUENRGGENCountry EnergyControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AU",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "BLUENRGGENCountry EnergyShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AU",
				"Usage" : "Supply Charge",
				"Rate" : 1.75,
				"Flag" : "BLUENRGGENCountry EnergySupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AU",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "BLUENRGGENCountry EnergySupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AU",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "BLUENRGGENCountry EnergySupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC1AU",
				"Usage" : "Peak 1",
				"Rate" : 0.306,
				"Flag" : "BLUENRGGENControlled Load1Country EnergyPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC1AU",
				"Usage" : "Peak 2",
				"Rate" : 0.282,
				"Flag" : "BLUENRGGENControlled Load1Country EnergyPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC1AU",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load1Country EnergyOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC1AU",
				"Usage" : "CL",
				"Rate" : 0.138,
				"Flag" : "BLUENRGGENControlled Load1Country EnergyCL",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC1AU",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load1Country EnergyControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC1AU",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load1Country EnergyShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC1AU",
				"Usage" : "Supply Charge",
				"Rate" : 1.75,
				"Flag" : "BLUENRGGENControlled Load1Country EnergySupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC1AU",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load1Country EnergySupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC1AU",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load1Country EnergySupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC2AU",
				"Usage" : "Peak 1",
				"Rate" : 0.3028,
				"Flag" : "BLUENRGGENControlled Load2Country EnergyPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC2AU",
				"Usage" : "Peak 2",
				"Rate" : 0.2737,
				"Flag" : "BLUENRGGENControlled Load2Country EnergyPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC2AU",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load2Country EnergyOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC2AU",
				"Usage" : "CL",
				"Rate" : 0.1705,
				"Flag" : "BLUENRGGENControlled Load2Country EnergyCL",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC2AU",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load2Country EnergyControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC2AU",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load2Country EnergyShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC2AU",
				"Usage" : "Supply Charge",
				"Rate" : 1.75,
				"Flag" : "BLUENRGGENControlled Load2Country EnergySupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC2AU",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load2Country EnergySupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GENControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC2AU",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "BLUENRGGENControlled Load2Country EnergySupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT2AU",
				"Usage" : "Peak 1",
				"Rate" : 0.2468,
				"Flag" : "BLUENRGGEN TOUCountry EnergyPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT2AU",
				"Usage" : "Peak 2",
				"Rate" : 0.2468,
				"Flag" : "BLUENRGGEN TOUCountry EnergyPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT2AU",
				"Usage" : "Off Peak",
				"Rate" : 0.1338,
				"Flag" : "BLUENRGGEN TOUCountry EnergyOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT2AU",
				"Usage" : "CL",
				"Rate" : 0,
				"Flag" : "BLUENRGGEN TOUCountry EnergyCL",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT2AU",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "BLUENRGGEN TOUCountry EnergyControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT2AU",
				"Usage" : "Shoulder",
				"Rate" : 0.2468,
				"Flag" : "BLUENRGGEN TOUCountry EnergyShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT2AU",
				"Usage" : "Supply Charge",
				"Rate" : 6.055,
				"Flag" : "BLUENRGGEN TOUCountry EnergySupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT2AU",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "BLUENRGGEN TOUCountry EnergySupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "GEN TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT2AU",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "BLUENRGGEN TOUCountry EnergySupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Peak 1",
				"Rate" : 0.2459,
				"Flag" : "BLUENRGDOMEnergy AustraliaPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Peak 2",
				"Rate" : 0.2426,
				"Flag" : "BLUENRGDOMEnergy AustraliaPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMEnergy AustraliaOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Controlled Load 1",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMEnergy AustraliaControlled Load 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMEnergy AustraliaControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMEnergy AustraliaShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Supply Charge",
				"Rate" : 0.7385,
				"Flag" : "BLUENRGDOMEnergy AustraliaSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMEnergy AustraliaSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMEnergy AustraliaSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "Peak 1",
				"Rate" : 0.2459,
				"Flag" : "BLUENRGDOMControlled Load1Energy AustraliaPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "Peak 2",
				"Rate" : 0.2426,
				"Flag" : "BLUENRGDOMControlled Load1Energy AustraliaPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load1Energy AustraliaOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "CL",
				"Rate" : 0.0915,
				"Flag" : "BLUENRGDOMControlled Load1Energy AustraliaCL",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load1Energy AustraliaControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load1Energy AustraliaShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "Supply Charge",
				"Rate" : 0.7385,
				"Flag" : "BLUENRGDOMControlled Load1Energy AustraliaSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load1Energy AustraliaSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load1Energy AustraliaSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "Peak 1",
				"Rate" : 0.2459,
				"Flag" : "BLUENRGDOMControlled Load2Energy AustraliaPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "Peak 2",
				"Rate" : 0.2426,
				"Flag" : "BLUENRGDOMControlled Load2Energy AustraliaPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load2Energy AustraliaOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "CL",
				"Rate" : 0.1271,
				"Flag" : "BLUENRGDOMControlled Load2Energy AustraliaCL",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load2Energy AustraliaControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load2Energy AustraliaShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "Supply Charge",
				"Rate" : 0.7385,
				"Flag" : "BLUENRGDOMControlled Load2Energy AustraliaSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load2Energy AustraliaSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load2Energy AustraliaSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA025",
				"Usage" : "Peak 1",
				"Rate" : 0.4669,
				"Flag" : "BLUENRGDOM TOUEnergy AustraliaPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA025",
				"Usage" : "Peak 2",
				"Rate" : 0,
				"Flag" : "BLUENRGDOM TOUEnergy AustraliaPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA025",
				"Usage" : "Off Peak",
				"Rate" : 0.1102,
				"Flag" : "BLUENRGDOM TOUEnergy AustraliaOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA025",
				"Usage" : "CL",
				"Rate" : 0,
				"Flag" : "BLUENRGDOM TOUEnergy AustraliaCL",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA025",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "BLUENRGDOM TOUEnergy AustraliaControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA025",
				"Usage" : "Shoulder",
				"Rate" : 0.1955,
				"Flag" : "BLUENRGDOM TOUEnergy AustraliaShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA025",
				"Usage" : "Supply Charge",
				"Rate" : 0.8639,
				"Flag" : "BLUENRGDOM TOUEnergy AustraliaSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA025",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "BLUENRGDOM TOUEnergy AustraliaSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA025",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "BLUENRGDOM TOUEnergy AustraliaSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Peak 1",
				"Rate" : 0.2645,
				"Flag" : "BLUENRGDOMIntegralPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Peak 2",
				"Rate" : 0.258,
				"Flag" : "BLUENRGDOMIntegralPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMIntegralOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Controlled Load 1",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMIntegralControlled Load 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMIntegralControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMIntegralShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Supply Charge",
				"Rate" : 0.85,
				"Flag" : "BLUENRGDOMIntegralSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMIntegralSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMIntegralSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "Peak 1",
				"Rate" : 0.2995,
				"Flag" : "BLUENRGDOMControlled Load1IntegralPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "Peak 2",
				"Rate" : 0.2905,
				"Flag" : "BLUENRGDOMControlled Load1IntegralPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load1IntegralOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "CL",
				"Rate" : 0.14,
				"Flag" : "BLUENRGDOMControlled Load1IntegralCL",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load1IntegralControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load1IntegralShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "Supply Charge",
				"Rate" : 0.9,
				"Flag" : "BLUENRGDOMControlled Load1IntegralSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load1IntegralSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load1IntegralSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "Peak 1",
				"Rate" : 0.288,
				"Flag" : "BLUENRGDOMControlled Load2IntegralPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "Peak 2",
				"Rate" : 0.29,
				"Flag" : "BLUENRGDOMControlled Load2IntegralPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load2IntegralOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "CL",
				"Rate" : 0.14,
				"Flag" : "BLUENRGDOMControlled Load2IntegralCL",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load2IntegralControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load2IntegralShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "Supply Charge",
				"Rate" : 0.9,
				"Flag" : "BLUENRGDOMControlled Load2IntegralSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load2IntegralSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load2IntegralSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "N705",
				"Usage" : "Peak 1",
				"Rate" : 0.312,
				"Flag" : "BLUENRGDOM TOUIntegralPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "N705",
				"Usage" : "Peak 2",
				"Rate" : 0,
				"Flag" : "BLUENRGDOM TOUIntegralPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "N705",
				"Usage" : "Off Peak",
				"Rate" : 0.1675,
				"Flag" : "BLUENRGDOM TOUIntegralOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "N705",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "BLUENRGDOM TOUIntegralControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "N705",
				"Usage" : "Shoulder",
				"Rate" : 0.27,
				"Flag" : "BLUENRGDOM TOUIntegralShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "N705",
				"Usage" : "Supply Charge",
				"Rate" : 1.1,
				"Flag" : "BLUENRGDOM TOUIntegralSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "N705",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "BLUENRGDOM TOUIntegralSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "N705",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "BLUENRGDOM TOUIntegralSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU",
				"Usage" : "Peak 1",
				"Rate" : 0.2625,
				"Flag" : "BLUENRGDOMCountry EnergyPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU",
				"Usage" : "Peak 2",
				"Rate" : 0.265,
				"Flag" : "BLUENRGDOMCountry EnergyPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMCountry EnergyOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU",
				"Usage" : "Controlled Load 1",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMCountry EnergyControlled Load 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMCountry EnergyControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMCountry EnergyShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU",
				"Usage" : "Supply Charge",
				"Rate" : 1.4,
				"Flag" : "BLUENRGDOMCountry EnergySupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMCountry EnergySupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMCountry EnergySupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "Peak 1",
				"Rate" : 0.288,
				"Flag" : "BLUENRGDOMControlled Load1Country EnergyPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "Peak 2",
				"Rate" : 0.29,
				"Flag" : "BLUENRGDOMControlled Load1Country EnergyPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load1Country EnergyOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "CL",
				"Rate" : 0.16,
				"Flag" : "BLUENRGDOMControlled Load1Country EnergyCL",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load1Country EnergyControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load1Country EnergyShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "Supply Charge",
				"Rate" : 1.55,
				"Flag" : "BLUENRGDOMControlled Load1Country EnergySupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load1Country EnergySupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load1Country EnergySupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "Peak 1",
				"Rate" : 0.284,
				"Flag" : "BLUENRGDOMControlled Load2Country EnergyPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "Peak 2",
				"Rate" : 0.2875,
				"Flag" : "BLUENRGDOMControlled Load2Country EnergyPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load2Country EnergyOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "CL",
				"Rate" : 0.1348,
				"Flag" : "BLUENRGDOMControlled Load2Country EnergyCL",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "Controlled Load 2",
				"Rate" : 0.18,
				"Flag" : "BLUENRGDOMControlled Load2Country EnergyControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load2Country EnergyShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "Supply Charge",
				"Rate" : 1.55,
				"Flag" : "BLUENRGDOMControlled Load2Country EnergySupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load2Country EnergySupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "BLUENRGDOMControlled Load2Country EnergySupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT3AU",
				"Usage" : "Peak 1",
				"Rate" : 0.298,
				"Flag" : "BLUENRGDOM TOUCountry EnergyPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT3AU",
				"Usage" : "Peak 2",
				"Rate" : 0,
				"Flag" : "BLUENRGDOM TOUCountry EnergyPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT3AU",
				"Usage" : "Off Peak",
				"Rate" : 0.173,
				"Flag" : "BLUENRGDOM TOUCountry EnergyOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT3AU",
				"Usage" : "CL",
				"Rate" : 0,
				"Flag" : "BLUENRGDOM TOUCountry EnergyCL",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT3AU",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "BLUENRGDOM TOUCountry EnergyControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT3AU",
				"Usage" : "Shoulder",
				"Rate" : 0.3015,
				"Flag" : "BLUENRGDOM TOUCountry EnergyShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT3AU",
				"Usage" : "Supply Charge",
				"Rate" : 1.45,
				"Flag" : "BLUENRGDOM TOUCountry EnergySupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT3AU",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "BLUENRGDOM TOUCountry EnergySupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "BLUENRG",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT3AU",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "BLUENRGDOM TOUCountry EnergySupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GD",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.2814,
				"Flag" : "ALINTAGDJemena (AGL North)Peak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GD",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.29,
				"Flag" : "ALINTAGDJemena (AGL North)Supply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Controlled LoadR",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0.187,
				"Flag" : "ALINTAControlled LoadRJemena (AGL North)CL",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GHGL",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.3493,
				"Flag" : "ALINTAGHGLJemena (AGL North)Peak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GHGL",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1887,
				"Flag" : "ALINTAGHGLJemena (AGL North)Off Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GHGL",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.27,
				"Flag" : "ALINTAGHGLJemena (AGL North)Supply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GD",
				"Distributor" : "Citipower",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.2365,
				"Flag" : "ALINTAGDCitipowerPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GD",
				"Distributor" : "Citipower",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.19,
				"Flag" : "ALINTAGDCitipowerSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Controlled LoadR",
				"Distributor" : "Citipower",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0.171,
				"Flag" : "ALINTAControlled LoadRCitipowerCL",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GHGL",
				"Distributor" : "Citipower",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.3146,
				"Flag" : "ALINTAGHGLCitipowerPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GHGL",
				"Distributor" : "Citipower",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1774,
				"Flag" : "ALINTAGHGLCitipowerOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GHGL",
				"Distributor" : "Citipower",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.23,
				"Flag" : "ALINTAGHGLCitipowerSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GD",
				"Distributor" : "Powercor",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.2772,
				"Flag" : "ALINTAGDPowercorPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GD",
				"Distributor" : "Powercor",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.26,
				"Flag" : "ALINTAGDPowercorSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Controlled LoadR",
				"Distributor" : "Powercor",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0.2052,
				"Flag" : "ALINTAControlled LoadRPowercorCL",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GHGL",
				"Distributor" : "Powercor",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.355,
				"Flag" : "ALINTAGHGLPowercorPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GHGL",
				"Distributor" : "Powercor",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1813,
				"Flag" : "ALINTAGHGLPowercorOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GHGL",
				"Distributor" : "Powercor",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.31,
				"Flag" : "ALINTAGHGLPowercorSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GD",
				"Distributor" : "SPAusnet",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.3185,
				"Flag" : "ALINTAGDSPAusnetPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GD",
				"Distributor" : "SPAusnet",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : 0.3185,
				"Flag" : "ALINTAGDSPAusnetPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GD",
				"Distributor" : "SPAusnet",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.4,
				"Flag" : "ALINTAGDSPAusnetSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Controlled LoadR",
				"Distributor" : "SPAusnet",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0.1934,
				"Flag" : "ALINTAControlled LoadRSPAusnetCL",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GHGL",
				"Distributor" : "SPAusnet",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.4455,
				"Flag" : "ALINTAGHGLSPAusnetPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GHGL",
				"Distributor" : "SPAusnet",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1868,
				"Flag" : "ALINTAGHGLSPAusnetOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GHGL",
				"Distributor" : "SPAusnet",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.49,
				"Flag" : "ALINTAGHGLSPAusnetSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GD",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.2626,
				"Flag" : "ALINTAGDJemena (United Energy)Peak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GD",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.18,
				"Flag" : "ALINTAGDJemena (United Energy)Supply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Controlled LoadR",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0.1694,
				"Flag" : "ALINTAControlled LoadRJemena (United Energy)CL",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GHGL",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.3399,
				"Flag" : "ALINTAGHGLJemena (United Energy)Peak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GHGL",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1717,
				"Flag" : "ALINTAGHGLJemena (United Energy)Off Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GHGL",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.1,
				"Flag" : "ALINTAGHGLJemena (United Energy)Supply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.2921,
				"Flag" : "ALINTAEJemena (AGL North)Peak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.77,
				"Flag" : "ALINTAEJemena (AGL North)Supply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Controlled LoadB",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0.1944,
				"Flag" : "ALINTAControlled LoadBJemena (AGL North)CL",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "D",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.3367,
				"Flag" : "ALINTADJemena (AGL North)Peak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "D",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1632,
				"Flag" : "ALINTADJemena (AGL North)Off Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "D",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.7,
				"Flag" : "ALINTADJemena (AGL North)Supply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E1",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.3308,
				"Flag" : "ALINTAE1Jemena (AGL North)Peak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E1",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : 0.3308,
				"Flag" : "ALINTAE1Jemena (AGL North)Peak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E1",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1594,
				"Flag" : "ALINTAE1Jemena (AGL North)Off Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E1",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.58,
				"Flag" : "ALINTAE1Jemena (AGL North)Supply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E",
				"Distributor" : "Citipower",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.2414,
				"Flag" : "ALINTAECitipowerPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E",
				"Distributor" : "Citipower",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.72,
				"Flag" : "ALINTAECitipowerSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Controlled LoadB",
				"Distributor" : "Citipower",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0.1777,
				"Flag" : "ALINTAControlled LoadBCitipowerCL",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "D",
				"Distributor" : "Citipower",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.2776,
				"Flag" : "ALINTADCitipowerPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "D",
				"Distributor" : "Citipower",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1503,
				"Flag" : "ALINTADCitipowerOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "D",
				"Distributor" : "Citipower",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.97,
				"Flag" : "ALINTADCitipowerSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E1",
				"Distributor" : "Citipower",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.2538,
				"Flag" : "ALINTAE1CitipowerPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E1",
				"Distributor" : "Citipower",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : 0,
				"Flag" : "ALINTAE1CitipowerPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E1",
				"Distributor" : "Citipower",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1451,
				"Flag" : "ALINTAE1CitipowerOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E1",
				"Distributor" : "Citipower",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.87,
				"Flag" : "ALINTAE1CitipowerSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E",
				"Distributor" : "Powercor",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.2648,
				"Flag" : "ALINTAEPowercorPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E",
				"Distributor" : "Powercor",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.47,
				"Flag" : "ALINTAEPowercorSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Controlled LoadB",
				"Distributor" : "Powercor",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0.2132,
				"Flag" : "ALINTAControlled LoadBPowercorCL",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "D",
				"Distributor" : "Powercor",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.3246,
				"Flag" : "ALINTADPowercorPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "D",
				"Distributor" : "Powercor",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1636,
				"Flag" : "ALINTADPowercorOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "D",
				"Distributor" : "Powercor",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.29,
				"Flag" : "ALINTADPowercorSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E1",
				"Distributor" : "Powercor",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.3067,
				"Flag" : "ALINTAE1PowercorPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E1",
				"Distributor" : "Powercor",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : 0.3266,
				"Flag" : "ALINTAE1PowercorPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E1",
				"Distributor" : "Powercor",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1627,
				"Flag" : "ALINTAE1PowercorOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E1",
				"Distributor" : "Powercor",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.37,
				"Flag" : "ALINTAE1PowercorSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E",
				"Distributor" : "SPAusnet",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.4006,
				"Flag" : "ALINTAESPAusnetPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E",
				"Distributor" : "SPAusnet",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : 0.4006,
				"Flag" : "ALINTAESPAusnetPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E",
				"Distributor" : "SPAusnet",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.57,
				"Flag" : "ALINTAESPAusnetSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Controlled LoadB",
				"Distributor" : "SPAusnet",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0.201,
				"Flag" : "ALINTAControlled LoadBSPAusnetCL",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "D",
				"Distributor" : "SPAusnet",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.4088,
				"Flag" : "ALINTADSPAusnetPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "D",
				"Distributor" : "SPAusnet",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.187,
				"Flag" : "ALINTADSPAusnetOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "D",
				"Distributor" : "SPAusnet",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.61,
				"Flag" : "ALINTADSPAusnetSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E1",
				"Distributor" : "SPAusnet",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.3245,
				"Flag" : "ALINTAE1SPAusnetPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E1",
				"Distributor" : "SPAusnet",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : 0.3245,
				"Flag" : "ALINTAE1SPAusnetPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E1",
				"Distributor" : "SPAusnet",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1966,
				"Flag" : "ALINTAE1SPAusnetOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E1",
				"Distributor" : "SPAusnet",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.57,
				"Flag" : "ALINTAE1SPAusnetSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.2841,
				"Flag" : "ALINTAEJemena (United Energy)Peak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : 0.2841,
				"Flag" : "ALINTAEJemena (United Energy)Peak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.5,
				"Flag" : "ALINTAEJemena (United Energy)Supply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Controlled LoadB",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0.176,
				"Flag" : "ALINTAControlled LoadBJemena (United Energy)CL",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "D",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.3057,
				"Flag" : "ALINTADJemena (United Energy)Peak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "D",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1281,
				"Flag" : "ALINTADJemena (United Energy)Off Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "D",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.37,
				"Flag" : "ALINTADJemena (United Energy)Supply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E1",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.3133,
				"Flag" : "ALINTAE1Jemena (United Energy)Peak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E1",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : 0.1164,
				"Flag" : "ALINTAE1Jemena (United Energy)Peak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E1",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1966,
				"Flag" : "ALINTAE1Jemena (United Energy)Off Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "E1",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.33,
				"Flag" : "ALINTAE1Jemena (United Energy)Supply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050",
				"Usage" : "Peak 1",
				"Rate" : 0.254,
				"Flag" : "ALINTAGENEnergy AustraliaPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050",
				"Usage" : "Peak 2",
				"Rate" : 0.2537,
				"Flag" : "ALINTAGENEnergy AustraliaPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "ALINTAGENEnergy AustraliaOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050",
				"Usage" : "CL",
				"Rate" : 0,
				"Flag" : "ALINTAGENEnergy AustraliaCL",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "ALINTAGENEnergy AustraliaControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "ALINTAGENEnergy AustraliaShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050",
				"Usage" : "Supply Charge",
				"Rate" : 1.7,
				"Flag" : "ALINTAGENEnergy AustraliaSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "ALINTAGENEnergy AustraliaSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "ALINTAGENEnergy AustraliaSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA030",
				"Usage" : "Peak 1",
				"Rate" : 0.254,
				"Flag" : "ALINTAGENControlled Load1Energy AustraliaPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA030",
				"Usage" : "Peak 2",
				"Rate" : 0.2537,
				"Flag" : "ALINTAGENControlled Load1Energy AustraliaPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA030",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "ALINTAGENControlled Load1Energy AustraliaOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA030",
				"Usage" : "CL",
				"Rate" : 0.0937,
				"Flag" : "ALINTAGENControlled Load1Energy AustraliaCL",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA030",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "ALINTAGENControlled Load1Energy AustraliaControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA030",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "ALINTAGENControlled Load1Energy AustraliaShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA030",
				"Usage" : "Supply Charge",
				"Rate" : 1.7,
				"Flag" : "ALINTAGENControlled Load1Energy AustraliaSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA030",
				"Usage" : "Supply Charge 1",
				"Rate" : 0.044,
				"Flag" : "ALINTAGENControlled Load1Energy AustraliaSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA030",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "ALINTAGENControlled Load1Energy AustraliaSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA040",
				"Usage" : "Peak 1",
				"Rate" : 0.254,
				"Flag" : "ALINTAGENControlled Load2Energy AustraliaPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA040",
				"Usage" : "Peak 2",
				"Rate" : 0.2537,
				"Flag" : "ALINTAGENControlled Load2Energy AustraliaPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA040",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "ALINTAGENControlled Load2Energy AustraliaOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA040",
				"Usage" : "CL",
				"Rate" : 0.0937,
				"Flag" : "ALINTAGENControlled Load2Energy AustraliaCL",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA040",
				"Usage" : "Controlled Load 2",
				"Rate" : 0.1285,
				"Flag" : "ALINTAGENControlled Load2Energy AustraliaControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA040",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "ALINTAGENControlled Load2Energy AustraliaShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA040",
				"Usage" : "Supply Charge",
				"Rate" : 1.7,
				"Flag" : "ALINTAGENControlled Load2Energy AustraliaSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA040",
				"Usage" : "Supply Charge 1",
				"Rate" : 0.044,
				"Flag" : "ALINTAGENControlled Load2Energy AustraliaSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA040",
				"Usage" : "Supply Charge 2",
				"Rate" : 0.0998,
				"Flag" : "ALINTAGENControlled Load2Energy AustraliaSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA225",
				"Usage" : "Peak 1",
				"Rate" : 0.4512,
				"Flag" : "ALINTAPower Smart TOUEnergy AustraliaPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA225",
				"Usage" : "Peak 2",
				"Rate" : 0,
				"Flag" : "ALINTAPower Smart TOUEnergy AustraliaPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA225",
				"Usage" : "Off Peak",
				"Rate" : 0.1095,
				"Flag" : "ALINTAPower Smart TOUEnergy AustraliaOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Controlled LoadB",
				"Distributor" : "Energy Australia",
				"Meter" : "EA225",
				"Usage" : "CL",
				"Rate" : 0.0937,
				"Flag" : "ALINTAControlled LoadBEnergy AustraliaCL",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA225",
				"Usage" : "Controlled Load 2",
				"Rate" : 0.1285,
				"Flag" : "ALINTAPower Smart TOUEnergy AustraliaControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA225",
				"Usage" : "Shoulder",
				"Rate" : 0.2212,
				"Flag" : "ALINTAPower Smart TOUEnergy AustraliaShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA225",
				"Usage" : "Supply Charge",
				"Rate" : 1.76,
				"Flag" : "ALINTAPower Smart TOUEnergy AustraliaSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA225",
				"Usage" : "Supply Charge 1",
				"Rate" : 0.044,
				"Flag" : "ALINTAPower Smart TOUEnergy AustraliaSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA225",
				"Usage" : "Supply Charge 2",
				"Rate" : 0.0998,
				"Flag" : "ALINTAPower Smart TOUEnergy AustraliaSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA302",
				"Usage" : "Peak 1",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUEnergy AustraliaPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA302",
				"Usage" : "Peak 2",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUEnergy AustraliaPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA302",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUEnergy AustraliaOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Controlled LoadB",
				"Distributor" : "Energy Australia",
				"Meter" : "EA302",
				"Usage" : "CL",
				"Rate" : 0,
				"Flag" : "ALINTAControlled LoadBEnergy AustraliaCL",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA302",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUEnergy AustraliaControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA302",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUEnergy AustraliaShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA302",
				"Usage" : "Supply Charge",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUEnergy AustraliaSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA302",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUEnergy AustraliaSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA302",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUEnergy AustraliaSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AU",
				"Usage" : "Peak 1",
				"Rate" : 0.2979,
				"Flag" : "ALINTAGENCountry EnergyPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AU",
				"Usage" : "Peak 2",
				"Rate" : 0.2691,
				"Flag" : "ALINTAGENCountry EnergyPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AU",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "ALINTAGENCountry EnergyOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AU",
				"Usage" : "CL",
				"Rate" : 0.1126,
				"Flag" : "ALINTAGENCountry EnergyCL",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AU",
				"Usage" : "Controlled Load 2",
				"Rate" : 0.1617,
				"Flag" : "ALINTAGENCountry EnergyControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AU",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "ALINTAGENCountry EnergyShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AU",
				"Usage" : "Supply Charge",
				"Rate" : 1.71,
				"Flag" : "ALINTAGENCountry EnergySupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AU",
				"Usage" : "Supply Charge 1",
				"Rate" : 0.1331,
				"Flag" : "ALINTAGENCountry EnergySupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AU",
				"Usage" : "Supply Charge 2",
				"Rate" : 0.1381,
				"Flag" : "ALINTAGENCountry EnergySupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC1AU",
				"Usage" : "Peak 1",
				"Rate" : 0.3043,
				"Flag" : "ALINTAGENControlled Load1Country EnergyPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC1AU",
				"Usage" : "Peak 2",
				"Rate" : 0,
				"Flag" : "ALINTAGENControlled Load1Country EnergyPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC1AU",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "ALINTAGENControlled Load1Country EnergyOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC1AU",
				"Usage" : "CL",
				"Rate" : 0.1126,
				"Flag" : "ALINTAGENControlled Load1Country EnergyCL",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC1AU",
				"Usage" : "Controlled Load 2",
				"Rate" : 0.1617,
				"Flag" : "ALINTAGENControlled Load1Country EnergyControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC1AU",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "ALINTAGENControlled Load1Country EnergyShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC1AU",
				"Usage" : "Supply Charge",
				"Rate" : 1.71,
				"Flag" : "ALINTAGENControlled Load1Country EnergySupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC1AU",
				"Usage" : "Supply Charge 1",
				"Rate" : 0.1331,
				"Flag" : "ALINTAGENControlled Load1Country EnergySupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC1AU",
				"Usage" : "Supply Charge 2",
				"Rate" : 0.1381,
				"Flag" : "ALINTAGENControlled Load1Country EnergySupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC2AU",
				"Usage" : "Peak 1",
				"Rate" : 0.2979,
				"Flag" : "ALINTAGENControlled Load2Country EnergyPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC2AU",
				"Usage" : "Peak 2",
				"Rate" : 0.2691,
				"Flag" : "ALINTAGENControlled Load2Country EnergyPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC2AU",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "ALINTAGENControlled Load2Country EnergyOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC2AU",
				"Usage" : "CL",
				"Rate" : 0.1125,
				"Flag" : "ALINTAGENControlled Load2Country EnergyCL",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC2AU",
				"Usage" : "Controlled Load 2",
				"Rate" : 0.1617,
				"Flag" : "ALINTAGENControlled Load2Country EnergyControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC2AU",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "ALINTAGENControlled Load2Country EnergyShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC2AU",
				"Usage" : "Supply Charge",
				"Rate" : 1.71,
				"Flag" : "ALINTAGENControlled Load2Country EnergySupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC2AU",
				"Usage" : "Supply Charge 1",
				"Rate" : 0.1331,
				"Flag" : "ALINTAGENControlled Load2Country EnergySupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC2AU",
				"Usage" : "Supply Charge 2",
				"Rate" : 0.1381,
				"Flag" : "ALINTAGENControlled Load2Country EnergySupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.2841,
				"Flag" : "ALINTAPower Smart TOUCountry EnergyPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : 0,
				"Flag" : "ALINTAPower Smart TOUCountry EnergyPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1696,
				"Flag" : "ALINTAPower Smart TOUCountry EnergyOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Controlled LoadB",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0.1125,
				"Flag" : "ALINTAControlled LoadBCountry EnergyCL",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : 0.1617,
				"Flag" : "ALINTAPower Smart TOUCountry EnergyControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : 0.2841,
				"Flag" : "ALINTAPower Smart TOUCountry EnergyShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 7.23,
				"Flag" : "ALINTAPower Smart TOUCountry EnergySupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "ALINTAPower Smart TOUCountry EnergySupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "ALINTAPower Smart TOUCountry EnergySupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUCountry EnergyPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUCountry EnergyPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUCountry EnergyOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Controlled LoadB",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0,
				"Flag" : "ALINTAControlled LoadBCountry EnergyCL",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUCountry EnergyControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUCountry EnergyShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUCountry EnergySupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUCountry EnergySupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUCountry EnergySupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "N90",
				"Usage" : "Peak 1",
				"Rate" : 0.2265,
				"Flag" : "ALINTAGENIntegralPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "N90",
				"Usage" : "Peak 2",
				"Rate" : 0.2367,
				"Flag" : "ALINTAGENIntegralPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "N90",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "ALINTAGENIntegralOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "N90",
				"Usage" : "CL",
				"Rate" : 0,
				"Flag" : "ALINTAGENIntegralCL",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "N90",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "ALINTAGENIntegralControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "N90",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "ALINTAGENIntegralShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "N90",
				"Usage" : "Supply Charge",
				"Rate" : 0.9981,
				"Flag" : "ALINTAGENIntegralSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "N90",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "ALINTAGENIntegralSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "N90",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "ALINTAGENIntegralSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N90N50",
				"Usage" : "Peak 1",
				"Rate" : 0.2265,
				"Flag" : "ALINTAGENControlled Load1IntegralPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N90N50",
				"Usage" : "Peak 2",
				"Rate" : 0.2367,
				"Flag" : "ALINTAGENControlled Load1IntegralPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N90N50",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "ALINTAGENControlled Load1IntegralOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N90N50",
				"Usage" : "CL",
				"Rate" : 0.081,
				"Flag" : "ALINTAGENControlled Load1IntegralCL",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N90N50",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "ALINTAGENControlled Load1IntegralControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N90N50",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "ALINTAGENControlled Load1IntegralShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N90N50",
				"Usage" : "Supply Charge",
				"Rate" : 1.1,
				"Flag" : "ALINTAGENControlled Load1IntegralSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N90N50",
				"Usage" : "Supply Charge 1",
				"Rate" : 0.9981,
				"Flag" : "ALINTAGENControlled Load1IntegralSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N90N50",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "ALINTAGENControlled Load1IntegralSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N90N54",
				"Usage" : "Peak 1",
				"Rate" : 0.2265,
				"Flag" : "ALINTAGENControlled Load2IntegralPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N90N54",
				"Usage" : "Peak 2",
				"Rate" : 0.2367,
				"Flag" : "ALINTAGENControlled Load2IntegralPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N90N54",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "ALINTAGENControlled Load2IntegralOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N90N54",
				"Usage" : "CL",
				"Rate" : 0.081,
				"Flag" : "ALINTAGENControlled Load2IntegralCL",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N90N54",
				"Usage" : "Controlled Load 2",
				"Rate" : 0.1223,
				"Flag" : "ALINTAGENControlled Load2IntegralControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N90N54",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "ALINTAGENControlled Load2IntegralShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N90N54",
				"Usage" : "Supply Charge",
				"Rate" : 0.9981,
				"Flag" : "ALINTAGENControlled Load2IntegralSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N90N54",
				"Usage" : "Supply Charge 1",
				"Rate" : 0.053,
				"Flag" : "ALINTAGENControlled Load2IntegralSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GENControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N90N54",
				"Usage" : "Supply Charge 2",
				"Rate" : 0.0526,
				"Flag" : "ALINTAGENControlled Load2IntegralSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "N84",
				"Usage" : "Peak 1",
				"Rate" : 0.3458,
				"Flag" : "ALINTAPower Smart TOUIntegralPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "N84",
				"Usage" : "Peak 2",
				"Rate" : 0,
				"Flag" : "ALINTAPower Smart TOUIntegralPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "N84",
				"Usage" : "Off Peak",
				"Rate" : 0.1343,
				"Flag" : "ALINTAPower Smart TOUIntegralOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Controlled LoadB",
				"Distributor" : "Integral",
				"Meter" : "N84",
				"Usage" : "CL",
				"Rate" : 0,
				"Flag" : "ALINTAControlled LoadBIntegralCL",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "N84",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "ALINTAPower Smart TOUIntegralControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "N84",
				"Usage" : "Shoulder",
				"Rate" : 0.2857,
				"Flag" : "ALINTAPower Smart TOUIntegralShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "N84",
				"Usage" : "Supply Charge",
				"Rate" : 1.1,
				"Flag" : "ALINTAPower Smart TOUIntegralSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "N84",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "ALINTAPower Smart TOUIntegralSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "N84",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "ALINTAPower Smart TOUIntegralSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUIntegralPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUIntegralPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUIntegralOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Controlled LoadB",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0,
				"Flag" : "ALINTAControlled LoadBIntegralCL",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUIntegralControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUIntegralShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUIntegralSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUIntegralSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUIntegralSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU ",
				"Usage" : "Peak 1",
				"Rate" : 0.2353,
				"Flag" : "ALINTADOMCountry EnergyPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU ",
				"Usage" : "Peak 2",
				"Rate" : 0.2319,
				"Flag" : "ALINTADOMCountry EnergyPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU ",
				"Usage" : "Peak 3",
				"Rate" : 0.2285,
				"Flag" : "ALINTADOMCountry EnergyPeak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU ",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "ALINTADOMCountry EnergyOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU ",
				"Usage" : "Controlled Load 1",
				"Rate" : 0,
				"Flag" : "ALINTADOMCountry EnergyControlled Load 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU ",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "ALINTADOMCountry EnergyControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU ",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "ALINTADOMCountry EnergyShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU ",
				"Usage" : "Supply Charge",
				"Rate" : 1.39,
				"Flag" : "ALINTADOMCountry EnergySupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU ",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "ALINTADOMCountry EnergySupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU ",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "ALINTADOMCountry EnergySupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "Peak 1",
				"Rate" : 0.2353,
				"Flag" : "ALINTADOMControlled Load1Country EnergyPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "Peak 2",
				"Rate" : 0.2319,
				"Flag" : "ALINTADOMControlled Load1Country EnergyPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "Peak 3",
				"Rate" : 0.2285,
				"Flag" : "ALINTADOMControlled Load1Country EnergyPeak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "ALINTADOMControlled Load1Country EnergyOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "CL",
				"Rate" : 0.1136,
				"Flag" : "ALINTADOMControlled Load1Country EnergyCL",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "Controlled Load 2",
				"Rate" : 0.1634,
				"Flag" : "ALINTADOMControlled Load1Country EnergyControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "ALINTADOMControlled Load1Country EnergyShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "Supply Charge",
				"Rate" : 1.39,
				"Flag" : "ALINTADOMControlled Load1Country EnergySupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "Supply Charge 1",
				"Rate" : 0.1345,
				"Flag" : "ALINTADOMControlled Load1Country EnergySupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "Supply Charge 2",
				"Rate" : 0.1395,
				"Flag" : "ALINTADOMControlled Load1Country EnergySupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "Peak 1",
				"Rate" : 0.2353,
				"Flag" : "ALINTADOMControlled Load2Country EnergyPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "Peak 2",
				"Rate" : 0.2319,
				"Flag" : "ALINTADOMControlled Load2Country EnergyPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "Peak 3",
				"Rate" : 0.2285,
				"Flag" : "ALINTADOMControlled Load2Country EnergyPeak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "ALINTADOMControlled Load2Country EnergyOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "CL",
				"Rate" : 0.1136,
				"Flag" : "ALINTADOMControlled Load2Country EnergyCL",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "Controlled Load 2",
				"Rate" : 0.1634,
				"Flag" : "ALINTADOMControlled Load2Country EnergyControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "ALINTADOMControlled Load2Country EnergyShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "Supply Charge",
				"Rate" : 1.39,
				"Flag" : "ALINTADOMControlled Load2Country EnergySupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "Supply Charge 1",
				"Rate" : 0.1345,
				"Flag" : "ALINTADOMControlled Load2Country EnergySupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "Supply Charge 2",
				"Rate" : 0.1395,
				"Flag" : "ALINTADOMControlled Load2Country EnergySupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT3AU",
				"Usage" : "Peak 1",
				"Rate" : 0.282,
				"Flag" : "ALINTADOM TOUCountry EnergyPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT3AU",
				"Usage" : "Peak 2",
				"Rate" : 0,
				"Flag" : "ALINTADOM TOUCountry EnergyPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT3AU",
				"Usage" : "Off Peak",
				"Rate" : 0.1524,
				"Flag" : "ALINTADOM TOUCountry EnergyOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Controlled LoadB",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0.1136,
				"Flag" : "ALINTAControlled LoadBCountry EnergyCL",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT3AU",
				"Usage" : "Controlled Load 2",
				"Rate" : 0.1634,
				"Flag" : "ALINTADOM TOUCountry EnergyControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT3AU",
				"Usage" : "Shoulder",
				"Rate" : 0.282,
				"Flag" : "ALINTADOM TOUCountry EnergyShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT3AU",
				"Usage" : "Supply Charge",
				"Rate" : 1.37,
				"Flag" : "ALINTADOM TOUCountry EnergySupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT3AU",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "ALINTADOM TOUCountry EnergySupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT3AU",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "ALINTADOM TOUCountry EnergySupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Peak 1",
				"Rate" : 0.2317,
				"Flag" : "ALINTADOMIntegralPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Peak 2",
				"Rate" : 0.2255,
				"Flag" : "ALINTADOMIntegralPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Peak 3",
				"Rate" : 0.2173,
				"Flag" : "ALINTADOMIntegralPeak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "ALINTADOMIntegralOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Controlled Load 1",
				"Rate" : 0,
				"Flag" : "ALINTADOMIntegralControlled Load 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "ALINTADOMIntegralControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "ALINTADOMIntegralShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Supply Charge",
				"Rate" : 0.7896,
				"Flag" : "ALINTADOMIntegralSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "ALINTADOMIntegralSupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "ALINTADOMIntegralSupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "Peak 1",
				"Rate" : 0.2317,
				"Flag" : "ALINTADOMControlled Load1IntegralPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "Peak 2",
				"Rate" : 0.2255,
				"Flag" : "ALINTADOMControlled Load1IntegralPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "Peak 3",
				"Rate" : 0.2173,
				"Flag" : "ALINTADOMControlled Load1IntegralPeak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "ALINTADOMControlled Load1IntegralOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "CL",
				"Rate" : 0.081,
				"Flag" : "ALINTADOMControlled Load1IntegralCL",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "ALINTADOMControlled Load1IntegralControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "ALINTADOMControlled Load1IntegralShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "Supply Charge",
				"Rate" : 0.7896,
				"Flag" : "ALINTADOMControlled Load1IntegralSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "Supply Charge 1",
				"Rate" : 0.0518,
				"Flag" : "ALINTADOMControlled Load1IntegralSupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "ALINTADOMControlled Load1IntegralSupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "Peak 1",
				"Rate" : 0.2317,
				"Flag" : "ALINTADOMControlled Load2IntegralPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "Peak 2",
				"Rate" : 0.2255,
				"Flag" : "ALINTADOMControlled Load2IntegralPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "Peak 3",
				"Rate" : 0.2173,
				"Flag" : "ALINTADOMControlled Load2IntegralPeak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "ALINTADOMControlled Load2IntegralOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "CL",
				"Rate" : 0.081,
				"Flag" : "ALINTADOMControlled Load2IntegralCL",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "Controlled Load 2",
				"Rate" : 0.1223,
				"Flag" : "ALINTADOMControlled Load2IntegralControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "ALINTADOMControlled Load2IntegralShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "Supply Charge",
				"Rate" : 0.7896,
				"Flag" : "ALINTADOMControlled Load2IntegralSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "Supply Charge 1",
				"Rate" : 0.0518,
				"Flag" : "ALINTADOMControlled Load2IntegralSupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "Supply Charge 2",
				"Rate" : 0.0518,
				"Flag" : "ALINTADOMControlled Load2IntegralSupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "N705",
				"Usage" : "Peak 1",
				"Rate" : 0.3177,
				"Flag" : "ALINTADOM TOUIntegralPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "N705",
				"Usage" : "Peak 2",
				"Rate" : 0,
				"Flag" : "ALINTADOM TOUIntegralPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "N705",
				"Usage" : "Off Peak",
				"Rate" : 0.1323,
				"Flag" : "ALINTADOM TOUIntegralOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Controlled LoadB",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0,
				"Flag" : "ALINTAControlled LoadBIntegralCL",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "N705",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "ALINTADOM TOUIntegralControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "N705",
				"Usage" : "Shoulder",
				"Rate" : 0.2596,
				"Flag" : "ALINTADOM TOUIntegralShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "N705",
				"Usage" : "Supply Charge",
				"Rate" : 1.03,
				"Flag" : "ALINTADOM TOUIntegralSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "N705",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "ALINTADOM TOUIntegralSupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "N705",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "ALINTADOM TOUIntegralSupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Peak 1",
				"Rate" : 0.2459,
				"Flag" : "ALINTADOMEnergy AustraliaPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Peak 2",
				"Rate" : 0.2426,
				"Flag" : "ALINTADOMEnergy AustraliaPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Peak 3",
				"Rate" : 0.2394,
				"Flag" : "ALINTADOMEnergy AustraliaPeak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "ALINTADOMEnergy AustraliaOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Controlled Load 1",
				"Rate" : 0,
				"Flag" : "ALINTADOMEnergy AustraliaControlled Load 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "ALINTADOMEnergy AustraliaControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "ALINTADOMEnergy AustraliaShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Supply Charge",
				"Rate" : 0.7385,
				"Flag" : "ALINTADOMEnergy AustraliaSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "ALINTADOMEnergy AustraliaSupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "ALINTADOMEnergy AustraliaSupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "Peak 1",
				"Rate" : 0.2459,
				"Flag" : "ALINTADOMControlled Load1Energy AustraliaPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "Peak 2",
				"Rate" : 0.2426,
				"Flag" : "ALINTADOMControlled Load1Energy AustraliaPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "Peak 3",
				"Rate" : 0.2394,
				"Flag" : "ALINTADOMControlled Load1Energy AustraliaPeak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "ALINTADOMControlled Load1Energy AustraliaOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "CL",
				"Rate" : 0.0915,
				"Flag" : "ALINTADOMControlled Load1Energy AustraliaCL",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "ALINTADOMControlled Load1Energy AustraliaControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "ALINTADOMControlled Load1Energy AustraliaShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "Supply Charge",
				"Rate" : 0.7385,
				"Flag" : "ALINTADOMControlled Load1Energy AustraliaSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "Supply Charge 1",
				"Rate" : 0.046,
				"Flag" : "ALINTADOMControlled Load1Energy AustraliaSupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "ALINTADOMControlled Load1Energy AustraliaSupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "Peak 1",
				"Rate" : 0.2459,
				"Flag" : "ALINTADOMControlled Load2Energy AustraliaPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "Peak 2",
				"Rate" : 0.2426,
				"Flag" : "ALINTADOMControlled Load2Energy AustraliaPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "Peak 3",
				"Rate" : 0.2394,
				"Flag" : "ALINTADOMControlled Load2Energy AustraliaPeak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "ALINTADOMControlled Load2Energy AustraliaOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "CL",
				"Rate" : 0.0915,
				"Flag" : "ALINTADOMControlled Load2Energy AustraliaCL",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "Controlled Load 2",
				"Rate" : 0.1271,
				"Flag" : "ALINTADOMControlled Load2Energy AustraliaControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "ALINTADOMControlled Load2Energy AustraliaShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "Supply Charge",
				"Rate" : 0.7385,
				"Flag" : "ALINTADOMControlled Load2Energy AustraliaSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "Supply Charge 1",
				"Rate" : 0.046,
				"Flag" : "ALINTADOMControlled Load2Energy AustraliaSupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "Supply Charge 2",
				"Rate" : 0.1047,
				"Flag" : "ALINTADOMControlled Load2Energy AustraliaSupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA025",
				"Usage" : "Peak 1",
				"Rate" : 0.4669,
				"Flag" : "ALINTADOM TOUEnergy AustraliaPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA025",
				"Usage" : "Peak 2",
				"Rate" : 0,
				"Flag" : "ALINTADOM TOUEnergy AustraliaPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA025",
				"Usage" : "Off Peak",
				"Rate" : 0.1102,
				"Flag" : "ALINTADOM TOUEnergy AustraliaOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Controlled LoadB",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0,
				"Flag" : "ALINTAControlled LoadBEnergy AustraliaCL",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA025",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "ALINTADOM TOUEnergy AustraliaControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA025",
				"Usage" : "Shoulder",
				"Rate" : 0.1955,
				"Flag" : "ALINTADOM TOUEnergy AustraliaShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA025",
				"Usage" : "Supply Charge",
				"Rate" : 0.8639,
				"Flag" : "ALINTADOM TOUEnergy AustraliaSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA025",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "ALINTADOM TOUEnergy AustraliaSupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA025",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "ALINTADOM TOUEnergy AustraliaSupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Peak 1",
				"Rate" : 0.2674,
				"Flag" : "1st ENERGYDOMEnergy AustraliaPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Peak 2",
				"Rate" : 0.2596,
				"Flag" : "1st ENERGYDOMEnergy AustraliaPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Peak 3",
				"Rate" : 0.2441,
				"Flag" : "1st ENERGYDOMEnergy AustraliaPeak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "1st ENERGYDOMEnergy AustraliaOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Controlled Load 1",
				"Rate" : 0,
				"Flag" : "1st ENERGYDOMEnergy AustraliaControlled Load 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "1st ENERGYDOMEnergy AustraliaControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "1st ENERGYDOMEnergy AustraliaShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Supply Charge",
				"Rate" : 0.8487,
				"Flag" : "1st ENERGYDOMEnergy AustraliaSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "1st ENERGYDOMEnergy AustraliaSupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "1st ENERGYDOMEnergy AustraliaSupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "Peak 1",
				"Rate" : 0.2674,
				"Flag" : "1st ENERGYDOMControlled Load1Energy AustraliaPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "Peak 2",
				"Rate" : 0.2596,
				"Flag" : "1st ENERGYDOMControlled Load1Energy AustraliaPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "Peak 3",
				"Rate" : 0.2441,
				"Flag" : "1st ENERGYDOMControlled Load1Energy AustraliaPeak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "Off Peak",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load1Energy AustraliaOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "CL",
				"Rate" : 0.1084,
				"Flag" : "1st ENERGYDOMControlled Load1Energy AustraliaCL",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load1Energy AustraliaControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "Shoulder",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load1Energy AustraliaShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "Supply Charge",
				"Rate" : 0.8487,
				"Flag" : "1st ENERGYDOMControlled Load1Energy AustraliaSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load1Energy AustraliaSupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA030",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load1Energy AustraliaSupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "Peak 1",
				"Rate" : 0.2674,
				"Flag" : "1st ENERGYDOMControlled Load2Energy AustraliaPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "Peak 2",
				"Rate" : 0.2596,
				"Flag" : "1st ENERGYDOMControlled Load2Energy AustraliaPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "Peak 3",
				"Rate" : 0.2441,
				"Flag" : "1st ENERGYDOMControlled Load2Energy AustraliaPeak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "Off Peak",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load2Energy AustraliaOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "CL",
				"Rate" : 0.1457,
				"Flag" : "1st ENERGYDOMControlled Load2Energy AustraliaCL",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load2Energy AustraliaControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "Shoulder",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load2Energy AustraliaShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "Supply Charge",
				"Rate" : 0.9516,
				"Flag" : "1st ENERGYDOMControlled Load2Energy AustraliaSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load2Energy AustraliaSupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA010EA040",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load2Energy AustraliaSupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA025",
				"Usage" : "Peak 1",
				"Rate" : 0.5467,
				"Flag" : "1st ENERGYDOM TOUEnergy AustraliaPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA025",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOM TOUEnergy AustraliaPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA025",
				"Usage" : "Off Peak",
				"Rate" : 0.1272,
				"Flag" : "1st ENERGYDOM TOUEnergy AustraliaOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Controlled LoadB",
				"Distributor" : "Energy Australia",
				"Meter" : "EA025",
				"Usage" : "CL",
				"Rate" : null,
				"Flag" : "1st ENERGYControlled LoadBEnergy AustraliaCL",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA025",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOM TOUEnergy AustraliaControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA025",
				"Usage" : "Shoulder",
				"Rate" : 0.2118,
				"Flag" : "1st ENERGYDOM TOUEnergy AustraliaShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA025",
				"Usage" : "Supply Charge",
				"Rate" : 0.9628,
				"Flag" : "1st ENERGYDOM TOUEnergy AustraliaSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA025",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "1st ENERGYDOM TOUEnergy AustraliaSupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA025",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "1st ENERGYDOM TOUEnergy AustraliaSupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Peak 1",
				"Rate" : 0.2645,
				"Flag" : "1st ENERGYDOMIntegralPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Peak 2",
				"Rate" : 0.2606,
				"Flag" : "1st ENERGYDOMIntegralPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Peak 3",
				"Rate" : 0.2585,
				"Flag" : "1st ENERGYDOMIntegralPeak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "1st ENERGYDOMIntegralOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Controlled Load 1",
				"Rate" : 0,
				"Flag" : "1st ENERGYDOMIntegralControlled Load 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "1st ENERGYDOMIntegralControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "1st ENERGYDOMIntegralShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Supply Charge",
				"Rate" : 0.8057,
				"Flag" : "1st ENERGYDOMIntegralSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "1st ENERGYDOMIntegralSupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "N70",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "1st ENERGYDOMIntegralSupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "Peak 1",
				"Rate" : 0.2645,
				"Flag" : "1st ENERGYDOMControlled Load1IntegralPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "Peak 2",
				"Rate" : 0.2606,
				"Flag" : "1st ENERGYDOMControlled Load1IntegralPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "Peak 3",
				"Rate" : 0.2585,
				"Flag" : "1st ENERGYDOMControlled Load1IntegralPeak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "Off Peak",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load1IntegralOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "CL",
				"Rate" : 0.0952,
				"Flag" : "1st ENERGYDOMControlled Load1IntegralCL",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load1IntegralControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "Shoulder",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load1IntegralShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "Supply Charge",
				"Rate" : 0.8693,
				"Flag" : "1st ENERGYDOMControlled Load1IntegralSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load1IntegralSupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N70N50",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load1IntegralSupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "Peak 1",
				"Rate" : 0.2645,
				"Flag" : "1st ENERGYDOMControlled Load2IntegralPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "Peak 2",
				"Rate" : 0.2606,
				"Flag" : "1st ENERGYDOMControlled Load2IntegralPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "Peak 3",
				"Rate" : 0.2585,
				"Flag" : "1st ENERGYDOMControlled Load2IntegralPeak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "Off Peak",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load2IntegralOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "CL",
				"Rate" : 0.1487,
				"Flag" : "1st ENERGYDOMControlled Load2IntegralCL",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load2IntegralControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "Shoulder",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load2IntegralShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "Supply Charge",
				"Rate" : 0.8693,
				"Flag" : "1st ENERGYDOMControlled Load2IntegralSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load2IntegralSupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N70N54",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load2IntegralSupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "N705",
				"Usage" : "Peak 1",
				"Rate" : 0.3509,
				"Flag" : "1st ENERGYDOM TOUIntegralPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "N705",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOM TOUIntegralPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "N705",
				"Usage" : "Off Peak",
				"Rate" : 0.14,
				"Flag" : "1st ENERGYDOM TOUIntegralOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Controlled LoadB",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : null,
				"Flag" : "1st ENERGYControlled LoadBIntegralCL",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "N705",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOM TOUIntegralControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "N705",
				"Usage" : "Shoulder",
				"Rate" : 0.2876,
				"Flag" : "1st ENERGYDOM TOUIntegralShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "N705",
				"Usage" : "Supply Charge",
				"Rate" : null,
				"Flag" : "1st ENERGYDOM TOUIntegralSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "N705",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYDOM TOUIntegralSupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "N705",
				"Usage" : "Supply Charge 2",
				"Rate" : 1.0347,
				"Flag" : "1st ENERGYDOM TOUIntegralSupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Type 6 Domestic TOU",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.3295,
				"Flag" : "1st ENERGYType 6 Domestic TOUIntegralPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Type 6 Domestic TOU",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYType 6 Domestic TOUIntegralPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Type 6 Domestic TOU",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1315,
				"Flag" : "1st ENERGYType 6 Domestic TOUIntegralOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Controlled LoadB",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : null,
				"Flag" : "1st ENERGYControlled LoadBIntegralCL",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Type 6 Domestic TOU",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYType 6 Domestic TOUIntegralControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Type 6 Domestic TOU",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : 0.27,
				"Flag" : "1st ENERGYType 6 Domestic TOUIntegralShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Type 6 Domestic TOU",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 0.9949,
				"Flag" : "1st ENERGYType 6 Domestic TOUIntegralSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Type 6 Domestic TOU",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "1st ENERGYType 6 Domestic TOUIntegralSupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Type 6 Domestic TOU",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "1st ENERGYType 6 Domestic TOUIntegralSupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU",
				"Usage" : "Peak 1",
				"Rate" : 0.2896,
				"Flag" : "1st ENERGYDOMCountry EnergyPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU",
				"Usage" : "Peak 2",
				"Rate" : 0.2852,
				"Flag" : "1st ENERGYDOMCountry EnergyPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU",
				"Usage" : "Peak 3",
				"Rate" : 0.2809,
				"Flag" : "1st ENERGYDOMCountry EnergyPeak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "1st ENERGYDOMCountry EnergyOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU",
				"Usage" : "Controlled Load 1",
				"Rate" : 0,
				"Flag" : "1st ENERGYDOMCountry EnergyControlled Load 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "1st ENERGYDOMCountry EnergyControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "1st ENERGYDOMCountry EnergyShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU",
				"Usage" : "Supply Charge",
				"Rate" : 1.408,
				"Flag" : "1st ENERGYDOMCountry EnergySupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "1st ENERGYDOMCountry EnergySupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AU",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "1st ENERGYDOMCountry EnergySupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "Peak 1",
				"Rate" : 0.2896,
				"Flag" : "1st ENERGYDOMControlled Load1Country EnergyPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "Peak 2",
				"Rate" : 0.2852,
				"Flag" : "1st ENERGYDOMControlled Load1Country EnergyPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "Peak 3",
				"Rate" : 0.2809,
				"Flag" : "1st ENERGYDOMControlled Load1Country EnergyPeak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "Off Peak",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load1Country EnergyOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "CL",
				"Rate" : 0.124,
				"Flag" : "1st ENERGYDOMControlled Load1Country EnergyCL",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load1Country EnergyControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "Shoulder",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load1Country EnergyShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "Supply Charge",
				"Rate" : 1.5447,
				"Flag" : "1st ENERGYDOMControlled Load1Country EnergySupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load1Country EnergySupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load1Country EnergySupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "Peak 1",
				"Rate" : 0.2896,
				"Flag" : "1st ENERGYDOMControlled Load2Country EnergyPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "Peak 2",
				"Rate" : 0.2852,
				"Flag" : "1st ENERGYDOMControlled Load2Country EnergyPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "Peak 3",
				"Rate" : 0.2809,
				"Flag" : "1st ENERGYDOMControlled Load2Country EnergyPeak 3",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "Off Peak",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load2Country EnergyOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "CL",
				"Rate" : 0.1549,
				"Flag" : "1st ENERGYDOMControlled Load2Country EnergyCL",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load2Country EnergyControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "Shoulder",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load2Country EnergyShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "Supply Charge",
				"Rate" : 1.5936,
				"Flag" : "1st ENERGYDOMControlled Load2Country EnergySupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load2Country EnergySupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOMControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC2AU",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOMControlled Load2Country EnergySupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT3AU",
				"Usage" : "Peak 1",
				"Rate" : 0.3378,
				"Flag" : "1st ENERGYDOM TOUCountry EnergyPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT3AU",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOM TOUCountry EnergyPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT3AU",
				"Usage" : "Off Peak",
				"Rate" : 0.1806,
				"Flag" : "1st ENERGYDOM TOUCountry EnergyOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Controlled LoadB",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT3AU",
				"Usage" : "CL",
				"Rate" : null,
				"Flag" : "1st ENERGYControlled LoadBCountry EnergyCL",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT3AU",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOM TOUCountry EnergyControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT3AU",
				"Usage" : "Shoulder",
				"Rate" : 0.3378,
				"Flag" : "1st ENERGYDOM TOUCountry EnergyShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT3AU",
				"Usage" : "Supply Charge",
				"Rate" : 1.4,
				"Flag" : "1st ENERGYDOM TOUCountry EnergySupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT3AU",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "1st ENERGYDOM TOUCountry EnergySupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT3AU",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "1st ENERGYDOM TOUCountry EnergySupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050",
				"Usage" : "Peak 1",
				"Rate" : 0.3143,
				"Flag" : "1st ENERGYGENEnergy AustraliaPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050",
				"Usage" : "Peak 2",
				"Rate" : 0.2897,
				"Flag" : "1st ENERGYGENEnergy AustraliaPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050",
				"Usage" : "Off Peak",
				"Rate" : null,
				"Flag" : "1st ENERGYGENEnergy AustraliaOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050",
				"Usage" : "CL",
				"Rate" : null,
				"Flag" : "1st ENERGYGENEnergy AustraliaCL",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGENEnergy AustraliaControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050",
				"Usage" : "Shoulder",
				"Rate" : null,
				"Flag" : "1st ENERGYGENEnergy AustraliaShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050",
				"Usage" : "Supply Charge",
				"Rate" : 1.7891,
				"Flag" : "1st ENERGYGENEnergy AustraliaSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYGENEnergy AustraliaSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGENEnergy AustraliaSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA030",
				"Usage" : "Peak 1",
				"Rate" : 0.3143,
				"Flag" : "1st ENERGYGENControlled Load1Energy AustraliaPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA030",
				"Usage" : "Peak 2",
				"Rate" : 0.2897,
				"Flag" : "1st ENERGYGENControlled Load1Energy AustraliaPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA030",
				"Usage" : "Off Peak",
				"Rate" : null,
				"Flag" : "1st ENERGYGENControlled Load1Energy AustraliaOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA030",
				"Usage" : "CL",
				"Rate" : 0.1011,
				"Flag" : "1st ENERGYGENControlled Load1Energy AustraliaCL",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA030",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGENControlled Load1Energy AustraliaControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA030",
				"Usage" : "Shoulder",
				"Rate" : null,
				"Flag" : "1st ENERGYGENControlled Load1Energy AustraliaShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA030",
				"Usage" : "Supply Charge",
				"Rate" : 1.7891,
				"Flag" : "1st ENERGYGENControlled Load1Energy AustraliaSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA030",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYGENControlled Load1Energy AustraliaSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA030",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGENControlled Load1Energy AustraliaSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA040",
				"Usage" : "Peak 1",
				"Rate" : 0.3143,
				"Flag" : "1st ENERGYGENControlled Load2Energy AustraliaPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA040",
				"Usage" : "Peak 2",
				"Rate" : 0.2897,
				"Flag" : "1st ENERGYGENControlled Load2Energy AustraliaPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA040",
				"Usage" : "Off Peak",
				"Rate" : null,
				"Flag" : "1st ENERGYGENControlled Load2Energy AustraliaOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA040",
				"Usage" : "CL",
				"Rate" : 0.1369,
				"Flag" : "1st ENERGYGENControlled Load2Energy AustraliaCL",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA040",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGENControlled Load2Energy AustraliaControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA040",
				"Usage" : "Shoulder",
				"Rate" : null,
				"Flag" : "1st ENERGYGENControlled Load2Energy AustraliaShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA040",
				"Usage" : "Supply Charge",
				"Rate" : 1.892,
				"Flag" : "1st ENERGYGENControlled Load2Energy AustraliaSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA040",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYGENControlled Load2Energy AustraliaSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "EA050EA040",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGENControlled Load2Energy AustraliaSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA225",
				"Usage" : "Peak 1",
				"Rate" : 0.5213,
				"Flag" : "1st ENERGYPower Smart TOUEnergy AustraliaPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA225",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYPower Smart TOUEnergy AustraliaPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA225",
				"Usage" : "Off Peak",
				"Rate" : 0.1347,
				"Flag" : "1st ENERGYPower Smart TOUEnergy AustraliaOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Controlled LoadB",
				"Distributor" : "Energy Australia",
				"Meter" : "EA225",
				"Usage" : "CL",
				"Rate" : null,
				"Flag" : "1st ENERGYControlled LoadBEnergy AustraliaCL",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA225",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYPower Smart TOUEnergy AustraliaControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA225",
				"Usage" : "Shoulder",
				"Rate" : 0.2419,
				"Flag" : "1st ENERGYPower Smart TOUEnergy AustraliaShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA225",
				"Usage" : "Supply Charge",
				"Rate" : 1.82,
				"Flag" : "1st ENERGYPower Smart TOUEnergy AustraliaSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA225",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYPower Smart TOUEnergy AustraliaSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA225",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYPower Smart TOUEnergy AustraliaSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA302",
				"Usage" : "Peak 1",
				"Rate" : 0.323,
				"Flag" : "1st ENERGYLoad Smart TOUEnergy AustraliaPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA302",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYLoad Smart TOUEnergy AustraliaPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA302",
				"Usage" : "Off Peak",
				"Rate" : 0.1524,
				"Flag" : "1st ENERGYLoad Smart TOUEnergy AustraliaOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Controlled LoadB",
				"Distributor" : "Energy Australia",
				"Meter" : "EA302",
				"Usage" : "CL",
				"Rate" : null,
				"Flag" : "1st ENERGYControlled LoadBEnergy AustraliaCL",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA302",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYLoad Smart TOUEnergy AustraliaControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA302",
				"Usage" : "Shoulder",
				"Rate" : 0.2634,
				"Flag" : "1st ENERGYLoad Smart TOUEnergy AustraliaShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA302",
				"Usage" : "Supply Charge",
				"Rate" : 6.4826,
				"Flag" : "1st ENERGYLoad Smart TOUEnergy AustraliaSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA302",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "1st ENERGYLoad Smart TOUEnergy AustraliaSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "EA302",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "1st ENERGYLoad Smart TOUEnergy AustraliaSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AU",
				"Usage" : "Peak 1",
				"Rate" : 0.3593,
				"Flag" : "1st ENERGYGENCountry EnergyPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AU",
				"Usage" : "Peak 2",
				"Rate" : 0.3297,
				"Flag" : "1st ENERGYGENCountry EnergyPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AU",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "1st ENERGYGENCountry EnergyOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AU",
				"Usage" : "CL",
				"Rate" : 0,
				"Flag" : "1st ENERGYGENCountry EnergyCL",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AU",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "1st ENERGYGENCountry EnergyControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AU",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "1st ENERGYGENCountry EnergyShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AU",
				"Usage" : "Supply Charge",
				"Rate" : 1.7264,
				"Flag" : "1st ENERGYGENCountry EnergySupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AU",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYGENCountry EnergySupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AU",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "1st ENERGYGENCountry EnergySupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC1AU",
				"Usage" : "Peak 1",
				"Rate" : 0.3593,
				"Flag" : "1st ENERGYGENControlled Load1Country EnergyPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC1AU",
				"Usage" : "Peak 2",
				"Rate" : 0.3297,
				"Flag" : "1st ENERGYGENControlled Load1Country EnergyPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC1AU",
				"Usage" : "Off Peak",
				"Rate" : null,
				"Flag" : "1st ENERGYGENControlled Load1Country EnergyOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC1AU",
				"Usage" : "CL",
				"Rate" : 0.1353,
				"Flag" : "1st ENERGYGENControlled Load1Country EnergyCL",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC1AU",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGENControlled Load1Country EnergyControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC1AU",
				"Usage" : "Shoulder",
				"Rate" : null,
				"Flag" : "1st ENERGYGENControlled Load1Country EnergyShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC1AU",
				"Usage" : "Supply Charge",
				"Rate" : 1.8634,
				"Flag" : "1st ENERGYGENControlled Load1Country EnergySupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC1AU",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYGENControlled Load1Country EnergySupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC1AU",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGENControlled Load1Country EnergySupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC2AU",
				"Usage" : "Peak 1",
				"Rate" : 0.3593,
				"Flag" : "1st ENERGYGENControlled Load2Country EnergyPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC2AU",
				"Usage" : "Peak 2",
				"Rate" : 0.3297,
				"Flag" : "1st ENERGYGENControlled Load2Country EnergyPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC2AU",
				"Usage" : "Off Peak",
				"Rate" : null,
				"Flag" : "1st ENERGYGENControlled Load2Country EnergyOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC2AU",
				"Usage" : "CL",
				"Rate" : 0.1995,
				"Flag" : "1st ENERGYGENControlled Load2Country EnergyCL",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC2AU",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGENControlled Load2Country EnergyControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC2AU",
				"Usage" : "Shoulder",
				"Rate" : null,
				"Flag" : "1st ENERGYGENControlled Load2Country EnergyShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC2AU",
				"Usage" : "Supply Charge",
				"Rate" : 1.9125,
				"Flag" : "1st ENERGYGENControlled Load2Country EnergySupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC2AU",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYGENControlled Load2Country EnergySupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN1AUBLNC2AU",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGENControlled Load2Country EnergySupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : null,
				"Flag" : "1st ENERGYPower Smart TOUCountry EnergyPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYPower Smart TOUCountry EnergyPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : null,
				"Flag" : "1st ENERGYPower Smart TOUCountry EnergyOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Controlled LoadB",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : null,
				"Flag" : "1st ENERGYControlled LoadBCountry EnergyCL",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYPower Smart TOUCountry EnergyControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : null,
				"Flag" : "1st ENERGYPower Smart TOUCountry EnergyShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : null,
				"Flag" : "1st ENERGYPower Smart TOUCountry EnergySupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYPower Smart TOUCountry EnergySupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYPower Smart TOUCountry EnergySupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : null,
				"Flag" : "1st ENERGYLoad Smart TOUCountry EnergyPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYLoad Smart TOUCountry EnergyPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : null,
				"Flag" : "1st ENERGYLoad Smart TOUCountry EnergyOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Controlled LoadB",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : null,
				"Flag" : "1st ENERGYControlled LoadBCountry EnergyCL",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYLoad Smart TOUCountry EnergyControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : null,
				"Flag" : "1st ENERGYLoad Smart TOUCountry EnergyShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : null,
				"Flag" : "1st ENERGYLoad Smart TOUCountry EnergySupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYLoad Smart TOUCountry EnergySupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOU",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYLoad Smart TOUCountry EnergySupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT2AU",
				"Usage" : "Peak 1",
				"Rate" : 0.3605,
				"Flag" : "1st ENERGYGEN TOUCountry EnergyPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT2AU",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGEN TOUCountry EnergyPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT2AU",
				"Usage" : "Off Peak",
				"Rate" : 0.2019,
				"Flag" : "1st ENERGYGEN TOUCountry EnergyOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT2AU",
				"Usage" : "CL",
				"Rate" : null,
				"Flag" : "1st ENERGYGEN TOUCountry EnergyCL",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT2AU",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGEN TOUCountry EnergyControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT2AU",
				"Usage" : "Shoulder",
				"Rate" : 0.3605,
				"Flag" : "1st ENERGYGEN TOUCountry EnergyShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT2AU",
				"Usage" : "Supply Charge",
				"Rate" : 6.7869,
				"Flag" : "1st ENERGYGEN TOUCountry EnergySupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT2AU",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYGEN TOUCountry EnergySupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN TOU",
				"Distributor" : "Country Energy",
				"Meter" : "BLNT2AU",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGEN TOUCountry EnergySupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "N90",
				"Usage" : "Peak 1",
				"Rate" : 0.2701,
				"Flag" : "1st ENERGYGENIntegralPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "N90",
				"Usage" : "Peak 2",
				"Rate" : 0.2842,
				"Flag" : "1st ENERGYGENIntegralPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "N90",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "1st ENERGYGENIntegralOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "N90",
				"Usage" : "CL",
				"Rate" : 0,
				"Flag" : "1st ENERGYGENIntegralCL",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "N90",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "1st ENERGYGENIntegralControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "N90",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "1st ENERGYGENIntegralShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "N90",
				"Usage" : "Supply Charge",
				"Rate" : 1.054,
				"Flag" : "1st ENERGYGENIntegralSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "N90",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "1st ENERGYGENIntegralSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "N90",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "1st ENERGYGENIntegralSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N90N50",
				"Usage" : "Peak 1",
				"Rate" : 0.2701,
				"Flag" : "1st ENERGYGENControlled Load1IntegralPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N90N50",
				"Usage" : "Peak 2",
				"Rate" : 0.2842,
				"Flag" : "1st ENERGYGENControlled Load1IntegralPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N90N50",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "1st ENERGYGENControlled Load1IntegralOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N90N50",
				"Usage" : "CL",
				"Rate" : 0.0948,
				"Flag" : "1st ENERGYGENControlled Load1IntegralCL",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N90N50",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGENControlled Load1IntegralControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N90N50",
				"Usage" : "Shoulder",
				"Rate" : null,
				"Flag" : "1st ENERGYGENControlled Load1IntegralShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N90N50",
				"Usage" : "Supply Charge",
				"Rate" : 1.1056,
				"Flag" : "1st ENERGYGENControlled Load1IntegralSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N90N50",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYGENControlled Load1IntegralSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N90N50",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGENControlled Load1IntegralSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N90N54",
				"Usage" : "Peak 1",
				"Rate" : 0.2701,
				"Flag" : "1st ENERGYGENControlled Load2IntegralPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N90N54",
				"Usage" : "Peak 2",
				"Rate" : 0.2842,
				"Flag" : "1st ENERGYGENControlled Load2IntegralPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N90N54",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "1st ENERGYGENControlled Load2IntegralOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N90N54",
				"Usage" : "CL",
				"Rate" : 0.1463,
				"Flag" : "1st ENERGYGENControlled Load2IntegralCL",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N90N54",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGENControlled Load2IntegralControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N90N54",
				"Usage" : "Shoulder",
				"Rate" : null,
				"Flag" : "1st ENERGYGENControlled Load2IntegralShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N90N54",
				"Usage" : "Supply Charge",
				"Rate" : 1.1056,
				"Flag" : "1st ENERGYGENControlled Load2IntegralSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N90N54",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "1st ENERGYGENControlled Load2IntegralSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GENControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N90N54",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "1st ENERGYGENControlled Load2IntegralSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "N84",
				"Usage" : "Peak 1",
				"Rate" : 0.3651,
				"Flag" : "1st ENERGYPower Smart TOUIntegralPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "N84",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYPower Smart TOUIntegralPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "N84",
				"Usage" : "Off Peak",
				"Rate" : 0.1529,
				"Flag" : "1st ENERGYPower Smart TOUIntegralOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Controlled LoadB",
				"Distributor" : "Integral",
				"Meter" : "N84",
				"Usage" : "CL",
				"Rate" : null,
				"Flag" : "1st ENERGYControlled LoadBIntegralCL",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "N84",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYPower Smart TOUIntegralControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "N84",
				"Usage" : "Shoulder",
				"Rate" : 0.3083,
				"Flag" : "1st ENERGYPower Smart TOUIntegralShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "N84",
				"Usage" : "Supply Charge",
				"Rate" : 1.1336,
				"Flag" : "1st ENERGYPower Smart TOUIntegralSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "N84",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "1st ENERGYPower Smart TOUIntegralSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "N84",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "1st ENERGYPower Smart TOUIntegralSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0,
				"Flag" : "1st ENERGYLoad Smart TOUIntegralPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : 0,
				"Flag" : "1st ENERGYLoad Smart TOUIntegralPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "1st ENERGYLoad Smart TOUIntegralOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Controlled LoadB",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0,
				"Flag" : "1st ENERGYControlled LoadBIntegralCL",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "1st ENERGYLoad Smart TOUIntegralControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "1st ENERGYLoad Smart TOUIntegralShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 0,
				"Flag" : "1st ENERGYLoad Smart TOUIntegralSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "1st ENERGYLoad Smart TOUIntegralSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOU",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "1st ENERGYLoad Smart TOUIntegralSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.5133,
				"Flag" : "1st ENERGYDOM TOUControlled Load1Energy AustraliaPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOM TOUControlled Load1Energy AustraliaPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1194,
				"Flag" : "1st ENERGYDOM TOUControlled Load1Energy AustraliaOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0.1018,
				"Flag" : "1st ENERGYDOM TOUControlled Load1Energy AustraliaCL",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOM TOUControlled Load1Energy AustraliaControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : 0.1989,
				"Flag" : "1st ENERGYDOM TOUControlled Load1Energy AustraliaShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 0.9258,
				"Flag" : "1st ENERGYDOM TOUControlled Load1Energy AustraliaSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYDOM TOUControlled Load1Energy AustraliaSupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOM TOUControlled Load1Energy AustraliaSupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.5133,
				"Flag" : "1st ENERGYDOM TOUControlled Load2Energy AustraliaPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOM TOUControlled Load2Energy AustraliaPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1194,
				"Flag" : "1st ENERGYDOM TOUControlled Load2Energy AustraliaOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0.1368,
				"Flag" : "1st ENERGYDOM TOUControlled Load2Energy AustraliaCL",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOM TOUControlled Load2Energy AustraliaControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : 0.1989,
				"Flag" : "1st ENERGYDOM TOUControlled Load2Energy AustraliaShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.0247,
				"Flag" : "1st ENERGYDOM TOUControlled Load2Energy AustraliaSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYDOM TOUControlled Load2Energy AustraliaSupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOM TOUControlled Load2Energy AustraliaSupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.4895,
				"Flag" : "1st ENERGYPower Smart TOUControlled Load1Energy AustraliaPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYPower Smart TOUControlled Load1Energy AustraliaPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1265,
				"Flag" : "1st ENERGYPower Smart TOUControlled Load1Energy AustraliaOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0.0949,
				"Flag" : "1st ENERGYPower Smart TOUControlled Load1Energy AustraliaCL",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYPower Smart TOUControlled Load1Energy AustraliaControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : 0.2271,
				"Flag" : "1st ENERGYPower Smart TOUControlled Load1Energy AustraliaShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.75,
				"Flag" : "1st ENERGYPower Smart TOUControlled Load1Energy AustraliaSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYPower Smart TOUControlled Load1Energy AustraliaSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYPower Smart TOUControlled Load1Energy AustraliaSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.4895,
				"Flag" : "1st ENERGYPower Smart TOUControlled Load2Energy AustraliaPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYPower Smart TOUControlled Load2Energy AustraliaPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1265,
				"Flag" : "1st ENERGYPower Smart TOUControlled Load2Energy AustraliaOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0.1285,
				"Flag" : "1st ENERGYPower Smart TOUControlled Load2Energy AustraliaCL",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYPower Smart TOUControlled Load2Energy AustraliaControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : 0.2271,
				"Flag" : "1st ENERGYPower Smart TOUControlled Load2Energy AustraliaShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.75,
				"Flag" : "1st ENERGYPower Smart TOUControlled Load2Energy AustraliaSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYPower Smart TOUControlled Load2Energy AustraliaSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Power Smart TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYPower Smart TOUControlled Load2Energy AustraliaSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.3033,
				"Flag" : "1st ENERGYLoad Smart TOUControlled Load1Energy AustraliaPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYLoad Smart TOUControlled Load1Energy AustraliaPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1431,
				"Flag" : "1st ENERGYLoad Smart TOUControlled Load1Energy AustraliaOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0.0949,
				"Flag" : "1st ENERGYLoad Smart TOUControlled Load1Energy AustraliaCL",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYLoad Smart TOUControlled Load1Energy AustraliaControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : 0.2473,
				"Flag" : "1st ENERGYLoad Smart TOUControlled Load1Energy AustraliaShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 6.2333,
				"Flag" : "1st ENERGYLoad Smart TOUControlled Load1Energy AustraliaSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYLoad Smart TOUControlled Load1Energy AustraliaSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYLoad Smart TOUControlled Load1Energy AustraliaSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.3033,
				"Flag" : "1st ENERGYLoad Smart TOUControlled Load2Energy AustraliaPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYLoad Smart TOUControlled Load2Energy AustraliaPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1431,
				"Flag" : "1st ENERGYLoad Smart TOUControlled Load2Energy AustraliaOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0.1285,
				"Flag" : "1st ENERGYLoad Smart TOUControlled Load2Energy AustraliaCL",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYLoad Smart TOUControlled Load2Energy AustraliaControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : 0.2473,
				"Flag" : "1st ENERGYLoad Smart TOUControlled Load2Energy AustraliaShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 6.3322,
				"Flag" : "1st ENERGYLoad Smart TOUControlled Load2Energy AustraliaSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYLoad Smart TOUControlled Load2Energy AustraliaSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Load Smart TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYLoad Smart TOUControlled Load2Energy AustraliaSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Type 6 Domestic TOUControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : null,
				"Flag" : "1st ENERGYType 6 Domestic TOUControlled Load1IntegralPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Type 6 Domestic TOUControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYType 6 Domestic TOUControlled Load1IntegralPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Type 6 Domestic TOUControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : null,
				"Flag" : "1st ENERGYType 6 Domestic TOUControlled Load1IntegralOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Type 6 Domestic TOUControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : null,
				"Flag" : "1st ENERGYType 6 Domestic TOUControlled Load1IntegralCL",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Type 6 Domestic TOUControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYType 6 Domestic TOUControlled Load1IntegralControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Type 6 Domestic TOUControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : null,
				"Flag" : "1st ENERGYType 6 Domestic TOUControlled Load1IntegralShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Type 6 Domestic TOUControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : null,
				"Flag" : "1st ENERGYType 6 Domestic TOUControlled Load1IntegralSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Type 6 Domestic TOUControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYType 6 Domestic TOUControlled Load1IntegralSupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Type 6 Domestic TOUControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYType 6 Domestic TOUControlled Load1IntegralSupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Type 6 Domestic TOUControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : null,
				"Flag" : "1st ENERGYType 6 Domestic TOUControlled Load2IntegralPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Type 6 Domestic TOUControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYType 6 Domestic TOUControlled Load2IntegralPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Type 6 Domestic TOUControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : null,
				"Flag" : "1st ENERGYType 6 Domestic TOUControlled Load2IntegralOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Type 6 Domestic TOUControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : null,
				"Flag" : "1st ENERGYType 6 Domestic TOUControlled Load2IntegralCL",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Type 6 Domestic TOUControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYType 6 Domestic TOUControlled Load2IntegralControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Type 6 Domestic TOUControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : null,
				"Flag" : "1st ENERGYType 6 Domestic TOUControlled Load2IntegralShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Type 6 Domestic TOUControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : null,
				"Flag" : "1st ENERGYType 6 Domestic TOUControlled Load2IntegralSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Type 6 Domestic TOUControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYType 6 Domestic TOUControlled Load2IntegralSupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "Type 6 Domestic TOUControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYType 6 Domestic TOUControlled Load2IntegralSupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "General Supply TOUControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N84N50",
				"Usage" : "Peak 1",
				"Rate" : 0.3651,
				"Flag" : "1st ENERGYGeneral Supply TOUControlled Load1IntegralPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "General Supply TOUControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N84N50",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGeneral Supply TOUControlled Load1IntegralPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "General Supply TOUControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N84N50",
				"Usage" : "Off Peak",
				"Rate" : 0.1529,
				"Flag" : "1st ENERGYGeneral Supply TOUControlled Load1IntegralOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "General Supply TOUControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N84N50",
				"Usage" : "CL",
				"Rate" : 0.0948,
				"Flag" : "1st ENERGYGeneral Supply TOUControlled Load1IntegralCL",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "General Supply TOUControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N84N50",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGeneral Supply TOUControlled Load1IntegralControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "General Supply TOUControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N84N50",
				"Usage" : "Shoulder",
				"Rate" : 0.3083,
				"Flag" : "1st ENERGYGeneral Supply TOUControlled Load1IntegralShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "General Supply TOUControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N84N50",
				"Usage" : "Supply Charge",
				"Rate" : 1.1852,
				"Flag" : "1st ENERGYGeneral Supply TOUControlled Load1IntegralSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "General Supply TOUControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N84N50",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYGeneral Supply TOUControlled Load1IntegralSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "General Supply TOUControlled Load1",
				"Distributor" : "Integral",
				"Meter" : "N84N50",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGeneral Supply TOUControlled Load1IntegralSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "General Supply TOUControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N84N54",
				"Usage" : "Peak 1",
				"Rate" : 0.3651,
				"Flag" : "1st ENERGYGeneral Supply TOUControlled Load2IntegralPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "General Supply TOUControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N84N54",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGeneral Supply TOUControlled Load2IntegralPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "General Supply TOUControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N84N54",
				"Usage" : "Off Peak",
				"Rate" : 0.1529,
				"Flag" : "1st ENERGYGeneral Supply TOUControlled Load2IntegralOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "General Supply TOUControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N84N54",
				"Usage" : "CL",
				"Rate" : 0.1463,
				"Flag" : "1st ENERGYGeneral Supply TOUControlled Load2IntegralCL",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "General Supply TOUControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N84N54",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGeneral Supply TOUControlled Load2IntegralControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "General Supply TOUControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N84N54",
				"Usage" : "Shoulder",
				"Rate" : 0.3083,
				"Flag" : "1st ENERGYGeneral Supply TOUControlled Load2IntegralShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "General Supply TOUControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N84N54",
				"Usage" : "Supply Charge",
				"Rate" : 1.1852,
				"Flag" : "1st ENERGYGeneral Supply TOUControlled Load2IntegralSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "General Supply TOUControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N84N54",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYGeneral Supply TOUControlled Load2IntegralSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "General Supply TOUControlled Load2",
				"Distributor" : "Integral",
				"Meter" : "N84N54",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGeneral Supply TOUControlled Load2IntegralSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.3172,
				"Flag" : "1st ENERGYDOM TOUControlled Load1Country EnergyPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOM TOUControlled Load1Country EnergyPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1696,
				"Flag" : "1st ENERGYDOM TOUControlled Load1Country EnergyOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0.1164,
				"Flag" : "1st ENERGYDOM TOUControlled Load1Country EnergyCL",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOM TOUControlled Load1Country EnergyControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : 0.3172,
				"Flag" : "1st ENERGYDOM TOUControlled Load1Country EnergyShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.485,
				"Flag" : "1st ENERGYDOM TOUControlled Load1Country EnergySupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYDOM TOUControlled Load1Country EnergySupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOM TOUControlled Load1Country EnergySupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.3172,
				"Flag" : "1st ENERGYDOM TOUControlled Load2Country EnergyPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOM TOUControlled Load2Country EnergyPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1696,
				"Flag" : "1st ENERGYDOM TOUControlled Load2Country EnergyOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0.1454,
				"Flag" : "1st ENERGYDOM TOUControlled Load2Country EnergyCL",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOM TOUControlled Load2Country EnergyControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : 0.3172,
				"Flag" : "1st ENERGYDOM TOUControlled Load2Country EnergyShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.532,
				"Flag" : "1st ENERGYDOM TOUControlled Load2Country EnergySupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYDOM TOUControlled Load2Country EnergySupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDOM TOUControlled Load2Country EnergySupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.3605,
				"Flag" : "1st ENERGYGEN TOUControlled Load2Country EnergyPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGEN TOUControlled Load2Country EnergyPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.2019,
				"Flag" : "1st ENERGYGEN TOUControlled Load2Country EnergyOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0.1995,
				"Flag" : "1st ENERGYGEN TOUControlled Load2Country EnergyCL",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGEN TOUControlled Load2Country EnergyControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : 0.3605,
				"Flag" : "1st ENERGYGEN TOUControlled Load2Country EnergyShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 6.973,
				"Flag" : "1st ENERGYGEN TOUControlled Load2Country EnergySupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYGEN TOUControlled Load2Country EnergySupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGEN TOUControlled Load2Country EnergySupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.3605,
				"Flag" : "1st ENERGYGEN TOUControlled Load2Country EnergyPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGEN TOUControlled Load2Country EnergyPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.2019,
				"Flag" : "1st ENERGYGEN TOUControlled Load2Country EnergyOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0.1995,
				"Flag" : "1st ENERGYGEN TOUControlled Load2Country EnergyCL",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGEN TOUControlled Load2Country EnergyControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : 0.3605,
				"Flag" : "1st ENERGYGEN TOUControlled Load2Country EnergyShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 6.973,
				"Flag" : "1st ENERGYGEN TOUControlled Load2Country EnergySupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : null,
				"Flag" : "1st ENERGYGEN TOUControlled Load2Country EnergySupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "1st ENERGY",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGEN TOUControlled Load2Country EnergySupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.282,
				"Flag" : "ALINTADOM TOUControlled Load1Country EnergyPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "ALINTADOM TOUControlled Load1Country EnergyPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1524,
				"Flag" : "ALINTADOM TOUControlled Load1Country EnergyOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0.1136,
				"Flag" : "ALINTADOM TOUControlled Load1Country EnergyCL",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "ALINTADOM TOUControlled Load1Country EnergyControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : 0.282,
				"Flag" : "ALINTADOM TOUControlled Load1Country EnergyShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.37,
				"Flag" : "ALINTADOM TOUControlled Load1Country EnergySupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : 0.1345,
				"Flag" : "ALINTADOM TOUControlled Load1Country EnergySupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : 0.1395,
				"Flag" : "ALINTADOM TOUControlled Load1Country EnergySupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.282,
				"Flag" : "ALINTADOM TOUControlled Load2Country EnergyPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "ALINTADOM TOUControlled Load2Country EnergyPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1524,
				"Flag" : "ALINTADOM TOUControlled Load2Country EnergyOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0,
				"Flag" : "ALINTADOM TOUControlled Load2Country EnergyCL",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : 0.1634,
				"Flag" : "ALINTADOM TOUControlled Load2Country EnergyControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : 0.282,
				"Flag" : "ALINTADOM TOUControlled Load2Country EnergyShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 1.37,
				"Flag" : "ALINTADOM TOUControlled Load2Country EnergySupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : 0.1345,
				"Flag" : "ALINTADOM TOUControlled Load2Country EnergySupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : 0.1395,
				"Flag" : "ALINTADOM TOUControlled Load2Country EnergySupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0,
				"Flag" : "ALINTAGEN TOUControlled Load2Country EnergyPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : 0,
				"Flag" : "ALINTAGEN TOUControlled Load2Country EnergyPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "ALINTAGEN TOUControlled Load2Country EnergyOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0,
				"Flag" : "ALINTAGEN TOUControlled Load2Country EnergyCL",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "ALINTAGEN TOUControlled Load2Country EnergyControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "ALINTAGEN TOUControlled Load2Country EnergyShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 0,
				"Flag" : "ALINTAGEN TOUControlled Load2Country EnergySupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "ALINTAGEN TOUControlled Load2Country EnergySupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "ALINTAGEN TOUControlled Load2Country EnergySupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0,
				"Flag" : "ALINTAGEN TOUControlled Load2Country EnergyPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : 0,
				"Flag" : "ALINTAGEN TOUControlled Load2Country EnergyPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "ALINTAGEN TOUControlled Load2Country EnergyOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0,
				"Flag" : "ALINTAGEN TOUControlled Load2Country EnergyCL",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "ALINTAGEN TOUControlled Load2Country EnergyControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "ALINTAGEN TOUControlled Load2Country EnergyShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 0,
				"Flag" : "ALINTAGEN TOUControlled Load2Country EnergySupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "ALINTAGEN TOUControlled Load2Country EnergySupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "GEN TOUControlled Load2",
				"Distributor" : "Country Energy",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "ALINTAGEN TOUControlled Load2Country EnergySupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.4669,
				"Flag" : "ALINTADOM TOUControlled Load1Energy AustraliaPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : 0,
				"Flag" : "ALINTADOM TOUControlled Load1Energy AustraliaPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1102,
				"Flag" : "ALINTADOM TOUControlled Load1Energy AustraliaOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0.0915,
				"Flag" : "ALINTADOM TOUControlled Load1Energy AustraliaCL",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "ALINTADOM TOUControlled Load1Energy AustraliaControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : 0.1955,
				"Flag" : "ALINTADOM TOUControlled Load1Energy AustraliaShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 0.8639,
				"Flag" : "ALINTADOM TOUControlled Load1Energy AustraliaSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : 0.046,
				"Flag" : "ALINTADOM TOUControlled Load1Energy AustraliaSupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "ALINTADOM TOUControlled Load1Energy AustraliaSupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0.4669,
				"Flag" : "ALINTADOM TOUControlled Load2Energy AustraliaPeak 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : 0,
				"Flag" : "ALINTADOM TOUControlled Load2Energy AustraliaPeak 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0.1102,
				"Flag" : "ALINTADOM TOUControlled Load2Energy AustraliaOff Peak",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0.0915,
				"Flag" : "ALINTADOM TOUControlled Load2Energy AustraliaCL",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : 0.1271,
				"Flag" : "ALINTADOM TOUControlled Load2Energy AustraliaControlled Load 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : 0.1955,
				"Flag" : "ALINTADOM TOUControlled Load2Energy AustraliaShoulder",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 0.8639,
				"Flag" : "ALINTADOM TOUControlled Load2Energy AustraliaSupply Charge",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "ALINTADOM TOUControlled Load2Energy AustraliaSupply Charge 1",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "DOM TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "ALINTADOM TOUControlled Load2Energy AustraliaSupply Charge 2",
				"ResBus" : "R"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0,
				"Flag" : "ALINTAPower Smart TOUControlled Load1Energy AustraliaPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : 0,
				"Flag" : "ALINTAPower Smart TOUControlled Load1Energy AustraliaPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "ALINTAPower Smart TOUControlled Load1Energy AustraliaOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0,
				"Flag" : "ALINTAPower Smart TOUControlled Load1Energy AustraliaCL",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "ALINTAPower Smart TOUControlled Load1Energy AustraliaControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "ALINTAPower Smart TOUControlled Load1Energy AustraliaShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 0,
				"Flag" : "ALINTAPower Smart TOUControlled Load1Energy AustraliaSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "ALINTAPower Smart TOUControlled Load1Energy AustraliaSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "ALINTAPower Smart TOUControlled Load1Energy AustraliaSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0,
				"Flag" : "ALINTAPower Smart TOUControlled Load1Energy AustraliaPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : 0,
				"Flag" : "ALINTAPower Smart TOUControlled Load1Energy AustraliaPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "ALINTAPower Smart TOUControlled Load1Energy AustraliaOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0,
				"Flag" : "ALINTAPower Smart TOUControlled Load1Energy AustraliaCL",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "ALINTAPower Smart TOUControlled Load1Energy AustraliaControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "ALINTAPower Smart TOUControlled Load1Energy AustraliaShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 0,
				"Flag" : "ALINTAPower Smart TOUControlled Load1Energy AustraliaSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "ALINTAPower Smart TOUControlled Load1Energy AustraliaSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Power Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "ALINTAPower Smart TOUControlled Load1Energy AustraliaSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUControlled Load1Energy AustraliaPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUControlled Load1Energy AustraliaPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUControlled Load1Energy AustraliaOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUControlled Load1Energy AustraliaCL",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUControlled Load1Energy AustraliaControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUControlled Load1Energy AustraliaShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUControlled Load1Energy AustraliaSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUControlled Load1Energy AustraliaSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOUControlled Load1",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUControlled Load1Energy AustraliaSupply Charge 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Peak 1",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUControlled Load2Energy AustraliaPeak 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Peak 2",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUControlled Load2Energy AustraliaPeak 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Off Peak",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUControlled Load2Energy AustraliaOff Peak",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "CL",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUControlled Load2Energy AustraliaCL",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Controlled Load 2",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUControlled Load2Energy AustraliaControlled Load 2",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Shoulder",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUControlled Load2Energy AustraliaShoulder",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUControlled Load2Energy AustraliaSupply Charge",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 1",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUControlled Load2Energy AustraliaSupply Charge 1",
				"ResBus" : "B"
			},
			{
				"Company" : "ALINTA",
				"Type" : "Load Smart TOUControlled Load2",
				"Distributor" : "Energy Australia",
				"Meter" : "",
				"Usage" : "Supply Charge 2",
				"Rate" : 0,
				"Flag" : "ALINTALoad Smart TOUControlled Load2Energy AustraliaSupply Charge 2",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "Controlled LoadR",
				"Distributor" : "Citipower",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.1689,
				"Flag" : "1st ENERGYControlled LoadRCitipowerCL",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GD",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.2516,
				"Flag" : "1st ENERGYGDCitipowerPeak 1",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GD",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGDCitipowerPeak 2",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GD",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.22,
				"Flag" : "1st ENERGYGDCitipowerSupply Charge",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GD",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Peak 3",
				"Rate" : null,
				"Flag" : "1st ENERGYGDCitipowerPeak 3",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GHGL",
				"Distributor" : "Citipower",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.3232,
				"Flag" : "1st ENERGYGHGLCitipowerPeak 1",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GHGL",
				"Distributor" : "Citipower",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.179,
				"Flag" : "1st ENERGYGHGLCitipowerOff Peak",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GHGL",
				"Distributor" : "Citipower",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.22,
				"Flag" : "1st ENERGYGHGLCitipowerSupply Charge",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "Controlled LoadR",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.176,
				"Flag" : "1st ENERGYControlled LoadRJemena (AGL North)CL",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GD",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.2854,
				"Flag" : "1st ENERGYGDJemena (AGL North)Peak 1",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GD",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGDJemena (AGL North)Peak 2",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GD",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.21,
				"Flag" : "1st ENERGYGDJemena (AGL North)Supply Charge",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GD",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Peak 3",
				"Rate" : null,
				"Flag" : "1st ENERGYGDJemena (AGL North)Peak 3",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GHGL",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.3923,
				"Flag" : "1st ENERGYGHGLJemena (AGL North)Peak 1",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GHGL",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1854,
				"Flag" : "1st ENERGYGHGLJemena (AGL North)Off Peak",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GHGL",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.21,
				"Flag" : "1st ENERGYGHGLJemena (AGL North)Supply Charge",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "Controlled LoadR",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.1624,
				"Flag" : "1st ENERGYControlled LoadRJemena (United Energy)CL",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GD",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.2637,
				"Flag" : "1st ENERGYGDJemena (United Energy)Peak 1",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GD",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGDJemena (United Energy)Peak 2",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GD",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.17,
				"Flag" : "1st ENERGYGDJemena (United Energy)Supply Charge",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GD",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Peak 3",
				"Rate" : null,
				"Flag" : "1st ENERGYGDJemena (United Energy)Peak 3",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GHGL",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.3552,
				"Flag" : "1st ENERGYGHGLJemena (United Energy)Peak 1",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GHGL",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1557,
				"Flag" : "1st ENERGYGHGLJemena (United Energy)Off Peak",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GHGL",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.26,
				"Flag" : "1st ENERGYGHGLJemena (United Energy)Supply Charge",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "Controlled LoadR",
				"Distributor" : "Powercor",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.1731,
				"Flag" : "1st ENERGYControlled LoadRPowercorCL",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GD",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.2899,
				"Flag" : "1st ENERGYGDPowercorPeak 1",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GD",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGDPowercorPeak 2",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GD",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.31,
				"Flag" : "1st ENERGYGDPowercorSupply Charge",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GD",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Peak 3",
				"Rate" : null,
				"Flag" : "1st ENERGYGDPowercorPeak 3",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GHGL",
				"Distributor" : "Powercor",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.3491,
				"Flag" : "1st ENERGYGHGLPowercorPeak 1",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GHGL",
				"Distributor" : "Powercor",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1846,
				"Flag" : "1st ENERGYGHGLPowercorOff Peak",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GHGL",
				"Distributor" : "Powercor",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.31,
				"Flag" : "1st ENERGYGHGLPowercorSupply Charge",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "Controlled LoadR",
				"Distributor" : "SPAusnet",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.1825,
				"Flag" : "1st ENERGYControlled LoadRSPAusnetCL",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GD",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.2997,
				"Flag" : "1st ENERGYGDSPAusnetPeak 1",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GD",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYGDSPAusnetPeak 2",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GD",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.39,
				"Flag" : "1st ENERGYGDSPAusnetSupply Charge",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GD",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Peak 3",
				"Rate" : null,
				"Flag" : "1st ENERGYGDSPAusnetPeak 3",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GHGL",
				"Distributor" : "SPAusnet",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.3792,
				"Flag" : "1st ENERGYGHGLSPAusnetPeak 1",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GHGL",
				"Distributor" : "SPAusnet",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.2069,
				"Flag" : "1st ENERGYGHGLSPAusnetOff Peak",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "GHGL",
				"Distributor" : "SPAusnet",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.45,
				"Flag" : "1st ENERGYGHGLSPAusnetSupply Charge",
				"ResBus" : "R"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "Controlled LoadB",
				"Distributor" : "Citipower",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.172,
				"Flag" : "1st ENERGYControlled LoadBCitipowerCL",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "D",
				"Distributor" : "Citipower",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.3345,
				"Flag" : "1st ENERGYDCitipowerPeak 1",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "D",
				"Distributor" : "Citipower",
				"Meter" : "Two Rate",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDCitipowerPeak 2",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "D",
				"Distributor" : "Citipower",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1871,
				"Flag" : "1st ENERGYDCitipowerOff Peak",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "D",
				"Distributor" : "Citipower",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.85,
				"Flag" : "1st ENERGYDCitipowerSupply Charge",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.2714,
				"Flag" : "1st ENERGYECitipowerPeak 1",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYECitipowerPeak 2",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.67,
				"Flag" : "1st ENERGYECitipowerSupply Charge",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E1",
				"Distributor" : "Citipower",
				"Meter" : "Three Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.2885,
				"Flag" : "1st ENERGYE1CitipowerPeak 1",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E1",
				"Distributor" : "Citipower",
				"Meter" : "Three Rate",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYE1CitipowerPeak 2",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E1",
				"Distributor" : "Citipower",
				"Meter" : "Three Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1883,
				"Flag" : "1st ENERGYE1CitipowerOff Peak",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E1",
				"Distributor" : "Citipower",
				"Meter" : "Three Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.8,
				"Flag" : "1st ENERGYE1CitipowerSupply Charge",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "Controlled LoadB",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.176,
				"Flag" : "1st ENERGYControlled LoadBJemena (AGL North)CL",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "D",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.336,
				"Flag" : "1st ENERGYDJemena (AGL North)Peak 1",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "D",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Two Rate",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDJemena (AGL North)Peak 2",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "D",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.178,
				"Flag" : "1st ENERGYDJemena (AGL North)Off Peak",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "D",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.62,
				"Flag" : "1st ENERGYDJemena (AGL North)Supply Charge",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.3119,
				"Flag" : "1st ENERGYEJemena (AGL North)Peak 1",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYEJemena (AGL North)Peak 2",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.54,
				"Flag" : "1st ENERGYEJemena (AGL North)Supply Charge",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E1",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Three Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.336,
				"Flag" : "1st ENERGYE1Jemena (AGL North)Peak 1",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E1",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Three Rate",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYE1Jemena (AGL North)Peak 2",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E1",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Three Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1768,
				"Flag" : "1st ENERGYE1Jemena (AGL North)Off Peak",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E1",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Three Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.64,
				"Flag" : "1st ENERGYE1Jemena (AGL North)Supply Charge",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "Controlled LoadB",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.1624,
				"Flag" : "1st ENERGYControlled LoadBJemena (United Energy)CL",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "D",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.3227,
				"Flag" : "1st ENERGYDJemena (United Energy)Peak 1",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "D",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Two Rate",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDJemena (United Energy)Peak 2",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "D",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1716,
				"Flag" : "1st ENERGYDJemena (United Energy)Off Peak",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "D",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.54,
				"Flag" : "1st ENERGYDJemena (United Energy)Supply Charge",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.3094,
				"Flag" : "1st ENERGYEJemena (United Energy)Peak 1",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYEJemena (United Energy)Peak 2",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.44,
				"Flag" : "1st ENERGYEJemena (United Energy)Supply Charge",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E1",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Three Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.3337,
				"Flag" : "1st ENERGYE1Jemena (United Energy)Peak 1",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E1",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Three Rate",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYE1Jemena (United Energy)Peak 2",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E1",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Three Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1684,
				"Flag" : "1st ENERGYE1Jemena (United Energy)Off Peak",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E1",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Three Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.57,
				"Flag" : "1st ENERGYE1Jemena (United Energy)Supply Charge",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "Controlled LoadB",
				"Distributor" : "Powercor",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.1794,
				"Flag" : "1st ENERGYControlled LoadBPowercorCL",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "D",
				"Distributor" : "Powercor",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.3616,
				"Flag" : "1st ENERGYDPowercorPeak 1",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "D",
				"Distributor" : "Powercor",
				"Meter" : "Two Rate",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDPowercorPeak 2",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "D",
				"Distributor" : "Powercor",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1783,
				"Flag" : "1st ENERGYDPowercorOff Peak",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "D",
				"Distributor" : "Powercor",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.69,
				"Flag" : "1st ENERGYDPowercorSupply Charge",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.3093,
				"Flag" : "1st ENERGYEPowercorPeak 1",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYEPowercorPeak 2",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.59,
				"Flag" : "1st ENERGYEPowercorSupply Charge",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E1",
				"Distributor" : "Powercor",
				"Meter" : "Three Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.352,
				"Flag" : "1st ENERGYE1PowercorPeak 1",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E1",
				"Distributor" : "Powercor",
				"Meter" : "Three Rate",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYE1PowercorPeak 2",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E1",
				"Distributor" : "Powercor",
				"Meter" : "Three Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.177,
				"Flag" : "1st ENERGYE1PowercorOff Peak",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E1",
				"Distributor" : "Powercor",
				"Meter" : "Three Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.67,
				"Flag" : "1st ENERGYE1PowercorSupply Charge",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "Controlled LoadB",
				"Distributor" : "SPAusnet",
				"Meter" : "Controlled Load",
				"Usage" : "CL",
				"Rate" : 0.1813,
				"Flag" : "1st ENERGYControlled LoadBSPAusnetCL",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "D",
				"Distributor" : "SPAusnet",
				"Meter" : "Two Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.4065,
				"Flag" : "1st ENERGYDSPAusnetPeak 1",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "D",
				"Distributor" : "SPAusnet",
				"Meter" : "Two Rate",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYDSPAusnetPeak 2",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "D",
				"Distributor" : "SPAusnet",
				"Meter" : "Two Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.2125,
				"Flag" : "1st ENERGYDSPAusnetOff Peak",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "D",
				"Distributor" : "SPAusnet",
				"Meter" : "Two Rate",
				"Usage" : "Supply Charge",
				"Rate" : 1.54,
				"Flag" : "1st ENERGYDSPAusnetSupply Charge",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.3443,
				"Flag" : "1st ENERGYESPAusnetPeak 1",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.3871,
				"Flag" : "1st ENERGYESPAusnetPeak 2",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.54,
				"Flag" : "1st ENERGYESPAusnetSupply Charge",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E1",
				"Distributor" : "SPAusnet",
				"Meter" : "Three Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.2862,
				"Flag" : "1st ENERGYE1SPAusnetPeak 1",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E1",
				"Distributor" : "SPAusnet",
				"Meter" : "Three Rate",
				"Usage" : "Peak 2",
				"Rate" : null,
				"Flag" : "1st ENERGYE1SPAusnetPeak 2",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E1",
				"Distributor" : "SPAusnet",
				"Meter" : "Three Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.1949,
				"Flag" : "1st ENERGYE1SPAusnetOff Peak",
				"ResBus" : "B"
			}, {
				"Company" : "1st ENERGY",
				"Type" : "E1",
				"Distributor" : "SPAusnet",
				"Meter" : "Three Rate",
				"Usage" : "Supply Charge",
				"Rate" : 2.62,
				"Flag" : "1st ENERGYE1SPAusnetSupply Charge",
				"ResBus" : "B"
			}, {
				"Company" : "ALINTA",
				"Type" : "110",
				"Distributor" : "ETSA",
				"Meter" : "Single Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.3584,
				"Flag" : "",
				"ResBus" : "R"
			}, {
				"Company" : "ALINTA",
				"Type" : "110",
				"Distributor" : "ETSA",
				"Meter" : "Single Rate",
				"Usage" : "Peak 2",
				"Rate" : 0.3730,
				"Flag" : "",
				"ResBus" : "R"
			}, {
				"Company" : "ALINTA",
				"Type" : "110",
				"Distributor" : "ETSA",
				"Meter" : "Single Rate",
				"Usage" : "Peak 3",
				"Rate" : 0.4103,
				"Flag" : "",
				"ResBus" : "R"
			}, {
				"Company" : "ALINTA",
				"Type" : "110",
				"Distributor" : "ETSA",
				"Meter" : "Single Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.2023,
				"Flag" : "",
				"ResBus" : "R"
			} , {
				"Company" : "ALINTA",
				"Type" : "110",
				"Distributor" : "ETSA",
				"Meter" : "Single Rate",
				"Usage" : "Supply Charge",
				"Rate" : 0.8924,
				"Flag" : "",
				"ResBus" : "R"
			}  , {
				"Company" : "ALINTA",
				"Type" : "126Q",
				"Distributor" : "ETSA",
				"Meter" : "Single Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.4250,
				"Flag" : "",
				"ResBus" : "B"
			} , {
				"Company" : "ALINTA",
				"Type" : "126Q",
				"Distributor" : "ETSA",
				"Meter" : "Single Rate",
				"Usage" : "Peak 2",
				"Rate" : 0.4304,
				"Flag" : "",
				"ResBus" : "B"
			} , {
				"Company" : "ALINTA",
				"Type" : "126Q",
				"Distributor" : "ETSA",
				"Meter" : "Single Rate",
				"Usage" : "Supply Charge",
				"Rate" : 0.9417,
				"Flag" : "",
				"ResBus" : "B"
			} , {
				"Company" : "ALINTA",
				"Type" : "128Q",
				"Distributor" : "ETSA",
				"Meter" : "Single Rate",
				"Usage" : "Peak 1",
				"Rate" : 0.4873,
				"Flag" : "",
				"ResBus" : "B"
			} , {
				"Company" : "ALINTA",
				"Type" : "128Q",
				"Distributor" : "ETSA",
				"Meter" : "Single Rate",
				"Usage" : "Supply Charge",
				"Rate" : 0.9912,
				"Flag" : "",
				"ResBus" : "B"
			} , {
				"Company" : "ALINTA",
				"Type" : "128Q",
				"Distributor" : "ETSA",
				"Meter" : "Single Rate",
				"Usage" : "Off Peak",
				"Rate" : 0.2865,
				"Flag" : "",
				"ResBus" : "B"
			}  , {
				"Company" : "ALINTA",
				"Type" : "Controlled LoadR",
				"Distributor" : "ETSA",
				"Meter" : "Double Rate",
				"Usage" : "CL",
				"Rate" : 0.2023,
				"Flag" : "",
				"ResBus" : "R"
			} , {
				"Company" : "ALINTA",
				"Type" : "Controlled LoadB",
				"Distributor" : "ETSA",
				"Meter" : "Double Rate",
				"Usage" : "CL",
				"Rate" : 0.2865,
				"Flag" : "",
				"ResBus" : "B"
			},
			
			
			 {
				"Company" : "Next Business Energy",
				"Type" : "E",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.3450,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.4000,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.70,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E1",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.2500,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E1",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.2150,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E1",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Off Peak",
				"Rate" : 0.1750,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E1",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 3.50,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "D",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.4200,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "D",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.3900,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "D",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Off Peak",
				"Rate" : 0.2000,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "D",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.70,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "Dedicated Circuit",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.4400,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "Dedicated Circuit",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.4120,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "Dedicated Circuit",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Off Peak",
				"Rate" : 0.2100,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "Dedicated Circuit",
				"Distributor" : "SPAusnet",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.70,
				"Flag" : "",
				"ResBus" : "B"
			},
			
			
			 {
				"Company" : "Next Business Energy",
				"Type" : "E",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.2950,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.2650,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "CL",
				"Rate" : 0.1600,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 0.95,
				"Flag" : "",
				"ResBus" : "B"
			},
			{
				"Company" : "Next Business Energy",
				"Type" : "E1",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.2900,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E1",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.2650,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E1",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Off Peak",
				"Rate" : 0.1600,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E1",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.10,
				"Flag" : "",
				"ResBus" : "B"
			},{
				"Company" : "Next Business Energy",
				"Type" : "D",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.2900,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "D",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.2650,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "D",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Off Peak",
				"Rate" : 0.1600,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "D",
				"Distributor" : "Jemena (United Energy)",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.10,
				"Flag" : "",
				"ResBus" : "B"
			},
			
			
			 {
				"Company" : "Next Business Energy",
				"Type" : "E",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.3150,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.2700,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "CL",
				"Rate" : 0.1700,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.55,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "GD",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.3150,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "GD",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.2700,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "GD",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "CL",
				"Rate" : 0.1700,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "GD",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.55,
				"Flag" : "",
				"ResBus" : "B"
			},
			{
				"Company" : "Next Business Energy",
				"Type" : "E1",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.3300,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E1",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.3100,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E1",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Off Peak",
				"Rate" : 0.1750,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E1",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.77,
				"Flag" : "",
				"ResBus" : "B"
			},{
				"Company" : "Next Business Energy",
				"Type" : "D",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.3500,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "D",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.3300,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "D",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Off Peak",
				"Rate" : 0.1750,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "D ",
				"Distributor" : "Jemena (AGL North)",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.77,
				"Flag" : "",
				"ResBus" : "B"
			},
			
			
			
			 {
				"Company" : "Next Business Energy",
				"Type" : "E",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.2700,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.2300,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "CL",
				"Rate" : 0.1700,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.30,
				"Flag" : "",
				"ResBus" : "B"
			},
			{
				"Company" : "Next Business Energy",
				"Type" : "E1",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.3100,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E1",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.2800,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E1",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Off Peak",
				"Rate" : 0.1750,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E1",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.30,
				"Flag" : "",
				"ResBus" : "B"
			},{
				"Company" : "Next Business Energy",
				"Type" : "D",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.3350,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "D",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.3000,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "D",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Off Peak",
				"Rate" : 0.1750,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "D",
				"Distributor" : "Powercor",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.30,
				"Flag" : "",
				"ResBus" : "B"
			},			
			
			
			
			
			{
				"Company" : "Next Business Energy",
				"Type" : "E",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.2450,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.2050,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "CL",
				"Rate" : 0.1550,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.20,
				"Flag" : "",
				"ResBus" : "B"
			},
			{
				"Company" : "Next Business Energy",
				"Type" : "E1",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.2500,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E1",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.2250,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E1",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Off Peak",
				"Rate" : 0.1500,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "E1",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.20,
				"Flag" : "",
				"ResBus" : "B"
			},{
				"Company" : "Next Business Energy",
				"Type" : "D",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.2800,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "D",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.2500,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "D",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Off Peak",
				"Rate" : 0.1500,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "D",
				"Distributor" : "Citipower",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.20,
				"Flag" : "",
				"ResBus" : "B"
			},
			
			
			
			{
				"Company" : "Next Business Energy",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.3200,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.2300,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "GEN",
				"Distributor" : "Integral",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.02,
				"Flag" : "",
				"ResBus" : "B"
			},
			
			{
				"Company" : "Next Business Energy",
				"Type" : "General Supply TOU",
				"Distributor" : "Integral",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.4350,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "General Supply TOU",
				"Distributor" : "Integral",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.3250,
				"Flag" : "",
				"ResBus" : "B"
			},
			{
				"Company" : "Next Business Energy",
				"Type" : "General Supply TOU",
				"Distributor" : "Integral",
				"Meter" : "Single",
				"Usage" : "Shoulder",
				"Rate" : 0.2750,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "General Supply TOU",
				"Distributor" : "Integral",
				"Meter" : "Single",
				"Usage" : "Off Peak",
				"Rate" : 0.1700,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "General Supply TOU",
				"Distributor" : "Integral",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.8150,
				"Flag" : "",
				"ResBus" : "B"
			},
			
			{
				"Company" : "Next Business Energy",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.2750,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.2450,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "DOM",
				"Distributor" : "Integral",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 0.6300,
				"Flag" : "",
				"ResBus" : "B"
			},
			

			{
				"Company" : "Next Business Energy",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.3600,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.3300,
				"Flag" : "",
				"ResBus" : "B"
			},
			{
				"Company" : "Next Business Energy",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "Single",
				"Usage" : "Shoulder",
				"Rate" : 0.2750,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "Single",
				"Usage" : "Off Peak",
				"Rate" : 0.1500,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "DOM TOU",
				"Distributor" : "Integral",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.2150,
				"Flag" : "",
				"ResBus" : "B"
			},
				
			

			{
				"Company" : "Next Business Energy",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.2950,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.2550,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "GEN",
				"Distributor" : "Energy Australia",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 2.5150,
				"Flag" : "",
				"ResBus" : "B"
			},
			
			{
				"Company" : "Next Business Energy",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.5350,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.4350,
				"Flag" : "",
				"ResBus" : "B"
			},
			{
				"Company" : "Next Business Energy",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "Single",
				"Usage" : "Shoulder",
				"Rate" : 0.2300,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "Single",
				"Usage" : "Off Peak",
				"Rate" : 0.13,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "Power Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 2.5150,
				"Flag" : "",
				"ResBus" : "B"
			},
			
			
			{
				"Company" : "Next Business Energy",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.2550,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.1950,
				"Flag" : "",
				"ResBus" : "B"
			},
			{
				"Company" : "Next Business Energy",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "Single",
				"Usage" : "Shoulder",
				"Rate" : 0.1700,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "Single",
				"Usage" : "Off Peak",
				"Rate" : 0.1300,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "Load Smart TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 8.4650,
				"Flag" : "",
				"ResBus" : "B"
			},
			
			{
				"Company" : "Next Business Energy",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.2950,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.2650,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "DOM",
				"Distributor" : "Energy Australia",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 0.71,
				"Flag" : "",
				"ResBus" : "B"
			},
			
			{
				"Company" : "Next Business Energy",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.5600,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.5250,
				"Flag" : "",
				"ResBus" : "B"
			},
			{
				"Company" : "Next Business Energy",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "Single",
				"Usage" : "Shoulder",
				"Rate" : 0.2200,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "Single",
				"Usage" : "Off Peak",
				"Rate" : 0.1500,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "DOM TOU",
				"Distributor" : "Energy Australia",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 0.9250,
				"Flag" : "",
				"ResBus" : "B"
			},
			
			
			
			
			
			
			
			
			
			{
				"Company" : "Next Business Energy",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.3250,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.2850,
				"Flag" : "",
				"ResBus" : "B"
			},
			{
				"Company" : "Next Business Energy",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "BLNN2AUBLNC1AU",
				"Usage" : "CL",
				"Rate" : 0.1500,
				"Flag" : "ALINTADOMControlled Load1Country EnergyCL",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "GEN",
				"Distributor" : "Country Energy",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.67,
				"Flag" : "",
				"ResBus" : "B"
			},
			
			{
				"Company" : "Next Business Energy",
				"Type" : "GEN TOU",
				"Distributor" : "Country Energy",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.3850,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "GEN TOU",
				"Distributor" : "Country Energy",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.2950,
				"Flag" : "",
				"ResBus" : "B"
			},
			{
				"Company" : "Next Business Energy",
				"Type" : "GEN TOU",
				"Distributor" : "Country Energy",
				"Meter" : "Single",
				"Usage" : "Shoulder",
				"Rate" : 0.3250,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "GEN TOU",
				"Distributor" : "Country Energy",
				"Meter" : "Single",
				"Usage" : "Off Peak",
				"Rate" : 0.1800,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "GEN TOU",
				"Distributor" : "Country Energy",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 10.52,
				"Flag" : "",
				"ResBus" : "B"
			},
			
			{
				"Company" : "Next Business Energy",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.2750,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.2450,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "DOM",
				"Distributor" : "Country Energy",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.4750,
				"Flag" : "",
				"ResBus" : "B"
			},
			

			{
				"Company" : "Next Business Energy",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "Single",
				"Usage" : "Peak 1",
				"Rate" : 0.3350,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "Single",
				"Usage" : "Peak 2",
				"Rate" : 0.3050,
				"Flag" : "",
				"ResBus" : "B"
			},
			{
				"Company" : "Next Business Energy",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "Single",
				"Usage" : "Shoulder",
				"Rate" : 0.3300,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "Single",
				"Usage" : "Off Peak",
				"Rate" : 0.1800,
				"Flag" : "",
				"ResBus" : "B"
			},
			 {
				"Company" : "Next Business Energy",
				"Type" : "DOM TOU",
				"Distributor" : "Country Energy",
				"Meter" : "Single",
				"Usage" : "Supply Charge",
				"Rate" : 1.4750,
				"Flag" : "",
				"ResBus" : "B"
			},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GD",
							"Distributor" : "Citipower",
							"Meter" : "C1G",
							"Usage" : "Peak 1",
							"Rate" : 0.2480,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GD",
							"Distributor" : "Citipower",
							"Meter" : "C1G",
							"Usage" : "Peak 2",
							"Rate" : 0.2583,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GD",
							"Distributor" : "Citipower",
							"Meter" : "C1G",
							"Usage" : "Supply Charge",
							"Rate" : 1.10,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GD",
							"Distributor" : "Citipower",
							"Meter" : "C1G",
							"Usage" : "CL",
							"Rate" : 0.1711,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GHGL",
							"Distributor" : "Citipower",
							"Meter" : "C1G",
							"Usage" : "Peak 1",
							"Rate" : 0.3215,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GHGL",
							"Distributor" : "Citipower",
							"Meter" : "C1G",
							"Usage" : "CL",
							"Rate" : 0.1892,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GHGL",
							"Distributor" : "Citipower",
							"Meter" : "C1G",
							"Usage" : "Off Peak",
							"Rate" : 0.1892,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GHGL",
							"Distributor" : "Citipower",
							"Meter" : "C1G",
							"Usage" : "Supply Charge",
							"Rate" : 1.15,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						}
						
,
						
						{
							"Company" : "Sumo ENERGY",
							"Type" : "E",
							"Distributor" : "Citipower",
							"Meter" : "C1G",
							"Usage" : "Peak 1",
							"Rate" : 0.2535,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},{
							"Company" : "Sumo ENERGY",
							"Type" : "E",
							"Distributor" : "Citipower",
							"Meter" : "C1G",
							"Usage" : "Peak 2",
							"Rate" : 0.2535,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "E",
							"Distributor" : "Citipower",
							"Meter" : "C1G",
							"Usage" : "CL",
							"Rate" : 0.1962,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "E",
							"Distributor" : "Citipower",
							"Meter" : "C1G",
							"Usage" : "Supply Charge",
							"Rate" : 1.35,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
			

						{
							"Company" : "Sumo ENERGY",
							"Type" : "D",
							"Distributor" : "Citipower",
							"Meter" : "C1G",
							"Usage" : "Peak 1",
							"Rate" : 0.3122,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},{
							"Company" : "Sumo ENERGY",
							"Type" : "D",
							"Distributor" : "Citipower",
							"Meter" : "C1G",
							"Usage" : "Off Peak",
							"Rate" : 0.1962,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "D",
							"Distributor" : "Citipower",
							"Meter" : "C1G",
							"Usage" : "CL",
							"Rate" : 0.1962,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "D",
							"Distributor" : "Citipower",
							"Meter" : "C1G",
							"Usage" : "Supply Charge",
							"Rate" : 1.35,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "M",
							"Distributor" : "Citipower",
							"Meter" : "C1G",
							"Usage" : "Peak 1",
							"Rate" : 0.3122,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},{
							"Company" : "Sumo ENERGY",
							"Type" : "M",
							"Distributor" : "Citipower",
							"Meter" : "C1G",
							"Usage" : "Off Peak",
							"Rate" : 0.1962,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "M",
							"Distributor" : "Citipower",
							"Meter" : "C1G",
							"Usage" : "CL",
							"Rate" : 0.1962,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "M",
							"Distributor" : "Citipower",
							"Meter" : "C1G",
							"Usage" : "Supply Charge",
							"Rate" : 1.35,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						
						{
							"Company" : "Sumo ENERGY",
							"Type" : "E1",
							"Distributor" : "Citipower",
							"Meter" : "C1G",
							"Usage" : "Peak 1",
							"Rate" : 0.2913,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},{
							"Company" : "Sumo ENERGY",
							"Type" : "E1",
							"Distributor" : "Citipower",
							"Meter" : "C1G",
							"Usage" : "Peak 2",
							"Rate" : 0.2894,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},{
							"Company" : "Sumo ENERGY",
							"Type" : "E1",
							"Distributor" : "Citipower",
							"Meter" : "C1G",
							"Usage" : "Off Peak",
							"Rate" : 0.1976,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "E1",
							"Distributor" : "Citipower",
							"Meter" : "C1G",
							"Usage" : "CL",
							"Rate" : 0.1962,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "E1",
							"Distributor" : "Citipower",
							"Meter" : "C1G",
							"Usage" : "Supply Charge",
							"Rate" : 1.6,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						
						
						
						
						
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GD",
							"Distributor" : "Jemena (AGL North)",
							"Meter" : "C1G",
							"Usage" : "Peak 1",
							"Rate" : 0.2890,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GD",
							"Distributor" : "Jemena (AGL North)",
							"Meter" : "C1G",
							"Usage" : "Supply Charge",
							"Rate" : 0.98,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GD",
							"Distributor" : "Jemena (AGL North)",
							"Meter" : "C1G",
							"Usage" : "CL",
							"Rate" : 0.1895,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						
						{
							"Company" : "Sumo ENERGY",
							"Type" : "E",
							"Distributor" : "Jemena (AGL North)",
							"Meter" : "C1G",
							"Usage" : "Peak 1",
							"Rate" : 0.3115,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},{
							"Company" : "Sumo ENERGY",
							"Type" : "E",
							"Distributor" : "Jemena (AGL North)",
							"Meter" : "C1G",
							"Usage" : "Peak 2",
							"Rate" : 0.3115,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "E",
							"Distributor" : "Jemena (AGL North)",
							"Meter" : "C1G",
							"Usage" : "CL",
							"Rate" : 0.1895,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "E",
							"Distributor" : "Jemena (AGL North)",
							"Meter" : "C1G",
							"Usage" : "Supply Charge",
							"Rate" : 1.25,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
			
			
						{
							"Company" : "Sumo ENERGY",
							"Type" : "E1",
							"Distributor" : "Jemena (AGL North)",
							"Meter" : "C1G",
							"Usage" : "Peak 1",
							"Rate" : 0.3186,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},{
							"Company" : "Sumo ENERGY",
							"Type" : "E1",
							"Distributor" : "Jemena (AGL North)",
							"Meter" : "C1G",
							"Usage" : "Off Peak",
							"Rate" : 0.2002,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "E1",
							"Distributor" : "Jemena (AGL North)",
							"Meter" : "C1G",
							"Usage" : "CL",
							"Rate" : 0.1924,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "E1",
							"Distributor" : "Jemena (AGL North)",
							"Meter" : "C1G",
							"Usage" : "Supply Charge",
							"Rate" : 1.30,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						
						{
							"Company" : "Sumo ENERGY",
							"Type" : "D",
							"Distributor" : "Jemena (AGL North)",
							"Meter" : "C1G",
							"Usage" : "Peak 1",
							"Rate" : 0.3351,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "D",
							"Distributor" : "Jemena (AGL North)",
							"Meter" : "C1G",
							"Usage" : "Off Peak",
							"Rate" : 0.2091,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "D",
							"Distributor" : "Jemena (AGL North)",
							"Meter" : "C1G",
							"Usage" : "CL",
							"Rate" : 0.1895,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "D",
							"Distributor" : "Jemena (AGL North)",
							"Meter" : "C1G",
							"Usage" : "Supply Charge",
							"Rate" : 1.48,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						
						
						
						
						
						
						
						
						
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GD",
							"Distributor" : "Powercor",
							"Meter" : "C1G",
							"Usage" : "Peak 1",
							"Rate" : 0.2740,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GD",
							"Distributor" : "Powercor",
							"Meter" : "C1G",
							"Usage" : "Peak 2",
							"Rate" : 0.2860,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GD",
							"Distributor" : "Powercor",
							"Meter" : "C1G",
							"Usage" : "Supply Charge",
							"Rate" : 1.25,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GD",
							"Distributor" : "Powercor",
							"Meter" : "C1G",
							"Usage" : "CL",
							"Rate" : 0.1796,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GHGL",
							"Distributor" : "Powercor",
							"Meter" : "C1G",
							"Usage" : "Peak 1",
							"Rate" : 0.3760,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GHGL",
							"Distributor" : "Powercor",
							"Meter" : "C1G",
							"Usage" : "Peak 2",
							"Rate" : 0.3490,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GHGL",
							"Distributor" : "Powercor",
							"Meter" : "C1G",
							"Usage" : "Supply Charge",
							"Rate" : 1.2,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GHGL",
							"Distributor" : "Powercor",
							"Meter" : "C1G",
							"Usage" : "CL",
							"Rate" : 0.1993,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GHGL",
							"Distributor" : "Powercor",
							"Meter" : "C1G",
							"Usage" : "Off Peak",
							"Rate" : 0.1993,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "E",
							"Distributor" : "Powercor",
							"Meter" : "C1G",
							"Usage" : "Peak 1",
							"Rate" : 0.2883,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},{
							"Company" : "Sumo ENERGY",
							"Type" : "E",
							"Distributor" : "Powercor",
							"Meter" : "C1G",
							"Usage" : "Peak 2",
							"Rate" : 0.2824,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "E",
							"Distributor" : "Powercor",
							"Meter" : "C1G",
							"Usage" : "CL",
							"Rate" : 0.1993,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "E",
							"Distributor" : "Powercor",
							"Meter" : "C1G",
							"Usage" : "Supply Charge",
							"Rate" : 1.32,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "D",
							"Distributor" : "Powercor",
							"Meter" : "C1G",
							"Usage" : "Peak 1",
							"Rate" : 0.3462,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},{
							"Company" : "Sumo ENERGY",
							"Type" : "D",
							"Distributor" : "Powercor",
							"Meter" : "C1G",
							"Usage" : "Off Peak",
							"Rate" : 0.2262,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "D",
							"Distributor" : "Powercor",
							"Meter" : "C1G",
							"Usage" : "CL",
							"Rate" : 0.1933,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "D",
							"Distributor" : "Powercor",
							"Meter" : "C1G",
							"Usage" : "Supply Charge",
							"Rate" : 1.37,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},						{
							"Company" : "Sumo ENERGY",
							"Type" : "M",
							"Distributor" : "Powercor",
							"Meter" : "C1G",
							"Usage" : "Peak 1",
							"Rate" : 0.3462,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},{
							"Company" : "Sumo ENERGY",
							"Type" : "M",
							"Distributor" : "Powercor",
							"Meter" : "C1G",
							"Usage" : "Off Peak",
							"Rate" : 0.2262,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "M",
							"Distributor" : "Powercor",
							"Meter" : "C1G",
							"Usage" : "CL",
							"Rate" : 0.1933,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "M",
							"Distributor" : "Powercor",
							"Meter" : "C1G",
							"Usage" : "Supply Charge",
							"Rate" : 1.37,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "E1",
							"Distributor" : "Powercor",
							"Meter" : "C1G",
							"Usage" : "Peak 1",
							"Rate" : 0.3252,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},{
							"Company" : "Sumo ENERGY",
							"Type" : "E1",
							"Distributor" : "Powercor",
							"Meter" : "C1G",
							"Usage" : "Off Peak",
							"Rate" : 0.1917,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "E1",
							"Distributor" : "Powercor",
							"Meter" : "C1G",
							"Usage" : "CL",
							"Rate" : 0.1933,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "E1",
							"Distributor" : "Powercor",
							"Meter" : "C1G",
							"Usage" : "Supply Charge",
							"Rate" : 1.4,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},		
			
					
						
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GD",
							"Distributor" : "SPAusnet",
							"Meter" : "C1G",
							"Usage" : "Peak 1",
							"Rate" : 0.3047,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GD",
							"Distributor" : "SPAusnet",
							"Meter" : "C1G",
							"Usage" : "Peak 2",
							"Rate" : 0.3121,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GD",
							"Distributor" : "SPAusnet",
							"Meter" : "C1G",
							"Usage" : "Supply Charge",
							"Rate" : 1.25,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GD",
							"Distributor" : "SPAusnet",
							"Meter" : "C1G",
							"Usage" : "CL",
							"Rate" : 0.2233,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GHGL",
							"Distributor" : "SPAusnet",
							"Meter" : "C1G",
							"Usage" : "Peak 1",
							"Rate" : 0.3900,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GHGL",
							"Distributor" : "SPAusnet",
							"Meter" : "C1G",
							"Usage" : "Supply Charge",
							"Rate" : 1.35,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GHGL",
							"Distributor" : "SPAusnet",
							"Meter" : "C1G",
							"Usage" : "CL",
							"Rate" : 0.2632,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GHGL",
							"Distributor" : "SPAusnet",
							"Meter" : "C1G",
							"Usage" : "Off Peak",
							"Rate" : 0.2632,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "E",
							"Distributor" : "SPAusnet",
							"Meter" : "C1G",
							"Usage" : "Peak 1",
							"Rate" : 0.3951,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},{
							"Company" : "Sumo ENERGY",
							"Type" : "E",
							"Distributor" : "SPAusnet",
							"Meter" : "C1G",
							"Usage" : "Peak 2",
							"Rate" : 0.4021,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "E",
							"Distributor" : "SPAusnet",
							"Meter" : "C1G",
							"Usage" : "CL",
							"Rate" : 0.1968,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "E",
							"Distributor" : "SPAusnet",
							"Meter" : "C1G",
							"Usage" : "Supply Charge",
							"Rate" : 1.75,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "D",
							"Distributor" : "SPAusnet",
							"Meter" : "C1G",
							"Usage" : "Peak 1",
							"Rate" : 0.4022,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},{
							"Company" : "Sumo ENERGY",
							"Type" : "D",
							"Distributor" : "SPAusnet",
							"Meter" : "C1G",
							"Usage" : "Off Peak",
							"Rate" : 0.2337,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "D",
							"Distributor" : "SPAusnet",
							"Meter" : "C1G",
							"Usage" : "CL",
							"Rate" : 0.2047,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "D",
							"Distributor" : "SPAusnet",
							"Meter" : "C1G",
							"Usage" : "Supply Charge",
							"Rate" : 1.47,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},						{
							"Company" : "Sumo ENERGY",
							"Type" : "M",
							"Distributor" : "SPAusnet",
							"Meter" : "C1G",
							"Usage" : "Peak 1",
							"Rate" : 0.4022,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},{
							"Company" : "Sumo ENERGY",
							"Type" : "M",
							"Distributor" : "SPAusnet",
							"Meter" : "C1G",
							"Usage" : "Off Peak",
							"Rate" : 0.2337,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "M",
							"Distributor" : "SPAusnet",
							"Meter" : "C1G",
							"Usage" : "CL",
							"Rate" : 0.2047,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "M",
							"Distributor" : "SPAusnet",
							"Meter" : "C1G",
							"Usage" : "Supply Charge",
							"Rate" : 1.47,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						
						
						
						
						
						
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GD",
							"Distributor" : "Jemena (United Energy)",
							"Meter" : "C1G",
							"Usage" : "Peak 1",
							"Rate" : 0.2702,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GD",
							"Distributor" : "Jemena (United Energy)",
							"Meter" : "C1G",
							"Usage" : "Supply Charge",
							"Rate" : 1.04,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GD",
							"Distributor" : "Jemena (United Energy)",
							"Meter" : "C1G",
							"Usage" : "CL",
							"Rate" : 0.1903,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GHGL",
							"Distributor" : "Jemena (United Energy)",
							"Meter" : "C1G",
							"Usage" : "Peak 1",
							"Rate" : 0.3350,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GHGL",
							"Distributor" : "Jemena (United Energy)",
							"Meter" : "C1G",
							"Usage" : "Supply Charge",
							"Rate" : 1.05,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GHGL",
							"Distributor" : "Jemena (United Energy)",
							"Meter" : "C1G",
							"Usage" : "CL",
							"Rate" : 0.1903,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "GHGL",
							"Distributor" : "Jemena (United Energy)",
							"Meter" : "C1G",
							"Usage" : "Off Peak",
							"Rate" : 0.1903,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "E",
							"Distributor" : "Jemena (United Energy)",
							"Meter" : "C1G",
							"Usage" : "Peak 1",
							"Rate" : 0.3024,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},{
							"Company" : "Sumo ENERGY",
							"Type" : "E",
							"Distributor" : "Jemena (United Energy)",
							"Meter" : "C1G",
							"Usage" : "Peak 2",
							"Rate" : 0.2934,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "E",
							"Distributor" : "Jemena (United Energy)",
							"Meter" : "C1G",
							"Usage" : "CL",
							"Rate" : 0.1932,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "E",
							"Distributor" : "Jemena (United Energy)",
							"Meter" : "C1G",
							"Usage" : "Supply Charge",
							"Rate" : 1.09,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "D",
							"Distributor" : "Jemena (United Energy)",
							"Meter" : "C1G",
							"Usage" : "Peak 1",
							"Rate" : 0.3098,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},{
							"Company" : "Sumo ENERGY",
							"Type" : "D",
							"Distributor" : "Jemena (United Energy)",
							"Meter" : "C1G",
							"Usage" : "Off Peak",
							"Rate" : 0.1941,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "D",
							"Distributor" : "Jemena (United Energy)",
							"Meter" : "C1G",
							"Usage" : "CL",
							"Rate" : 0.1932,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "D",
							"Distributor" : "Jemena (United Energy)",
							"Meter" : "C1G",
							"Usage" : "Supply Charge",
							"Rate" : 1.23,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},						{
							"Company" : "Sumo ENERGY",
							"Type" : "M",
							"Distributor" : "Jemena (United Energy)",
							"Meter" : "C1G",
							"Usage" : "Peak 1",
							"Rate" : 0.3098,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},{
							"Company" : "Sumo ENERGY",
							"Type" : "M",
							"Distributor" : "Jemena (United Energy)",
							"Meter" : "C1G",
							"Usage" : "Off Peak",
							"Rate" : 0.1941,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "M",
							"Distributor" : "Jemena (United Energy)",
							"Meter" : "C1G",
							"Usage" : "CL",
							"Rate" : 0.1932,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "M",
							"Distributor" : "Jemena (United Energy)",
							"Meter" : "C1G",
							"Usage" : "Supply Charge",
							"Rate" : 1.23,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "E1",
							"Distributor" : "Jemena (United Energy)",
							"Meter" : "C1G",
							"Usage" : "Peak 1",
							"Rate" : 0.3280,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},{
							"Company" : "Sumo ENERGY",
							"Type" : "E1",
							"Distributor" : "Jemena (United Energy)",
							"Meter" : "C1G",
							"Usage" : "Off Peak",
							"Rate" : 0.1891,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "E1",
							"Distributor" : "Jemena (United Energy)",
							"Meter" : "C1G",
							"Usage" : "CL",
							"Rate" : 0.1932,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
						{
							"Company" : "Sumo ENERGY",
							"Type" : "E1",
							"Distributor" : "Jemena (United Energy)",
							"Meter" : "C1G",
							"Usage" : "Supply Charge",
							"Rate" : 1.3,
							"Flag" : "Sumo ENERGYDOMEnergy AustraliaPeak 1",
							"ResBus" : "R"
						},
			
			];
	return rates;
}