/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ein/codes/tax/payment/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});