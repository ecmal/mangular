import Angular from "mangular/annotate";
import {Config} from "mangular/annotate";
import {Inject} from "mangular/annotate";
import {Controller} from "mangular/annotate";
import {Service} from "mangular/annotate";
import {Component} from "mangular/annotate";
import {Scope,Logger} from "mangular/interfaces";


@Component({
    template: '<div>My name is {{$ctrl.name}}</div>'
})
class MyComponent {
    private name:string;
    constructor(){
        this.name = 'shahar';
    }
}

@Service
class MyService {
    @Inject
    private log:Logger;

    constructor(){
        this.log.warn("MyService");
    }
}

@Controller
class MyController {

    @Inject
    private scope:Scope;

    @Inject
    private service:MyService;

    private name:string;

    constructor(){
        this.name = "Cool";
        console.info("COOL",this.service);
    }
}

Angular.start('mangular/simple/index');

