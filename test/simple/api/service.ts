import {Inject} from "mangular/injector";

export class ApiService {
    get name(){
        return this.constructor.name;
    }
}

export class ApiServiceOne extends ApiService {
    @Inject $q:any;
    constructor(){
        super();
        console.info(this.name);
        console.info(this.$q)
    }
}

export class ApiServiceTwo extends ApiService {
    @Inject $http:any;
    constructor(){
        super();
        console.info(this.name);
        console.info(this.$http)
    }
}