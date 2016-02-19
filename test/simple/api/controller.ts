import {Controller} from "mangular/annotate";
import {Component} from "mangular/annotate";
import {Inject} from "mangular/annotate";

import {ApiService} from "./service";

@Controller
class ApiController {

    @Inject $log:any;
    @Inject api:ApiService;

    public name:string;

    constructor(){
        this.$log.debug('ApiController');
        this.name = this.api.name;
    }
    sayHello(){
        console.info('Hello',this.name)
    }
}

@Component({
    template    :`<span>Name: {{$ctrl.hero}}</span>`,
    bindings    : {
        hero    : '='
    }
})
class mbApiComponent {

    constructor(){
        console.info('API COMPONENT')
    }
}