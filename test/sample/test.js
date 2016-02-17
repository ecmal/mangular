System.register(["mangular/injector", "mangular/angular/animate", "mangular/angular/aria", "mangular/angular/material", "./api/provider", "./user/controller", "./user/service"], function(exports_1) {
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
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {}],
        execute: function() {
            MyApp = (function () {
                function MyApp() {
                    console.info(this.usersProvider);
                    console.info(this.apiProvider);
                    this.apiProvider.setService('one');
                    console.info(this.$mdThemingProvider);
                    console.info(this.$mdIconProvider);
                    this.$mdIconProvider
                        .defaultIconSet("assets/svg/avatars.svg", 128);
                    this.$mdThemingProvider.theme('default')
                        .primaryPalette('blue')
                        .accentPalette('red');
                }
                __decorate([
                    injector_3.Inject('UserServiceProvider'), 
                    __metadata('design:type', Object)
                ], MyApp.prototype, "usersProvider", void 0);
                __decorate([
                    injector_3.Inject('ApiServiceProvider'), 
                    __metadata('design:type', Object)
                ], MyApp.prototype, "apiProvider", void 0);
                __decorate([
                    injector_3.Inject, 
                    __metadata('design:type', Object)
                ], MyApp.prototype, "$mdThemingProvider", void 0);
                __decorate([
                    injector_3.Inject, 
                    __metadata('design:type', Object)
                ], MyApp.prototype, "$mdIconProvider", void 0);
                MyApp = __decorate([
                    injector_2.Module, 
                    __metadata('design:paramtypes', [])
                ], MyApp);
                return MyApp;
            })();
            injector_1.default.init('mangular/sample/test');
        }
    }
});
//# sourceMappingURL=test.js.map