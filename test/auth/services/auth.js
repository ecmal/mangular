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
    var annotate_1;
    var Auth;
    return {
        setters:[
            function (annotate_1_1) {
                annotate_1 = annotate_1_1;
            }],
        execute: function() {
            Auth = (function () {
                function Auth($http, $q, $rootScope) {
                }
                Auth.prototype.checkUserCredentials = function (username, password) {
                    return new Promise(function (resolve, reject) {
                        try {
                            setTimeout(function () {
                                var exist = false;
                                if (username == 'admin' && password == 'admin') {
                                    exist = true;
                                }
                                resolve(exist);
                            }, 0);
                        }
                        catch (e) {
                            reject();
                        }
                    });
                };
                Auth.prototype.setToLocalStorage = function (key, val) {
                    localStorage.setItem(key, JSON.stringify(val));
                };
                Auth.prototype.clearLocalStorage = function (key) {
                    localStorage.removeItem(key);
                };
                Auth.prototype.getFromLocalStorage = function (key) {
                    return JSON.parse(localStorage.getItem(key));
                };
                Auth.prototype.clearCredentials = function () {
                    this.$rootScope.globals = {};
                    this.clearLocalStorage('globals');
                };
                Auth.prototype.setCredentials = function (username, password) {
                    this.$rootScope.globals = {
                        currentUser: {
                            username: username,
                            password: password
                        }
                    };
                    this.setToLocalStorage('globals', this.$rootScope.globals);
                };
                __decorate([
                    annotate_1.Inject, 
                    __metadata('design:type', Object)
                ], Auth.prototype, "$rootScope", void 0);
                Auth = __decorate([
                    annotate_1.Service, 
                    __metadata('design:paramtypes', [Object, Object, Object])
                ], Auth);
                return Auth;
            })();
            exports_1("Auth", Auth);
        }
    }
});
//# sourceMappingURL=auth.js.map