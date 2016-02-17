System.register(["mangular/injector", "./template", "./desserts"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var injector_1, template_1, desserts_1;
    var mbNutron;
    return {
        setters:[
            function (injector_1_1) {
                injector_1 = injector_1_1;
            },
            function (template_1_1) {
                template_1 = template_1_1;
            },
            function (desserts_1_1) {
                desserts_1 = desserts_1_1;
            }],
        execute: function() {
            mbNutron = (function () {
                function mbNutron() {
                    console.info(this);
                    this.selected = [];
                    this.query = {
                        order: 'name',
                        limit: 5,
                        page: 1
                    };
                    this.columns = [{
                            name: 'Dessert',
                            orderBy: 'name',
                            unit: '100g serving'
                        }, {
                            descendFirst: true,
                            name: 'Type',
                            orderBy: 'type'
                        }, {
                            name: 'Calories',
                            numeric: true,
                            orderBy: 'calories.value'
                        }, {
                            name: 'Fat',
                            numeric: true,
                            orderBy: 'fat.value',
                            unit: 'g'
                        }, {
                            name: 'Iron',
                            numeric: true,
                            orderBy: 'iron.value',
                            unit: '%'
                        }, {
                            name: 'Comments',
                            orderBy: 'comment'
                        }];
                    this.desserts = desserts_1.default.data;
                    this.onReorder = this.onReorder.bind(this);
                    this.onPaginate = this.onPaginate.bind(this);
                    this.deselect = this.deselect.bind(this);
                    this.log = this.log.bind(this);
                }
                mbNutron.prototype.deselect = function (item) {
                    console.log(item.name, 'was deselected');
                };
                mbNutron.prototype.log = function (item) {
                    console.log(item.name, 'was selected');
                };
                mbNutron.prototype.loadStuff = function () {
                    this.promise = this.$timeout(function () {
                    }, 2000);
                };
                mbNutron.prototype.onReorder = function (order) {
                    console.log('Scope Order: ' + this.query.order);
                    console.log('Order: ' + order);
                    this.promise = this.$timeout(function () {
                    }, 2000);
                };
                mbNutron.prototype.onPaginate = function (page, limit) {
                    // $scope.$broadcast('md.table.deselect');
                    console.log('Scope Page: ' + this.query.page + ' Scope Limit: ' + this.query.limit);
                    console.log('Page: ' + page + ' Limit: ' + limit);
                    this.promise = this.$timeout(function () {
                    }, 2000);
                };
                mbNutron.prototype.getTypes = function () {
                    return ['Candy', 'Ice cream', 'Other', 'Pastry'];
                };
                mbNutron.prototype.editComment = function (event, dessert) {
                    event.stopPropagation();
                    var promise = this.$mdEditDialog.large({
                        // messages: {
                        //   test: 'I don\'t like tests!'
                        // },
                        modelValue: dessert.comment,
                        placeholder: 'Add a comment',
                        save: function (input) {
                            dessert.comment = input.$modelValue;
                        },
                        targetEvent: event,
                        title: 'Add a comment',
                        validators: {
                            'md-maxlength': 30
                        }
                    });
                    promise.then(function (ctrl) {
                        var input = ctrl.getInput();
                        input.$viewChangeListeners.push(function () {
                            input.$setValidity('test', input.$modelValue !== 'test');
                        });
                    });
                };
                __decorate([
                    injector_1.Inject, 
                    __metadata('design:type', Object)
                ], mbNutron.prototype, "$http", void 0);
                __decorate([
                    injector_1.Inject, 
                    __metadata('design:type', Object)
                ], mbNutron.prototype, "$mdEditDialog", void 0);
                __decorate([
                    injector_1.Inject, 
                    __metadata('design:type', Object)
                ], mbNutron.prototype, "$q", void 0);
                __decorate([
                    injector_1.Inject, 
                    __metadata('design:type', Object)
                ], mbNutron.prototype, "$timeout", void 0);
                mbNutron = __decorate([
                    injector_1.Component({
                        template: template_1.default,
                    }), 
                    __metadata('design:paramtypes', [])
                ], mbNutron);
                return mbNutron;
            })();
        }
    }
});
//# sourceMappingURL=controller.js.map