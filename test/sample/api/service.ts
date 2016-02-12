import {Inject} from "mangular/injector";

export class ApiServiceBase {
    get name(){
        return this.constructor.name;
    }
}
export class ApiServiceOne extends ApiServiceBase {
    @Inject $q:any;
    constructor(){
        super();
        console.info(this.name)
        console.info(this.$q)
    }
}
export class ApiServiceTwo extends ApiServiceBase {
    @Inject $http:any;
    constructor(){
        super();
        console.info(this.name);
        console.info(this.$http)
    }
}