import {Component, Inject} from "mangular/injector";
import Template from "./template";
import desserts from "./desserts";

@Component({
    template: Template,
})
class mbNutron {

    @Inject $http;
    @Inject $mdEditDialog;
    @Inject $q;
    @Inject $timeout;
    //@Inject $scope;

    private selected;
    private query;
    private columns;
    private desserts;
    private promise;

    constructor() {
        console.info(this)
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
        this.desserts = desserts.data;
        this.onReorder = this.onReorder.bind(this);
        this.onPaginate = this.onPaginate.bind(this);
        this.deselect = this.deselect.bind(this);
        this.log = this.log.bind(this);
    }

    deselect(item) {
        console.log(item.name, 'was deselected');
    }

    log(item) {
        console.log(item.name, 'was selected');
    }

    loadStuff() {
        this.promise = this.$timeout(function () {

        }, 2000);
    }

    onReorder(order) {

        console.log('Scope Order: ' + this.query.order);
        console.log('Order: ' + order);

        this.promise = this.$timeout(function () {

        }, 2000);
    }

    onPaginate(page, limit) {
        // $scope.$broadcast('md.table.deselect');

        console.log('Scope Page: ' + this.query.page + ' Scope Limit: ' + this.query.limit);
        console.log('Page: ' + page + ' Limit: ' + limit);

        this.promise = this.$timeout(function () {
        }, 2000);
    }

    getTypes() {
        return ['Candy', 'Ice cream', 'Other', 'Pastry'];
    }

    editComment(event, dessert) {
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

        promise.then((ctrl:any)=>{
            var input = ctrl.getInput();
            input.$viewChangeListeners.push(()=>{
                input.$setValidity('test', input.$modelValue !== 'test');
            });
        });
    }
}

