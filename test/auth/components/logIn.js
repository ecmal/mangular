System.register(["mangular/annotate", '../template/pages/logIn', "../services/auth"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var annotate_1, logIn_1, auth_1;
    var LogIn;
    return {
        setters:[
            function (annotate_1_1) {
                annotate_1 = annotate_1_1;
            },
            function (logIn_1_1) {
                logIn_1 = logIn_1_1;
            },
            function (auth_1_1) {
                auth_1 = auth_1_1;
            }],
        execute: function() {
            LogIn = (function () {
                function LogIn() {
                    console.info("LogInComponent constructor");
                    console.log(this.userAuthService);
                    this.submit = this.submit.bind(this);
                }
                LogIn.prototype.submit = function () {
                    var _this = this;
                    this.userAuthService.checkUserCredentials(this.username, this.password).then(function (exist) {
                        if (exist) {
                            _this.userAuthService.setCredentials(_this.username, _this.password);
                            console.log("$location", _this.$location);
                            _this.$location.path('/dashboard');
                            return;
                        }
                        alert("Wrong Password");
                    }).catch(function (e) {
                        console.error(e);
                    });
                };
                __decorate([
                    annotate_1.Inject, 
                    __metadata('design:type', auth_1.Auth)
                ], LogIn.prototype, "userAuthService", void 0);
                __decorate([
                    annotate_1.Inject, 
                    __metadata('design:type', Object)
                ], LogIn.prototype, "$location", void 0);
                __decorate([
                    annotate_1.Inject, 
                    __metadata('design:type', Object)
                ], LogIn.prototype, "$rootScope", void 0);
                LogIn = __decorate([
                    annotate_1.Component('wcLogin', {
                        template: logIn_1.default
                    }), 
                    __metadata('design:paramtypes', [])
                ], LogIn);
                return LogIn;
            })();
        }
    }
});
//# sourceMappingURL=logIn.js.map