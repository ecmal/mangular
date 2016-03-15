System.register(["mangular/annotate"], function(exports_1) {
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
    var annotate_1, annotate_2;
    var HttpService, HttpServiceProvider;
    return {
        setters:[
            function (annotate_1_1) {
                annotate_1 = annotate_1_1;
                annotate_2 = annotate_1_1;
            }],
        execute: function() {
            HttpService = (function () {
                function HttpService(http) {
                    this.http = http;
                }
                return HttpService;
            })();
            exports_1("HttpService", HttpService);
            HttpServiceProvider = (function () {
                function HttpServiceProvider() {
                }
                HttpServiceProvider.prototype.provide = function ($http) {
                    return new HttpService($http);
                };
                Object.defineProperty(HttpServiceProvider.prototype, "defaults", {
                    get: function () {
                        return this.provider.defaults;
                    },
                    set: function (v) {
                        this.provider.defaults = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HttpServiceProvider.prototype, "interceptors", {
                    get: function () {
                        return this.provider.interceptors;
                    },
                    set: function (v) {
                        this.provider.interceptors = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                HttpServiceProvider.prototype.useApplyAsync = function (value) {
                    return this.provider.useApplyAsync(value);
                };
                HttpServiceProvider.prototype.useLegacyPromiseExtensions = function (value) {
                    return this.provider.useLegacyPromiseExtensions(value);
                };
                __decorate([
                    annotate_2.Inject('$httpProvider'), 
                    __metadata('design:type', Object)
                ], HttpServiceProvider.prototype, "provider", void 0);
                __decorate([
                    __param(0, annotate_2.Inject), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], HttpServiceProvider.prototype, "provide", null);
                HttpServiceProvider = __decorate([
                    annotate_1.Provider('HttpService'), 
                    __metadata('design:paramtypes', [])
                ], HttpServiceProvider);
                return HttpServiceProvider;
            })();
            exports_1("HttpServiceProvider", HttpServiceProvider);
        }
    }
});
//# sourceMappingURL=my-provider.js.map