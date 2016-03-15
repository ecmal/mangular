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
    var annotate_1;
    var MenuLink;
    return {
        setters:[
            function (annotate_1_1) {
                annotate_1 = annotate_1_1;
            }],
        execute: function() {
            MenuLink = (function () {
                function MenuLink(Menu, location) {
                    MenuLink.location = location;
                    MenuLink.menu = Menu;
                }
                MenuLink.link = function (scope, elem, attrs) {
                    scope.isSelected = function (section) {
                        //console.log(MenuLink.menu.isSectionSelected(section));
                        return MenuLink.menu.isPageSelected(scope.section);
                    };
                    scope.focusSection = function (section) {
                        console.log('focusSection', section);
                        MenuLink.location.path(section.url);
                    };
                };
                MenuLink = __decorate([
                    annotate_1.Directive('menuLink', {
                        scope: {
                            section: '='
                        },
                        template: "\n        <md-button  ng-class=\"{'active' : isSelected(section)}\" ng-hash=\"{{section.url}}\" ng-click=\"focusSection(section)\">\n            {{section.name}}\n            <span class=\"md-visually-hidden\" ng-if=\"isSelected(section)\">\n                current page\n            </span>\n        </md-button>\n    "
                    }),
                    __param(0, annotate_1.Inject),
                    __param(1, annotate_1.Inject('$location')), 
                    __metadata('design:paramtypes', [Object, Object])
                ], MenuLink);
                return MenuLink;
            })();
        }
    }
});
//# sourceMappingURL=menuLink.js.map