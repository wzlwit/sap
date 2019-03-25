sap.ui.getCore().attachInit(function () {
	"use strict";

    sap.ui.define([
		"sap/ui/core/mvc/XMLView"
	], function (XMLView) {
		XMLView.create({viewName: "Quickstart.App"}).then(function (oView) {
			oView.placeAt("content");
		});
	});

});