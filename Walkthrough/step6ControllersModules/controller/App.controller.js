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
		}
	});

});