sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("LoginApp.controller.Login", {
        onLoginPress: function () {
            var oUsernameInput = this.byId("usernameInput");
            var oPasswordInput = this.byId("passwordInput");

            var sUsername = oUsernameInput.getValue();
            var sPassword = oPasswordInput.getValue();

            // For demonstration purposes, log the values.
            // In a real application, you would send these to a backend for authentication.
            console.log("Username:", sUsername);
            console.log("Password:", sPassword);

            // You can add further logic here, e.g., show a message toast,
            // navigate to another page, or call an authentication service.
            if (sUsername && sPassword) {
                sap.m.MessageToast.show("Attempting to log in with username: " + sUsername);
            } else {
                sap.m.MessageToast.show("Please enter both username and password.");
            }
        }
    });
});