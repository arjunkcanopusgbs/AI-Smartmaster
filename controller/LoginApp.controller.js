sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller, MessageToast) {
    "use strict";

    return Controller.extend("LoginApp.controller.Login", {
        onLoginPress: function() {
            var oView = this.getView();
            var sUsername = oView.byId("usernameInput").getValue();
            var sPassword = oView.byId("passwordInput").getValue();

            if (sUsername && sPassword) {
                // For demonstration purposes, just log the values and show a toast
                console.log("Username:", sUsername);
                console.log("Password:", sPassword);
                MessageToast.show("Attempting to log in with user: " + sUsername);
            } else {
                MessageToast.show("Please enter both username and password.");
            }
        }
    });
});