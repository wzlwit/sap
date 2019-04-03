sap.ui.getCore().attachInit(function () {
	"use strict";

    sap.ui.define([
		"sap/ui/core/mvc/XMLView"
	], function (XMLView) {
		//using Quckstart/App.view.html to create an View
		XMLView.create({viewName: "Quickstart.App"}).then(function (oView) {
			oView.placeAt("content");
		});
	});

});