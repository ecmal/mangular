import {Provider} from "mangular/annotate";
import {Inject} from "mangular/annotate";
import {ApiService} from "./service";
import {ApiServiceOne} from "./service";
import {ApiServiceTwo} from "./service";

@Provider('ApiService')
class ApiServiceProvider {

    @Inject private $injector:any;

    private service:any;

    constructor(){
        this.service = ApiService;
    }
    setService(name:string){
        switch(name){
            case 'one' : this.service = ApiServiceOne; break;
            case 'two' : this.service = ApiServiceTwo; break;
            default    : this.service = ApiService; break;
        }
    }
    provide(){
        return new this.service()
    }
}