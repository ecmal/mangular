System.register(["mangular/injector", "mangular/angular/material", "mangular/angular/table", "./scripts/controller"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var injector_1, injector_2, injector_3;
    var MyApp;
    return {
        setters:[
            function (injector_1_1) {
                injector_1 = injector_1_1;
                injector_2 = injector_1_1;
                injector_3 = injector_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {}],
        execute: function() {
            MyApp = (function () {
                function MyApp() {
                    this.themes.theme('default')
                        .primaryPalette('blue')
                        .accentPalette('pink');
                }
                __decorate([
                    injector_3.Inject('$mdThemingProvider'), 
                    __metadata('design:type', Object)
                ], MyApp.prototype, "themes", void 0);
                MyApp = __decorate([
                    injector_2.Module, 
                    __metadata('design:paramtypes', [])
                ], MyApp);
                return MyApp;
            })();
            injector_1.default.init('mangular/table/index');
        }
    }
});
//# sourceMappingURL=index.js.map