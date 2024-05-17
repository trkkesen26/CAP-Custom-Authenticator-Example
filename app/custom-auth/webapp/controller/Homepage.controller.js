sap.ui.define([
    "./BaseController",
    "sap/m/library"
],
    function (BaseController, mLibrary) {
        "use strict";

        return BaseController.extend("com.ndbs.customauth.controller.Homepage", {
            onInit: function () {

            },
            onLogin: function () {
                mLibrary.URLHelper.redirect("/auth/github", false);
            },
            onLogout: function () {
                mLibrary.URLHelper.redirect("/auth/logout", false);
            }
        });
    });
