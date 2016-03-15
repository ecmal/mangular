System.register(["mangular/annotate"], function(exports_1) {
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
    var annotate_1;
    var ApiServiceBase, ApiServiceOne, ApiServiceTwo;
    return {
        setters:[
            function (annotate_1_1) {
                annotate_1 = annotate_1_1;
            }],
        execute: function() {
            ApiServiceBase = (function () {
                function ApiServiceBase() {
                }
                Object.defineProperty(ApiServiceBase.prototype, "name", {
                    get: function () {
                        return this.constructor.name;
                    },
                    enumerable: true,
                    configurable: true
                });
                return ApiServiceBase;
            })();
            exports_1("ApiServiceBase", ApiServiceBase);
            ApiServiceOne = (function (_super) {
                __extends(ApiServiceOne, _super);
                function ApiServiceOne() {
                    _super.call(this);
                    console.info(this.name);
                    console.info(this.$q);
                }
                __decorate([
                    annotate_1.Inject, 
                    __metadata('design:type', Object)
                ], ApiServiceOne.prototype, "$q", void 0);
                return ApiServiceOne;
            })(ApiServiceBase);
            exports_1("ApiServiceOne", ApiServiceOne);
            ApiServiceTwo = (function (_super) {
                __extends(ApiServiceTwo, _super);
                function ApiServiceTwo() {
                    _super.call(this);
                    console.info(this.name);
                    console.info(this.$http);
                }
                __decorate([
                    annotate_1.Inject, 
                    __metadata('design:type', Object)
                ], ApiServiceTwo.prototype, "$http", void 0);
                return ApiServiceTwo;
            })(ApiServiceBase);
            exports_1("ApiServiceTwo", ApiServiceTwo);
        }
    }
});
//# sourceMappingURL=service.js.map