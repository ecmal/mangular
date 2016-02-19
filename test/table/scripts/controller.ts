import {Component} from "mangular/annotate";
import {Inject} from "mangular/annotate";
import Template from "./template";
import desserts from "./desserts";

@Component('mbNutron',{
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
        this.selected = [];
        this.query = {
            order: 'name',
            limit: 15,
            page: 1
        };
        this.desserts = desserts.data;
        this.onReorder = this.onReorder.bind(this);
        this.onPaginate = this.onPaginate.bind(this);
        this.onDeselect = this.onDeselect.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.loadStuff = this.loadStuff.bind(this);
        this.poll = this.poll.bind(this);
        this.poll();
    }
    percent(current,total){
        return current*100/total;
    }
    onDeselect(item) {
        console.log(item.name, 'was deselected');
    }

    onSelect(item) {
        console.log(item.name, 'was selected');
    }
    poll(){
        this.loadStuff().then(setTimeout(()=>this.poll(),5000))
    }
    loadStuff() {
        return this.promise = this.$http({
            method: 'GET',
            url: '/api/agents'
        }).then(s=>{
            this.desserts = s.data.result;
        });
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

        this.promise = this.$timeout(function () {}, 2000);
    }

    getTypes() {
        return ['fdr', 'fplus'];
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

