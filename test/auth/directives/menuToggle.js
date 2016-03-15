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
    var MenuToggle;
    return {
        setters:[
            function (annotate_1_1) {
                annotate_1 = annotate_1_1;
            }],
        execute: function() {
            MenuToggle = (function () {
                function MenuToggle(Menu, mdUtil, timeout) {
                    MenuToggle.menu = Menu;
                    MenuToggle.mdUtil = mdUtil;
                    MenuToggle.timeout = timeout;
                }
                MenuToggle.link = function (scope, elem, attrs) {
                    scope.isOpen = function () {
                        return MenuToggle.menu.isSectionSelected(scope.section);
                    };
                    scope.toggle = function () {
                        MenuToggle.menu.toggleSelectSection(scope.section);
                    };
                    MenuToggle.mdUtil.nextTick(function () {
                        scope.$watch(function () {
                            return MenuToggle.menu.isSectionSelected(scope.section);
                        }, function (open) {
                            var $ul = elem.find('ul');
                            var targetHeight = open ? getTargetHeight() : 0;
                            MenuToggle.timeout(function () {
                                $ul.css({ height: targetHeight + 'px' });
                            }, 0, false);
                            function getTargetHeight() {
                                var targetHeight;
                                $ul.addClass('no-transition');
                                $ul.css('height', '');
                                targetHeight = $ul.prop('clientHeight');
                                $ul.css('height', 0);
                                $ul.removeClass('no-transition');
                                return targetHeight;
                            }
                        });
                    });
                };
                MenuToggle = __decorate([
                    annotate_1.Directive('menuToggle', {
                        scope: {
                            section: '='
                        },
                        template: "\n    <md-button class=\"md-button-toggle\" ng-click=\"toggle()\"\n        aria-controls=\"docs-menu-{{section.name}}\"\n        aria-expanded=\"{{isOpen()}}\">\n        <div flex layout=\"row\">\n            {{section.name}}\n            <span flex></span>\n            <span aria-hidden=\"true\" class=\"md-toggle-icon\"\n            ng-class=\"{'toggled' : isOpen()}\">\n              <md-icon md-svg-src=\"md-toggle-arrow\"></md-icon>\n            </span>\n        </div>\n      <span class=\"md-visually-hidden\">\n        Toggle {{isOpen()? 'expanded' : 'collapsed'}}\n      </span>\n    </md-button>\n\n    <ul id=\"docs-menu-{{section.name}}\" class=\"menu-toggle-list\">\n      <li ng-repeat=\"page in section.pages\">\n        <menu-link section=\"page\"></menu-link>\n      </li>\n    </ul>\n    "
                    }),
                    __param(0, annotate_1.Inject),
                    __param(1, annotate_1.Inject('$mdUtil')),
                    __param(2, annotate_1.Inject('$timeout')), 
                    __metadata('design:paramtypes', [Object, Object, Object])
                ], MenuToggle);
                return MenuToggle;
            })();
        }
    }
});
//# sourceMappingURL=menuToggle.js.map