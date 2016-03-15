System.register(["mangular/annotate", "../template/layouts/privateLayout"], function(exports_1) {
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
    var annotate_1, privateLayout_1;
    var PrivateLayoutComponent;
    return {
        setters:[
            function (annotate_1_1) {
                annotate_1 = annotate_1_1;
            },
            function (privateLayout_1_1) {
                privateLayout_1 = privateLayout_1_1;
            }],
        execute: function() {
            PrivateLayoutComponent = (function () {
                function PrivateLayoutComponent(menu, $mdSidenav, root) {
                    this.menu = menu;
                    this.root = root;
                    this.$mdSidenav = $mdSidenav;
                }
                PrivateLayoutComponent.prototype.toggleList = function () {
                    this.$mdSidenav('left').toggle();
                };
                PrivateLayoutComponent.prototype.isOpen = function (section) {
                    return this.menu.isSectionSelected(section);
                };
                PrivateLayoutComponent.prototype.toggleOpen = function (section) {
                    this.menu.toggleSelectSection(section);
                };
                PrivateLayoutComponent.prototype.getMenuSection = function () {
                    return this.menu.sections;
                };
                PrivateLayoutComponent.prototype.focusSection = function () {
                };
                PrivateLayoutComponent = __decorate([
                    annotate_1.Component('wcPrivateLayout', {
                        template: privateLayout_1.default,
                    }),
                    __param(0, annotate_1.Inject('Menu')),
                    __param(1, annotate_1.Inject('$mdSidenav')),
                    __param(2, annotate_1.Inject('$rootScope')), 
                    __metadata('design:paramtypes', [Object, Object, Object])
                ], PrivateLayoutComponent);
                return PrivateLayoutComponent;
            })();
        }
    }
});
//# sourceMappingURL=privateLayout.js.map