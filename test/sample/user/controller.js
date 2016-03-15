System.register(["mangular/annotate", "./service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var annotate_1, annotate_2, service_1;
    var UserController;
    return {
        setters:[
            function (annotate_1_1) {
                annotate_1 = annotate_1_1;
                annotate_2 = annotate_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            }],
        execute: function() {
            UserController = (function () {
                function UserController() {
                    var _this = this;
                    this.selected = null;
                    this.users = [];
                    this.service.loadAllUsers().then(function (users) {
                        _this.users = [].concat(users);
                        _this.selected = users[0];
                    });
                }
                UserController.prototype.toggleList = function () {
                    this.$mdSidenav('left').toggle();
                };
                UserController.prototype.selectUser = function (user) {
                    this.selected = typeof user == 'number' ? this.users[user] : user;
                };
                UserController.prototype.makeContact = function (selectedUser) {
                    var _this = this;
                    this.$mdBottomSheet.show({
                        controllerAs: "cp",
                        template: "\n                <md-bottom-sheet class=\"md-list md-has-header\">\n                    <md-subheader>\n                        Contact <span class=\"name\">{{ cp.user.name }}</span>:\n                    </md-subheader>\n                    <md-list>\n                      <md-item ng-repeat=\"item in cp.actions\">\n                        <md-button ng-click=\"cp.contactUser(item)\" id=\"item_{{$index}}\">\n                            <md-icon>{{ item.icon }}</md-icon>\n                            {{item.name}}\n                        </md-button>\n                      </md-item>\n                    </md-list>\n                </md-bottom-sheet>\n            ",
                        controller: ['$mdBottomSheet', ContactSheetController],
                        parent: document.getElementById('content')
                    }).then(function (clickedItem) { return _this.$log.debug(clickedItem.name + ' clicked!'); });
                    /**
                     * User ContactSheet controller
                     */
                    function ContactSheetController($mdBottomSheet) {
                        this.user = selectedUser;
                        this.actions = [
                            { name: 'Phone', icon: 'phone', },
                            { name: 'Twitter', icon: 'done', },
                            { name: 'Google+', icon: 'email' },
                            { name: 'Hangout', icon: 'explore', }
                        ];
                        this.contactUser = function (action) {
                            // The actually contact process has not been implemented...
                            // so just hide the bottomSheet
                            $mdBottomSheet.hide(action);
                        };
                    }
                };
                __decorate([
                    annotate_2.Inject, 
                    __metadata('design:type', Object)
                ], UserController.prototype, "$mdBottomSheet", void 0);
                __decorate([
                    annotate_2.Inject, 
                    __metadata('design:type', Object)
                ], UserController.prototype, "$mdSidenav", void 0);
                __decorate([
                    annotate_2.Inject, 
                    __metadata('design:type', service_1.UserService)
                ], UserController.prototype, "service", void 0);
                __decorate([
                    annotate_2.Inject, 
                    __metadata('design:type', Object)
                ], UserController.prototype, "$log", void 0);
                UserController = __decorate([
                    annotate_1.Controller, 
                    __metadata('design:paramtypes', [])
                ], UserController);
                return UserController;
            })();
        }
    }
});
//# sourceMappingURL=controller.js.map