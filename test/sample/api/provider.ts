import {Provider} from "mangular/annotate";
import {ApiServiceBase} from "./service";
import {ApiServiceOne} from "./service";
import {ApiServiceTwo} from "./service";

@Provider('ApiService')
class ApiServiceProvider {
    private service:any;
    constructor(){
        this.service = ApiServiceBase;
    }
    setService(name:string){
        switch(name){
            case 'one' : this.service = ApiServiceOne; break;
            case 'two' : this.service = ApiServiceTwo; break;
            default    : this.service = ApiServiceBase; break;
        }
    }
    provide(){
        return new this.service();
    }
}