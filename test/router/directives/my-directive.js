System.register(["mangular/annotate", "../services/my-service"], function(exports_1) {
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
    var annotate_1, annotate_2, annotate_3, annotate_4, annotate_5, annotate_6, annotate_7, my_service_1;
    var Helpers, MyController, MyComponent, MyDirective, MyFilter;
    return {
        setters:[
            function (annotate_1_1) {
                annotate_1 = annotate_1_1;
                annotate_2 = annotate_1_1;
                annotate_3 = annotate_1_1;
                annotate_4 = annotate_1_1;
                annotate_5 = annotate_1_1;
                annotate_6 = annotate_1_1;
                annotate_7 = annotate_1_1;
            },
            function (my_service_1_1) {
                my_service_1 = my_service_1_1;
            }],
        execute: function() {
            Helpers = (function () {
                function Helpers() {
                }
                Helpers.myFactory = function () {
                    return { gago: 'jan' };
                };
                Helpers.myConst = {
                    const: 'CONST'
                };
                Helpers.myStatic = {
                    stat: 'STAT'
                };
                __decorate([
                    annotate_6.Const, 
                    __metadata('design:type', Object)
                ], Helpers, "myConst", void 0);
                __decorate([
                    annotate_5.Value, 
                    __metadata('design:type', Object)
                ], Helpers, "myStatic", void 0);
                __decorate([
                    annotate_4.Factory, 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], Helpers, "myFactory", null);
                return Helpers;
            })();
            MyController = (function () {
                function MyController() {
                }
                MyController.hello = function () {
                    return {
                        scope: {},
                        restrict: 'AE',
                        replace: true,
                        template: '<div>Hello</div>',
                    };
                };
                __decorate([
                    annotate_1.Directive, 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], MyController, "hello", null);
                return MyController;
            })();
            MyComponent = (function () {
                function MyComponent(myFactory, myStatic, myConst) {
                    console.info("MyComponent", this.service);
                    this.name = "Hello Other factory.gago:" + myFactory.gago + " value.stat:" + myStatic.stat + " const.const:" + myConst.const;
                }
                __decorate([
                    annotate_7.Inject, 
                    __metadata('design:type', my_service_1.MyService)
                ], MyComponent.prototype, "service", void 0);
                MyComponent = __decorate([
                    annotate_2.Component('comp', {
                        template: '<div>{{$ctrl.name}}</div>'
                    }),
                    __param(0, annotate_7.Inject),
                    __param(1, annotate_7.Inject),
                    __param(2, annotate_7.Inject), 
                    __metadata('design:paramtypes', [Object, Object, Object])
                ], MyComponent);
                return MyComponent;
            })();
            MyDirective = (function () {
                function MyDirective() {
                    console.info("MyDirective", this.service);
                    this.name = "Hello Other";
                }
                MyDirective.link = function (scope, elem, attrs) {
                    elem.bind('click', function () {
                        elem.css('background-color', '#ccccee');
                        scope.$apply(function () {
                            scope.color = "#ccccee";
                        });
                    });
                    elem.bind('mouseover', function () {
                        elem.css('cursor', 'pointer');
                    });
                };
                __decorate([
                    annotate_7.Inject, 
                    __metadata('design:type', my_service_1.MyService)
                ], MyDirective.prototype, "service", void 0);
                MyDirective = __decorate([
                    annotate_1.Directive('other', {
                        scope: {},
                        restrict: 'AE',
                        replace: true,
                        template: "<p style=\"background-color:{{color}}\">{{$ctrl.name | low:'gago'}}</p>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyDirective);
                return MyDirective;
            })();
            MyFilter = (function () {
                function MyFilter() {
                }
                MyFilter.prototype.filter = function (input, param) {
                    return String(input).toLowerCase() + ' : ' + String(param);
                };
                __decorate([
                    annotate_7.Inject, 
                    __metadata('design:type', my_service_1.MyService)
                ], MyFilter.prototype, "service", void 0);
                MyFilter = __decorate([
                    annotate_3.Filter('low'), 
                    __metadata('design:paramtypes', [])
                ], MyFilter);
                return MyFilter;
            })();
        }
    }
});
//# sourceMappingURL=my-directive.js.map