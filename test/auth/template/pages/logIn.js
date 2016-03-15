System.register([], function(exports_1) {
    return {
        setters:[],
        execute: function() {
            exports_1("default","\n    <div layout=\"row\"  layout-align=\"center center\">\n        <div flex=\"50\">\n            <md-card >\n                <img ng-src=\"https://material.angularjs.org/latest/img/washedout.png\" class=\"md-card-image\" alt=\"Washed Out\">\n                <md-card-content>\n                    <md-input-container class=\"md-block\">\n                        <label>Username</label>\n                        <input ng-model=\"$ctrl.username\">\n                    </md-input-container>\n                    <md-input-container class=\"md-block\">\n                        <label>Password</label>\n                        <input ng-model=\"$ctrl.password\" type=\"password\">\n                    </md-input-container>\n                </md-card-content>\n                <md-card-actions layout=\"row\" layout-align=\"center center\">\n                    <md-button class=\"md-raised md-primary\" ng-click=\"$ctrl.submit()\">Log In</md-button>\n                </md-card-actions>\n            </md-card>\n        </div>\n    </div>\n");
        }
    }
});
//# sourceMappingURL=logIn.js.map