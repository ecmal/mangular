System.register(["mangular/annotate", "mangular/angular/animate", "./providers/my-provider", "./controllers/my-controller", "./directives/my-directive"], function(exports_1) {
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
    var annotate_1, annotate_2, annotate_3, annotate_4, my_provider_1;
    var MyOther, MyApp;
    return {
        setters:[
            function (annotate_1_1) {
                annotate_1 = annotate_1_1;
                annotate_2 = annotate_1_1;
                annotate_3 = annotate_1_1;
                annotate_4 = annotate_1_1;
            },
            function (_1) {},
            function (my_provider_1_1) {
                my_provider_1 = my_provider_1_1;
            },
            function (_2) {},
            function (_3) {}],
        execute: function() {
            MyOther = (function () {
                function MyOther() {
                }
                MyOther.config = function (http, myConst) {
                    console.info(this.name, http);
                    console.info("CONST", myConst);
                };
                MyOther.run = function (http) {
                    console.info(this.name, "RUN", http.defaults);
                };
                __decorate([
                    annotate_2.Config,
                    __param(0, annotate_4.Inject('$httpProvider')),
                    __param(1, annotate_4.Inject), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object, Object]), 
                    __metadata('design:returntype', void 0)
                ], MyOther, "config", null);
                __decorate([
                    annotate_3.Run,
                    __param(0, annotate_4.Inject), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [my_provider_1.HttpServiceProvider]), 
                    __metadata('design:returntype', void 0)
                ], MyOther, "run", null);
                return MyOther;
            })();
            MyApp = (function () {
                function MyApp() {
                }
                MyApp.config = function (http) {
                    //console.info(this.name,http)
                };
                MyApp.run = function (http) {
                    //console.info(this.name,http)
                };
                __decorate([
                    annotate_2.Config,
                    __param(0, annotate_4.Inject('$httpProvider')), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], MyApp, "config", null);
                __decorate([
                    annotate_3.Run,
                    __param(0, annotate_4.Inject('$httpProvider')), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], MyApp, "run", null);
                return MyApp;
            })();
            annotate_1.default.start('mangular/router/index');
        }
    }
});
//# sourceMappingURL=index.js.map