sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.App", {

		onShowHello: function () {
			// show a native JavaScript alert
			/* eslint-disable no-alert */
			//* alert("Hello World");
			/* eslint-enable no-alert */
			MessageToast.show("Hello World");

			// * We extend the array of required modules with the fully qualified path to sap.m.MessageToast. Once both modules, Controller and MessageToast, are loaded, the callback function is called and we can make use of both objects by accessing the parameters passed on to the function. 
		}
	});

});