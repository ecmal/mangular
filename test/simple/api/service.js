System.register(["mangular/injector"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var injector_1;
    var ApiService, ApiServiceOne, ApiServiceTwo;
    return {
        setters:[
            function (injector_1_1) {
                injector_1 = injector_1_1;
            }],
        execute: function() {
            ApiService = (function () {
                function ApiService() {
                }
                Object.defineProperty(ApiService.prototype, "name", {
                    get: function () {
                        return this.constructor.name;
                    },
                    enumerable: true,
                    configurable: true
                });
                return ApiService;
            })();
            exports_1("ApiService", ApiService);
            ApiServiceOne = (function (_super) {
                __extends(ApiServiceOne, _super);
                function ApiServiceOne() {
                    _super.call(this);
                    console.info(this.name);
                    console.info(this.$q);
                }
                __decorate([
                    injector_1.Inject, 
                    __metadata('design:type', Object)
                ], ApiServiceOne.prototype, "$q", void 0);
                return ApiServiceOne;
            })(ApiService);
            exports_1("ApiServiceOne", ApiServiceOne);
            ApiServiceTwo = (function (_super) {
                __extends(ApiServiceTwo, _super);
                function ApiServiceTwo() {
                    _super.call(this);
                    console.info(this.name);
                    console.info(this.$http);
                }
                __decorate([
                    injector_1.Inject, 
                    __metadata('design:type', Object)
                ], ApiServiceTwo.prototype, "$http", void 0);
                return ApiServiceTwo;
            })(ApiService);
            exports_1("ApiServiceTwo", ApiServiceTwo);
        }
    }
});
//# sourceMappingURL=service.js.map