System.register(["mangular/annotate", "mangular/angular/material", "mangular/angular/ui-router", "mangular/angular/table", "./components/dashboard", "./components/logIn", "./components/privateLayout", "./components/publicLayout", "./directives/menuLink", "./directives/menuToggle", "./services/menu"], function(exports_1) {
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
    var annotate_1, annotate_2, annotate_3, annotate_4;
    var MyApp;
    return {
        setters:[
            function (annotate_1_1) {
                annotate_1 = annotate_1_1;
                annotate_2 = annotate_1_1;
                annotate_3 = annotate_1_1;
                annotate_4 = annotate_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (_7) {},
            function (_8) {},
            function (_9) {},
            function (_10) {}],
        execute: function() {
            MyApp = (function () {
                function MyApp() {
                }
                MyApp.config = function ($urlRouterProvider, $stateProvider, $mdThemingProvider) {
                    $mdThemingProvider.definePalette('docs-blue', $mdThemingProvider.extendPalette('blue', {
                        '50': '#DCEFFF',
                        '100': '#AAD1F9',
                        '200': '#7BB8F5',
                        '300': '#4C9EF1',
                        '400': '#1C85ED',
                        '500': '#106CC8',
                        '600': '#0159A2',
                        '700': '#025EE9',
                        '800': '#014AB6',
                        '900': '#013583',
                        'contrastDefaultColor': 'light',
                        'contrastDarkColors': '50 100 200 A100',
                        'contrastStrongLightColors': '300 400 A200 A400'
                    }));
                    $mdThemingProvider.definePalette('docs-red', $mdThemingProvider.extendPalette('red', {
                        'A100': '#DE3641'
                    }));
                    $mdThemingProvider.theme('docs-dark', 'default')
                        .primaryPalette('yellow')
                        .dark();
                    $mdThemingProvider.theme('default')
                        .primaryPalette('docs-blue')
                        .accentPalette('docs-red');
                    $urlRouterProvider.otherwise('/dashboard');
                    $stateProvider
                        .state('public', {
                        abstract: true,
                        views: {
                            '@': {
                                template: '<wc-public-layout></wc-public-layout>',
                            }
                        },
                        data: {
                            access: 'UNAUTHORIZED'
                        }
                    })
                        .state('private', {
                        abstract: true,
                        views: {
                            '@': {
                                template: '<wc-private-layout></wc-private-layout>',
                            }
                        },
                        data: {
                            access: 'AUTHORIZED'
                        }
                    })
                        .state('public.login', {
                        url: '/login',
                        template: "<wc-login></wc-login>",
                    })
                        .state('private.dashboard', {
                        url: '/dashboard',
                        template: "<wc-dashboard></wc-dashboard>",
                        data: {
                            title: 'Dashboard'
                        }
                    })
                        .state('private.monitor', {
                        url: '/monitor',
                        template: "monitor",
                        data: {
                            title: 'Monitor'
                        }
                    })
                        .state('private.users', {
                        url: '/users',
                        template: "users",
                        data: {
                            title: 'Users'
                        }
                    })
                        .state('private.groups', {
                        url: '/groups',
                        template: "groups",
                        data: {
                            title: 'Groups'
                        }
                    })
                        .state('private.roles', {
                        url: '/roles',
                        template: "roles",
                        data: {
                            title: 'Roles'
                        }
                    });
                };
                MyApp.run = function (rootScope, $state, auth) {
                    rootScope.globals = auth.getFromLocalStorage('globals') || {};
                    rootScope.title = "Gago";
                    rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                        console.info(toState.data);
                        rootScope.title = toState.data.title || "No Title";
                        if (toState.data.access == 'AUTHORIZED' && !rootScope.globals.currentUser) {
                            $state.go('/login');
                        }
                        if (toState.data.access == 'UNAUTHORIZED' && rootScope.globals.currentUser) {
                            $state.go(fromState.name);
                        }
                    });
                };
                __decorate([
                    annotate_2.Config,
                    __param(0, annotate_4.Inject('$urlRouterProvider')),
                    __param(1, annotate_4.Inject('$stateProvider')),
                    __param(2, annotate_4.Inject('$mdThemingProvider')), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object, Object, Object]), 
                    __metadata('design:returntype', void 0)
                ], MyApp, "config", null);
                __decorate([
                    annotate_3.Run,
                    __param(0, annotate_4.Inject('$rootScope')),
                    __param(1, annotate_4.Inject('$state')),
                    __param(2, annotate_4.Inject('Auth')), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object, Object, Object]), 
                    __metadata('design:returntype', void 0)
                ], MyApp, "run", null);
                return MyApp;
            })();
            annotate_1.default.start('mangular/auth/index');
        }
    }
});
//# sourceMappingURL=index.js.map