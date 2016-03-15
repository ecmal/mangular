System.register(["mangular/annotate", "./service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var annotate_1, annotate_2, service_1, service_2, service_3;
    var ApiServiceProvider;
    return {
        setters:[
            function (annotate_1_1) {
                annotate_1 = annotate_1_1;
                annotate_2 = annotate_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
                service_2 = service_1_1;
                service_3 = service_1_1;
            }],
        execute: function() {
            ApiServiceProvider = (function () {
                function ApiServiceProvider() {
                    this.service = service_1.ApiService;
                }
                ApiServiceProvider.prototype.setService = function (name) {
                    switch (name) {
                        case 'one':
                            this.service = service_2.ApiServiceOne;
                            break;
                        case 'two':
                            this.service = service_3.ApiServiceTwo;
                            break;
                        default:
                            this.service = service_1.ApiService;
                            break;
                    }
                };
                ApiServiceProvider.prototype.provide = function () {
                    return new this.service();
                };
                __decorate([
                    annotate_2.Inject, 
                    __metadata('design:type', Object)
                ], ApiServiceProvider.prototype, "$injector", void 0);
                ApiServiceProvider = __decorate([
                    annotate_1.Provider('ApiService'), 
                    __metadata('design:paramtypes', [])
                ], ApiServiceProvider);
                return ApiServiceProvider;
            })();
        }
    }
});
//# sourceMappingURL=provider.js.map