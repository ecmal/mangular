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
    var Menu;
    return {
        setters:[
            function (annotate_1_1) {
                annotate_1 = annotate_1_1;
            }],
        execute: function() {
            Menu = (function () {
                function Menu(location, rootScope) {
                    this.location = location;
                    var sections = [
                        {
                            "name": "Monitoring",
                            "type": "heading"
                        },
                        {
                            "name": "Dashboard",
                            "url": "dashboard",
                            "type": "link",
                        },
                        {
                            "name": "Monitor",
                            "url": "monitor",
                            "type": "link",
                        },
                        {
                            "name": "Configuration",
                            "type": "heading"
                        },
                        {
                            "name": "Users",
                            "url": "users",
                            "type": "link",
                        },
                        {
                            "name": "Groups",
                            "url": "groups",
                            "type": "link",
                        },
                        {
                            "name": "Roles",
                            "url": "roles",
                            "type": "link",
                        },
                        {
                            "name": "Settings",
                            "type": "heading",
                            "children": [
                                {
                                    "name": "Jobs",
                                    "type": "toggle",
                                    "pages": [
                                        {
                                            "name": "Cron",
                                            "url": "pages1_1",
                                            "type": "link",
                                        }, {
                                            "name": "Schedule",
                                            "url": "pages1_1",
                                            "type": "link",
                                        }
                                    ]
                                },
                                {
                                    "name": "Admin",
                                    "type": "toggle",
                                    "pages": [
                                        {
                                            "name": "Agent Config",
                                            "url": "pages2_1",
                                            "type": "link",
                                        },
                                        {
                                            "name": "Lead Settings",
                                            "url": "pages2_1",
                                            "type": "link",
                                        }
                                    ],
                                },
                            ]
                        },
                    ];
                    this.sections = sections;
                    rootScope.$on('$locationChangeSuccess', this.onLocationChange.bind(this));
                    this.onLocationChange(); //temporary solution
                }
                Menu.prototype.selectSection = function (section) {
                    this.openedSection = section;
                };
                Menu.prototype.toggleSelectSection = function (section) {
                    this.openedSection = (this.openedSection === section ? null : section);
                };
                Menu.prototype.isSectionSelected = function (section) {
                    return this.openedSection === section;
                };
                Menu.prototype.selectPage = function (section, page) {
                    this.currentSection = section;
                    this.currentPage = page;
                };
                Menu.prototype.isPageSelected = function (page) {
                    return this.currentPage === page;
                };
                Menu.prototype.onLocationChange = function () {
                    var path = this.location.path();
                    var _this = this;
                    var matchPage = function (section, page) {
                        if (path.indexOf(page.url) !== -1) {
                            _this.selectSection(section);
                            _this.selectPage(section, page);
                        }
                    };
                    this.sections.forEach(function (section) {
                        if (section.children) {
                            // matches nested section toggles, such as API or Customization
                            section.children.forEach(function (childSection) {
                                if (childSection.pages) {
                                    childSection.pages.forEach(function (page) {
                                        matchPage(childSection, page);
                                    });
                                }
                            });
                        }
                        else if (section.pages) {
                            // matches top-level section toggles, such as Demos
                            section.pages.forEach(function (page) {
                                matchPage(section, page);
                            });
                        }
                        else if (section.type === 'link') {
                            // matches top-level links, such as "Getting Started"
                            matchPage(section, section);
                        }
                    });
                };
                Menu = __decorate([
                    annotate_1.Service,
                    __param(0, annotate_1.Inject('$location')),
                    __param(1, annotate_1.Inject('$rootScope')), 
                    __metadata('design:paramtypes', [Object, Object])
                ], Menu);
                return Menu;
            })();
            exports_1("Menu", Menu);
        }
    }
});
//# sourceMappingURL=menu.js.map