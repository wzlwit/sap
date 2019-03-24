/* sap.ui.define([
    "sap/m/Button",
    "sap/m/MessageToast"
], function (Button, MessageToast) {
    "use strict";

    new Button({
        text: "Ready...",
        press: function () {
            MessageToast.show("Hello World!");
        }
    }).placeAt("content");

}); */

sap.ui.getCore().attachInit(function () {
	"use strict";

    sap.ui.require([
		"sap/ui/core/mvc/XMLView"
	], function (XMLView) {
		XMLView.create({viewName: "Quickstart.App"}).then(function (oView) {
			oView.placeAt("content");
		});
	});

});