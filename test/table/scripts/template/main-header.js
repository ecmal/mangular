System.register([], function(exports_1) {
    return {
        setters:[],
        execute: function() {
            exports_1("default","\n<md-toolbar class=\"md-table-toolbar md-default\" ng-show=\"!$ctrl.selected.length\">\n  <div class=\"md-toolbar-tools\">\n    <span>Nutrition</span>\n    <span flex></span>\n    <md-button ng-click=\"$ctrl.hideCheckboxes = !$ctrl.hideCheckboxes\">{{$ctrl.hideCheckboxes ? 'Enable Selection' : 'Disable Selection'}}</md-button>\n    <md-button ng-click=\"$ctrl.hideHead = !$ctrl.hideHead\">{{$ctrl.hideHead ? 'Show Head' : 'Decapitate'}}</md-button>\n    <md-button ng-click=\"$ctrl.blah = !$ctrl.blah\">{{$ctrl.blah ? 'turn on' : 'turn off'}}</md-button>\n    <md-button ng-click=\"$ctrl.loadStuff()\">Load</md-button>\n    <md-button class=\"md-icon-button\">\n      <md-icon>filter_list</md-icon>\n    </md-button>\n    <md-button class=\"md-icon-button\">\n      <md-icon>more_vert</md-icon>\n    </md-button>\n  </div>\n</md-toolbar>\n");
        }
    }
});
//# sourceMappingURL=main-header.js.map