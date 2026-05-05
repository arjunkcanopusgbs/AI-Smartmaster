sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("com.myorg.app.controller.App", {

        onInit: function () {
            // Initialization code
        },

        onHelloPress: function () {
            MessageToast.show("Thank you");
        }
    });
});