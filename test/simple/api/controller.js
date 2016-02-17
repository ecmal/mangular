System.register(["mangular/injector", "./service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var injector_1, injector_2, injector_3, service_1;
    var ApiController, mbApiComponent;
    return {
        setters:[
            function (injector_1_1) {
                injector_1 = injector_1_1;
                injector_2 = injector_1_1;
                injector_3 = injector_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            }],
        execute: function() {
            ApiController = (function () {
                function ApiController() {
                    this.$log.debug('ApiController');
                    this.name = this.api.name;
                }
                ApiController.prototype.sayHello = function () {
                    console.info('Hello', this.name);
                };
                __decorate([
                    injector_3.Inject, 
                    __metadata('design:type', Object)
                ], ApiController.prototype, "$log", void 0);
                __decorate([
                    injector_3.Inject, 
                    __metadata('design:type', service_1.ApiService)
                ], ApiController.prototype, "api", void 0);
                ApiController = __decorate([
                    injector_1.Controller, 
                    __metadata('design:paramtypes', [])
                ], ApiController);
                return ApiController;
            })();
            mbApiComponent = (function () {
                function mbApiComponent() {
                    console.info('API COMPONENT');
                }
                mbApiComponent = __decorate([
                    injector_2.Component({
                        template: "<span>Name: {{$ctrl.hero}}</span>",
                        bindings: {
                            hero: '='
                        }
                    }), 
                    __metadata('design:paramtypes', [])
                ], mbApiComponent);
                return mbApiComponent;
            })();
        }
    }
});
//# sourceMappingURL=controller.js.map