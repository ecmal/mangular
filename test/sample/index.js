System.register(["mangular/annotate", "mangular/angular/animate", "mangular/angular/aria", "mangular/angular/material", "./api/provider", "./user/controller", "./user/service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var annotate_1, annotate_2, annotate_3;
    var MyApp;
    return {
        setters:[
            function (annotate_1_1) {
                annotate_1 = annotate_1_1;
                annotate_2 = annotate_1_1;
                annotate_3 = annotate_1_1;
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
                }
                MyApp.prototype.testConfig = function (usersProvider, apiProvider, $mdThemingProvider, $mdIconProvider) {
                    console.info(usersProvider);
                    console.info(apiProvider);
                    apiProvider.setService('one');
                    $mdIconProvider
                        .defaultIconSet("assets/svg/avatars.svg", 128);
                    $mdThemingProvider.theme('default')
                        .primaryPalette('blue')
                        .accentPalette('red');
                };
                __decorate([
                    annotate_2.Config,
                    __param(0, annotate_3.Inject('UserServiceProvider')),
                    __param(1, annotate_3.Inject('ApiServiceProvider')),
                    __param(2, annotate_3.Inject('$mdThemingProvider')),
                    __param(3, annotate_3.Inject('$mdIconProvider')), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object, Object, Object, Object]), 
                    __metadata('design:returntype', void 0)
                ], MyApp.prototype, "testConfig", null);
                return MyApp;
            })();
            annotate_1.default.start('mangular/sample/index');
        }
    }
});
//# sourceMappingURL=index.js.map